import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";


const useMenuItem = () => {
    const axiosSecure = useAxiosSecure()
    const { data, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const response = await axiosSecure.get('/menu')
            return response.data
        }
    })
    return { data, refetch }
};

export default useMenuItem;