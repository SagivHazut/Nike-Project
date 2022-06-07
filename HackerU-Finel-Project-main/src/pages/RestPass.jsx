import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./LoginPage.css";
import NikeLogo from "../assets/nikelogo.png";
import { useHistory } from "react-router-dom";

const ResetPass = () => {
  const history = useHistory();

  const [password, setPassword] = useState("");

  const handlePasswordOneChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordTwoChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUpdate = (ev) => {
    ev.preventDefault();
    axios
      .post("/users/updatepass", { password })
      .then((res) => {
        history.push("/home");
      })

      .catch((err) => {
        toast.error(err.response.data);
        if (err.response) {
        }
      });
  };
  return (
    <form className="LoginForm" onSubmit={handleUpdate}>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <br />
          <div className="fadeIn first">
            <img src={NikeLogo} id="icon" alt="" />
          </div>
          <br />
          <h4>
            YOUR ACCOUNT FOR <br /> EVERYTHING NIKE
          </h4>
          <h6>Change your password</h6>
          <br />
          <div className="box">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordOneChange}
              required
            ></input>
            <label htmlFor="password">Confrim Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordTwoChange}
              required
            ></input>
            <br />
            <br />
            <br />
            <button className="btn btn-danger"> Reset your password</button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
};

export default ResetPass;
