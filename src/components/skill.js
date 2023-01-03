import React from "react";

class Skill extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li>{this.props.task}</li>
        )
    }
}

export default Skill