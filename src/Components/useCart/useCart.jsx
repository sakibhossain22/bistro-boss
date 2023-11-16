import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { refetch, data } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/cart?email=${user?.email}`);
                return response.data;
            } catch (error) {
                throw new Error("Error fetching cart data");
            }
        },
    });

    return [ data, refetch];
};

export default useCart;
