import React, { Component } from 'react';
import SimpleReactCalendar from 'simple-react-calendar';
import './Calendar.css';

export default function Calendar() { 
    return (
    <SimpleReactCalendar activeMonth={new Date()} />
    )
}