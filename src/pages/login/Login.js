import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../components/ui/formField/FormField';
import './login.css';

function Login() {
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors]     = useState({});
    const [submitted, setSubmitted] = useState(false);

    function validate() {
        const newErrors = {};
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!password || password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }
        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <main className='login-page'>
                <div className='login-card'>
                    <h1>Welcome back!</h1>
                    <p>You have been signed in successfully.</p>
                    <Link to='/' className='btn ctaButtonColor'>Back to Home</Link>
                </div>
            </main>
        );
    }

    return (
        <main className='login-page'>
            <div className='login-card'>
                <h1>Sign In</h1>
                <p className='login-subtitle'>Welcome back to Little Lemon</p>

                <form
                    className='login-form'
                    onSubmit={handleSubmit}
                    aria-label='Sign in form'
                    noValidate
                >
                    <FormField
                        label='Email address'
                        htmlFor='email'
                        hasError={!!errors.email}
                        errorMessage={errors.email}
                    >
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='email'
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            required
                        />
                    </FormField>

                    <FormField
                        label='Password'
                        htmlFor='password'
                        hasError={!!errors.password}
                        errorMessage={errors.password}
                    >
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='current-password'
                            aria-describedby={errors.password ? 'password-error' : undefined}
                            required
                        />
                    </FormField>

                    <button type='submit' className='ctaButtonColor login-submit'>
                        Sign In
                    </button>
                </form>

                <p className='login-footer'>
                    Don&apos;t have an account?{' '}
                    <Link to='/reservation'>Make a reservation</Link> to get started.
                </p>
            </div>
        </main>
    );
}

export default Login;

