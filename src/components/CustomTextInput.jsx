import React from "react"
import InputMask from 'react-input-mask'

const CustomTextInput = (props) => {
    return (
        <div className={"d-flex flex-column custom-input-container " + props.className}>
            <h2 className="mb-5">{props.label}</h2>
            <InputMask
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
