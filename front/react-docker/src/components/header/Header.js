import "./Header.css"

const Header = () => {
    return (
        <div className="Header">
            <div className="Logo">OPTI_STOCK</div>
            
            <div className="NavHeader">
                <a className="NavItem">Home</a>
                <a className="NavItem SelectedNav">Projects</a>
                <a className="NavItem">Files</a>
                <a className="NavItem">Account</a>
            </div>

            <div className="DisconnectButton">
                <p>Log out</p>
            </div>
      </div>
    );
};

export default Header;