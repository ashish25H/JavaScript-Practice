const user = {
    name:"Tony",
    age:20,
    pack:"local",
    course:[],
    addCourse: function addCourse(courseName){
        this.course.push(courseName);
    },

    courseCount: function courseCount(){
        return this.course.length;
    }
}

// console.table(user);
user.addCourse("B.Tech");
user.addCourse("MCA");
console.table(user);
console.log(user.courseCount());
