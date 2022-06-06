import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setEmailLogin] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();



  const logInUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: " #b3d1ff" };
  const btnstyle = { margin: "8px 0", backgroundColor: "midnightBlue" };
  return (
    <Grid>
      {error && <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>}
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} />
          <h2>Log In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={(event) => {
            setEmailLogin(event.target.value);
          }}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="secondary" />}
          label="Keep me logged in"
        />
        <br />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={logInUser}
        >
          Log In
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Don't have an account ?<Link href="/register">Register</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
