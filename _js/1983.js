//SOLUTION 1:  CANVAS and ARRAYS

//Initialize the array (array of x and y values)

let x;
let y;

const points = [x, y];

console.log(x, y, points);

//Set boundaries of the canvas

const length = 200;
const width = 200;

console.log(length, width);

//Decide how many points (fixed number for now) and display this

const totalPoints = 10;

console.log(totalPoints);

//Add a button to start the process

//On button click

//Loop through this for as many points as you want, keeping in mind that a line will be drawn between the two

//assign random number for x and y betweeen 1 and 200

x = Math.floor(Math.random() * 200 + 1)
y = Math.floor(Math.random() * 200 + 1)

console.log(x, y);

//assign random number for y
//log to array
//plot as point
//if there is a prior point, then connect this new point and the prior point with a line, otherwise skip
//QUESTION do we log the lines into the db also?

//Once it gets to the end, then you want to "un-draw this"
//TO RESEARCH - are we deleting points and lines or changing the color so it looks like it's gone?
//reverse the array
//Loop
//Remove or redraw point
//If there is a prior point then delete the line or redraw between this point and the prior point

//Have an indicator that this is over

//Have a way to start over
//Clear array if start over
