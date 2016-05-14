/**
 * Created by david on 14/05/16.
 */
let settingsHelper = require("../Helpers/SettingsHelper")
let views = require("../Helpers/ViewHelper")
var exports = module.exports

exports.edit = (item,brwsrWindow) => {
    settingsHelper
        .checkSettingsFile()
        .then((datas)=>{
            console.log("Ok")
            console.log(datas)
            views.render(brwsrWindow,"index.html",{message:"Pref"})
        })
}