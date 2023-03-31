import React from "react";
import Card from "../UI/Card";


const FixturesItem = (props) => {


    return (
        <Card className="fixtures-item">
            <div className="fixture-item-time">
                <h3>{props.time}</h3>
            </div>
            <div className="fixture-item-description">
                <div className="home-team">{props.home}</div>
                <span>VS</span>
                <div className="away-team">{props.away}</div>
            </div>

        </Card>
    )
}


export default FixturesItem