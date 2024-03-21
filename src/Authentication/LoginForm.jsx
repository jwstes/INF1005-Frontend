import { useState } from 'react'

import { useAuth } from '../Context/AuthContext';

import { hashPassword } from './HashPassword';

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

    const processLogin = async () => {
        if (!email || !password) {
            setValidationMessage('Please fill out all fields.');
            return;
        }else{
            const resp = await fetch('http://35.212.170.89:5000/api/salt/retrieve.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email
                }),
            });
            const data = await resp.json();
            const salt = data['salt'];
            const hashedPassword = await hashPassword(password, salt);
            
            const loginResp = await fetch('http://35.212.170.89:5000/api/user/authenticate.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    hashed_password : hashedPassword
                }),
            });

            if(loginResp.status == 401){
                setValidationMessage('Wrong Credentials!');
            }
            else{
                const respData = await loginResp.json();
                localStorage.setItem('bt', respData['token']);
                setValidationMessage('Login successful!');
                setEmail('');
                setPassword('');
                login(email);
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
