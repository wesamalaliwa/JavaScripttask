var text=new Date();
var months = text.getMonth();

switch(months) {
  case "jan":
    text = "the 1st month";
    break;
  case "feb":
    text = "the 2cd month";
    break;
  case "mar":
    text = "the 3rd month";
    break;
  default:
    text = "THIS IS april";
}
