import React, { useState } from "react";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error,setError] = useState("");
  let navigate = useNavigate();


  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate("/");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError(error.message)
    }
  };

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto 80px",
  };

  const avatarStyle = { backgroundColor: " #b3d1ff" };
  const btnstyle = { margin: "8px 0", backgroundColor: "midnightBlue" };
  return (
    <Grid>
      {error && <h2 style={{color:'red',textAlign:"center"}}>{error}</h2>}
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} />
          <h2>Register</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          type="email"
          fullWidth
          required
          style={{ marginBottom: "8px" }}
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="secondary" />}
          label="Keep me logged in"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={registerUser}
        >
          Register
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          have an account ?
          <br />
          <Link href="/login">Log In</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Register;
