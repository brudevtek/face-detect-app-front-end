import { compact } from 'lodash';
import React, { Component } from 'react';
import Register from '../register/Register';
import styles from './Signin.module.css';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: '',
      errorMessage: '',
    };
  }
  onEmailChange = (event) => {
    this.setState({
      signInEmail: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      signInPassword: event.target.value,
    });
  };
  onSubmitSignin = () => {
    fetch('https://face-detect-app-api2.onrender.com/signin', {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          this.props.onRouteChange('home');
          this.props.loadUser(data);
        } else {
          this.setState({
            errorMessage: '*Invalid Credentials',
          });
        }
      });
  };

  render() {
    return (
      <>
        <div className={styles.signin_page}>
          <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
              <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
                  <div className={styles.login_error_message}>
                    <h1>{this.state.errorMessage}</h1>
                  </div>
                  <div className="mt3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="email-address"
                    >
                      Email
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="email"
                      name="email-address"
                      id="email-address"
                      onChange={this.onEmailChange}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onPasswordChange}
                    />
                  </div>
                </fieldset>
                <div className="">
                  <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Sign in"
                    // onClick={() => this.props.onRouteChange('home')}
                    onClick={() => this.onSubmitSignin()}
                  />
                </div>
                <div className="lh-copy mt3">
                  <p
                    onClick={() => this.props.onRouteChange('register')}
                    className={styles.register_text}
                  >
                    Register
                  </p>
                </div>
              </div>
            </main>
          </article>
        </div>
      </>
    );
  }
}

export default Signin;
