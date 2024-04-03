import { useState } from 'react'
import { hashPassword } from './HashPassword';

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

    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    const processRegister = async () => {
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

        if(!validatePassword(password)){
            setValidationMessage('Password must be at least 8 characters long, contain an uppercase letter, digit and at least one special cahracter.');
            return;
        }

        
        

        try {
            const createUserResponse = await fetch('https://35.212.170.89/api/user/create.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    admin: 0,
                }),
            });
            var resp = await createUserResponse.text();
            if(createUserResponse.status == 201){
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setTosAccepted(false);
                setValidationMessage('Registration successful!');
                window.location.href = '/login'
            }
            else{
                setValidationMessage('An error occurred during registration.');
            }
        } catch (error) {
            console.error('Error during registration process:', error);
            setValidationMessage('An error occurred during registration.');
        }


    };


  return (
    <main>
        <div className='pageHeading'>
            <h1>Register</h1>
            <p>Sign up with us to keep track of your orders and shop more?</p>
        </div>
        <div className="formArea">
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="cfpassword">Confirm Password</label>
                    <input type="password" className="form-control" id="cfpassword" name="cfpassword" value={confirmPassword} onChange={handleChange}></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="tos" name="tos" checked={tosAccepted} onChange={handleChange}></input>
                    <label className="form-check-label" htmlFor="tos">I accept to the <a href="#">Terms & Conditions</a></label>
                </div>
                    {validationMessage && <div className="alert alert-info" role="alert">{validationMessage}</div>}
                    <button type="button" onClick={processRegister} className="btn btn-primary">Submit</button>
            </form>
        </div>
  </main>
  )
}

export default RegisterForm
