import React from 'react';

const SubmittedAssignmentTab = (props) => {

    const {
        assignment
    } = props;

    const {
        title,
    } = assignment;

    const {
        subject,
        name
    } = assignment.teacher;

    return(
        <div style={{boxShadow: '2px 2px 8px 0 rgba(0,0,0,0.5)'}} className="mb-4 rounded bg-success col-11 mx-auto pt-2 pb-2">
            <div className="col-11 mx-auto d-flex justify-content-between align-items-center">
                <div>
                    <div>
                        <p className="m-0 p-0 text-light" style={{fontSize:24, fontWeight: 'bold'}}>{title}</p>
                    </div>
                    <div>
                        <p className="m-0 p-0 text-light">Subject - {subject}</p>
                    </div>
                    <div>
                        <p className="m-0 p-0 text-light">Teacher - {name}</p>
                    </div>
                </div>
                <div>
                    <button className="btn btn-light bg-gradient">
                        View Grade
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubmittedAssignmentTab;