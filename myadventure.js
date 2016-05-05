var user = prompt("What type of resturant would you like to go to today?").toUpperCase();
var day = prompt("Type in the day of the week.").toUpperCase();
var specialDay = prompt("YES or NO, is today a special day?").toUpperCase();
switch (user){
    case 'PIZZA':
        if (day === "MONDAY" || day === "THURSDAY"){
            console.log ("Try eating helthier");
            } else {
                console.log ("No have. Try eating helthier");
            }
        break;
    case 'MEAT':
        if (day === "SUNDAY" || day === "TUESDAY"){
            console.log ("That makes a good dinner.");
            } else {
                console.log ("NO have");
            }
       
        break;
    case 'DAIRY':
        if (day === "SUNDAY" && specialDay === "YES"){
            console.log ("So you're a cheese lover?");
            } else {
                console.log ("No have");
            }
        
        break;  
    case 'FISH':
        console.log("Fish is good for your diet.");
        break;
   case 'VEGAN':
        console.log("Way to go, eating healty!");
        break;
    default:
    console.log("Not on my list");
    break;
    }
