import React from 'react';

class SubmittedAssignmentsContainer extends React.Component{

    constructor() {
        super();
        this.state = {
            animationClass: 'slide-from-right'
        }
    }

    handleClickCloseBtn = () => {
        this.setState({
            animationClass: 'slide-to-down'
        });
        setTimeout(() => this.props.handleToggleShowSubmittedAssignments() , 300);
    }
    
    render() {

        const {
            animationClass
        } = this.state;

        return(
            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100vw', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0}}>
                <div className={animationClass + " col-6"} style={{boxShadow: '6px 6px 7px 2px rgba(0, 0, 0, 0.4)', height: '80vh', backgroundColor: 'white'}}>
                    <div className="mt-2 d-flex justify-content-end col-12" style={{paddingRight: 15, cursor: 'pointer'}} title="close">
                        <img onClick={this.handleClickCloseBtn} height={20} width={20} src={'https://www.flaticon.com/svg/static/icons/svg/1828/1828665.svg'} alt="close"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubmittedAssignmentsContainer;