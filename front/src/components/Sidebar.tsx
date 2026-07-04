import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    
    const menuItems = [
        { path: "/", name: "Dashboard" },
        { path: "/bayesian", name: "Bayesian Network" },
        { path: "/dynamic", name: "Dynamic Programming" },
        { path: "/influence", name: "Influence Diagram" },
        { path: "/pomdp", name: "POMDP" },
        { path: "/reinforcement", name: "Reinforcement Learning" },
    ];

    return (
        <aside className="bg-gray-800 w-64 h-screen p-4 flex flex-col">
            <div className="mb-6">
                <h2 className="text-white text-xl font-bold">UncerAI</h2>
                <p className="text-gray-400 text-sm mt-1">Decision Making Tool</p>
            </div>
            
            <nav className="flex-1">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link 
                                to={item.path} 
                                className={`flex items-center p-2 rounded-md transition-colors ${
                                    location.pathname === item.path 
                                        ? "bg-blue-600 text-white" 
                                        : "text-gray-300 hover:bg-gray-700"
                                }`}
                            >
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            
            <div className="mt-auto pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-xs">© 2023 UncerAI Project</p>
            </div>
        </aside>
    );
};

export default Sidebar;
