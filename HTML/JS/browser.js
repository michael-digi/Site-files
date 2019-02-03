/* These functions work as such: buttons on the browserdisplayinfo.html page trigger a function on a click, and here's where the functions reside
The pixel browser name and version (along with the accompanying output strings to be displayed) are stored in a variable
Then, to output that information in the correct place, we specify/access an id contained in the document and feed it into the ".innerhtml",
the space between the elements, and put that equal to our variable.*/

function browserName() {
    var x = "Browser Name: " + navigator.appName;
    document.getElementById("name").innerHTML = x;
}

function browserVersion() {
    var xx = "Version info: " + navigator.appVersion;
    document.getElementById("version").innerHTML = xx;
}
