import os from 'os';
import { fileURLToPath } from 'url';
import path from 'path';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.blue.bold("System Summary : "))
console.log( chalk.green("Platform : ") ,os.platform());
console.log( chalk.yellow("CORES : ") ,os.cpus().length);
console.log( chalk.magenta("FREE_MEMORY : ") ,(os.freemem() / 1024 / 1024 / 1024).toFixed(1), "GB");
console.log( chalk.black("HOSTNAME : ") ,os.hostname());

// console.log("NETWORK INTERFACES : " ,os.networkInterfaces());
console.log( chalk.blueBright("Current Directory : ") , __filename);
console.log( chalk.grey("HOME DIRECTORY : ") ,os.homedir());
console.log( chalk.whiteBright("Directory Name : ") , __dirname);
