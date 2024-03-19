import { useState } from 'react'

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        switch (name) {
        case 'email':
            setEmail(value);
            break;
        case 'password':
            setPassword(value);
            break;
        default:
            break;
        }
    };

    const processLogin = () => {
        if (!email || !password) {
            setValidationMessage('Please fill out all fields.');
            return;
        }
        setValidationMessage('Login successful!');
        setEmail('');
        setPassword('');
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
