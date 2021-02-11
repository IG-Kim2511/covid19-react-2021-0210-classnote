
/* js 014: 
useState: data관리
useEffect : patch API 사용 

npm install  axios*/

import {useState, useEffect} from 'react'

import {Bar, Dougnut, Line} form 'react-chart'



import PropTypes from 'prop-types'

import axios from 'axios'

const Contents = props => {

    useEffect(()=>{

        const fetchEvents = async ()=>{
            const res = await axios.get("https://api.covid19api.com/summary ")        


            console.log(res)
        }
        fetchEvents()
    })
    return (
        <div>
            <section>
            <h2>국내 코로나 현황</h2>
            <div className="contents">
            </div>
        </section>
        </div>
    )
}


export default Contents

