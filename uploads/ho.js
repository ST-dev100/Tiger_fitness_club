import fs from 'fs';

fs.writeFile('rift11.png','rift.png','binary',(err,data)=>{
    if(!err)
    {
        console.log('saved')
    }
})