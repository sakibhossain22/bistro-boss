import SectionTitle from "../../Shared/SectionTiitle/SectionTitle";
import usePayments from "../../usePayments/usePayments";

const PaymentHistory = () => {
    const { data } = usePayments()
    console.log(data);
    return (
        <div>
            <SectionTitle heading='Excellent Ambience' subHeading='PAYMENTS HISTORY'></SectionTitle>
            <div className="bg-white mx-10 px-5 py-6 rounded">
                <div className="flex items-center justify-between my-4">
                    <h1 className="text-3xl">Total Order : {data?.length}</h1>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#D1A054] text-white rounded">
                                    <th>EMAIL</th>
                                    <th>CATEGORY</th>
                                    <th>PRICE</th>
                                    <th>PAYMENT DATE</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data?.map(item => (
                                        <tr key={item._id}>
                                            <td className="font-bold">
                                                {item?.email}
                                            </td>

                                            <div className="font-bold">{item?.status}</div>
                                            <td className="font-bold">$ {item?.price}</td>
                                            <td>
                                                <div className="font-bold">{item?.date.slice(0,10)}</div>
                                            </td>

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

export default PaymentHistory;