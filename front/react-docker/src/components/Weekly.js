import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "./Weekly.css"

const Weekly = () => {
    const data = [
        { date: '2013-01', sold: 1.2, purchased: 1.4 },
        { date: '2013-02', sold: 1.3, purchased: 1.5 },
        { date: '2013-02', sold: 2, purchased: 1.8 },
        { date: '2013-02', sold: 3, purchased: 1.6 },
        { date: '2015-02', sold: 2, purchased: 1.65 },
        { date: '2015-02', sold: 4, purchased: 1.45 },
        { date: '2015-02', sold: 3.5, purchased: 1.3 },
        { date: '2016-02', sold: 2.8, purchased: 1.55 },
        { date: '2016-02', sold: 3.2, purchased: 1.65 },
        { date: '2016-02', sold: 3.6, purchased: 2 },
        { date: '2016-02', sold: 4.3, purchased: 2.2 },
    ];

    const WeeklyVolumesChart = () => (
        <div style={{width: "100%", height: "400px"}}>
            <ResponsiveContainer height='100%' width='100%'>
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sold" stroke="#fcb617" />
                <Line type="monotone" dataKey="purchased" stroke="#c50021" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <div className="Weekly DashboardItem">
            <div className="WeeklyTitle">
                <p>Weekly Volumes</p>
                <WeeklyVolumesChart />
            </div>
        </div>
    );
};

export default Weekly;