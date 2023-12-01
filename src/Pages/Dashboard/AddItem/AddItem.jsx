import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        // console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url,
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                //show the popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }


    return (
        <div>
            <SectionTitle heading={'ADD AN ITEM'} subHeading={"What's new?"}></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text"> Recipe Name* </span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true, })}
                            placeholder="Recipe Name" className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text"> Category Name* </span>
                            </label>
                            <select defaultValue="default" {...register("category", { required: true, })}
                                className="select select-bordered w-full">
                                <option disabled value='default'> Select Category </option>
                                <option value="salad">Salad </option>
                                <option value="pizza">Pizza </option>
                                <option value="soup">Soup </option>
                                <option value="dessert">Desserts </option>
                                <option value="drinks">Drinks </option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text"> Price* </span>
                            </label>
                            <input
                                type="text"
                                {...register("price", { required: true, })}
                                placeholder="Price" className="input input-bordered w-full " />
                        </div>

                    </div>

                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Recipe Details* </span>

                        </label>
                        <textarea {...register("recipe", { required: true, })}
                            className="textarea textarea-bordered h-24" placeholder=" Recipe Details"></textarea>
                    </div>

                    {/* image file  */}
                    <div className="form-control w-full my-6">
                        <input {...register("image", { required: true, })}
                            type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button type="submit"
                        className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white font-bold px-5 rounded-none">
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>

            </div>
        </div>
    );
};

export default AddItem;