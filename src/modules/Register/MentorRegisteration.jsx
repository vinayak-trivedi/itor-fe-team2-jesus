import React, { useState, useEffect } from "react";
import registerImg from "../../assets/help.png";
import "./Register.css";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Box } from "@mui/material";
import { hideLoading, showLoading } from "../../store/alertsSlice";

function MentorRegisteration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [calendlyLink, setCalendlyLink] = useState("");
  const [password, setPassword] = useState("");
const [YOE, setYOE] = useState("")
  const [companyName, setCompanyName] = useState("");
  const [expertise, setExpertise] = useState("")
  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://itor-simple-node-api.herokuapp.com/api/v1/mentor/create",
      data: {
        email,
        password,
        name,
        companyName,
        YOE,
        expertise
      },
    };
    axios(configuration)
      .then((result) => {
        if (result.data.success) {
          setMessage(result.data.message);
          navigate("/login");
        } else {
          setMessage(result.data.message);
          navigate("/login");
        }
      })
      .catch((error) => {
        error = new Error();
      });
  };

  

  return (
    <>
      <Header />
      <div className="register_container">
        <h1>Register</h1>
        <div className="register_wrapper">
          <img
            className="register_img"
            src={registerImg}
            alt="Register image"
          />
          <div>
            {register ? (
              <Box sx={{ color: "success.main" }}>{message}</Box>
            ) : (
              <Box sx={{ color: "error.main" }}>{message}</Box>
            )}
            <form className="form_wrapper" onSubmit={(e) => handleSubmit(e)}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="standard"
                sx={{ width: "40ch" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
              <br />
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="standard"
                margin="normal"
                sx={{ width: "40ch" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <br />
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="standard"
                type="password"
                margin="normal"
                sx={{ width: "40ch" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              <br />
              <TextField
                id="companyName"
                name="companyName"
                label="Company Name"
                sx={{ width: "40ch" }}
                margin="normal"
                variant="standard"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />{" "}
              <br />
              <TextField
                id="YOE"
                name="YOE"
                label="Years of experience"
                sx={{ width: "40ch" }}
                margin="normal"
                variant="standard"
                value={YOE}
                onChange={(e) => setYOE(e.target.value)}
              />{" "}
              <br />
              <TextField
                id="expertise"
                name="expertise"
                label="expertise"
                sx={{ width: "40ch" }}
                margin="normal"
                variant="standard"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
              />{" "}
              <br />
              <TextField
                id="calendlyLink"
                name="calendlyLink"
                label="Calendly Link"
                sx={{ width: "40ch" }}
                margin="normal"
                variant="standard"
                value={calendlyLink}
                onChange={(e) => setCalendlyLink(e.target.value)}
              />{" "}
              <br />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{ margin: "10px 0", width: "100%" }}
                onClick={(e) => handleSubmit(e)}
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorRegisteration;
