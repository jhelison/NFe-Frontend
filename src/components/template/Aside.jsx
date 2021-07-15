import React from "react"

import NFeIcon from "../../../assets/cmm-sistemas-selo-nfe.svg"

import { FiSettings } from "react-icons/fi"
import { FiLogOut } from "react-icons/fi"
import { BsBuilding } from "react-icons/bs"

const iconSize = "23px"

const Aside = (props) => {
    return (
        <aside className="d-flex align-items-center flex-column just-content-space-bet">
            <div className="d-flex align-items-center flex-column">
                <div className="mt-10">
                    <img className="nfe-logo " src={NFeIcon} alt="NFe logo" />
                </div>

                <div className="mt-18">
                    <div className="d-flex just-content-center align-items-center aside-button aside-button-selected">
                        <FiSettings size={iconSize} />
                    </div>
                    <div className="d-flex just-content-center align-items-center aside-button mt-20">
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
                <div className="d-flex just-content-center align-items-center aside-button mb-10">
                    <FiLogOut size={iconSize} />
                </div>
            </div>
        </aside>
    )
}

export default Aside
