import { Link } from "react-router-dom";

const Dashboard = () => {
    const models = [
        { 
            name: "Bayesian Network", 
            path: "/bayesian", 
            description: "Probabilistic graphical model representing variables and their conditional dependencies", 
            stats: { models: 5, variables: 24, edges: 36 },
            color: "blue",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        { 
            name: "Dynamic Programming", 
            path: "/dynamic", 
            description: "Method for solving complex problems by breaking them down into simpler subproblems", 
            stats: { solutions: 8, optimized: 6, paths: 12 },
            color: "green",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        { 
            name: "Influence Diagram", 
            path: "/influence", 
            description: "Graphical representation of decisions, uncertainties, and objectives", 
            stats: { diagrams: 4, decisions: 15, factors: 22 },
            color: "purple",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
            )
        },
        { 
            name: "POMDP", 
            path: "/pomdp", 
            description: "Partially Observable Markov Decision Process for decision-making under uncertainty", 
            stats: { states: 18, actions: 8, observations: 12 },
            color: "red",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        { 
            name: "Reinforcement Learning", 
            path: "/reinforcement", 
            description: "Training agents to make sequences of decisions to maximize cumulative reward", 
            stats: { agents: 3, episodes: 250, rewards: 1820 },
            color: "yellow",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
    ];

    // Summary stats
    const totalModels = models.reduce((sum, model) => sum + Object.values(model.stats)[0], 0);
    const activeModels = models.length;

    return (
        <div className="p-6">
            {/* 요약 섹션 */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-gray-500">Total Models</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">{totalModels}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-gray-500">Active Modules</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">{activeModels}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-gray-500">Last Updated</h3>
                    <p className="text-3xl font-bold text-purple-600 mt-2">{new Date().toLocaleDateString()}</p>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-6">AI Decision Models</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.map((model) => (
                    <Link to={model.path} key={model.name} className="block">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <div className={`bg-${model.color}-100 p-4 flex justify-between items-center`}>
                                <div className={`p-3 rounded-full bg-${model.color}-500 text-white`}>
                                    {model.icon}
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">{model.name}</h2>
                            </div>
                            
                            <div className="p-4">
                                <p className="text-gray-600 mb-4">{model.description}</p>
                                
                                <div className="grid grid-cols-3 gap-2 mt-4 border-t pt-4">
                                    {Object.entries(model.stats).map(([key, value]) => (
                                        <div key={key} className="text-center">
                                            <p className="text-lg font-bold text-gray-800">{value}</p>
                                            <p className="text-xs text-gray-500 capitalize">{key}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
