import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const usePayments = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { data, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/payments/${user?.email}`)
            return response.data
        }
    })
    return { data, refetch }
};

export default usePayments;