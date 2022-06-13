import React, { useState,useEffect } from "react";
import jsonwebtoken from "jsonwebtoken";
import Logo from "../../Assets/img/LOGO.png";
import Ways from "../../Assets/img/ways.jpg";
import validator from 'validator'
import { ImEye,ImEyeBlocked } from "react-icons/im";


function Auth({ client, setAuth }) {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [password, setPassword] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [passValid, setPassValid] = useState(false);
  const [showMsg,setShowMsg] = useState(false);
  const key ='thispcnameisharmattanandithassixteengbramandonetbharddisk'




    const passwordValidate = validator.isLength(password.toString(),{min:8});
    console.log(passwordValidate)
    useEffect(()=>{
      if(passwordValidate){
          setPassValid(true);
      }
      else{
        setPassValid(false);
      }
    },[password])
    


    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowMsg(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }, [showMsg]);


  const formHandler = () => {
    setIsSignUp(!isSignUp);
  };



  const verify = async (token) => {
    try {
      const verifiedToken = jsonwebtoken.verify(token,key);
      if (verifiedToken) {
        localStorage.setItem("jwt", token);
        setAuth(token);
      }
    } catch (error) {
      console.log(error);
    }
  };






  const signUp = async (e) => {
    e.preventDefault();

    await client
      .post("/registration", {
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          const token = response.data.accessToken;
          console.log(token);
          verify(token);
          setShowMsg(true)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };






  const signIn = async (e) => {
    e.preventDefault();

    await client
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          const token = response.data.accessToken;
          verify(token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };





  return (
    <React.Fragment>
       <div
        className="msg-container"
        style={{ top: `${showMsg ? "0%" : "-100%"}` }}
      >
        <div className="msg">
          <p>✓ Successfully Registered !!</p>
        </div>
      </div>
      <div className="auth">
        <div className="authBox">
          <div className="auth-side-img">
            <img src={Ways} alt="ways" />
          </div>
          <div className="authForm">
            <div className="authLogo">
              <img src={Logo} alt="logo" />
            </div>

            <form  onSubmit= {isSignUp ? signUp : signIn}>
              {isSignUp && (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="enter your name"
                />
              )}

              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Enter Your Email Address"
               
              />
              {isSignUp && (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="enter your phone number"
                />
              )}
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value) }
                id="password"
                placeholder="Enter Your Password"
              />
              <p className="password-warning">enter password with minimum 8 characters.<span onClick={()=>setShowPassword(!showPassword)}>{showPassword ?<ImEye/>:<ImEyeBlocked/>}</span></p>

              <input
                type={passValid ? "submit" : "text"}
                id="submit-button"
                style={{opacity :`${passValid ? 1 : .5}` ,cursor :`${passValid ? 'pointer' : 'not-allowed'}`}}
                value={isSignUp ? "Sign Up" : "Sign In"}
              />
            </form>

            <p id="auth-message">
              {isSignUp
                ? "if you are already registerd , sign in."
                : "if your are not registered ,please register."}
            </p>
            <button className="switcherButton" onClick={formHandler} >
              {isSignUp ? "sign in" : "sign up"}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Auth;
