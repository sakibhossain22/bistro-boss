import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../AxiosSecure/useAxiosSecure";

const UpdateItem = () => {
    const axiosSecure = useAxiosSecure()
    const data = useLoaderData()
    console.log(data);
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const recipe = form.recipe.value
        const price = form.price.value
        const category = form.category.value
        const image = form.image.files[0]

        const info = {_id :data?._id, name, recipe, price, category, image }
        console.log(info);
        axiosSecure.patch(`/update/${data?._id}`, info)
            .then(res => {
                console.log(res.data);
            })
    }
    return (
        <div>
            <div className="w-full bg-gray-200 px-10 py-10 rounded">
                <form onSubmit={handleUpdate}>
                    <label>
                        Recipe name*
                        <input defaultValue={data?.name} className="border  py-3 px-4 w-full my-2" placeholder="type Recipe Name" type="text" name="name" id="" />
                    </label>
                    <div className="flex items-center justify-between gap-5">
                        <label className="w-full">
                            Category*
                            <select defaultValue={data?.category} name="category" className="select select-bordered w-full">
                                <option disabled>Category</option>
                                <option>drinks</option>
                                <option>salad</option>
                                <option>dessert</option>
                                <option>pizza</option>
                            </select>
                        </label>
                        <label className="w-full">
                            Price*
                            <input defaultValue={data?.price} className="border  py-3 px-4 w-full my-2" placeholder="type Price" type="text" name="price" id="" />
                        </label>

                    </div>
                    <label>
                        Recipe Details*
                        <textarea defaultValue={data?.recipe} className="w-full border px-3 py-4" placeholder="type recipe details" name="recipe" id="" cols="30" rows="5"></textarea>
                    </label>
                    {/* <input type="text" name="image" className="file-input file-input-bordered w-full" /> */}

                    <input type="file" name="image" id="" />

                    <div>
                        <button className="rounded my-5 bg-yellow-600 px-5 py-2">Add Item</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateItem;