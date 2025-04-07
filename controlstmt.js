 /* let age=20;
if(age > 18)
{
    console.log("He/She is eligible to vote");
}
 */
let uAge=18;
if(uAge > 18)
{
    console.log("He/She is eligible to vote");
}
else
{
    console.log("Not eligible to vote");

}

let time=13.00;
if(time > 12.00 && time < 16.00)
{
    console.log("Good Afternoon");
}
else if(time > 16.00 && time < 19.00)
{
    console.log("Good Evening");
}
else if(time > 19.00 && time < 12.00)
{
    console.log("Good night");
}
else
{
    console.log("Good Morning");
}

// switch statements

let trafficLight = "red";

switch(trafficLight)
{
    case "red":
        console.log("stop");
        break;
        case "yellow":
            console.log("Slow Down");
            break;
            case "green":
                console.log("Go");
                break;
                default:
                    console.log("Pay Fine");
}

let age=20;
let height=150;
let weight=45;

if(age>=18)
{
    if(height>=150)
    {
if(weight>=45)
{
    console.log("You are selected");
}
else
{
    console.log("Weight is not matched");
}

}
else{
        console.log("Height is not matched");
    }
}
else{
    console.log("Age is not valid");
}

let password = true;
password ? console.log("correct") : console.log("wrong");



for(let i=1; i<=10; i++)
{
    console.log(i);
}



for(let a=1; a<=10; a++)
{
    //if(a%2==0) console.log(a);
    if(a%2 !==0) console.log(a);
    
    
}

let val=10;
while(val>=1)
{
    console.log(val);
    val--;
}

let val1=10;
do{
    console.log(val1);
    val1++;
}
while(val1<=20)