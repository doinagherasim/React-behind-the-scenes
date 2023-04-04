function DemoOutput(props){
    console.log("demo running")
 return <h4>{props.show ? "This is new text with props." : ""}</h4>
};

export default DemoOutput;