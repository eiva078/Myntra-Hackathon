import React, { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/signup",
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data); // Handle successful registration
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <img
          className={styles.loginTopImage}
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2021/12/29/e0f67808-f8b9-42b0-80ae-805fdf745cad1640802248099-Banner_Login-Landing-page--1-.jpg"
          alt=""
        />
        <div className={styles.forms}>
          <div className={`${styles.form} ${styles.signup} ${styles.addModal}`}>
            <span className={styles.title}>Registration</span>

            <form
              id="signUpForm"
              className={styles.formcard}
              onSubmit={handleRegister}
            >
              <div className={`${styles.inputField} ${styles.formGroup}`}>
                <input
                  type="text"
                  className={styles.formControl}
                  placeholder="Create Username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i className={`uil uil-user ${styles.icon}`}></i>
              </div>
              <div className={`${styles.inputField} ${styles.formGroup}`}>
                <input
                  type="text"
                  className={styles.formControl}
                  placeholder="Create Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i className={`uil uil-envelope ${styles.icon}`}></i>
              </div>
              <div className={`${styles.inputField} ${styles.formGroup}`}>
                <input
                  type="password"
                  className={`${styles.password} ${styles.formControl}`}
                  placeholder="Create password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className={`uil uil-lock ${styles.icon}`}></i>
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <button
                className={`${styles.inputField} ${styles.button} ${styles.btnAdd}`}
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
