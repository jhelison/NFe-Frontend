import { remote } from "electron"
const { Notification } = require('electron')

const TITLE="NFe"


function showNotification (text, asProcess = false) {
    if(asProcess){
        new Notification({ title: TITLE, body: text }).show()
    }
    else{
        remote.Notification({ title: TITLE, body: text }).show()
    }
}

export { showNotification }