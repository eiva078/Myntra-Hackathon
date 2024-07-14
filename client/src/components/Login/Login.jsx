import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <img
          className={styles.loginTopImage}
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2021/12/29/e0f67808-f8b9-42b0-80ae-805fdf745cad1640802248099-Banner_Login-Landing-page--1-.jpg"
          alt=""
        />
        <div className={styles.forms}>
          <div className={`${styles.form} ${styles.login} ${styles.addModal}`}>
            <span className={styles.title}>Login</span>

            <form id="sgnInForm" className={styles.formcard}>
              <div className={`${styles.inputField} ${styles.formGroup}`}>
                <input
                  type="text"
                  className={styles.formControl}
                  placeholder="Email"
                  id="email"
                />
                <i className={`uil uil-envelope ${styles.icon}`}></i>
              </div>
              <div className={`${styles.inputField} ${styles.formGroup}`}>
                <input
                  type="password"
                  className={`${styles.password} ${styles.formControl}`}
                  id="password"
                  placeholder="Password"
                />
                <i className={`uil uil-lock ${styles.icon}`}></i>
                <i className={`uil uil-eye-slash ${styles.showHidePw}`}></i>
              </div>

              <div className={styles.checkboxText}>
                <div className={styles.checkboxContent}>
                  <input type="checkbox" id="logCheck" />
                  <label htmlFor="logCheck" className={styles.text}>
                    Remember me
                  </label>
                </div>

                <a href="registration.html" className={styles.text}>
                  Forgot password?
                </a>
              </div>

              <button
                className={`${styles.inputField} ${styles.button} ${styles.btnAdd}`}
              >
                Sign in
              </button>
            </form>

            <div className={styles.loginSignup}>
              <span className={styles.text}>
                Not a member?
                <Link to="/signup" className={styles.text}>
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
