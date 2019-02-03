

/* ShowIP is called with url.host as an argument and sent here. It parses a JSON and outputs the json.answer.data
   to a div on the HTML page, in the form - Hostname:   IP Address:     */

function showIP(ip) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(xhttp.responseText);

       document.getElementById("ipAddressTable").innerHTML +=
       "<br>" + "<b>Hostname:</b>  " + ip
       + " <b>IP Address:</b>  " + json.Answer[0].data;
    }
  };

 xhttp.open("GET", "https://dns.google.com/resolve?name=" + ip, true);
 xhttp.send();
}
/* The file button on the HTML has an "onchange" attribute that is set to this function below; this means, when the
file button detects a change in the input (as in when a file is selected/opened through the button), the follwing
function activates
*/
  var openFile = function(event) {

    var com = 0;
    var edu = 0;
    var org = 0;
    var gov = 0;
    var io = 0;
    var net = 0;
    var jp = 0;
    var cn = 0;
    var uk = 0;
    var other = 0;
    var http = 0;
    var https = 0;

/* Event.target is a reference to the file in question; reader is a new instance of FileReader() that will handle
  the details of getting this information for us to parse
*/
    var input = event.target;
    var reader = new FileReader();

/* When it's loaded ("onload"), the next function activates, which is to save the document by splitting it line by line,
  adding each line as an element into an array, until you have an array filled with each line of the document.
  We then iterate through that array, making each piece into a URL object.
*/
    reader.onload = function(){

      var text =  reader.result.split(/\r\n|\n/);

      var table = " ";

        for(var i = 0; i < text.length; i++) {

          var display =  text[i];


              if (!/^(?:f|ht)tps?\:\/\//.test(display) && !/^(?:f|ht)tp?\:\/\//.test(display)) {
                  display = "http://" + display;
                  var url = new URL(display);
            }

            else {
              var url = new URL(display);
            }



          if (url.protocol === "http:"){
              var urlPort = url.port;
              urlPort = 80;
              http++;
            }
              else if (url.protocol === "https:") {
                urlPort = 443;
                https++;
              }
              else {
                urlPort = "Undefined";
              }

/* This is for outputting data of how many of each TLD type there is. It simply takes the url.host object,
  turns it back into a string, splits it by '.', and the last bit is popped ( pop() ), chopping off the TLD.
  It then checks what that TLD is and adds a count to the respective list.
*/
            urlHost = url.host.toString();
            tld = urlHost.split('.').pop();
            console.log("This is the urlHost " + urlHost)

            if (tld === "com") {
              com++;
            }
            else if (tld === "io"){
              io++;
            }
            else if (tld === "org"){
              org++;
            }
            else if (tld === "gov"){
              gov++;
            }
            else if (tld === "edu"){
              edu++;
            }
            else if (tld === "net"){
              net++;
            }
            else if (tld === "uk"){
              uk++;
              tld = "co.uk";
            }

            else if (tld === "jp"){
              jp++;
              tld = "co.jp";
            }

            else if (tld === "cn"){
              cn++;
              tld = "co.cn";
            }

            else {
              other++;
            }

console.log("This is protocol: " + url.protocol)
            var host = url.host;
            console.log(host);
            showIP(host);

    /* The table is built piece by piece here and then when it is full constructed, gets outputted to "tabletry"
      below.
    */
              table += "URL: <a href=\"" + url + "\">" + url + "</a>";
              table += "<br><table> <thead> <tr> <th>Origin</th> <th>Host</th> <th>Hash</th> <th>Pathname</th> <th>Scheme</th> <th>Params</th> <th>Port</th> <th>TLD</th> <th>Username</th> <th>Password</th> </tr></thead>";
              table += "<tbody><tr><td>" + url.origin +
              "</td><td>" + url.host +
              "</td><td>" + url.hash +
              "</td><td>" + url.pathname +
              "</td><td>" + url.protocol +
              "</td><td>" + url.searchParams +
              "</td><td>" + urlPort +
              "</td><td>" + tld +
              "</td><td>" + url.username +
              "</td><td>" + url.password +
              "</td></tr></tbody></table><br>";
            }

            document.getElementById("tableTry").innerHTML = table;

          }

        reader.readAsText(input.files[0]);

    /* Google tools for chart output */

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(createChart);

          function createChart() {

          var webData = google.visualization.arrayToDataTable([
            ['TLD Type', 'Count'],
            ['.com', com],
            ['.edu', edu],
            ['.gov', gov],
            ['.org', org],
            ['io', io],
            ['net', net],
            ['other', other],
            ['co.uk', uk],
            ['co.cn', cn],
            ['co.jp', jp],
          ]);

        var attributes = {'title':'TLD Breakdown', 'width':650, 'height':450};

        var piechart = new google.visualization.PieChart(document.getElementById('chart'));
        piechart.draw(webData, attributes);
    }

}
