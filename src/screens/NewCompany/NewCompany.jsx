import React from "react"

import Content from "../../components/template/Content"

import CustomTextInput from "../../components/CustomTextInput"
import CustomSelect from "../../components/CustomSelect"
import CustomTextInputWithButton from "../../components/CustomTextInputWithButton"
import CustomButton from "../../components/CustomButton"

import UF from "../../data/states"

import { FiTrash2 } from "react-icons/fi";

const NewCompany = () => {
    return (
        <Content title="Nova empresa" goBack>
            <CustomTextInput
                className="mb-10"
                label="Nome da empresa"
                placeholder="Nome da empresa"
            />

            <div className="d-grid grid-1-1 grid-gap-10 mb-10">
                <CustomTextInput
                    label="CNPJ"
                    placeholder="00.000.000/0000-00"
                />

                <CustomSelect label="UF">
                    {UF.map((val) => {
                        return <option value={val.initials}>{val.name}</option>
                    })}
                </CustomSelect>
            </div>

            <div className="d-grid grid-1-1 grid-gap-10 mb-10">
                <CustomSelect label="Tipo do certificado">
                    <option value="0">Arquivo (A1)</option>
                    <option value="1">Token (A3)</option>
                </CustomSelect>

                <CustomSelect label="Ambiente">
                    <option value="0">Produção</option>
                    <option value="1">Homologação</option>
                </CustomSelect>
            </div>

            <div className="d-grid grid-2-1 grid-gap-10 mb-10">
                <CustomTextInputWithButton
                    label="Caminho do certificado"
                    placeholder="C:\"
                />

                <CustomTextInput label="Senha" placeholder="00000000" />
            </div>

            <h2 className="mb-10">Informações do certificado</h2>

            <div className="d-flex flex-column align-items-start mb-10">
                <span className="span-label mb-5">
                    Emissor: <span>AC ONLINE RFB v5</span>
                </span>
                <span className="span-label mb-5">
                    Requerente: <span>ORIZA VIEIRA LIMA:03867404000175</span>
                </span>
                <span className="span-label mb-5">
                    Valido a partir:{" "}
                    <span>
                        ‎Quinta-feira, ‎18‎ de ‎fevereiro‎ de ‎2021 08:58:16
                    </span>
                </span>
                <span className="span-label">
                    Valido até:{" "}
                    <span>
                        ‎Sexta-feira, ‎18‎ de ‎fevereiro‎ de ‎2022 08:58:16
                    </span>
                </span>
            </div>

            <div className="divider mb-10" />

            <div className="d-flex just-content-space-bet">
                <CustomButton title="Excluir empresa" danger icon={<FiTrash2/>}/>
                <div className="d-flex">
                <CustomButton title="Cancelar" icon={<FiTrash2/>}/>
                <CustomButton className="ml-10" title="Salvar" sucess icon={<FiTrash2/>}/>
                </div>
            </div>
            
        </Content>
    )
}

export default NewCompany
