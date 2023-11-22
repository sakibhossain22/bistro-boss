import SectionTitle from "../../Shared/SectionTiitle/SectionTitle";
import useAxiosSecure from "../../AxiosSecure/useAxiosSecure";
import axios from "axios";
const image_hosting_key = 'f2b06200817f194dd1be04adb452c42f'
const image_hosting_api = `https://api.imgbb.com/upload?key=${image_hosting_key}`
const AddItem = () => {
    const axiosSecure = useAxiosSecure()

    const handleAddItem = (e) => {
        e.preventDefault()
        const imageFile = { image: e.target.image.files[0] }
        console.log(imageFile);

        axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);

                const form = e.target
                const name = form.name.value
                const recipe = form.recipe.value
                const price = form.price.value
                const category = form.category.value
                const image = form.image.files[0]

                const info = { name, recipe, price, category, image }
                axiosSecure.post('/menu', info)
                    .then(res => {
                        console.log(res.data);
                    })
            })

    }
    return (
        <div>
            <div>
                <SectionTitle heading='whats new' subHeading='Add An Item'></SectionTitle>
            </div>
            <div className="w-full bg-gray-200 px-10 py-10 rounded">
                <form onSubmit={handleAddItem}>
                    <label>
                        Recipe name*
                        <input className="border  py-3 px-4 w-full my-2" placeholder="type Recipe Name" type="text" name="name" id="" />
                    </label>
                    <div className="flex items-center justify-between gap-5">
                        <label className="w-full">
                            Category*
                            <select name="category" className="select select-bordered w-full">
                                <option >Category</option>
                                <option>drinks</option>
                                <option>salad</option>
                                <option>dessert</option>
                                <option>pizza</option>
                            </select>
                        </label>
                        <label className="w-full">
                            Price*
                            <input className="border  py-3 px-4 w-full my-2" placeholder="type Price" type="text" name="price" id="" />
                        </label>

                    </div>
                    <label>
                        Recipe Details*
                        <textarea className="w-full border px-3 py-4" placeholder="type recipe details" name="recipe" id="" cols="30" rows="5"></textarea>
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

export default AddItem;