import React from "react";

class Achievement extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li>• {this.props.achievement}</li>
        )
    }
}

export default Achievement 