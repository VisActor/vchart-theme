/**
 * prelease
 * node release.js [alpha.0] [patch | major | minor | 1.0.0]
 */

const { spawnSync } = require('child_process')
const path = require('path')
const checkAndUpdateNextBump = require('./version-policies');
const getPackageJson = require('./get-package-json');
const writePrereleaseVersion = require('./set-prerelease-version');
const validateReleaseVersion = path.join(__dirname, './validate-release-version.js');


const semverRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-(alpha|beta|rc)(?:\.(?:(0|[1-9])))*)$/;

const preReleaseNameReg = /^((alpha|beta|rc)(?:\.(?:0|[1-9]))*)$/;

function runCommand(command) {
  const res = spawnSync('sh', ['-c', command], {
    stdio: 'inherit',
    shell: false,
  });

  if (res.status !== 0) {
    process.exit(res.status || 1);
  }
}

function run() {
  let preReleaseName = process.argv.slice(2)[0];
  let preReleaseType = '';
  const rushJson = getPackageJson(path.join(__dirname, '../../rush.json'))
  const package = rushJson.projects.find((project) => project.packageName === '@visactor/vchart-theme');
  let regRes = null;


  if (typeof preReleaseName === 'string' && preReleaseName && (regRes = preReleaseNameReg.exec(preReleaseName))) {
    preReleaseType = regRes[2];
  } else if (!preReleaseName) {
    if (package) {
      const pkgJsonPath = path.join(__dirname, '../../', package.projectFolder, 'package.json')
      const pkgJson = getPackageJson(pkgJsonPath)
      const currentVersion = pkgJson.version;

      if ((regRes = semverRegex.exec(currentVersion))) {
        preReleaseType = regRes[4];

        if (regRes[5]) {
          preReleaseName = `${preReleaseType}.${parseInt(regRes[5], 10) + 1}`;
        } else {
          preReleaseName = `${preReleaseType}.0`;
        }

        console.log(`\x1b[31m[warning]\x1b[0m no prerelease-name supply, auto calculate prerelease-name \x1b[31m${preReleaseName}\x1b[0m`);
      } else {
        preReleaseName = `alpha.0`;
        preReleaseType = 'alpha';

        console.log('\x1b[31m[warning]\x1b[0m no prerelease-name supply, default to \x1b[31m alpha.0\x1b[0m')
      }
    }
  } else {
    console.log(`\x1b[31m[error]\x1b[0m preReleaseName: \x1b[31m ${preReleaseName} \x1b[0m 不符合规范，只允许 alpha.0 , beta.1, rc.3 类似的格式 `)
  }

  if (preReleaseName && preReleaseType) {
    // 1. apply version and update version of package.json
    writePrereleaseVersion(checkAndUpdateNextBump(process.argv.slice(2)[1]), null, preReleaseName)

    runCommand(`node ${validateReleaseVersion}`);

    // 2. build all the packages
    runCommand(`rush build --only tag:package`);

    // 3. publish to npm
    runCommand(`rush publish --publish --include-all --tag ${preReleaseType} --set-access-level public`);

    // 4. update version of local packages to shrinkwrap
    runCommand(`rush update`);

    if (package) {
      const pkgJsonPath = path.join(__dirname, '../../', package.projectFolder, 'package.json');
      const pkgJson = getPackageJson(pkgJsonPath)

      // 5. add the the changes
      runCommand(`git add --all`);

      // 6. commit all the changes
      runCommand(`git commit -m "build: prerelease version ${pkgJson.version}"`);
    }
  }
}

run()
