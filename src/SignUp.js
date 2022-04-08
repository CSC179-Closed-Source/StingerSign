import * as React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { ApolloProvider, ApolloClient, InMemoryCache, useMutation, gql} from '@apollo/client';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    
    CssBaseline,
    Typography,
    Container,
  } from "@material-ui/core";

const client = new ApolloClient({
  uri: "https://f45hzp3fvb.execute-api.us-west-1.amazonaws.com/graphql/",
  cache: new InMemoryCache()
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

const CREATE_LINK_MUTATION = gql`
  mutation createBook(
    $Email: String!
    $FirstName: String!
    $LastName: String!
    $MiddleInitial: String!
    $Password: String!
  ) {
    post(Email: $Email, FirstName: $FirstName, LastName: $LastName, MiddleInitial: $MiddleInitial, Password: $Password) {
      id
      createdAt
      Password
      MiddleInitial
      LastName
      FirstName
      Email
    }
  }
`;

const CreateBook = () => {
  const [formState, setFormState] = useState({
    Email: '',
    FirstName: '',
    LastName: '',
    MiddleInitial: '',
    Password: ''
  });

const [createBook] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      Email: formState.Email,
      FirstName: formState.FirstName,
      LastName: formState.LastName,
      MiddleInitial: formState.MiddleInitial,
      Password: formState.Password
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}