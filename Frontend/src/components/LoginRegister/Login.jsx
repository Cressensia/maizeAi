import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import "../../App.css";
import "./Login.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/joy/Button";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [loginRequest, setLoginRequest] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);

    setLoginRequest((prev) => { 
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const EmailField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#3B533A" // label color
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#3B533A" // outline color
      }
    }
  });

  const LoginButton = styled(Button)({
    backgroundColor: "#3B533A",
    "&:hover": {
      backgroundColor: "#5f875e"
    }
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3B533A"
      }
    },
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            backgroundColor: "white"
          }
        }
      }
    }
  });

  return (
    <div>
      <NavbarLogin />
      <div className="login-container">
        <Typography
          variant="h3"
          color="white"
          sx={{
            fontFamily: "Inter",
            fontWeight: 100,
            marginTop: "100px",
            textAlign: "center"
          }}
        >
          Login to Your Account
        </Typography>
        <Typography
          variant="h6"
          color="white"
          sx={{ fontFamily: "Inter", marginTop: "10px", textAlign: "center" }}
        >
          The Future of Maize Tassel Monitoring: Your Fields, Your Data,
          Optimized Crop Yields
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            alert(JSON.stringify(formJson));
          }}
        >
          <Stack spacing={1}>         
            <ThemeProvider theme={theme}>
              <FormControl
                sx={{ m: 1, width: "40ch", borderRadius: "10px" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-search">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-search"         
                  name="email"
                  onChange={handleInputChange}
                  value={loginRequest.email}
                  label="email"
                />
              </FormControl>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <FormControl
                sx={{ m: 1, width: "40ch", borderRadius: "10px" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleInputChange}
                  value={loginRequest.password}
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
                  label="Password"
                />
              </FormControl>
            </ThemeProvider>
            <LoginButton type="submit">
              <Link className="login-link" to="/Main">
                Login
              </Link>
            </LoginButton>
          </Stack>
          <Typography
            variant="body1"
            color="white"
            sx={{ fontFamily: "Inter", marginTop: "18px", textAlign: "center" }}
          >
            <Link
              className="register-link"
              to="/Register"
              style={{ textDecoration: "none", color: "white" }}
            >
              New user? Create an account here!
            </Link>
          </Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{ fontFamily: "Inter", textAlign: "center" }}
          >
            Forgot Password?
          </Typography>
        </form>
      </div>
    </div>
  );
}