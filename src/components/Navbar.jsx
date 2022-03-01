import Navtabs from "./Navtabs";

function Navbar() {
    return (
        <ul className="nav">
            <Navtabs tabName="Home" destination="/" />
            <Navtabs tabName="Mutual Funds" destination="/mutualfund" />
            <Navtabs tabName="Stocks" destination="/stocks" />
        </ul>
    );
}

export default Navbar;