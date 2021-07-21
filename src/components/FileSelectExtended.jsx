import React from "react"

import CustomTextInputWithButton from "./CustomTextInputWithButton"

const FileSelectExtended = (props) => {
    return (
        <div className={props.className}>
            <CustomTextInputWithButton
                id={props.id}
                label={props.label}
                className="mb-5"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onClick={props.selectOnClick}
            />
            <div className="d-flex align-items-center just-content-space-bet">
                <span>{props.searchStatus}</span>
                <div className="d-flex just-content-center align-items-center custom-input-button cib-extended ">
                    <span className="span-label">Pesquisa automatica</span>
                </div>
            </div>
        </div>
    )
}

export default FileSelectExtended
