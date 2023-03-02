import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './LoginForm.module.css';

function LoginForm(props) {
  const usernameInputRef = useRef();
  const passwordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userData = {
      user_name: enteredUsername,
      password: enteredPassword,
    };

    props.onLoginUser(userData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='username'>Username</label>
          <input type='text' required id='username' ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type='text' required id='password' ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </Card>
  );
}

export default LoginForm;
