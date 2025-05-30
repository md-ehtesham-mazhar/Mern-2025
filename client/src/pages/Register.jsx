import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL="http://localhost:5000/api/auth/register";

export const Register = () => {

    const[user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });


    const navigate =useNavigate();

    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user);
      try {
        
      const response = await fetch(URL,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
      });

      //console.log(response);
      const res_data = await response.json();
      console.log('res from server',res_data);

      if(response.ok){
        

        //stored the token in localhost
        storeTokenInLS(res_data.token);
        //localStorage.setItem("token",res_data.token);

        setUser({ username: "",
          email: "",
          phone: "",
          password: "",});

          toast.success("Registration Successful");
          navigate("/");
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }

    } catch (error) {
      console.log("register",error);
    } 
  };


  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="./images/register.png"
                  alt="trying to fill register form"
                  width="400"
                  height="400"
                />
              </div>

              {/* form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">Register Now</button>
                </form>

              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
