import { FaTrashAlt, FaPen } from "react-icons/fa";
import useMenuItem from "../../useMenu/useMenuItem";
import SectionTitle from "../../Shared/SectionTiitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../AxiosSecure/useAxiosSecure";
const ManageItems = () => {
    const axiosSecure = useAxiosSecure()
    const { data, refetch } = useMenuItem()
    const handleDelete = (id) => {
        console.log(id);
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
                axiosSecure.delete(`/menu/${id}`)
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
            <div>
                <SectionTitle heading='How Many' subHeading='MANAGE ALL USERS'></SectionTitle>
                <div className="bg-white mx-10 px-5 py-6 rounded">
                    <div className="flex items-center justify-between my-4">
                        <h1 className="text-3xl">Total User : {data?.length}</h1>
                        <button className="bg-[#D1A054] px-6 rounded text-white py-2">Pay</button>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="bg-[#D1A054] text-white rounded">
                                        <th>No .</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Update</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data?.map((item, idx) => (
                                            <tr key={item._id}>
                                                <td>
                                                    <h1 className="font-bold">{idx + 1}</h1>
                                                </td>
                                                <td className="font-bold">
                                                    <div>
                                                        <img className="w-14 rounded" src={item?.image} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="font-bold">{item?.name || 'No Name'}</div>
                                                </td>
                                                <td>
                                                    <div className="font-bold">$ {item?.price || 'No Price'}</div>
                                                </td>

                                                <td className="font-bold">
                                                    <button className="bg-[#D1A054] text-white rounded px-4 py-2">
                                                        <FaPen></FaPen>
                                                    </button>
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
        </div>
    );
};

export default ManageItems;