import React, { useEffect, useState } from "react";
import Date from "../FixturesDate/FixturesDate";
import axios from "axios";
import Card from "../UI/Card";
import FixturesDate from "../FixturesDate/FixturesDate";
import FixturesList from "./FixturesList";


const Fixtures = (props) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [fixtures, setFixtures] = useState([]);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const options = {
            method: "GET",
            url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
            params: {
                date: date,
                league: "39",
                season: "2022",
            },
            headers: {
                "X-RapidAPI-Key": "b1513e9a36mshe6cf50be59827ddp118da0jsn265295c7625f",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
        };
        axios
            .request(options)
            .then((response) => setFixtures(response.data.response))
            .catch((error) => console.error(error));

    };




    return (
        <Card className='fixtures'>
            <FixturesDate onDateClick={handleDateClick}></FixturesDate>
            <FixturesList fixtures={fixtures}></FixturesList>

        </Card>
    )
}

export default Fixtures