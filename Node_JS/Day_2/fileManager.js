// import fs from 'fs';
import { read } from 'fs';
import fsPromises from 'fs/promises';

// 1. Callback function
// fs.writeFile("sample.txt", "Hello World!", (err) => {
//     if(err) console.log("Error : ", err);
    
//     else {
//         fs.readFile("sample.txt", "utf-8", (err, data) => {
//             if(err) console.log("Error : ", err);
//             else console.log(data);
//         })
//     }

// } )


// 2.Promise Style
// fsPromises.writeFile("sample.txt", "HiiI Shasha" )
//     .then( () => fsPromises.readFile("sample.txt", "utf-8"))
//     .then( (data) => console.log("Promise Read : ", data))
//     .catch((err) => console.log("Error : ", err));


// 3. Async/Await Style
const readWriteFile = async () => {
    try{
        await fsPromises.writeFile("sample.txt", "Hello Shasha");
        const data = await fsPromises.readFile("sample.txt", "utf-8");
        console.log("Async/Await Read : ", data);
    } catch (err) { console.error("Error : ", err) }
}

readWriteFile();