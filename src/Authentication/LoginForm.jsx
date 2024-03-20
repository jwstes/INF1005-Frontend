import { useState } from 'react'

import { useAuth } from '../Context/AuthContext';

function LoginForm() {
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const processLogin = () => {
        if (!email || !password) {
            setValidationMessage('Please fill out all fields.');
            return;
        }else{
            if(email == 'a' && password == 'a'){
                setValidationMessage('Login successful!');
                setEmail('');
                setPassword('');
                login(email);
            }
            else{
                setValidationMessage('Wrong Credentials!');
            }
        }
        
    };


  return (
      <>
          <div className='pageHeading'>
              <h3>Login</h3>
              <p>Login now to keep track of your orders and shop more?</p>
          </div>
          <div className="formArea">
              <form>
                  <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange}></input>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChange}></input>
                  </div>
                  {validationMessage && <div className="alert alert-info" role="alert">{validationMessage}</div>}
                  <button type="button" onClick={processLogin} className="btn btn-primary">Submit</button>
              </form>
          </div>
      </>
  )
}

export default LoginForm
