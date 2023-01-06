import React from "react"
import Achievement from "./achievement"

class AchievementList extends React.Component{
    constructor(props){
        super(props)
        this.achievementss = ['Ach 1', 'Ach 2' ,'Ach 3','Ach 4','Ach 5']
    }
    render(){
        const achivements = this.props.achievementsArr
        let displayAchievements = this.achievementss.map(achievement=>{
           return <Achievement achievement={achievement} />
        })
        return(
            <ul className="flex flex-col text-white"  id="skill-list">
                <h3 className="side-titles">Achievements:</h3>
                {displayAchievements}
            </ul>
        )
    }
}

export default AchievementList 