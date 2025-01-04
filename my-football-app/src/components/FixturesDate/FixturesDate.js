import React, { useState } from "react";
import dayjs from 'dayjs';
import './FixturesDate.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const FixturesDate = (props) => {
    const today = dayjs();
    const yesterday = today.subtract(1, 'day');
    const dayBefore = yesterday.subtract(1, 'day');
    const tomorrow = yesterday.add(2, 'day');
    const dayAfter = tomorrow.add(1, 'day');






    const [showSeletedDate, setShowSelectedDate] = useState(false)
    const [show, setShow] = useState(false)

    const [startDate, setStartDate] = useState(new Date())



    // pass clicked date prop up
    const handleDateClick = (date) => {

        props.onDateClick(date);

        const now = dayjs();
        const selectedDate = dayjs(date);
        const diffInDays = selectedDate.diff(now, 'day');

        if (diffInDays >= 3) {
            setShowSelectedDate(true);
        }
        console.log(startDate)

    };




    return (
        <div>


            <div className="fixtures-date">
                {!showSeletedDate ? (
                    <div className="fixtures-date" >
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
                        <div className="fixtures-date_item">
                            <Button onClick={() => setShow(true)} variant="dark" className="btn-lg">

                                <FontAwesomeIcon icon={icon({ name: 'calendar-days', style: 'regular' })} />

                            </Button>
                            {show &&
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date)
                                        handleDateClick(date.toISOString().split('T')[0])
                                    }}
                                    inline
                                    onSelect={() => {

                                        setShow(false)
                                    }}
                                    onClickOutside={() => setShow(false)}
                                />
                            }

                        </div>
                    </div>
                ) : (
                    <div className="fixtures-date">
                        <div className="fixtures-date_item">
                            <Button variant="secondary" className="btn" onClick={() => handleDateClick(startDate.toISOString().split('T')[0])}>
                                <span>{startDate}</span>
                                <span>{startDate}</span>
                            </Button>
                        </div>
                        <div className="fixtures-date_item">
                            <Button onClick={() => setShow(true)} variant="dark" className="btn-lg">

                                <FontAwesomeIcon icon={icon({ name: 'calendar-days', style: 'regular' })} />

                            </Button>
                            {show &&
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date)
                                        handleDateClick(date.toISOString().split('T')[0])
                                    }}
                                    inline
                                    onSelect={() => {

                                        setShow(false)
                                    }}
                                    onClickOutside={() => setShow(false)}
                                />
                            }

                        </div>
                    </div>

                )}



            </div >
        </div >
    )
}

export default FixturesDate;