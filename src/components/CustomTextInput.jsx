import React from "react"
import InputMask from 'react-input-mask'

const CustomTextInput = (props) => {
    return (
        <div className={"d-flex flex-column custom-input-container " + props.className}>
            <label htmlFor={props.id} className="mb-5 h2-label">{props.label}</label>
            <InputMask
                id={props.id}
                spellCheck="false"
                placeholder={props.placeholder}
                className={"custom-input pl-10" + (props.error ? " custom-input-error" : "")}
                mask={props.mask}
                maskChar={props.maskChar}
            />
        </div>
    )
}

export default CustomTextInput
