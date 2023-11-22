import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default UserHome;