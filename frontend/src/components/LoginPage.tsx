import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const styles = (theme: Theme): StyleRules => createStyles({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  }
});

interface Props extends WithStyles<typeof styles>{};

const LoginPage: React.FC<Props> = (props: Props) => {
  const { classes } = props;
  const [ usernameState, setUsernameState ] = React.useState<string>('');
  const [ passwordState, setPasswordState ] = React.useState<string>('');

  // TODO バリデーション
  const handleLogin = () => {
    axios.post('http://localhost:8000/login/', {
      username: usernameState, 
      password: passwordState
    }).then(resp => {
      console.log(resp.data)
    }).catch(err => {
      console.log(err)
    });
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">UserName</InputLabel>
            <Input 
              id="username" 
              name="username" 
              autoComplete="username" 
              autoFocus 
              onChange={(e) => setUsernameState(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input 
              name="password" 
              type="password" 
              id="password" 
              autoComplete="current-password" 
              onChange={(e) => setPasswordState(e.target.value)} 
            />
          </FormControl>
          <Button 
            type="button" 
            fullWidth 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={() => handleLogin()}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(LoginPage);
