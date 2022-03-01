import { Link } from "react-router-dom";

function Navtabs(props) {
    const { tabName, destination } = props;

    return (
        <li className="nav-item">
            <Link to={{ pathname: `${destination}` }} className="nav-link active">
                {tabName}
            </Link>
        </li>
    );
}

export default Navtabs;