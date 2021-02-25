// Example
window.alert("Hello World!");
var birthday = prompt("Can I have your birth year", "0");  
var futureYear = prompt("Can I have the future year you want me to calculate", "0")
var newAge = futureYear - birthday;

window.alert("You will be either " +newAge+ " or " +(newAge-1)+ " in " +futureYear+ ".")


// Extra....
var birthyear = prompt("Can i have your birth Year", "0");
var birthmonth = prompt("can i have the number of the birth month", "0");
var birthday = prompt("Can I have the number of the day your were born", "0");
var actualyear = 2021;
var actualmonth = 12;
var actualday = 25;

window.alert("You are " +(actualyear-birthyear)+ " years " +(actualmonth-birthmonth)+ " months and " +(actualday-birthday)+ " days old.") 
