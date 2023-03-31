import React from "react";
import FixturesItem from "./FixturesItem";
import Card from "../UI/Card";
import uniqid from "uniqid"

const FixturesList = (props) => {



    return (
        <Card>
            <ul className="fixtures-list">
                <h2>Premier League</h2>
                {props.premierFixtures.map((premFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={premFixture.teams.home.name}
                        away={premFixture.teams.away.name}
                        time={new Date(premFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}
                <h2>La Liga</h2>
                {props.laLigaFixtures.map((laLigaFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={laLigaFixture.teams.home.name}
                        away={laLigaFixture.teams.away.name}
                        time={new Date(laLigaFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}
                <h2>Bundesliga</h2>
                {props.bundesligaFixtures.map((bundesligaFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={bundesligaFixture.teams.home.name}
                        away={bundesligaFixture.teams.away.name}
                        time={new Date(bundesligaFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}
                <h2>Serie A</h2>
                {props.serieAFixtures.map((serieAFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={serieAFixture.teams.home.name}
                        away={serieAFixture.teams.away.name}
                        time={new Date(serieAFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}
                <h2>Ligue 1</h2>
                {props.ligueUnFixtures.map((ligueUnFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={ligueUnFixture.teams.home.name}
                        away={ligueUnFixture.teams.away.name}
                        time={new Date(ligueUnFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}


            </ul>
        </Card>
    )
}

export default FixturesList