import "./TopSellers.css"

const TopSellers = ({data}) => {
    return (
        <div className="TopSellers DashboardItem">
            <div className="TopSellersTitle">
                <p>Top Sellers</p>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Product ID</th>
                        <th style={tableHeaderStyle}>Name</th>
                        <th style={tableHeaderStyle}>Price</th>
                        <th style={tableHeaderStyle}>Quantity</th>
                        <th style={tableHeaderStyle}>Reorder</th>
                        <th style={tableHeaderStyle}>Category</th>
                        <th style={tableHeaderStyle}>Supplier</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
                        <td style={tableCellStyle}>{item.id}</td>
                        <td style={tableCellStyle}>{item.name}</td>
                        <td style={tableCellStyle}>{item.price}</td>
                        <td style={tableCellStyle}>{item.quantity_in_stock}</td>
                        <td style={tableCellStyle}>{item.reorder_level}</td>
                        <td style={tableCellStyle}>{item.category}</td>
                        <td style={tableCellStyle}>{item.supplier}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

const tableHeaderStyle = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
  };
  
  const tableCellStyle = {
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };
  
  const evenRowStyle = {
    backgroundColor: '#f9f9f9',
  };
  
  const oddRowStyle = {
    backgroundColor: '#ffffff',
  };

export default TopSellers;