import React from "react";

function Component2 (props) {
console.log("component2 running")
 return (
    <div>
        <h4>{props.show ? "This is new text with props." : ""}</h4>
    </div>
 )
};

export default React.memo(Component2);