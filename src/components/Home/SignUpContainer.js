import React from 'react';
import CheckSignUp from './CheckSignUp';
import SignUpAsStudent from './SignUpAsStudent';
import SignUpAsTeacher from './SignUpAsTeacher';

class SignUpContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            showSignUpComponent: 'checkSignUp'
        }
    }

    handleClickOnSignUpAsBtn = (component) => {
        this.setState({
            showSignUpComponent: component
        });
    }

    render() {

        const { showSignUpComponent } = this.state;

        return(
            <div className="fade-in" style={{backgroundColor: '#989DDD',position: 'absolute', height: '110%', width: '95%', marginLeft: '-5%'}}> 
               {
                   showSignUpComponent === 'checkSignUp' &&
                   <CheckSignUp
                        handleClickOnSignUpAsBtn={this.handleClickOnSignUpAsBtn}
                   />
               }
               {
                   showSignUpComponent === 'signUpAsStudent' &&
                   <SignUpAsStudent
                        handleClickOnSignUpAsBtn={this.handleClickOnSignUpAsBtn}
                   />
               }
               {
                   showSignUpComponent === 'signUpAsTeacher' &&
                   <SignUpAsTeacher
                        handleClickOnSignUpAsBtn={this.handleClickOnSignUpAsBtn}
                   />
               }
            </div>
        );
    }
}

export default SignUpContainer;