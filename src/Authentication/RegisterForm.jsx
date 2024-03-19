import { useState } from 'react'

function RegisterForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tosAccepted, setTosAccepted] = useState(false);
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
        case 'cfpassword':
            setConfirmPassword(value);
            break;
        case 'tos':
            setTosAccepted(checked);
            break;
        default:
            break;
        }
    };

    const processRegister = () => {
        if (!email || !password || !confirmPassword) {
            setValidationMessage('Please fill out all fields.');
            return;
        }
        if (password !== confirmPassword) {
            setValidationMessage('Passwords do not match.');
            return;
        }
        if (!tosAccepted) {
            setValidationMessage('You must accept the Terms & Conditions.');
            return;
        }
        setValidationMessage('Registration successful!');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setTosAccepted(false);
    };


  return (
      <>
          <div className='pageHeading'>
              <h3>Register</h3>
              <p>Sign up with us to keep track of your orders and shop more?</p>
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
                  <div className="mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" id="cfpassword" name="cfpassword" value={confirmPassword} onChange={handleChange}></input>
                  </div>
                  <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="tos" name="tos" checked={tosAccepted} onChange={handleChange}></input>
                      <label className="form-check-label">I accept to the <a href="#">Terms & Conditions</a></label>
                  </div>
                  {validationMessage && <div className="alert alert-info" role="alert">{validationMessage}</div>}
                  <button type="button" onClick={processRegister} className="btn btn-primary">Submit</button>
              </form>
          </div>
      </>
  )
}

export default RegisterForm
