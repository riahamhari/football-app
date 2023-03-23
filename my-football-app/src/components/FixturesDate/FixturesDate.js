import React, { useState } from "react";
import Card from "../UI/Card";
import dayjs from 'dayjs';
import './FixturesDate.css'
import Button from 'react-bootstrap/Button';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const FixturesDate = (props) => {
    const today = dayjs();
    const yesterday = today.subtract(1, 'day');
    const dayBefore = yesterday.subtract(1, 'day');
    const tomorrow = yesterday.add(2, 'day');
    const dayAfter = tomorrow.add(1, 'day');


    const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0])



    const handleDateClick = (date) => {
        setSelectedDate(date)
        props.onDateClick(selectedDate);
        console.log(date)
    };

    return (
        <div className="fixtures-date">
            <div className="fixtures-date_item">
                <Button variant="secondary" className="btn" onClick={() => handleDateClick(dayBefore.toISOString().split('T')[0])}>
                    <span>{dayjs(dayBefore).format('llll').split(',')[0].toUpperCase()}</span>
                    <span>{dayjs(dayBefore).format('ll').split(' ')[1].split(',')[0] + ' ' + dayjs(dayBefore).format('ll').split(' ')[0].toUpperCase()}</span>
                </Button>
            </div>

            <div className="fixtures-date_item">
                <Button variant="secondary" className="btn" onClick={() => handleDateClick(yesterday.toISOString().split('T')[0])}>
                    <span>{dayjs(yesterday).format('llll').split(',')[0].toUpperCase()}</span>
                    <span>{dayjs(yesterday).format('ll').split(' ')[1].split(',')[0] + ' ' + dayjs(yesterday).format('ll').split(' ')[0].toUpperCase()}</span>
                </Button>
            </div>
            <div className="fixtures-date_item">
                <Button variant="secondary" className="btn" onClick={() => handleDateClick(today.toISOString().split('T')[0])}>
                    <span>TODAY</span>
                    <span>{dayjs(today).format('ll').split(' ')[1].split(',')[0] + ' ' + dayjs(today).format('ll').split(' ')[0].toUpperCase()}</span>
                </Button>
            </div>
            <div className="fixtures-date_item">
                <Button variant="secondary" className="btn" onClick={() => handleDateClick(tomorrow.toISOString().split('T')[0])}>
                    <span>{dayjs(tomorrow).format('llll').split(',')[0].toUpperCase()}</span>
                    <span>{dayjs(tomorrow).format('ll').split(' ')[1].split(',')[0] + ' ' + dayjs(tomorrow).format('ll').split(' ')[0].toUpperCase()}</span>
                </Button>
            </div>
            <div className="fixtures-date_item">
                <Button variant="secondary" className="btn" onClick={() => handleDateClick(dayAfter.toISOString().split('T')[0])}>
                    <span>{dayjs(dayAfter).format('llll').split(',')[0].toUpperCase()}</span>
                    <span>{dayjs(dayAfter).format('ll').split(' ')[1].split(',')[0] + ' ' + dayjs(dayAfter).format('ll').split(' ')[0].toUpperCase()}</span>
                </Button>
            </div>
        </div >
    )
}

export default FixturesDate;