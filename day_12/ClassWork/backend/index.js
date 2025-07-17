// const http=require('http');

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"application/json"})
//     res.end("server is running ....");
// })
// const port=808;

// server.listen(8080,( )=>{
//     console.log(`Server is running on port ${port}`)
// })

const express =require('express');
// console.log(express)
const data =require("./data.json")



const app = express();


// app.get('/',(req,res)=>{
//     res.status(200).send(`<h1 style="color:blue;">hello , i'm from server</h1>`);
// }

// )
// app.get('/about',(req,res)=>{
//     res.status(200).send(`<h1 style="color:green;">hello , i'm from about page</h1>`);
// }

// );

// app.get('/products',(req,res)=>{
//     res.status(200).send(data);
// //    res.json(data);
// })

// app.get('/contact',(req,res)=>{
//     res.status(200).send("contact us page");
// //    res.json(data);
// })


const port=8080;

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})



const fs=require('fs');
console.log(fs)

// reading a file 
// app.get('/',(req,res)=>{
//    fs.readFile('file.txt', 'utf8', (err) => {
//     console.log("error occurs while reading the file");
// });
// console.log("file read successfully");
//    res.status(200).send("reading file successfully")

// })

// writefs provide the write file functionality and used to create a file if it does not exist

// app.get('/write',(req,res)=>{
//     fs.writeFile('file.txt',"hello , i'm from write fs",'utf8',(err)=>{
//         if(err){
//             console.log(err);
//             res.status(500).send("Error writing to file");
//             return;
//         }
//         console.log("File written successfully");
//     });
//     res.send("write fs is working successfully");
// })

// appendfs provide the append file functionality and used to add content to a file

// app.get('/append',(req,res)=>{
//     fs.appendFile('file.txt',"\n file is appended",(err)=>{
//         if(err){
//             console.log("error during appending the file");
//             return;
//         }
//     })
//     res.send("appended successfully");
// })


// unlink is used to delete a single file
// app.get('/delete',(req,res)=>{
//     fs.unlink('file.txt',(err)=>{
//         if(err){
//             console.log(err);
//             res.status(500).send("Error deleting file");
//             return;
//         }
//         console.log("File deleted successfully");
//     });
//     res.send("File deleted successfully");
// })

// app.get('/delete-multiple', (req, res) => {
//     const filesToDelete = ['file1.txt', 'file2.txt', 'file3.txt']; 


//     filesToDelete.forEach((filename, idx) => {
//         fs.unlink(filename, (err) => {
//             if (err) {
//                 console.log(`Error deleting ${filename}:`, err);
//                 // error occurs due to not initlize the file path as mentioned 
//             } else {
//                 console.log(`${filename} deleted successfully`);
//             }
//         });
//     });
//     res.send("Multiple files deletion deleted successfully");
// });

// remove directory

// app.get('/remove-dir',(req,res)=>{
//     fs.rm('C:\\Users\\HP\\Documents\\fullstack\\day_12\\ClassWork\\backend\\dir',{ recursive: true }, (err) => {
//         if(err){
//             console.log("error occurs while deleting dir");
//             res.status(500).send("Error deleting directory.");
//             return;
//         }
//         console.log("dir deleted successfully");
//         res.send("dir deleted successfully.");
       
//     });
     
// })

// rename the file

// app.get('/rename',(req,res)=>{
//     fs.rename("file.txt","newFile.txt",(err)=>{
//         if(err){
            
//             console.log("error occurs during renaming")
//         return
//         }
//         console.log("renaming successfully")
//         res.send("rename successfull")
//     })
// })
const cowsay=require('cowsay');
app.get('/',(req,res)=>{
  console.log(cowsay.say({
    text: "Hello, I'm a moodule!",
    e: "oO",
    T: "U ",
}))
})

