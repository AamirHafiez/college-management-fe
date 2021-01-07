import React from 'react';

class AssignmentsGiven extends React.Component {

    constructor(props) {
        super(props);
        
        let {
            title,
            createdAt,
            year,
            deadline,
        } = props.assignment;

        deadline = deadline.slice(8, 10) + '-' + deadline.slice(5, 7) + '-' + deadline.slice(0, 4);
        createdAt = createdAt.slice(8, 10) + '-' + createdAt.slice(5, 7) + '-' + createdAt.slice(0, 4);

        this.state = {
            title: title,
            createdAt: createdAt,
            year: year,
            deadline: deadline,
        }
    }

    render() {

        const {
            title,
            createdAt,
            year,
            deadline,
        } = this.state;

        return(
            <div className="d-flex justify-content-center align-items-center" style={{minWidth: 350, width: 350, minHeight:400, height: 400}}>
                <div className="rounded shadow bg-danger p-3" style={{height: '90%', width: '85%'}}>
                    <div className="mx-auto">
                        <div>
                            <p className="text-light m-0 p-0" style={{fontSize: 20, fontWeight: 'bold'}}>{title}</p>
                        </div>
                        <div>
                            <p className="text-light">For - {year}</p>
                        </div>
                        <div>
                            <p className="m-0 p-0" style={{color: 'cyan'}}>Created on | {createdAt}</p>
                            <p style={{color: 'gold'}}>Deadline | {deadline}</p>
                        </div>
                        <div>
                            <button className="btn btn-light">
                                View description
                            </button>
                            <button className="mt-2 btn btn-success">
                                View submissions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AssignmentsGiven;