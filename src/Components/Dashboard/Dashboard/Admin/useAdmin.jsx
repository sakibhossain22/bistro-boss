import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../AxiosSecure/useAxiosSecure";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const {data : isAdmin, refetch, isLoading : isAdminLoading } = useQuery({
        queryKey: ['admin'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/user/admin/${user?.email}`)
            return response.data
        }
    })
    return [isAdmin, isAdminLoading, refetch]
};

export default useAdmin;