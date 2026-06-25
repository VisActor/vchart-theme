/**
 * release
 * node release.js [patch | major | minor | 1.0.0]
 */

const { spawnSync } = require('child_process')
const path = require('path')
const checkAndUpdateNextBump = require('./version-policies');
const getPackageJson = require('./get-package-json');
const validateReleaseVersion = path.join(__dirname, './validate-release-version.js');

function runCommand(command) {
  const res = spawnSync('sh', ['-c', command], {
    stdio: 'inherit',
    shell: false,
  });

  if (res.status !== 0) {
    process.exit(res.status || 1);
  }
}

function getExpectedVersion(releaseVersion) {
  return /^\d+\.\d+\.\d+$/.test(releaseVersion || '') ? releaseVersion : '';
}

function run() {
  let releaseVersion = process.argv.slice(2)[0];
  // 0. update `nextBump`
  checkAndUpdateNextBump(releaseVersion);

  // 1. update version of package.json, this operation will remove the common/changes
  runCommand(`rush version --bump`);

  runCommand(`node ${validateReleaseVersion} ${getExpectedVersion(releaseVersion)}`);


  // 2. build all the packages
  runCommand(`rush build --only tag:package`);

  // 3. publish to npm
  runCommand('rush publish --publish --include-all --set-access-level public');

  // 4. update version of local packages to shrinkwrap
  runCommand(`rush update`);

  const rushJson = getPackageJson(path.join(__dirname, '../../rush.json'));
  const project = rushJson.projects.find((item) => item.packageName === '@visactor/vchart-theme');

  if (project) {
    const pkgJsonPath = path.join(__dirname, '../../', project.projectFolder, 'package.json')
    const pkgJson = getPackageJson(pkgJsonPath)

    // 5. add tag
    runCommand(`git tag v${pkgJson.version}`);

    // 6. add all the changes
    runCommand(`git add --all`);

    // 7. commit all the changes
    runCommand(`git commit -m "build: publish version ${pkgJson.version}"`);

    // 8. push tag to origin
    runCommand(`git push origin v${pkgJson.version}`);
  }
}

run()

