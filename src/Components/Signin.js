import React from "react";
import "./Signin.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Checkbox,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const Signin = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleShow = () => {
    window.location.href = "/Showcase";
  };

  return (
    <>
      <img
        className="m-7 ml-12"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Logo"
        width="150"
        height="50"
      />
      <div className="main">
        <div
          className="main-content"
          style={{
            backgroundColor: "rgb(39, 39, 39)",
            height: "550px",
            width: "500px",
          }}
        >
          <Typography variant="h4" className="title">
            Sign In
          </Typography>
          <div className="flex flex-col items-center justify-center gap-9">
            <TextField
              className="email rounded-md"
              id="filled-basic"
              label="Email or phone number"
              variant="filled"
            />

            <FormControl
              className="password rounded-md bg-white w-9/12"
              sx={{ m: 1, width: "25ch" }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <button
              onClick={handleShow}
              className="bg-red-700 hover:bg-red-900 text-white font-md w-9/12 py-3 px-40 mt-3 rounded"
            >
              Signin
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex ml-11 -gap-3">
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 25, width: 19 } }}
                className="checkbox"
              />
              <Typography className="remember text-white" variant="body2">
                Remember me
              </Typography>
            </div>
            <Link className="link" href="#" underline="hover" variant="body2">
              {"Need help?"}
            </Link>
          </div>
          <div className="flex mt-4 justify-center gap-1">
            <Typography className="new" variant="body2">
              New to Netflix?
            </Typography>
            <Link
              className="text-white mt-2"
              href="/SignUp"
              underline="hover"
              variant="subtitle"
            >
              {"Sign up now"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
