import React, {useEffect} from "react"
import { useHistory, useLocation } from "react-router-dom"

import NFeIcon from "../../../assets/cmm-sistemas-selo-nfe.svg"

import { FiSettings } from "react-icons/fi"
import { FiLogOut } from "react-icons/fi"
import { BsBuilding } from "react-icons/bs"

const iconSize = "23px"

const Aside = (props) => {
    let history = useHistory()
    let location = useLocation()

    useEffect(() => {
        removeAllSelect()
        updateSelectByUrl()
    }, [location])

    const removeAllSelect = () => {
        let elements = document.getElementsByClassName("aside-button")
        for (var i = 0; i < elements.length; i++){
            elements.item(i).classList.remove("aside-button-selected")
        }
    }

    const updateSelectByUrl = () => {
        if(location.pathname == "/"){
            const ele = document.getElementById('aside-settings')
            ele.classList.toggle("aside-button-selected")
        }
        else if(location.pathname == "/companies"){
            const ele = document.getElementById('aside-companies')
            ele.classList.toggle("aside-button-selected")
        }
    }

    const updateURL = (url) => {
        if(location.pathname != url)
        history.push(url)
    }

    return (
        <aside className="d-flex align-items-center flex-column just-content-space-bet">
            <div className="d-flex align-items-center flex-column">
                <div className="mt-10">
                    <img className="nfe-logo " src={NFeIcon} alt="NFe logo" />
                </div>

                <div className="mt-18">
                    <div
                        className="d-flex just-content-center align-items-center aside-button"
                        id="aside-settings"
                        onClick={() => updateURL("/")}
                        
                    >
                        <FiSettings size={iconSize} />
                    </div>
                    <div
                        className="d-flex just-content-center align-items-center aside-button mt-20"
                        id="aside-companies"
                        onClick={() => updateURL("/companies")}
                    >
                        <BsBuilding size={iconSize} />
                    </div>
                </div>
            </div>

            <div className="d-flex just-content-center align-items-center flex-column">
                <div className="d-flex just-content-center align-items-center flex-column mb-20">
                    <div className="status-ball bg-color-sucess" />
                    <span>Status Servidor</span>
                </div>
                <div className="d-flex just-content-center align-items-center flex-column mb-20">
                    <div className="status-ball bg-color-danger" />
                    <span>Status Sefaz</span>
                </div>
                <div className="d-flex just-content-center align-items-center aside-button mb-10"
                onClick={() => console.log(location.pathname)}>
                    <FiLogOut size={iconSize} />
                </div>
            </div>
        </aside>
    )
}

export default Aside
