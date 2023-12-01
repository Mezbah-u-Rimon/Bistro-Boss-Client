import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photoURL = data.photoURL;
        console.log(email, password, photoURL)

        createUser(email, password)
            .then((result) => {
                // const loggedUser = result.user;
                updateUserProfile(name, photoURL)
                    .then(() => {
                        //create user entry in the database
                        const userInfo = {
                            name, email, password
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("user added to the database");
                                    reset();
                                    Swal.fire({
                                        position: "top",
                                        icon: "success",
                                        title: "User Sign Up successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/")
                                }
                            })


                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                console.log(err.message);
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: err.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/3 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Name </span>
                                </label>
                                <input type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Your Name" className="input input-bordered"
                                />
                                {errors.name && <span className="text-red-600 mt-1">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600 mt-1">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}/,
                                    })}
                                    placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "required" && <span className="text-red-600 mt-1">Password is required </span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600 mt-1">Password must be 6 characters </span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600 mt-1">Password must be less then 20 characters </span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600 mt-1">Password must be 1 special characters </span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URl </span>
                                </label>
                                <input type="text"
                                    {...register("PhotoURL", { required: true })}
                                    placeholder="Photo URL" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600 mt-1">Photo URL is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p> <small> Already have an account? <Link to='/login'> Please Login  </Link> </small></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;