import React from 'react'
import { remote } from "electron"

import { FiMinus } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import {showNotification} from '../../util/notifications'

var window = remote.getCurrentWindow()

const Header = (props) => {

    const minimizeWindow = () => {
        window.minimize()
    }

    const closeWindow = () => {
        window.hide()
        showNotification("Aplicativo minimizado no tray")
    }

    return (
        <header className="d-flex just-content-end">
            <div className="drag-region"/>
            <div className="d-flex align-items-center just-content-center header-button"
                onClick={minimizeWindow}><FiMinus/></div>
            <div className="d-flex align-items-center just-content-center header-button"
                onClick={closeWindow}><FiX/></div>
            <div></div>
        </header>
    )
}

export default Header