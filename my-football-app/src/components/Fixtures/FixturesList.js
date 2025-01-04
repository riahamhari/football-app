import React from "react";
import FixturesItem from "./FixturesItem";
import Card from "../UI/Card";
import uniqid from "uniqid"

const FixturesList = (props) => {



    return (
        <Card>


            <ul className="fixtures-list">

                {props.premierFixtures.length > 0 ? (
                    <h2>Premier League</h2>
                ) : (
                    <h2>No Premier League Fixtures!</h2>
                )}

                {props.premierFixtures.map((premFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={premFixture.teams.home.name}
                        homeLogo={premFixture.teams.home.logo}
                        away={premFixture.teams.away.name}
                        awayLogo={premFixture.teams.away.logo}
                        time={new Date(premFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}
                {props.laLigaFixtures.length > 0 ? (
                    <h2>La Liga</h2>
                ) : (
                    <h2>No La Liga Fixtures!</h2>
                )}

                {props.laLigaFixtures.map((laLigaFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={laLigaFixture.teams.home.name}
                        homeLogo={laLigaFixture.teams.home.logo}
                        away={laLigaFixture.teams.away.name}
                        awayLogo={laLigaFixture.teams.away.logo}
                        time={new Date(laLigaFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}
                {props.bundesligaFixtures.length > 0 ? (
                    <h2>Bundesliga</h2>
                ) : (
                    <h2>No Bundesliga Fixtures!</h2>
                )}

                {props.bundesligaFixtures.map((bundesligaFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={bundesligaFixture.teams.home.name}
                        homeLogo={bundesligaFixture.teams.home.logo}
                        away={bundesligaFixture.teams.away.name}
                        awayLogo={bundesligaFixture.teams.away.logo}
                        time={new Date(bundesligaFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}
                {props.serieAFixtures.length > 0 ? (
                    <h2>Serie A</h2>
                ) : (
                    <h2>No Serie A Fixtures!</h2>
                )}

                {props.serieAFixtures.map((serieAFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={serieAFixture.teams.home.name}
                        homeLogo={serieAFixture.teams.home.logo}
                        away={serieAFixture.teams.away.name}
                        awayLogo={serieAFixture.teams.away.logo}
                        time={new Date(serieAFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}
                {props.ligueUnFixtures.length > 0 ? (
                    <h2>Ligue 1</h2>
                ) : (
                    <h2>No Ligue 1 Fixtures!</h2>
                )}

                {props.ligueUnFixtures.map((ligueUnFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={ligueUnFixture.teams.home.name}
                        homeLogo={ligueUnFixture.teams.home.logo}
                        away={ligueUnFixture.teams.away.name}
                        awayLogo={ligueUnFixture.teams.away.logo}
                        time={new Date(ligueUnFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}
                {props.uclFixtures.length > 0 ? (
                    <h2>UEFA Champion's League</h2>
                ) : (
                    <h2>No UEFA Champion's League Fixtures!</h2>
                )}

                {props.uclFixtures.map((uclFixture) => (
                    <FixturesItem
                        key={uniqid()}
                        home={uclFixture.teams.home.name}
                        homeLogo={uclFixture.teams.home.logo}
                        away={uclFixture.teams.away.name}
                        awayLogo={uclFixture.teams.away.logo}
                        time={new Date(uclFixture.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    />
                ))}


            </ul>
        </Card>
    )
}

export default FixturesList