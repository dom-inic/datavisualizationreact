import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2';
import { Line } from 'react-chartjs-2'

const LineGraph = () => {
    const [chartData, setChartData]  = useState({});
    // const []

    // const []

 const Chart = () => {
        let AprilTotalllins = [];
        let Aprilquantity = [];
        let lists = [];
        let months = [];

        axios.get("https://json.link/S6LGvKZQLt.json")
        .then(result => {
            console.log(result)
            console.log(result.data)
            // April 
            const dipensedApril = result.data.rows[0].map((test) => test);
            // console.log(dipensedApril[2]);
            const MOH711c = result.data.rows[4].map((llinschildA) => llinschildA);
            // console.log(MOH711c[2]);
            const MOH711A =  result.data.rows[7].map((llinsclients) => llinsclients);
            // console.log(MOH711A[2])
        
            console.log(MOH711A);
            const totalllins = parseFloat(MOH711c[2])+parseFloat(MOH711A[2]);
            // console.log(totalllins);
        
            // March
            const dispensedMarch = result.data.rows[3].map((dispensed) => dispensed);
            // console.log(dispensedMarch[2]);
            const MOH711CM = result.data.rows[1].map((llinschildM) => llinschildM);
            // console.log(MOH711CM[2]);
            const MOH711AM = result.data.rows[6].map((llinclientsM) => llinclientsM);
            // console.log(MOH711AM[2]);
        
            const totalllinsM = parseFloat(MOH711CM[2]) + parseFloat(MOH711AM[2]);
            // console.log(totalllinsM);
        
            // February
            const MOH711CF = result.data.rows[2].map((llinchildF) => llinchildF);
            // console.log(MOH711CF[2]);
            const MOH711AF = result.data.rows[5].map((llinclientsF)=> llinclientsF);
            // console.log(MOH711AF[2]);
            const totalllinsF = parseFloat(MOH711CF[2]) + parseFloat(MOH711AF[2]);
            const threemonthtotalllins = parseFloat(totalllins) + parseFloat(totalllinsM) + parseFloat(totalllinsF);
            console.log(threemonthtotalllins)
            // console.log(totalllinsF);
            lists.push(parseInt(totalllinsF));
            lists.push(parseInt(totalllinsM));
            lists.push(parseInt(totalllins));
            console.log(lists)
            
            // lists.push(parseInt(totalllinsF));
            // lists.push(parseInt(totalllinsM));
            Aprilquantity.push(parseInt(0));
            Aprilquantity.push(parseInt(dispensedMarch[2]));
            Aprilquantity.push(parseInt(dipensedApril[2]));
            console.log(Aprilquantity);
            months.push('February 2021');
            months.push('March 2021');
            months.push('April 2021');
            // for(const dataObj of result.data.metaData.items){
            //     months.push(parseInt(dataObj.name));

            // }
            setChartData({
                labels: months,
                datasets: [{
                    // barPercentage: 2.0,
                    // barThickness: 200,
                    // // maxBarThickness: 100,
                    // minBarLength: 2,
                                             label: 'Total LLINS',
                                             data: lists,
                                             fill: true,
                                             backgroundColor: "rgba(75,192,192,0.2)",
                                             borderColor: "rgba(75,192,192,1)",
                            
                                             
                                         },
                                         {
                                            label: 'Total Quantity Dispensed',
                                            data: Aprilquantity,
                                            fill: false,
                                            borderColor: "#742774",
                                            backgroundColor: "rgba(255, 159, 64, 0.2)",
                                            }
                                        ]
            });
        })
        .catch(err =>{
            console.log(err);
        })
        
    }
    useEffect(() => {
        Chart();
      }, []);
      return(
          <div className="App">
              <div>
              <Line
                  data={chartData}
                  options={{
                    responsive:true,
                    title: { text: "total llins", display: true },
                    scales:{
                        yAxes:{
                            ticks:{
                                beginAtZero: true
                            }
                        }
                    }
                }}
                  />,
              </div>
          </div>
      )
}

export default LineGraph;