import React from 'react';
import AssignmentsGiven from './AssignmentsGiven';

import axios from 'axios';
import {apis} from '../../apis/apis';
import {NotificationsManager} from 'react-notifications';
import cookie from 'react-cookies';

class ViewSubmissionsContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            animation: 'slide-down-bounce',
            assignments: []
        }
    }

    componentDidMount() {
        let auth = cookie.load('auth');
        axios.get(apis.getTeacherAssignments, {
            headers: {
                'Authorization': `bearer ${auth}`
            }
        })
        .then((response) => {
            this.setState({
                assignments: response.data.assignments
            });
        })  
        .catch((error) => {
            NotificationsManager.error('Something went wrong', 'Server Error:', 3000);
            console.log('error', error);
        });
    }

    handleClickCloseBtn = () => {
        this.setState({
            animation: 'slide-to-down'
        });
        setTimeout(() => this.props.handleToggleViewSubmissionsContainer(), 450);
    }

    render() {

        const {
            animation,
            assignments
        } = this.state;

        console.log(assignments);

        return(
            <div className="d-flex justify-content-center align-items-center" style={{height: "100vh", width: '100vw', backgroundColor: 'rgba(0,0,0,0.4)', position:'fixed', top: 0}}>
                <div className={animation + " col-11"} style={{height: '90%', backgroundColor: 'white'}}>
                    <div className="mt-2 d-flex justify-content-end col-12" style={{paddingRight: 15, cursor: 'pointer'}} title="close">
                        <img onClick={this.handleClickCloseBtn} height={20} width={20} src={'https://www.flaticon.com/svg/static/icons/svg/1828/1828665.svg'} alt="close"/>
                    </div>
                    <div>
                        <p style={{fontSize: 35, textAlign: 'center'}}>Submissions</p>
                    </div>
                    <div className="col-11 d-flex flex-wrap mx-auto justify-content-center" style={{height: '85%', overflowY: 'auto'}}>
                        {
                            assignments.map((assignment) => {
                                return (
                                    <AssignmentsGiven
                                        assignment={assignment}
                                        key={assignment._id}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewSubmissionsContainer;