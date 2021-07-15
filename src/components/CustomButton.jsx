import React from 'react'

const CustomButton = (props) => {
    const getButtonColor = () => {
        if(props.sucess){
            return "button-color-sucess "
        }
        else if(props.danger){
            return "button-color-danger "
        }
        else if(props.alert){
            return "button-color-alert "
        }
        else if(props.secondary){
            return "button-color-secondary "
        }
        else {
            return "button-color-secondary "
        }
    }



    return (
        <div className={"d-flex align-items-center just-content-center custom-button-container " + getButtonColor() + props.className}>
            <div className="d-flex align-items-center just-content-center width-67">
                <span className="custom-button-label">{props.title}</span>
            </div>
            
            {/* <div className="custom-button-divider"/> */}
            <div className="d-flex align-items-center just-content-center custom-button-icon-container">
                {props.icon}
            </div>
            
        </div>
    )
}

export default CustomButton