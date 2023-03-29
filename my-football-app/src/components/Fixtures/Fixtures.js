import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";
import FixturesDate from "../FixturesDate/FixturesDate";
import FixturesList from "./FixturesList";
import dayjs from 'dayjs'

//premier - 39 bundesliga- 78, ligue Un -61, serie A-135, la liga -140

const Fixtures = (props) => {

    const [premierFixtures, setPremierFixtures] = useState([]);
    const [laLigaFixtures, setLaLigaFixtures] = useState([]);
    const [bundesligaFixtures, setBundesligaFixtures] = useState([]);
    const [serieAFixtures, setSerieAFixtures] = useState([]);
    const [ligueUnFixtures, setLigueUnFixtures] = useState([])

    const [selectedDate, setSelectedDate] = useState(dayjs().toISOString().split('T')[0])


    const handleDateClick = (date) => {

        setSelectedDate(date)


    };


    useEffect(() => {

        const optionsPrem = {
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
            params: {
                date: selectedDate,
                league: "39",
                season: "2022",
            },
            headers: {
                "X-RapidAPI-Key": "b1513e9a36mshe6cf50be59827ddp118da0jsn265295c7625f",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
        };
        axios.request(optionsPrem).then(function (response) {
            console.log(response.data.response);
            setPremierFixtures(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });

        const optionsLaLiga = {
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
            params: {
                date: selectedDate,
                league: "140",
                season: "2022",
            },
            headers: {
                "X-RapidAPI-Key": "b1513e9a36mshe6cf50be59827ddp118da0jsn265295c7625f",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
        };
        axios.request(optionsLaLiga).then(function (response) {
            console.log(response.data.response);
            setLaLigaFixtures(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });

        const optionsBundesliga = {
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
            params: {
                date: selectedDate,
                league: "78",
                season: "2022",
            },
            headers: {
                "X-RapidAPI-Key": "b1513e9a36mshe6cf50be59827ddp118da0jsn265295c7625f",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
        };
        axios.request(optionsBundesliga).then(function (response) {
            console.log(response.data.response);
            setBundesligaFixtures(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });

        const optionsSerieA = {
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
            params: {
                date: selectedDate,
                league: "135",
                season: "2022",
            },
            headers: {
                "X-RapidAPI-Key": "b1513e9a36mshe6cf50be59827ddp118da0jsn265295c7625f",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
        };
        axios.request(optionsSerieA).then(function (response) {
            console.log(response.data.response);
            setSerieAFixtures(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });

        const optionsLigueUn = {
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
            params: {
                date: selectedDate,
                league: "61",
                season: "2022",
            },
            headers: {
                "X-RapidAPI-Key": "b1513e9a36mshe6cf50be59827ddp118da0jsn265295c7625f",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
        };
        axios.request(optionsLigueUn).then(function (response) {
            console.log(response.data.response);
            setLigueUnFixtures(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });



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
            >


            </FixturesList>

        </Card>
    )
}

export default Fixtures