import "./Numbers.css"

const Numbers = () => {
    return (
        <div className="Number DashboardItem">
            <div className="NumberItem">
                <p className="NumberTitle">123</p>
                <p>Items</p>
            </div>
            <div className="NumberItem">
                <p className="NumberTitle">138 181</p>
                <p>Orders</p>
            </div>
            <div className="NumberItem">
                <p className="NumberTitle">138 181 $</p>
                <p>Orders</p>
            </div>
            <div className="NumberItem">
                <p className="NumberTitle">350 $</p>
                <p>Max Sell Price</p>
            </div>
        </div>
    );
};

export default Numbers;