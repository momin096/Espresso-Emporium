import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log('user created at firebase', result.user);
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt }
                // save new user info to the database 
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "User created Successfully",
                                icon: "success",
                                draggable: false
                            });
                        }
                    })
            })
            .catch(error => {
                console.log("ERROR :", error)
            })
    }
    return (
        <div>
            <Navbar />
            {/* --------------------- */}
            <div className="hero bg-base-200 min-h-[calc(100vh-200px)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <form onSubmit={handleSignUp} className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label text-xl">Name</label>
                                <input name="name" type="text" className="input w-full text-xl py-8" placeholder="Email" />
                                <label className="fieldset-label text-xl">Email</label>
                                <input name="email" type="email" className="input w-full text-xl py-8" placeholder="Email" />
                                <label className="fieldset-label text-xl">Password</label>
                                <input name="password" type="password" className="input w-full text-xl py-8" placeholder="Password" />
                                <button className="btn btn-neutral my-4">Sign Up</button>
                                <Link to={'/login'}><a className="link link-hover text-base ">Already have an account? Login</a></Link>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;