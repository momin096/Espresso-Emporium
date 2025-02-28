import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                // update last login time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`http://localhost:5000/users`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Sign in info updated in db :', data)
                    })
            })
            .catch(error => {
                console.log("ERRRRRRRRR0r:" ,error)
            })
    }
    return (
        <div>
            <Navbar />
            {/* --------------------- */}
            <div className="hero bg-base-200 min-h-[calc(100vh-200px)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <form onSubmit={handleSignIn} className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label text-xl">Email</label>
                                <input name="email" type="email" className="input w-full text-xl py-8" placeholder="Email" />
                                <label className="fieldset-label text-xl">Password</label>
                                <input name="password" type="password" className="input w-full text-xl py-8" placeholder="Password" />
                                <Link className="text-left" to={'/signup'}><a className="link link-hover text-base ">Forget Password ?</a></Link>
                                <button className="btn btn-neutral my-4">Sign In</button>
                                <Link to={'/signup'}><a className="link link-hover text-base ">Don't have an account? Register</a></Link>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;