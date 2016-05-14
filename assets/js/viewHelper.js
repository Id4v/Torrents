require('electron').ipcRenderer.on('loaded' , function(event, data) {
    if (typeof dataLoaded === "function") {
        dataLoaded(data)
    }
});

function bind(selector,data){
    document.querySelector(selector).innerHTML=data;
}