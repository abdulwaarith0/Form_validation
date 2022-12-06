import React from "react";
import UseForm from "./UseForm";
import validate from "./ValidateInfo";
import "./Form.css"

const FormSignUp = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = UseForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form onSubmit={handleSubmit} className="form">
                <h1>
                    Get started with us today! Create your account by filling out the
                    information
                </h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password:
                    </label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="confirm your password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button type="submit" className="form-input-btn">
                    Sign up
                </button>
                <span className="form-login">
                    Already have an account? Login <a href="some/valid/uri">Here</a>
                </span>
            </form>
        </div>
    );
};

export default FormSignUp;
