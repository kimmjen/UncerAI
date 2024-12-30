import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import BayesianPage from "./pages/BayesianPage";
import DynamicPage from "./pages/DynamicPage";
import PomdpPage from "./pages/PomdpPage";
import ReinforcementPage from "./pages/ReinforcementPage";
import InfluencePage from "@/pages/InfluencePage";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/bayesian" element={<BayesianPage />} />
                    <Route path="/dynamic" element={<DynamicPage />} />
                    <Route path="/influence" element={<InfluencePage />} />
                    <Route path="/pomdp" element={<PomdpPage />} />
                    <Route path="/reinforcement" element={<ReinforcementPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
