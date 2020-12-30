const domain = 'http://localhost:8000/api/v1';

module.exports.apis = {
        createStudent: `${domain}/create-student`,
        createTeacher: `${domain}/create-teacher`,
        studentLogin: `${domain}/student-login`,
        teacherLogin: `${domain}/teacher-login`,
        getStudentDetails: `${domain}/student-details`,
        updateStudentDetails: `${domain}/update-student-details`
}