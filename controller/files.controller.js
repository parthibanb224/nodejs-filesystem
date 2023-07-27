const FileRouter = require('express').Router();
const fs = require('fs/promises');



async function createFile(datas = null){
    try{
        const content = datas ? datas : new Date().toString().replace(/[:.]/g,'-');
        const path = `./files/${content}.txt`;
        await fs.writeFile(path,content)
        const data = await fs.readFile(path,'utf-8');
        return data;
    }
    catch(err){
        console.log(err)
    }
}

FileRouter.get('/createDefaultFile',async(request,response,next)=>{
    console.log("HIT");
    let res = await createFile();
    return response.status(200).json({
        current_DateAndTime : res,
    })
})

FileRouter.post('/createCustomFile',async(request,response,next) => {
    const {content} = request.body;
    await createFile(content);
    return response.status(200).json({
        result : content,
        message : "File Created",
    })
})

module.exports = FileRouter;