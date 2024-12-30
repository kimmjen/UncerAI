import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="bg-gray-200 w-64 h-screen p-4 shadow-md">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link to="/" className="text-gray-800 hover:text-blue-500">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/bayesian" className="text-gray-800 hover:text-blue-500">
                            Bayesian
                        </Link>
                    </li>
                    <li>
                        <Link to="/dynamic" className="text-gray-800 hover:text-blue-500">
                            Dynamic
                        </Link>
                    </li>
                    <li>
                        <Link to="/reinforcement" className="text-gray-800 hover:text-blue-500">
                            Reinforcement
                        </Link>
                    </li>
                    <li>
                        <Link to="/pomdp" className="text-gray-800 hover:text-blue-500">
                            POMDP
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
