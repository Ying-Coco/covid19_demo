import React,{useEffect, useState} from 'react';
import {fetchDailyStateData} from '../api/index.js';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
import {Grid} from '@material-ui/core';

const Chart = ({data :{cases, recovered, deaths}, state, county }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() =>{
        const fetchAPI = async ()=>{
            setDailyData(await fetchDailyStateData());
        }

        fetchAPI();
    },[]) ;

    const lineChart = (
        dailyData[0]
        ?(
            <Line 
            data = {{
                labels:dailyData.map(({date}) => date),
                datasets:[{
                    data: dailyData.map(({cases}) => cases),
                    label: 'Infected',
                    borderColor: 'rgba(255, 173, 51, 1)',
                    backgroundColor: 'rgba(255, 173, 51, 0.5)',
                    fill: true, 
                },{
                    data:dailyData.map(({deaths}) => deaths),
                    label: 'Deceased',
                    borderColor: 'rgba(255, 0, 0, 1)',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true, 
                }]
            }} 
            />
        ): null
    );


    const barChart = (
        cases
        ?(
            <Bar data = {{
                labels:['Confirmed', 'Deaths','Recoverd'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(255, 163, 26, 0.8)', 'rgba(255, 0, 0, 0.8)', 'rgba(153, 187, 255, 0.8)'],
                    data:[cases, deaths]
                }]
            }}
            options={{
                legend:{display:false},
                /* title:{display:true, text:'Current State in ' + state}, */
            }}
            />
        ): null
    )
    /* const lineChart= (
        dailyData[0]
        ?(
        <Line
        data={{
            labels:dailyData.map(({date}) => date),
            datasets:[{
                data: dailyData.map(({cases}) => cases),
                label: 'Infected',
                borderColor: 'rgba(255, 173, 51, 1)',
                backgroundColor: 'rgba(255, 173, 51, 0.5)',
                fill: true, 
            },{
                data:dailyData.map(({deaths}) => deaths),
                label: 'Deceased',
                borderColor: 'rgba(255, 0, 0, 1)',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true, 
            },{
                data:dailyData.map(({recovered}) => recovered),
                label: 'Recovered',
                borderColor: 'rgba(153, 187, 255, 1)',
                backgroundColor: 'rgba(153, 187, 255, 0.5)',
                fill: true, 
            }]
        }}
        />
        ):null
    ); */

   /*  const barChart =(
        cases
        ? (
          <Bar data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              lablel:'People',
              backgroundColor: [ 'rgba(255, 163, 26, 0.8)', 'rgba(153, 187, 255, 0.8)', 'rgba(255, 0, 0, 0.8)'],
              data: [cases.value, recovered.value, deaths.value]
            }]
          }} options={{
            legend: {display: false},
            // eslint-disable-next-line no-template-curly-in-string
            title: {display: true, text:'Current State in ' + county},
          }}
          />
        ): null
      ) */
    return (
       <div className={styles.container}>
          <Grid container spacing={3} justify="center" >
              {state ?  barChart : lineChart }
             
           </Grid>
       </div>
    )
}
export default Chart;