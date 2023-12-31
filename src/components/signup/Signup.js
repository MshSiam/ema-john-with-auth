import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Register </h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm password">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input type="submit" name="" value="Register" className="btn-submit" />
      </form>

      <p>
        Already have an account ?<Link to="/login"> Login Here.</Link>{" "}
      </p>
    </div>
  );
};

export default Signup;
