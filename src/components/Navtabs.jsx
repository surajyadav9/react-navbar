import { Link } from "react-router-dom";

function Navtabs(props) {
    const tabName = props.tabName;

    return (
        <li className="nav-item">
            <Link to="" className="nav-link active">
                {tabName}
            </Link>
        </li>
    );
}

export default Navtabs;