import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../useAdmin";

const AdminPrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <div className="flex items-center justify-center h-screen">
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user || isAdmin) {
        return children
    }
    <Navigate to='/login' state={location.pathname}></Navigate>

};

export default AdminPrivate;