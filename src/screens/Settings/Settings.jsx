import React, { useState } from "react"
const {dialog} = require('electron').remote

import Content from "../../components/template/Content"

import { FiCheck } from "react-icons/fi"

import FileSelectExtended from "../../components/FileSelectExtended"
import CustomTextInput from "../../components/CustomTextInput"
import CustomCheckbox from "../../components/CustomCheckbox"
import CustomButton from "../../components/CustomButton"

const Settings = () => {
    const [databasePath, setDatabasePath] = useState("")


    const showOpenDialogF = async () => {
        const path = await dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                {name: 'Banco de dados Firebird', extensions: ['FDB']}
            ]
        })

        if(path.filePaths){
            setDatabasePath(path.filePaths[0])
        }
    }

    return (
        <Content title="Configuração Geral">
            <FileSelectExtended
                id="database-input"
                className="mb-10"
                label="Banco de dados C-plus (C-PLUS.FDB)"
                searchStatus="Pesquisa automatica em espera"
                placeholder="C:\CPlus\CPLUS.FDB"
                value={databasePath}
                onChange={(e) => setDatabasePath(e.value)}
                selectOnClick={showOpenDialogF}
            />
            <FileSelectExtended
                id='to-send-input'
                className="mb-10"
                label="Pasta pendente de recepção NFe"
                searchStatus="Pesquisa automatica em espera"
                placeholder="C:\CPlusNFe\Envio\RecepcaoNFe\Pendente"
            />
            <div className="d-grid grid-1-1 mb-10">
                <CustomTextInput
                    id="execution-interval"
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
