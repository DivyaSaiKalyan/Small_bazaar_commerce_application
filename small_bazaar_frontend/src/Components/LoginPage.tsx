import React, { useState } from "react";
import brandImage from "../brandImage.png";
import { Link } from "react-router-dom";
import { Ilogin } from "../Interface/register.interface";
import axios from "axios";
import { connect } from "react-redux";
import { loginAction } from "./../Actions/action";
import { useNavigate } from "react-router";
import { createBrowserHistory } from "history";

const LoginPage: React.FC = (props: any) => {
  const { loginAction } = props;
  const navigate = useNavigate();
  const history = createBrowserHistory();
  const [logininfo, setLogininfo] = useState<Ilogin>({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogininfo({ ...logininfo, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (logininfo.email === "" || logininfo.password === "") {
      alert("please fill rquired fields");
    } else {
      axios.post("http://localhost:3001/user/login", logininfo).then((res) => {
        if (res.data.message === "success") {
          loginAction(res.data.userdata);
          //history.push("/cartItems", { from: "LoginPage" });
          navigate("/");
        } else if (res.data.message === "admin") {
          loginAction(res.data.userdata);
          navigate("/additem");
        } else {
          setResponse(res.data.message);
        }
        console.log("aaaa", res.data.message);
      });
    }
  };
  return (
    <div>
      <div className="bg-secondary p-3">
        <div className="container-fluid text-center">
          <img src={brandImage} alt="cartpic" width="70" height="64" />
          <span id="brandname">Small bazaar Shoping Application</span>
        </div>
      </div>
      <div className="container col-4 ">
        <h3 className="text-center mt-5">Login</h3>
        <div
          className="text-center"
          style={{ color: "red", fontFamily: "cursive" }}
        >
          {response}
        </div>

        <form onSubmit={submitHandler}>
          <label>username</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter user name"
            name="email"
            value={logininfo.email}
            onChange={changeHandler}
          />
          <label>password</label>
          <input
            type="password"
            className="form-control"
            placeholder="enter user password"
            name="password"
            value={logininfo.password}
            onChange={changeHandler}
          />
          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-sm mt-3 "
            />
          </div>
          <p className="text-center mt-4">
            If you dont have account <Link to="/register"> click here </Link> to
            register
          </p>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { loginAction })(LoginPage);
