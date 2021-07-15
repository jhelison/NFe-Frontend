import React from "react"

const CustomTextInput = (props) => {
    return (
        <div className={"d-flex flex-column custom-input-container " + props.className}>
            <h2 className="mb-5">{props.label}</h2>
            <input
                spellCheck="false"
                placeholder={props.placeholder}
                className={"custom-input pl-10" + (props.error ? " custom-input-error" : "")}
            />
        </div>
    )
}

export default CustomTextInput
