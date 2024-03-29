import React from "react";

function Alert(props) {
    const caplitalize = (word) => {
        if (word === "danger") {
            word = "error"
        }
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
    return (
        <div style={{ height: "5vh" }}>

            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong> {caplitalize(props.alert.type)} </strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert;