const electron = require('electron');
const prefCtrl = require('../Controllers/PreferenceController')
const {Menu, MenuItem} = electron;
const template = [
    {
        "label":"Menu",
        "submenu": [
            {
                "label":"Préférences",
                "accelerator" : "CmdOrCtrl+P",
                click(item,windows){
                    prefCtrl.edit(item,windows);
                }
            },
            {
                "label": "Close",
                "role": "close",
                "accelerator": "CmdOrCtrl+W"
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
module.exports = menu;
