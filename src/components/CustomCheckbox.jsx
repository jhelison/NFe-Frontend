import React from "react"

const CustomCheckbox = (props) => {
    return (
        <div className={"d-flex align-items-center " + props.className}>
            <input className="custom-checkbox" type="checkbox" id="asd"/>
            <label className="ml-10" for="asd">Iniciar com o agendamento ativado</label>
        </div>
    )
}

export default CustomCheckbox
