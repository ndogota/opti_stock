import Numbers from "./Numbers";
import Weekly from "./Weekly";

import SalesByBrand from "./SalesByBrand";
import StockValue from "./StockValue";
import TopSellers from "./TopSellers";

import "./Dashboard.css"

const Dashboard = ({data}) => {
    return (
        <div className="Dashboard">
            <div className="DashboardTitle DashboardItem">
                <p>Dashboard</p>
            </div>
            
            <Numbers />
            <Weekly />

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <SalesByBrand />
                <StockValue />
            </div>
            
            <TopSellers data={data}/>
        </div>
    );
};

export default Dashboard;