import fsPromise from 'fs/promises';
// Type - 1 : Read a file without creating it 
// async function readMissingFile() {
//     try {
//         const data = await fsPromise.readFile("missingFile.txt", "utf-8")
//         console.log(data);
        
//     } catch (error) {
//         console.error("Error : ", error)
        
//     }
// }

// readMissingFile();

// Type - 2: Read a file without creating it
// fsPromise.readFile("missingFile.txt", "utf-8")
//     .then( (data) => console.log(data))
//     .catch(err => console.error("Error : ", err))


// Type - 3: Create and Read a file
// fsPromise.writeFile("MissingFile.txt", "HELLO WORLD..!")
//     .then( () => {
//         fsPromise.readFile("MissingFile.txt", "utf-8")
//             .then( (data) => console.log(data))
//             .catch(err => console.error("Error : ", err))
//     })
//     .catch( err => console.error("Error : ", err))