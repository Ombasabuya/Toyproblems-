/*
Challenge 2: Speed Detector (Toy Problem)
Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. 
Otherwise, for every 5 km/s above the speed limit (70), 
it should give the driver one demerit point and print the total number of demerit points.
For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

*/

let demeritPoints = 0;
let speedTracker = 0;

function speedDetector(speed){
    if (speed <=70){
        console.log("Speed Ok");
    }else{ 
        let newspeedPoints = (speed - 70)/5;
        if(newspeedPoints <=12) {
            console.log("Demerit Point" + newspeedPoints);
        }else{
            console.log("License suspended!!")
        }
    }
    return speed
}
console.log(speedDetector(80));
