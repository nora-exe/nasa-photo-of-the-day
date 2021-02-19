//🌎🚀 Caption component containing Title, Copyright, Year-Month-Day

import React from 'react';

export default function Caption(props) {
    const {data} = props
    return (
        <div>
            <p>"{data.title}," {data.copyright} {data.date}</p>
        </div>
    )
}