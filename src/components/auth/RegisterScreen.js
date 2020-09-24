import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input type="text" placeholder="Name" name="name" className="auth__input" autoComplete="off" />
                <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off" />
                <input type="password" placeholder="Password" name="password" className="auth__input" />
                <input type="password" placeholder="Confirm" name="password2" className="auth__input" />
                <button className="btn btn-primary btn-block" type="submit" disabled={false}>
                    Register
                </button>
                <hr />
                <Link className="link mt-5" to="/auth/login">
                    Already register?
                </Link>
            </form>
        </>
    );
};
