import * as React from 'react';
import { Container, Box, TextField, Avatar, Button } from '@mui/material';

// userCompany
//       userEmail
//       userFirstName
//       userJobTitle
//       userLastName
//       userPassword
//       userProfilePicture

export default function UserProfile() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClick=(e)=>{
  }

 return(
 <Container>
   <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    &nbsp;
    &nbsp;
    <Container>
    <Avatar></Avatar>
    </Container>
    &nbsp;
    &nbsp;
    <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth 
    value={firstName}
    onChange={(e)=>setFirstName(e.target.value)}
    />
    &nbsp;
    <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth 
    value={lastName}
    onChange={(e)=>setLastName(e.target.value)}
    />
    &nbsp;
    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    &nbsp;
    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    &nbsp;
    <TextField id="outlined-basic" label="Job Title" variant="outlined" fullWidth 
    value={jobTitle}
    onChange={(e)=>setJobTitle(e.target.value)}
    />
   </Box>
    &nbsp;
    &nbsp;
   <div>
    &nbsp;
    &nbsp;
    <Button variant="contained" color="secondary" onClick={handleClick}> Update </Button>
    &nbsp;
    &nbsp;
    </div>
 </Container>
)};

 