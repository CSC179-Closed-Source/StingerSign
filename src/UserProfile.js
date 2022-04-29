import * as React from 'react';
import {Box, Container, Avatar, Button, Grid, CssBaseline, Typography} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import Navbar from './Navbar';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMutation } from "@apollo/client";
import { ADD_NEW_USER } from "./GraphQL/Mutations";
import { Link } from "react-router-dom";
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

const theme = createTheme();

export default function UserProfile() {
    const initValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      };
    const [formValues, setFormValues] = React.useState(initValues);
    const [addNewUser, { loading }] = useMutation(ADD_NEW_USER);

    if (loading) return <div>{console.log("loading")}</div>;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addNewUser({
          variables: {
            userEmail: formValues.email,
            userFirstName: formValues.firstName,
            userLastName: formValues.lastName,
            userPassword: formValues.password,
          },
        });
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
                <PersonOutlineRoundedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                User Profile
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
                    <label>&nbsp; First Name </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      onChange={handleChange}
                      value={formValues.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>&nbsp; Last Name </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={handleChange}
                      value={formValues.lastName}
                    />
                  </Grid>
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
                </Box>
        </Box>
        <br />
      </Container>
    </ThemeProvider>
                    );
};

