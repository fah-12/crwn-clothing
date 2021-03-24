import './signin-styling.scss';
import {SignInGoogle} from '../firebase/firebase-utilities'

import React from 'react'
class SignIn extends React.Component {

    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit=(event)=>{
        event.preventDefault(); // hide the email and password

        this.setState({email:'',password:''}) // setState will update the from when submit

    }

    handleChange=(event)=>{
        const {value,name}=event.target; 

        this.setState({[name]:value})
        console.log(value);
    }

    render() {
        return (
            <div className='sign-in'> 

                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

            
            <form onSubmit={this.handleSubmit}>

<label>Email</label>
<input name='email' type='email' onChange={this.handleChange} value={this.state.email} required/>

<br/>

<label>Password</label>
<input name='password' type='password' onChange={this.handleChange} value={this.state.password} required/>

<div className='button'>

<button className='custom-button'>SIGN IN</button>

<button className='google-sign' onClick={SignInGoogle}>Sign in with Google</button>
</div>

            </form>

            </div>
        )
    }
}

export default SignIn;