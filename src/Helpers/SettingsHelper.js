const fs = require("fs")
const promise = require("promise")
const path = require("path")

let settingsFilePath = path.join(__dirname, "../../config/settings.json")

//Use Promises on fs functions
var pStat = promise.denodeify(fs.stat)
var pWriteFile = promise.denodeify(fs.writeFile)
var pReadFile = promise.denodeify(fs.readFile)


function createSettingsFile() {
    return pWriteFile(settingsFilePath, "")
}

function readSettings() {
    return pReadFile(settingsFilePath,'utf8')
}

module.exports.checkSettingsFile = () => {
    var promise = new Promise(
        (resolve, reject)=> {
            pStat(settingsFilePath)
                .then((stats) => {
                    readSettings()
                        .then((datas)=> {
                            resolve(datas);
                        })
                        .catch(() => {
                            reject(new Error("Prout"))
                        })
                })
                .catch((err) => {
                    //If file doesn't exist create it
                    if (err.errno == -2) {
                        createSettingsFile()
                            .then(() => {
                                readSettings()
                                    .then((datas)=> {
                                        resolve(datas);
                                    })
                                    .catch(() => {
                                        reject(new Error("Prout"))
                                    })
                            })
                            .catch(() => {
                                reject(new Error("Prout"))
                            })
                    } else {
                        reject(new Error("Prout"))
                    }
                });
        })

    return promise;
}