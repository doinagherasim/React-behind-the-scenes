import React from "react";

function Button (props) {
  console.log("button running")
          return (
            <button 
            type={props.type || 'button'}
            onClick={props.onClick}
            disabled={props.disabled}>
                {props.children}
            </button>
          )
    };

export default React.memo(Button);