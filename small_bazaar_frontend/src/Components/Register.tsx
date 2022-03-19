import React, { useState } from "react";
import brandImage from "../brandImage.png";
import { Link } from "react-router-dom";
import { Iregister } from "./../Interface/register.interface";
import { connect } from "react-redux";
import { registerAction } from "../Actions/action";

const Register: React.FC = (props: any) => {
  const { registerAction } = props;
  const [register, setRegister] = useState<Iregister>({
    firstname: "",
    lastname: "",
    gender: "",
    dateofbirth: "",
    email: "",
    password: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerAction(register);
    setRegister({
      firstname: "",
      lastname: "",
      gender: "",
      dateofbirth: "",
      email: "",
      password: "",
    });
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
        <h3 className="text-center mt-4">Register</h3>
        <form onSubmit={submitHandler}>
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter your firstname"
            value={register.firstname}
            onChange={changeHandler}
            name="firstname"
          />
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter your lastname"
            value={register.lastname}
            onChange={changeHandler}
            name="lastname"
          />
          <label>gender</label>
          <br />
          Male :{" "}
          <input
            type="radio"
            value="male"
            name="gender"
            onChange={changeHandler}
          />
          &nbsp; FeMale :{" "}
          <input
            type="radio"
            value="FeMale"
            name="gender"
            onChange={changeHandler}
          />
          <br />
          <label>Date Of Birth</label>
          <input
            type="date"
            className="form-control"
            value={register.dateofbirth}
            onChange={changeHandler}
            name="dateofbirth"
          />
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="enter email Id"
            value={register.email}
            onChange={changeHandler}
            name="email"
          />
          <label>password</label>
          <input
            type="password"
            className="form-control"
            placeholder="enter user password"
            value={register.password}
            onChange={changeHandler}
            name="password"
          />
          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-sm mt-2 "
            />
          </div>
          <p className="text-center">
            If you already have account <Link to="login"> click here</Link> to
            login
          </p>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { registerAction })(Register);
