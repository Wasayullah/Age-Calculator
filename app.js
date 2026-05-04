function calculateAge(){
var birthDate = document.getElementById("dateOfBirth").value;
if (!birthDate) {
        document.getElementById("result").innerHTML = "Select a date first";
        return;
    }
var date = new Date(birthDate).getTime();
var currentDate = new Date().getTime()
var age = Math.floor((currentDate-date)/(1000*60*60*24*365));
if(age< 0){
    document.getElementById("result").innerHTML = "Invalid input";
        return;
}
document.getElementById("result").innerHTML = age+" yrs";
}