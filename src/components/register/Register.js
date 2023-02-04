import React, { Component } from 'react';
import styles from './Register.module.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      regEmail: '',
      regPassword: '',
      regName: '',
      errorMessage: '',
      regMessage: '',
    };
  }

  onNameChange = (event) => {
    this.setState({
      regName: event.target.value,
    });
  };
  onEmailChange = (event) => {
    this.setState({
      regEmail: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      regPassword: event.target.value,
    });
  };

  onSubmitRegInfo = () => {
    
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.regName,
        email: this.state.regEmail,
        password: this.state.regPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data)).then(this.props.onRouteChange('signin'))
    
  };

  render() {
    return (
      <>
        <div className={styles.signin_page}>
          <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
              <form className="measure center">
                <fieldset id="register" className="ba b--transparent ph0 mh0">
                  <legend className="f2 fw6 ph0 mh0 center">
                    Register
                  </legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="name"
                      id="name"
                      onChange={this.onNameChange}
                    />
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
                      id="email-address2"
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
                      id="password2"
                      onChange={this.onPasswordChange}
                    />
                  </div>
                </fieldset>
                <div className="">
                  <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="button"
                    value="register"
                    onClick={() => this.onSubmitRegInfo()}
                  />
                </div>
                <div className="lh-copy mt3">
                  <p onClick={() => this.props.onRouteChange('signin')}>
                    Already have account?
                    <span className={styles.signin_span}>Sign in</span>
                  </p>
                </div>
              </form>
            </main>
          </article>
        </div>
      </>
    );
  }
}

export default Register;
