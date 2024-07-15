function enroll(courseName) {
    const enrolledCourses = document.getElementById('enrolled-courses');
    const li = document.createElement('li');
    li.textContent = courseName;
    enrolledCourses.appendChild(li);
    alert(`You have enrolled in ${courseName}!`);
}