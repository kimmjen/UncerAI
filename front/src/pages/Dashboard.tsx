import { Link } from "react-router-dom";

const Dashboard = () => {
    const models = [
        { name: "Bayesian", path: "/bayesian", description: "Bayesian Network Status" },
        { name: "Dynamic", path: "/dynamic", description: "Dynamic Programming Solution" },
        { name: "Influence", path: "/influence", description: "Influence Diagram Status" },
        { name: "POMDP", path: "/pomdp", description: "Partially Observable Markov Decision Process" },
        { name: "Reinforcement", path: "/reinforcement", description: "Reinforcement Learning Status" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.map((model) => (
                    <Link to={model.path} key={model.name}>
                        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-semibold text-gray-800">{model.name}</h2>
                            <p className="mt-2 text-gray-600">{model.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
