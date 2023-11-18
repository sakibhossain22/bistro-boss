import Swal from "sweetalert2";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import SectionTitle from "../../../../Shared/SectionTiitle/SectionTitle";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "../../../../AxiosSecure/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { isLoading, refetch, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            axiosSecure.get('/users')
                .then(res => {
                    return res.data
                })
    })
    console.log(data);
    const handleRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make Admin !"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Role Updated!",
                                text: "Role Updated Successfylly.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div>
            <SectionTitle heading='How Many' subHeading='MANAGE ALL USERS'></SectionTitle>
            <div className="bg-white mx-10 px-5 py-6 rounded">
                <div className="flex items-center justify-between my-4">
                    <h1 className="text-3xl">Total Booking :</h1>
                    <h1 className="text-3xl">Total Price : $ </h1>
                    <button className="bg-[#D1A054] px-6 rounded text-white py-2">Pay</button>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#D1A054] text-white rounded">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data?.map(item => (
                                        <tr key={item._id}>
                                            <td className="font-bold">{item?.name || 'No Name'}</td>
                                            <td>
                                                <div className="font-bold">{item?.email}</div>
                                            </td>
                                            <td className="font-bold">
                                                {
                                                    item?.role === 'admin' ? 'admin' :
                                                        <button onClick={() => handleRole(item?._id)} className="bg-[#D1A054] text-white rounded px-4 py-2">
                                                            <FaUser></FaUser>
                                                        </button>
                                                }
                                            </td>
                                            <th>
                                                <button onClick={() => handleDelete(item._id)} className="bg-[#B91C1C] px-4 rounded py-2">
                                                    <FaTrashAlt className="text-lg text-white"></FaTrashAlt>
                                                </button>
                                            </th>
                                        </tr>
                                    ))
                                }
                                {/* row 1 */}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;