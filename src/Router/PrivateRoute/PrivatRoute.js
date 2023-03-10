import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center mt-16">
                <ClipLoader
                    color={"#22c55e"}
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        );
    }

    if (!user) {
        return (
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        );
    }
    return children;
};

export default PrivateRoutes;
