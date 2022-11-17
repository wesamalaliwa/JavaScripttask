var email="abushaqrawesam@gmail.com"
var regex= /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g ;
var f = email.match(regex);
console.log(f);