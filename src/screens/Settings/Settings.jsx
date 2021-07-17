import React from "react"

import Content from "../../components/template/Content"

import { FiCheck } from "react-icons/fi"

import FileSelectExtended from "../../components/FileSelectExtended"
import CustomTextInput from "../../components/CustomTextInput"
import CustomCheckbox from "../../components/CustomCheckbox"
import CustomButton from "../../components/CustomButton"

const Settings = () => {
    return (
        <Content title="Configuração Geral">
            <FileSelectExtended
                className="mb-10"
                label="Banco de dados C-plus (C-PLUS.FDB)"
                searchStatus="Pesquisa automatica em espera"
                placeholder="C:\CPlus\CPLUS.FDB"
            />
            <FileSelectExtended
                className="mb-10"
                label="Pasta pendente de recepção NFe"
                searchStatus="Pesquisa automatica em espera"
                placeholder="C:\CPlusNFe\Envio\RecepcaoNFe\Pendente"
            />
            <div className="d-grid grid-1-1 mb-10">
                <CustomTextInput
                    label="Intervalo de execução"
                    placeholder="5s"
                    mask="99"
                    maskChar=" "
                />
            </div>

            <CustomCheckbox className="mb-10" />

            <div className="divider mb-10" />

            <div className="d-flex just-content-end">
                <CustomButton sucess title="Salvar" icon={<FiCheck />} />
            </div>
        </Content>
    )
}

export default Settings
