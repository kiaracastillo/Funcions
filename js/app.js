//Kiara Iran Castillo Magallanes 
//09/15/2022
//Class 24603 

function setup() {
    createCanvas(250, 250);       
}

function draw() {
   
    background(255, 222, 179);

     // new coordinates 
     let res = polarPoint(25);

    
    translate(100, 100);

    // draw circles 
    circle(res.x, res.y, 10);
    fill (0);
}

   //  polar coordinates
function polarPoint(r) {
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);

    // Returns object 
    return createVector(x, y); 
}



