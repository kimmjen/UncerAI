import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <Header />

                {/* Content */}
                <main className="flex-1 bg-gray-100 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
