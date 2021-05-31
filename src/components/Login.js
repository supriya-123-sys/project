import React from 'react'
import {Grid,Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { FaFacebook } from 'react-icons/fa';

function Login() {
    const paperStyle = {padding:20 , height: "60vh" ,width:400 ,margin: "20px auto"}
    const btn1Style ={margin:'8px 0px' , textTransform:'none' , backgroundColor:'#30336b' ,color:'white'}
    const btnStyle = {margin: '8px 0px', textTransform:"none" }
    const spnStyle= { color:"red"}
    
    return (
       <Grid>
           <Paper elevation={10} style={paperStyle}>
               <Grid align="center">
               <h2>Login In</h2>
                  <p>New to the site? <span style={spnStyle}>Sign Up</span> </p>
               </Grid>
       
              
    <Button type="submit" variant="contained"  style={btn1Style}   fullWidth>
      <FaFacebook size="1.5em"/>  Log in with Facebook
      </Button>
      <Button type="submit" variant="contained" color="primary" style={btnStyle}  fullWidth>
        Log in with Google
      </Button>
      <p><center>or</center></p>
      <Button type="submit"  variant="contained" style={btnStyle}  fullWidth>
        Log in with Email
      </Button>
      
           </Paper>
       </Grid> 
    )
}

export default Login
