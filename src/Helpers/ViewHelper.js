let appJson = require("../../config/app.json")
let path = require("path")

module.exports.render = (window,file,datas)=>{
    window.loadURL("file://"+path.join(__dirname,"../../",appJson.views.dir,file))

    if(datas){
        window.webContents.on('did-finish-load', function(){
            window.webContents.send('loaded', datas)
        });
    }
}