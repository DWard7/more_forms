import { useState } from "react"

const Form = ({ users, setUsers }) => {
    const [firstName, setFirstName] = useState('');
    const [firstNameErrors, setFirstNameErrors] = useState(null)
    const [lastName, setLastName] = useState('')
    const [lastNameErrors, setLastNameErrors] = useState(null)
    const [email, setEmail] = useState('')
    const [emailErrors, setEmailErrors] = useState(null)
    const [password, setPassword] = useState('')
    const [passwordErrors, setPasswordErrors] = useState(null)
    const [confirmPassword, setconfirmPassword] = useState('')
    const [confirmPassworderror, setConfirmedPasswordError] = useState(null)


    const submitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        setUsers([
            ...users,
            newUser,
        ]);
    }

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
        if (firstName.length < 2) {
            setFirstNameErrors('First Name must be at least 2 characters')
        } else {
            setFirstNameErrors(null);
        }
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
        if (lastName.length < 2) {
            setLastNameErrors('Last Name be at least 2 characters')
        } else {
            setLastNameErrors(null)
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        if (email.length < 5) {
            setEmailErrors('Email must be at least 5 characters')
        } else {
            setEmailErrors(null);
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)

        if (password.length < 8) {
            setPasswordErrors('Passwords must be at least 8 characters')
        }
        else {
            setPasswordErrors(null);
        }
    }
    const confirmPasswordHandler = (e) => {
        setconfirmPassword(e.target.value)

        if (confirmPassword !== password) {
            setConfirmedPasswordError('Passwords must match')
        }
        else {
            setConfirmedPasswordError(null);
        }
    }



return (
    <div className="card">
        <div className="card-body">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="form-control"
                        value={firstName}
                        onChange={firstNameHandler}
                    />
                    {
                        firstNameErrors && (
                            <span className="form-text text-danger">{firstNameErrors}</span>
                        )}
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="form-control"
                        value={lastName}
                        onChange={lastNameHandler}
                    />
                    {
                        lastNameErrors && (
                            <span className="form-text text-danger">{lastNameErrors}</span>
                        )}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={emailHandler}
                    />
                    {
                        emailErrors && (
                            <span className="form-text text-danger">{emailErrors}</span>
                        )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={passwordHandler}
                    />
                    {
                        passwordErrors && (
                            <span className="form-text text-danger">{passwordErrors}</span>
                        )}
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="form-control"
                        value={confirmPassword}
                        onChange={confirmPasswordHandler}
                    />
                    {
                        confirmPassworderror && (
                            <span className="form-text text-danger">{confirmPassworderror}</span>
                        )
                    }
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
)
}

export default Form