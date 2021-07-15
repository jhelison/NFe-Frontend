import React from "react"

const CustomSelect = (props) => {
    return (
        <div className={"d-flex flex-column custom-input-container " + props.className}>
            <h2 className="mb-5">{props.label}</h2>
            <div className="custom-select">
                <select
                    className={"custom-input pl-10" + (props.error ? " custom-input-error" : "")}
                >
                    {props.children}
                </select>
            </div>

        </div>
    )
}

export default CustomSelect
