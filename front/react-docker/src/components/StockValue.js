import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import "./StockValue.css"

const StockValue = () => {
    const data = [
        { supplier: 'Computer & Co', value: 256673.1 },
        { supplier: 'Digital Age', value: 129358.1 },
        { supplier: 'Techno First', value: 349358.1 },
    ];

    return (
        <div className="StockValue">
            <div className="StockValue DashboardItem">
                <div className="StockValueTitle">
                    <p>Stock Value by Supplier</p>
                </div>

                <BarChart width={500} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="supplier" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default StockValue;