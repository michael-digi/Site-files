/* These functions work as such: buttons on the browserdisplayinfo.html page trigger a function on a click, and here's where the functions reside
The pixel depth and height/width (along with the accompanying output strings to be displayed) are stored in a variable
Then, to output that information in the correct place, we specify/access an id contained in the document and feed it into the ".innerhtml",
the space between the elements, and put that equal to our variable.


/* Displays how many bits per pixel */
function pixelDepth() {
    var x = "Color resolution: " + screen.pixelDepth + " bits per pixel";
    document.getElementById("pixdepth").innerHTML = x;
  }

/* Function to display height and width of user's screen */
  function heightWidth() {
    var xx = "Height: " + screen.height + "px," + " Width: " + screen.width + "px";
    document.getElementById("heightwidth").innerHTML = xx;
}
