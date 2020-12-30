import React from 'react';
import SignUpContainer from './SignUpContainer';
import LoginContainer from './LoginContainer';
import cookie from 'react-cookies';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {NotificationManager} from 'react-notifications';

import {apis} from '../../apis/apis';

import '../../assets/css/Home.css';

class HomeContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            showLogin: true
        }
    }

    componentDidMount() {
        let auth = cookie.load('auth');

        axios.get(apis.getStudentDetails, {
            headers: {
                "Authorization" : `bearer ${auth}`
            }
        })
        .then((response)  => {
            if(response.data) {
                NotificationManager.success('Logged in', 'You are', 3000);
                if(response.data.data.userType === 'student'){
                    this.props.history.push('/student-dashboard');
                }
            }
        })
        .catch((error) => {
            console.log('error:', error);
            if(error.response.status === 401){
                this.props.history.push('/');
                return;
            }
            NotificationManager.error('Server error', 'Error:', 3000);
        });
    }

    toggleLogin = () => {
        let { showLogin } = this.state;
        showLogin = !showLogin;
        this.setState({
            showLogin
        });
    }

    render() {
        const { showLogin } = this.state;
        return(
            <div>
                <div className="col-12 mt-2 mb-5">
                    <p className="" style={{fontSize: 50, textAlign: 'center', fontWeight: 'bold', color: '#5255AC'}}>My Classroom</p>
                </div>
    
                <div className="mx-auto col-8 d-flex" style={{marginTop: 100, height: 500, backgroundColor: '#5255AC'}}>
                    <div className="col-6 d-flex justify-content-center align-items-center" style={{position: 'relative' ,height: '100%'}}>
                        <div style={{fontSize: 30,color: 'white' ,textAlign: 'center'}}>
                            <p>Already have an account?</p>
                            <button onClick={this.toggleLogin} className="border-0 col-10 btn btn-success" style={{height: 60, fontSize: 30}}>Login</button>
                        </div>
                        {
                            showLogin && <LoginContainer/>
                        }
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center" style={{position: 'relative' ,height: '100%'}}>
                        <div style={{fontSize: 30,color: 'white' ,textAlign: 'center'}}>
                            <p>Don't have an account?</p>
                            <button onClick={this.toggleLogin} className="border-0 col-10 btn btn-success" style={{height: 60, fontSize: 30}}>Sign up</button>
                        </div>
                        {
                            !showLogin && <SignUpContainer/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeContainer);