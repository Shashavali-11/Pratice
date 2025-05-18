import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";


const __filename  = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log( "DirName : ", __dirname, "FileName : ", __filename);


// console.log(chalk);
console.log(chalk.blue.bold("System Info : "));
console.log(chalk.green("Directory : ") + __dirname);
console.log(chalk.yellow("File : ") + __filename );
console.log(chalk.magenta("ENV Mode : ") + (process.env.NODE_ENV || "Development"));