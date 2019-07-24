const readline = require('readline-sync');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const configsFolder = path.join(__dirname, 'configs');

let configs = fs.readdirSync(configsFolder);

// Trim extension
configs = configs.map(val =>
  val
    .split('.')
    .slice(0, -1)
    .join('.')
);

// Remove node and file location from arguments
const args = process.argv.slice(2);

if (args.length > 0) {
  exitIfConfigsDontExist(args);

  storeConfigs(args);
  process.exit(0);
}

// If configs aren't provided in the args, ask the user
for (let [index, value] of configs.entries()) {
  let selector = chalk.bold.blue(`[${index + 1}]`);
  console.log(`${selector} ${value}`);
}

const ans = readline.question('Provide a comma separated list of the configs you would like to select \n');

const selectedConfigs = ans.split(',').map(val => val.trim());
if (selectedConfigs.length === 1 && selectedConfigs[0] === '') selectedConfigs.shift();
exitIfConfigsDontExist(selectedConfigs);
storeConfigs(selectedConfigs);

// Util Funcs
function storeConfigs(selectedConfigs) {
  if (!Array.isArray(selectedConfigs))
    throw new Error('Selected array must be an array');

  fs.writeFileSync(
    path.join(__dirname, 'activeConfigs.json'),
    JSON.stringify(selectedConfigs)
  );
  console.log(chalk.bold.blue('Successfully stored new configuration'));
  console.log(selectedConfigs);
}

function exitIfConfigsDontExist(selectedConfigs) {
  for (let config of selectedConfigs) {
    if (!configs.includes(config)) {
      console.error(`"${config}" was not found in the configs folder`);
      process.exit(1);
    }
  }
}
