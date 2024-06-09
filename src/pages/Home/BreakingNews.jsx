import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div>
            <div className="btn btn-secondary">Breaking News</div>

            <Marquee pauseOnHover={true}>
                <Link to="/">  I can be a React component, multiple React components, or just some text....
                </Link>
                <Link to="/">  I can be a React component, multiple React components, or just some text....
                </Link>
                <Link to="/">  I can be a React component, multiple React components, or just some text....
                </Link>
                <Link to="/">  I can be a React component, multiple React components, or just some text....
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;