const domain = 'http://localhost:8000/api/v1';

module.exports.apis = {
        createStudent: `${domain}/student/create`,
        createTeacher: `${domain}/teacher/create`,
        studentLogin: `${domain}/student/login`,
        teacherLogin: `${domain}/teacher/login`,
        getUserDetails: `${domain}/user-details`,
        updateStudentDetails: `${domain}/student/update-details`,
        updateTeacherDetails: `${domain}/teacher/update-details`,
        addAssignment: `${domain}/teacher/add-assignment`,
        getUpcomingAssignments: `${domain}/student/upcoming-assignments`
}