import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Chart.css';

const Chart = () => {
    const [items, setItems] = useState([]);
    const [areaChart, setAreaChart] = useState(true);
    useEffect(() => {
        axios.get('https://spice-granary.herokuapp.com/items')
            .then(response => {
                const { data } = response;
                setItems(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    const handleAreaChartClick = () => {
        setAreaChart(true);
    }
    const handleBarChartClick = () => {
        setAreaChart(false);
    }
    return (
        <div className='container'>
            <div>
                <h1 className='section-title my-4 p-2'>Items quantity in stock</h1>
            </div>
            <div className='mb-2'>
                <button onClick={handleAreaChartClick} className='areachart-btn btn btn-link'>Area Chart</button>
                <button onClick={handleBarChartClick} className='barchart-btn btn btn-link'>Bar chart</button>
            </div>
            <div className='chart-div'>
                {
                    areaChart ? 
                    <div>
                        <ResponsiveContainer width="95%" height={400}>
                            <AreaChart
                                width={500}
                                height={400}
                                data={items}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="quantity" stroke="#e9bd6b" fill="#e9bd6b" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div> 
                    : 
                    <div>
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart
                            width={500}
                            height={300}
                            data={items}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="quantity" fill="#e9bd6b" />
                            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                }
            </div>
        </div>
    );
};

export default Chart;