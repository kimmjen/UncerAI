interface LoadingOrErrorProps {
    loading: boolean;
    error: string | null;
    title: string;
    children: React.ReactNode;
}

const LoadingOrError: React.FC<LoadingOrErrorProps> = ({ loading, error, title, children }) => {
    if (loading) {
        return (
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
                <p className="text-red-600">Error: {error}</p>
            </div>
        );
    }

    return <>{children}</>;
};

export default LoadingOrError;
