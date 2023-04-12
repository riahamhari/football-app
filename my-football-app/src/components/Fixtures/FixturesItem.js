import React from "react";
import Card from "../UI/Card";
import classes from './FixturesItem.module.css'



const FixturesItem = (props) => {


    return (
        <Card className={classes.fixturesItem}>
            <div className="fixture-item-time">
                <h3>{props.time}</h3>
            </div>
            <div className="fixture-item-description">
                <div className="home-team">
                    <img className={classes.teamLogo} src={props.homeLogo} alt={`${props.home} logo`}></img>
                    {props.home}
                </div>
                <span>VS</span>
                <div className="away-team">
                    <img className={classes.teamLogo} src={props.awayLogo} alt={`${props.away} logo`}></img>
                    {props.away}
                </div>
            </div>

        </Card>
    )
}


export default FixturesItem