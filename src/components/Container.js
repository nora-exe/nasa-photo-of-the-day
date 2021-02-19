//🌎🚀 Import React, State and Effect, Axios, Constants, and Components (Caption and Text)
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, START_DATE, API_KEY} from '../constants'
import Caption from './Caption';
import Text from './Text';

export default function Container() {
    const [data, setData] = useState(null);

    //🌎🚀 This effect fetches the APOD API - currently within a limited date range during development - and randomizes an image within that range. Currently this only accepts images and loops until it finds one 
    useEffect(() => {            
        axios
        .get(`${BASE_URL}?start_date=${START_DATE}&api_key=${API_KEY}`)
        .then(res => {
            let num = (data) => {
                let index = (Math.floor(Math.random()*data.length));
                if (data[index].media_type === "image") {
                  return index                  
                } else {
                  num(data)
                }
              }
            setData(res.data[num(res.data)])
        }) 
        .catch(err => {
            console.log('Hmm, something went wrong!');
        })
        return () => {}
    }, []);

    // Display a loading message while the data is fetching, which is especially important if this encounters videos repeatedly and takes a while to summon an img
    if (!data) return <h3>Gazing...</h3>;

    // Display component as intended after the data has been fetched
    return (
        <div>
            <img src={data.url} ></img>
            <Caption data={data}/>
            <Text content={data.explanation}/>
        </div>
    )
}