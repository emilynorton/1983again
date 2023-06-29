//SOLUTION 1:  CANVAS and ARRAYS

//Set boundaries of the canvas
const length = 200;
const width = 200;

//Decide how many points to draw (fixed number for now) and display this
const totalPoints = 10;

//set up x and y values and the two arrays

let x;
let y;
let points = [];
let drawing = [];

//Add a button to start the process

//On button click

//Loop through this for as many points as you want, keeping in mind that a line will be drawn between the two

for (let i = 0; i < totalPoints; i++) {
  console.log(i);

  //assign random number for x and y betweeen 1 and 200 (box dimensions)

  x = Math.floor(Math.random() * 200 + 1);
  y = Math.floor(Math.random() * 200 + 1);
  console.log(x, y);
  
  //log point pairs to drawing array

  points = [x,y];
  console.log(points);
  drawing.push(points);
  console.log(drawing);
} 

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
