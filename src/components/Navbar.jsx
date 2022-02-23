import Navtabs from "./Navtabs";

function Navbar() {
    return (
        <ul className="nav">
            <Navtabs tabName="Home" />
            <Navtabs tabName="Mutual Funds" />
            <Navtabs tabName="Stocks" />
        </ul>
    );
}

export default Navbar;