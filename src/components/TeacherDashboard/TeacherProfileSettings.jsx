import React from 'react';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import axios from 'axios';
import qs from 'qs';
import cookie from 'react-cookies';
import {apis} from '../../apis/apis';

class TeacherProfileSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.teacherData.name,
            branch: this.props.teacherData.branch,
            subject: this.props.teacherData.subject,
            password: '',
            verify_password: ''
        }
    }

    handleInputChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    handleClickOnSaveChanges = () => {
        const {
            name,
            branch,
            subject,
            password,
            verify_password
        } = this.state;

        if(password !== verify_password){
            NotificationManager.error('Password and verify password do not match', 'Check:', 3000);
            return;
        }
        let params = {
            'name': name,
            'branch': branch,
            'subject': subject,
            'password': password,
            'verify_password': verify_password
        }
        let auth = cookie.load('auth');
        axios.post(apis.updateTeacherDetails, qs.stringify(params), {
            headers: {
                "Authorization" : `bearer ${auth}`
            }
        })
        .then((response) => {
            if(response.data.message === 'updated successfully'){
                NotificationManager.success('Successfully Updated', 'All details are', 3000);
                window.location.reload(true);
            }
        })
        .catch((error) => {
            console.log('error:', error);
            NotificationManager.error('Server error', 'Error:', 3000);
        });
    }

    render() {

        const {
            handleToggleEditProfile
        } = this.props;

        const {
            name,
            branch,
            subject,
            password,
            verify_password
        } = this.state;

        return (
            <div className="d-flex justify-content-center align-items-center" style={{position:'fixed',top: 0, left: 0, height: '100vh', width:'100vw', backgroundColor: 'rgba(216, 216, 216, 0.3)'}}>
                <div className="bg-primary edit-profile col-10 col-md-8 col-lg-5" style={{boxShadow: '6px 6px 7px 2px rgba(0, 0, 0, 0.4)' ,position: 'absolute', top: '10vh',height: '80vh'}}>
                    <div style={{position: 'relative'}}>
                        <p className="text-light mt-4" style={{textAlign: 'center', fontSize: 30}}>Edit Profile</p>
                        <img onClick={handleToggleEditProfile} style={{position: 'absolute', left: '90%', top: 0, cursor: 'pointer'}} title="close" height={40} width={40} src={'https://www.flaticon.com/svg/static/icons/svg/753/753345.svg'} alt="close"/>
                    </div>
                    <div className="col-10 mx-auto">
                        <div className="mb-2">
                            <input onChange={this.handleInputChange} value={name} name="name" className="form-control" type="text" placeholder="Full name" maxLength={40}/>
                        </div>
                        <div className="mb-2">
                            <p className="mb-1">Your branch</p>
                            <select onChange={this.handleInputChange} value={branch} className="form-select"  name="branch" id="">
                                <option value="computer">Computer</option>
                                <option value="electronics">Electrical</option>
                                <option value="mechanical">Mechanical</option>
                                <option value="chemical">Chemical</option>
                                <option value="production">Production</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <input onChange={this.handleInputChange} value={subject} name="subject" className="form-control" type="text" placeholder="Subject" maxLength={30}/>
                        </div>
                        <div className="mb-2">
                            <input onChange={this.handleInputChange} value={password} name="password" className="form-control" type="password" placeholder="Password" maxLength={30}/>
                        </div>
                        <div className="mb-2">
                            <input onChange={this.handleInputChange} value={verify_password} name="verify_password" className="form-control" type="password" placeholder="Verify password" maxLength={30}/>
                        </div>
                    </div>

                    <div className="mt-4" style={{textAlign: 'center'}}>
                        <button onClick={this.handleClickOnSaveChanges} className="col-5 btn btn-danger">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeacherProfileSettings;