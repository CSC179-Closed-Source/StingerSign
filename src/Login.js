import * as React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { EMAIL_AND_PASSWORD } from "./GraphQL/Query";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const initValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = React.useState(initValues);
  //   const [addNewUser, { loading }] = useMutation(ADD_NEW_USER);
  const { error, loading, data } = useQuery(EMAIL_AND_PASSWORD);
  if (loading) return <div>{console.log("loading")}</div>;
  if (error) return { error };

  //   console.log(data.list_UserInfoItems._UserInfoItems);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmail = data.list_UserInfoItems._UserInfoItems.some(
      (el) => el.userEmail === formValues.email
    );
    const checkPassword = data.list_UserInfoItems._UserInfoItems.some(
      (pass) => pass.userPassword === formValues.password
    );
    if (checkEmail && checkPassword) {
      console.log("true");
      navigate("/");
    } else {
      console.log("false");
      alert("User does not exist");
    }
    // CheckUser({
    //   variables: {
    //     userEmail: formValues.email,
    //     userPassword: formValues.password,
    //   },
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {/* <form onSubmit={handleSubmit}> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <label>&nbsp; Email Address </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                  value={formValues.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>&nbsp; Password </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={formValues.password}
                />
              </Grid>
            </Grid>
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            {/* {data
          ? data.list_UserInfoItems._UserInfoItems.map((user) => {
			  return(
              <>
                <div>First name: {user.userFirstName}</div>
                <div>Last name: {user.userLastName}</div>
				<hr/>
              </>
			  );
            })
          : null} */}
            <Link to="/SignUp">Create Account</Link>
          </Box>
        </Box>
        <br />
      </Container>
    </ThemeProvider>
  );
}
