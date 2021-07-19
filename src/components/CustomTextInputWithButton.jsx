import React from "react"

const CustomTextInputWithButton = (props) => {
    return (
        <div
            className={
                "d-flex flex-column custom-input-container " + props.className
            }
        >
            <h2 className="mb-5">{props.label}</h2>
            <div className="d-flex">
                <input
                    spellCheck="false"
                    placeholder={props.placeholder}
                    className={
                        "custom-input pl-10 no-right-border-radius" +
                        (props.error ? " custom-input-error" : "")
                    }
                    value={props.value}
                    onChange={props.onChange}
                />
                <div
                    className="d-flex just-content-center align-items-center custom-input-button"
                    onClick={props.onClick}
                >
                    <span className="span-label">Selecionar</span>
                </div>
            </div>
        </div>
    )
}

export default CustomTextInputWithButton
