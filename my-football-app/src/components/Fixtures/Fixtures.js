import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";
import FixturesDate from "../FixturesDate/FixturesDate";
import FixturesList from "./FixturesList";
import dayjs from 'dayjs'

//premier - 39 bundesliga- 78, ligue Un -61, serie A-135, la liga -140

const cache = {}

const Fixtures = (props) => {

    const [premierFixtures, setPremierFixtures] = useState([]);
    const [laLigaFixtures, setLaLigaFixtures] = useState([]);
    const [bundesligaFixtures, setBundesligaFixtures] = useState([]);
    const [serieAFixtures, setSerieAFixtures] = useState([]);
    const [ligueUnFixtures, setLigueUnFixtures] = useState([])
    const [uclFixtures, setUclFixtures] = useState([])


    const [selectedDate, setSelectedDate] = useState(dayjs().toISOString().split('T')[0])


    const handleDateClick = (date) => {

        setSelectedDate(date)


    };




    useEffect(() => {


        const leagues = ["39", "140", "78", "135", "61", "2"]


        const fetchFixtures = (league) => {
            const cacheKey = `${league}-${selectedDate}`

            if (cache[cacheKey]) {
                return Promise.resolve(cache[cacheKey]);
            }

            const options = {
                method: "GET",
                url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
                params: {
                    date: selectedDate,
                    league,
                    season: "2022",
                },
                headers: {
                    "X-RapidAPI-Key": "b1513e9a36mshe6cf50be59827ddp118da0jsn265295c7625f",
                    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
                },
            };
            return axios.request(options).then((response) => {
                const fixtures = response.data.response
                cache[cacheKey] = fixtures
                return fixtures
            })
                .catch(error => {
                    console.error(error)
                    return [];
                });
        }


        const fetchData = () => {
            Promise.all(leagues.map((league) => fetchFixtures(league)))
                .then(fixtures => {
                    // console.log(fixtures)
                    setPremierFixtures(fixtures[0]);
                    setLaLigaFixtures(fixtures[1]);
                    setBundesligaFixtures(fixtures[2]);
                    setSerieAFixtures(fixtures[3]);
                    setLigueUnFixtures(fixtures[4]);
                    setUclFixtures(fixtures[5])
                })
        };
        fetchData()




    }, [selectedDate])




    return (
        <Card className='fixtures'>

            <FixturesDate onDateClick={handleDateClick}></FixturesDate>
            <FixturesList
                premierFixtures={premierFixtures}
                laLigaFixtures={laLigaFixtures}
                bundesligaFixtures={bundesligaFixtures}
                serieAFixtures={serieAFixtures}
                ligueUnFixtures={ligueUnFixtures}
                uclFixtures={uclFixtures}
            >


            </FixturesList>

        </Card>
    )
}

export default Fixtures