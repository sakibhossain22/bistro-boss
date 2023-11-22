import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTiitle/SectionTitle";
import useCart from "../../useCart/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../AxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart , refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart ? cart.reduce((total, item) => total + item.price, 0) : 0;
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
                axiosSecure.delete(`/items/${id}`)
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
            <SectionTitle heading='Excellent Ambience' subHeading='MY BOOKINGS'></SectionTitle>
            <div className="bg-white mx-10 px-5 py-6 rounded">
                <div className="flex items-center justify-between my-4">
                    <h1 className="text-3xl">Total Booking : {cart?.length}</h1>
                    <h1 className="text-3xl">Total Price : $ {totalPrice}</h1>
                    <Link to='/dashboard/reservation'><button className="bg-[#D1A054] px-6 rounded text-white py-2">Pay</button></Link>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#D1A054] text-white rounded">
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cart?.map(item => (
                                        <tr key={item._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>

                                                    </div>
                                                </div>
                                            </td>

                                            <div className="font-bold">{item?.name}</div>
                                            <td>
                                                <div className="font-bold">{item?.category}</div>
                                            </td>
                                            <td className="font-bold">$ {item?.price}</td>
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

export default Cart;