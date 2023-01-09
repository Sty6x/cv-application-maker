import React from "react"
import Achievement from "./achievement"
import { v4 } from "uuid"

class AchievementList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const achievements = this.props.achievements
        let displayAchievements = achievements.map(achievement=>{
           return <Achievement key={v4()} achievement={achievement} />
        })
        return(
            <ul className="flex flex-col text-white"  id="skill-list">
                <h3 className="side-titles">Achievements:</h3>
                {achievements.length ? displayAchievements : <p className="fallback-list-sb">ADD YOUR ACHIEVEMENTS</p>}
            </ul>
        )
    }
}

export default AchievementList 