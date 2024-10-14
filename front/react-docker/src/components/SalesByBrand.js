import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

import "./SalesByBrand.css"

const SalesByBrand = () => {
    const data = [
        { name: 'Click', value: 15452.3 },
        { name: 'Pluggi', value: 11275.6 },
        { name: 'Brix', value: 19275.6 },
        { name: 'Pentroise', value: 12275.6 },
    ];

    const COLORS = ['#8884d8', '#82ca9d', '#FFBB28', '#FF8042'];

    return (
        <div className="SalesByBrand DashboardItem">
            <div className="SalesByBrandTitle">
                <p>Sales by brand</p>
            </div>

            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default SalesByBrand;