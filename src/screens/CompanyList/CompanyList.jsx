import React from "react"

import Content from "../../components/template/Content"
import CustomButton from "../../components/CustomButton"

import CompanyItem from "./CompanyItem"

import { FiPlus } from "react-icons/fi"
import { FiEdit } from "react-icons/fi"
import { FiTrash2 } from "react-icons/fi"

const tempComp = [
    { cert: "08/07/2022", CNPJ: "03867404000175", name: "Oriza Vieira Lima" },
    { cert: "21/02/2020", CNPJ: "69406932000135", name: "J Raimundo Uchoa" },
    {
        cert: "09/08/2021",
        CNPJ: "27490284000106",
        name: "A de Araujo Ferreira"
    },
]

const CompanyList = (props) => {
    const getPillColor = (date) => {}

    const generateTable = () => {
        return tempComp.map((row) => {
            return (
                <div className="table-c d-flex align-items-center just-content-space-bet" key={row.CNPJ}>
                    <div className="d-flex align-items-center">
                        <div className="cert-date-pill bg-color-sucess d-flex align-items-center just-content-center ml-5">
                            <span className="span-pill">{row.cert}</span>
                        </div>
                        <div className="table-divider ml-5" />

                        <div className="d-flex align-items-center just-content-space-bet CNPJ-width">
                            <span className="ml-5">{row.CNPJ}</span>
                            <div className="table-divider" />
                        </div>

                        <div className="d-flex align-items-center just-content-space-bet table-name-div">
                            <span className="ml-5">{row.name}</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mr-5">
                        <div className="table-divider" />
                        <div className="table-action d-flex align-items-center just-content-center fore-color-danger ml-5">
                            <FiTrash2 />
                        </div>
                        <div className="table-divider ml-5" />
                        <div className="table-action d-flex align-items-center just-content-center fore-color-alert ml-5">
                            <FiEdit />
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <Content title="Listagem de empresas">
            <div className="d-flex align-items-center just-content-space-bet mb-10">
                <h2>Empresas cadastradas</h2>
                <CustomButton sucess title="Nova empresa" icon={<FiPlus />} />
            </div>
            <div className="company-list-container">{generateTable()}</div>
        </Content>
    )
}

export default CompanyList
