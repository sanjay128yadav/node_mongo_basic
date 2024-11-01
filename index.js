const express = require('express');
const multer  = require('multer');

const app = express();

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req, file, cb){
            cb(null, "uploads");
        },
        filename:function(re, file, cb){
            cb(null,file.fieldname+"-"+Date.now()+ ".jpg");
        }
    })
}).single("user_file");

app.post('/upload', upload, (req, resp) => {   
    resp.send("File Uploaded");
});

app.listen(4500);