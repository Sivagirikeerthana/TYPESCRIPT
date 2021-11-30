var userid = 1000;
var student = /** @class */ (function () {
    function student(username, userage, usernumber) {
        userid++;
        this.userid = userid;
        this.username = username;
        this.userage = userage;
        this.usernumber = usernumber;
    }
    return student;
}());
var course = /** @class */ (function () {
    function course(courseid, coursename, reqdays, userid) {
        this.courseid = courseid;
        this.coursename = coursename;
        this.reqdays = reqdays;
        this.userid = userid;
    }
    return course;
}());
//displaying Home page
function fun1() {
    document.getElementById("Home page").style.display = "none";
    document.getElementById("users").style.display = "block";
}
//creating arrays
var userdetails = new Array();
var courses = [];
var courses1 = new courses1("C#", "CSS", "HTML", "JS", "TS");
courses.push(courses1);
console.log(courses1);
var enrolledcourses = [];
//function for user registration
function register() {
    var username = document.getElementById("name").value;
    var userage = parseInt(document.getElementById("age").value);
    var usernumber = parseInt(document.getElementById("mobile").value);
    alert("Registration successful!");
    alert("your ID is" + this.userid);
    var user1 = new user1(username, userage, usernumber, this.userid);
    userdetails.push(user1);
    console.log(userdetails);
}
//function for login
function login() {
    // (document.getElementById("login" )as HTMLDivElement).style.display="none";
    // (document.getElementById("course" )as HTMLDivElement).style.display="block";
    var loginid = (document.getElementById("log").value);
    //let j:number=0;
    for (var j in userdetails) {
        //if(userdetails.includes(loginid,this.userid))
        if (loginid == this.userid) {
            alert("Details of user is" + userdetails[j]);
        }
    }
    //function for enroll
    function demo() {
        //getting course name and id and required days
        var i = 1;
        while (i != 0) {
            var coursename = document.getElementById("courses").value;
            //var courseid=index.courses[coursename];
            var courseid = i;
            alert("your course id is" + courseid);
            i++;
            var reqdays = i + 2;
            var encourse = new encourse(coursename, courseid, reqdays);
        }
    }
}
