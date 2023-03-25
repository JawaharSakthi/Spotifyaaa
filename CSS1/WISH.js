let date=new date();
let hours=date.getHours();

let greetings;

if(hours>18)
greetings="GOOD EVENING";
else if(hours>12)
greetings="GOOD AFTERNOON";
else if(hours>0)
greetings="GOOD MORNING";
else
greetings="HELLO ALL";

document.write("<h1>" +  greetings + "</h1>");