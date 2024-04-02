import { useState } from 'react';
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

    const processLogin = async () => {
        if (!email || !password) {
            setValidationMessage('Please fill out all fields.');
            return;
        }

        try {
            // Note: This should ideally be a POST request.
            const loginResponse = await fetch(`http://35.212.170.89:5000/api/user/authenticate.php?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
                method: 'GET',
            });

            if (!loginResponse.ok) {
                throw new Error(`Server error: ${loginResponse.status}`);
            }

            const respData = await loginResponse.json();

            if (respData.message === 'Login successful') {
                localStorage.setItem('bt', respData.token);
                localStorage.setItem('userID', respData.user_id.toString());
                localStorage.setItem('userEmail', email);
                setValidationMessage('Login successful!');
                setEmail('');
                setPassword('');
                login(email);
            } else {
                setValidationMessage('Wrong Credentials!');
            }
        } catch (error) {
            console.error('Login error:', error);
            setValidationMessage(error.message || 'An error occurred during login.');
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
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChange} />
                    </div>
                    {validationMessage && <div className="alert alert-info" role="alert">{validationMessage}</div>}
                    <button type="button" onClick={processLogin} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
