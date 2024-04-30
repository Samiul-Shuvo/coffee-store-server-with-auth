import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext); 
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password,email)
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            // new user have been created
            const createdAt = result.user?.metadata?.creationTime
            const user = {email,createdAt : createdAt};
            fetch('https://coffee-store-server-opyzejiic-samiul-shuvos-projects.vercel.app/user',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body : JSON.stringify(user)
            })
            .then(res =>res.json())
            .then(data =>{
                if(data.insertedId){
                    console.log('User added to Database')
                }
            })
        })
        .catch(error =>{
            console.error(error)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;