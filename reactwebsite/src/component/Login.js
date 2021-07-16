import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {

    const paperStyle = {padding: 20, height:'80vh', width:380, margin: '20px auto'}
    const avatarStyle = { backgroundColor: "green"}
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                id="standard-basic" 
                label="Username" 
                placeholder="Enter Username"
                fullWidth
                required
                />
                <TextField 
                id="standard-basic" 
                label="Password" 
                placeholder="Enter Password"
                type="password"
                fullWidth
                required
                />
                <FormControlLabel
                control={
                <Checkbox
                    
                    name="checkedB"
                    color="primary"
                />
                }
                label="Remember me"
                />
                <Button 
                style={btnstyle}
                type="submit" 
                color="primary"
                variant="contained"
                fullWidth
                >Sign In</Button>
                <Typography>
                <Link href="#">
                    Forgot Password
                </Link>
                </Typography>
                <Typography>Do You have an Account 
                <Link href="#">
                    Sign Up?
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login
