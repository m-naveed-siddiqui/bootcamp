import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './CreateUserForm.module.css';

function CreateUserForm(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      user_name: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onAddUser(userData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' required id='firstName' ref={firstNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' required id='lastName' ref={lastNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='username'>Username</label>
          <input type='text' required id='username' ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type='password' required id='password' ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Register</button>
        </div>
      </form>
    </Card>
  );
}

export default CreateUserForm;
