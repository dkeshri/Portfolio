import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import '../../assets/css/Login.css'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Alert } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useHistory, Link } from 'react-router-dom'
import { setCookie, removeCookie } from '../../utility'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a style={{ color: 'grey', textDecoration: "underline" }} href="https://github.com/dkeshri">
        Deepak Keshri
        </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));
const style = {
  img: { "height": "120px", "width": "250px" }
}

export default function Login() {
  const [userDetails, setUserDetails] = useState({ userName: '', password: '' });
  const [validataionError, setError] = useState({ hasError: false, errorMessage: '' });
  const classes = useStyles();
  const history = useHistory();
  const onSubmit = (e) => {
    if (userDetails.userName == 'dkeshridev@gmail.com' && userDetails.password == '123') {
      setCookie({
        key: 'isAuth',
        value: 'true'
      });
      history.push("/home");
    } else {
      removeCookie('isAuth');
      setError({ hasError: true, errorMessage: 'Email id or password is invalid.' });
    }
  }
  return (<>
    <div className="boxPosition box">
      <div className="content">
        <Collapse style={{ marginBottom: '10px' }} in={validataionError.hasError}>
          <Alert severity="error">
            {validataionError.errorMessage}
          </Alert>
        </Collapse>
        {
          // conditionali rendering 
          // validataionError.hasError ? <Collapse style={{ marginBottom: '10px' }} in={validataionError.hasError}>
          //   <Alert severity="error">
          //     {validataionError.errorMessage}
          //   </Alert>
          // </Collapse> : ''
        }
        <img style={style.img} src={require('../../assets/img/logo.png')} />
        <h1 id="signLabel">Sign In</h1>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => {
              setError({ hasError: false });
              setUserDetails({ ...userDetails, userName: e.target.value })
            }}
            size="small"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => {
              setError({ hasError: false });
              setUserDetails({ ...userDetails, password: e.target.value })
            }}
            size="small"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign In
                        </Button>
          <div className="loginSetup">
            <Link className="link" to="/ForgotPassword">
              Forgot password?
                                 </Link>
            <Link className="link" to="/RegisterUser">
              {"Don't have an account? Sign Up"}
            </Link>
          </div>
        </form>
        <Box mt={4}>
          <Copyright />
        </Box>
      </div>
    </div>
  </>
  )
}


