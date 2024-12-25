const dateofBirth= "12/12/1980"
const getStudentName = () =>
{
return "write your name here";
};
const getCampusName = () =>
{return ("UEL Campus ");
};
//exporting functions & variable outside the module
exports.getName=getStudentName;
exports.Location=getCampusName;
exports.dob=dateofBirth;
// How to export function with parameters
exports.Studentgrade=(marks)=>
{
if (marks>50 && marks <70) return "B grade"
else
return "A grade)";
}
os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
