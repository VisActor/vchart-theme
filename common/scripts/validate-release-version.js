const path = require('path');
const getPackageJson = require('./get-package-json');

function fail(message) {
  console.error(`\x1b[31m[release version error]\x1b[0m ${message}`);
  process.exitCode = 1;
}

function run() {
  const expectedVersion = process.argv.slice(2)[0];
  const rushJson = getPackageJson(path.join(__dirname, '../../rush.json'));
  const projects = rushJson.projects || [];
  const publishProjects = projects.filter(project => project.shouldPublish);
  const mainProject = publishProjects.find(project => project.packageName === '@visactor/vchart-theme');

  if (!mainProject) {
    fail('Cannot find @visactor/vchart-theme in rush.json.');
    return;
  }

  const mainPkgJson = getPackageJson(path.join(__dirname, '../../', mainProject.projectFolder, 'package.json'));
  const releaseVersion = expectedVersion || mainPkgJson.version;
  const publishPackages = publishProjects.map(project => project.packageName);

  publishProjects.forEach(project => {
    const pkgJsonPath = path.join(__dirname, '../../', project.projectFolder, 'package.json');
    const pkgJson = getPackageJson(pkgJsonPath);

    if (pkgJson.version !== releaseVersion) {
      fail(`${project.packageName} version is ${pkgJson.version}, expected ${releaseVersion}.`);
    }

    ['dependencies', 'devDependencies'].forEach(depType => {
      const deps = pkgJson[depType];

      if (!deps) {
        return;
      }

      publishPackages.forEach(packageName => {
        const depVersion = deps[packageName];
        const expectedDepVersion = `workspace:${releaseVersion}`;

        if (depVersion && depVersion !== expectedDepVersion) {
          fail(`${project.packageName} ${depType}.${packageName} is ${depVersion}, expected ${expectedDepVersion}.`);
        }
      });
    });
  });

  if (process.exitCode) {
    return;
  }

  console.log(`All publish package versions are aligned at ${releaseVersion}.`);
}

run();
