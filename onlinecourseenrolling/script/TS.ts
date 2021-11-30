let userid:number=1000
class student
{
    userid:number;
    username:string;
    userage:number;
    usernumber:number;
    constructor(username:string, userage:number,usernumber:number)
    {
        userid++
        this.userid=userid;
        this.username=username;
        this.userage=userage;
        this.usernumber=usernumber;
    }
}
class course
{
    courseid:number;
    coursename:string;
    reqdays:number;
    userid:string;
    constructor( courseid:number,coursename:string,reqdays:number,userid:string)
    {
        this.courseid=courseid;
        this.coursename=coursename;
        this.reqdays=reqdays;
        this.userid=userid;
    }
}
//displaying Home page
function fun1()
{
  (document.getElementById("Home page" )as HTMLDivElement).style.display="none";
  (document.getElementById("users" )as HTMLDivElement).style.display="block";

}
//creating arrays
 let userdetails:Array<student>=new Array<student>();
 let courses:Array<course>=[];
 var courses1=new courses1("C#", "CSS","HTML","JS","TS");
 courses.push(courses1);
 console.log(courses1);
 let enrolledcourses:Array<course>=[];
 //function for user registration
 function register()
 {//(document.getElementById("users" )as HTMLDivElement).style.display="none";

     let username=(document.getElementById("name")as HTMLInputElement).value;
     let userage=parseInt((document.getElementById("age")as HTMLInputElement).value);
     let usernumber=parseInt((document.getElementById("mobile") as HTMLInputElement).value);
     alert("Registration successful!");
     alert("your ID is"+this.userid)
     var user1= new user1(username,userage,usernumber,this.userid);
     userdetails.push(user1);
     console.log(userdetails);
 }
 //function for login
 function login()
 {
    // (document.getElementById("login" )as HTMLDivElement).style.display="none";
    // (document.getElementById("course" )as HTMLDivElement).style.display="block";
  
    let loginid=((document.getElementById("log") as HTMLInputElement).value);
    //let j:number=0;
    for(let j in userdetails)
    {
    //if(userdetails.includes(loginid,this.userid))
    if(loginid==this.userid)
    {
       alert("Details of user is"+userdetails[j]);
    }

    }
 //function for enroll
   function demo()
    {  
     //getting course name and id and required days
    let  i:number=1;
     while(i!=0)
    {
     var coursename=(document.getElementById("courses") as HTMLOptionElement).value;
     //var courseid=index.courses[coursename];
     var courseid=i;
     alert("your course id is" +courseid);
     i++;
     var reqdays=i+2;
    var encourse= new encourse(coursename,courseid,reqdays);
    }
    }
 }
 