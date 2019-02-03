document.addEventListener('DOMContentLoaded', function() {
    const classAButton = document.getElementById('classA');
    const classBButton = document.getElementById('classB');
    const classCButton = document.getElementById('classC');
    const classDButton = document.getElementById('classD');
    const classEButton = document.getElementById('classE');
    const classfulButton = document.getElementById('classful');
    const classlessButton = document.getElementById('classless');
    const ipv4Button = document.getElementById('ipv4');
    const ipv6Button = document.getElementById('ipv6');
    const submitButton = document.getElementById('submitButton');

    var amountOfIP;
    var ipString;
    var mask;
    var bits = "";
    var maskStringInBits = "";
    var tempStringDotted = "";

    var tempBitDotted = "";
    var actualIP = [];
    var classlessBitArray = [];
    var finalArray = [];
    var maskStringInDecimal = "";
    var createdAddress = [];
    var maskDecimal = [];

    var networkDecimal;
    var networkBits;

    var maxBitValue = 4294967295;

    var otherBitValue = 2147483647;

    document.getElementById('howManyIPBox').addEventListener('keyup', inputText);
    document.getElementById('hostsCount').addEventListener('keyup',hostsInput);
    submitButton.addEventListener('click', submitFunction);

    function inputText() {
        var numberOfIP = document.getElementById('howManyIPBox').value;
            return numberOfIP;
        }

    function hostsInput() {
              var numberOfHosts = document.getElementById('hostsCount').value;
              return numberOfHosts;
        }

    function makePrefix(array) {
      actualIP = [];
          array.forEach(function(entry){
            var list = [];
            var high = 255;
            var low = high - parseInt(entry,2) + 1;

            if (low > high){
            list.push(0);
            }
            else
            {
            for (var i = low; i < high; i++){
              if (i % low == 0){
              list.push(i);
            }
          }

    }
        var rand = list[Math.floor(Math.random() * list.length)];

        actualIP.push(rand);

      });

      for(var i = 0; i < actualIP.length; i++) {
          var classlessBitString = actualIP[i].toString(2);
          classlessBitArray.push(classlessBitString);
      }

      return actualIP;

  };

    function createMask(){
        bits = "";
        maskDecimal = [];
        createdAddress = [];

      var hosts = hostsInput();

      hostsLength = (+hosts+1).toString(2).length;

          for (var i = 0; i<hostsLength; i++){
                bits += "1";
        	}
          var bitsAsDecimal = parseInt(bits,2);

          networkDecimal = maxBitValue - bitsAsDecimal;
          networkBits = (+networkDecimal).toString(2);

          var maskArray = networkBits.match(/.{1,8}/g)

          createdAddress = makePrefix(maskArray);

          maskArray.forEach(function(entry) {
            maskDecimal.push(parseInt(entry,2));
          });


    classlessIP(maskArray,maskDecimal,createdAddress, bitsAsDecimal);

        maskArray = [];
        maskDecimal = [];
        createdAddress = [];
        bitsAsDecimal = "";
  }

function classlessIP(bitMask, decimalMask, actualAddress, bitsAsDecimal) {

  for (var i = 0; i < decimalMask.length; i++){
    var hostBits = 255 - decimalMask[i] - 1;

    finalArray.push(hostBits);
  }

  for (var i = 0; i < finalArray.length; i++) {
    if (finalArray[i] == -1){
      finalArray.splice(i, 1, 0);
    }
    else {
      console.log("that wasn't a zero");
    }
  }

document.getElementById('math').innerHTML = "";

bitMask.forEach(function (entry){
           		 maskStringInBits += entry + ".";
               maskStringInDecimal += parseInt(entry,2) + ".";
        });

    maskStringInDecimal = maskStringInDecimal.substring(0,maskStringInDecimal.length-1);
    maskStringInBits = maskStringInBits.substring(0, maskStringInBits.length-1);

var showString = "";

showString = "This is the mask:  " + maskStringInBits + "<br><br>" +
"This is the mask in decimal form:  " + maskStringInDecimal + "<br><br>";

document.getElementById('math').innerHTML += showString;

maskStringInBits = "";
maskStringInDecimal = "";

 makeFinalAddress(actualAddress, finalArray);

 actualAddress = [];

 finalArray = [];


}

function makeFinalAddress(address, hosts) {

  var hostValue = hostsInput();
  amountOfIP = inputText();

  hostValue = parseInt(hostValue, 10);
  amountOfIP = parseInt(amountOfIP,10);


  var tempArray = address.slice();

if (amountOfIP > hostValue) {
  console.log("Amount of IP can't be larger than amount of hosts");
}

else {

var j = 0;
while(j < amountOfIP) {
  var tempArray = address.slice();
  for (var i = 0; i < hosts.length; i++) {
    if (hosts[i] == 0) {
    tempArray[i] =  0 + tempArray[i];
    }
    else {
      var number = getRandomIntInclusive(1,hosts[i]);
      tempArray[i] = number + tempArray[i];

    }
}
  tempArray.forEach(function (entry){
      tempStringDotted += entry + ".";
      tempBitDotted += entry.toString(2) + ".";
            });

tempStringDotted = tempStringDotted.substring(0, tempStringDotted.length-1);
tempBitDotted = tempBitDotted.substring(0,tempBitDotted.length-1);

document.getElementById('math').innerHTML += tempStringDotted + "     " + tempBitDotted + "<br>";

tempBitDotted = [];
tempStringDotted = [];
tempArray = [];
j++;
}
};
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function submitFunction(){


  if(classAButton.checked && ipv4Button.checked && classful.checked) {
    console.log("Checked");
    classAIP();
  }

  else if(classBButton.checked && ipv4Button.checked && classful.checked) {
    console.log("Checked");
    classBIP();
  }

  else if(classCButton.checked && ipv4Button.checked && classful.checked) {
    console.log("Checked");
    classCIP();
  }

  else if(classDButton.checked && ipv4Button.checked && classful.checked) {
    console.log("Checked");
    classDIP();
  }

  else if(classEButton.checked && ipv4Button.checked && classful.checked) {
    console.log("Checked");
    classEIP();
  }

  else if(ipv4Button.checked && classless.checked && hostsInput() != " ") {
    console.log("Checked");
    createMask();
  }

  else if(ipv6Button.checked && hostsInput() != " "){
    console.log("Checked, IPv6 ah yis");
    createIPv6();
  }

  else {
    console.log("Not checked");
  }


}

function createIPv6() {

  document.getElementById('math').innerHTML = "";

  var decimal;

  var network;
  var subnet;

  var networkAsDecimal;
  var subnetAsDecimal;

  var networkDecimalRand;
  var subnetAsDecimalRand;

  var networkAsBinary;
  var subnetAsBinary;

  var networkAsBinaryLength;
  var subnetAsBinaryLength;

  var networkAsHex;
  var subnetAsHex;

  var prefix;
  var prefixArray = [];

  var suffix;
  var suffixArray = [];

  var prefixColonHex = "";
  var prefixBin = "";

  var suffixColonHex = "";
  var suffixBin = "";

  network = hostsInput();
  subnet = 64 - network;

  amountOfIP = inputText();


  networkAsDecimal = Math.pow(2,network);
  networkAsDecimalRand = getRandomIntInclusive(1,networkAsDecimal);



  subnetAsDecimal = Math.pow(2,subnet);
  subnetAsDecimalRand = getRandomIntInclusive(1,subnetAsDecimal);



  networkAsHex = networkAsDecimalRand.toString(16);
  subnetAsHex = subnetAsDecimalRand.toString(16);


  networkAsBinary = networkAsDecimalRand.toString(2);
  subnetAsBinary = subnetAsDecimalRand.toString(2);


  networkAsBinaryLength = networkAsBinary.length;
  subnetAsBinaryLength = subnetAsBinary.length;




if (networkAsHex.length < Math.ceil(Math.log(networkAsDecimal)/Math.log(16))) {
  var addedZeros = "";
    for (var i = 0; i <Math.ceil(Math.log(networkAsDecimal)/Math.log(16))  - networkAsHex.length; i++) {
      addedZeros += "0";
    }
  networkAsHex = addedZeros + "" + networkAsHex
  console.log(networkAsHex);
}

else {
  console.log("No extra zeros");
}

if (subnetAsHex.length < Math.ceil(Math.log(subnetAsDecimal)/Math.log(16))) {
  var addedZeros = "";
    for (var i = 0; i < Math.ceil(Math.log(subnetAsDecimal)/Math.log(16)) - subnetAsHex.length; i++) {
      addedZeros += "0";
    }
  subnetAsHex = addedZeros + "" + subnetAsHex;
  console.log(subnetAsHex);
}

else {
  console.log("No extra zeros");
}

prefix = networkAsHex + "" + subnetAsHex;

if (prefix.length > 16) {
  prefix = prefix.substring(0, prefix.length-1);
  }

prefixArray = prefix.match(/.{1,4}/g);

prefixArray.forEach(function(entry) {
    decimal = parseInt(entry,16);
    prefixBin += decimal.toString(2) + ".";

});

prefixBin = prefixBin.substring(0, prefixBin.length-1);

prefixArray.forEach(function(entry){
    prefixColonHex += entry + ":";
});

prefixColonHex = prefixColonHex.substring(0, prefixColonHex.length-1);



for (var i = 0; i < amountOfIP; i++) {

  console.log(i);

  var front32 = "";
  var back32 = "";

  var maxFront = Math.pow(2,32);
  var maxBack = Math.pow(2,32);



  front32 = getRandomIntInclusive(0,maxFront);
  back32 = getRandomIntInclusive(1,maxBack);

  frontHex = front32.toString(16);
  backHex = back32.toString(16);


  if (frontHex.length < 8) {
    var addedZeros = "";
    for (var ii = 0; ii < 8  - frontHex.length; ii++){
    addedZeros += "0";
  }
  frontHex = addedZeros + "" + frontHex;
}

else {
  console.log("No added zeros");
}


if (backHex.length < 8) {
  var addedZeros = "";
  for (var iii = 0; iii < 8  - backHex.length; iii++){
  addedZeros += "0";
}
  backHex = addedZeros + "" + backHex

}

else {
console.log("No added zeros");
}

suffix = frontHex + "" + backHex;

suffixArray = suffix.match(/.{1,4}/g);



suffixArray.forEach(function(entry) {
    decimal = parseInt(entry,16);
    suffixBin += decimal.toString(2) + ".";

});

suffixBin = suffixBin.substring(0, suffixBin.length-1);

suffixArray.forEach(function(entry){
    suffixColonHex += entry + ":";
});

suffixColonHex = suffixColonHex.substring(0, suffixColonHex.length-1);



document.getElementById('math').innerHTML += "<br>" + prefixColonHex + ":" + suffixColonHex + "<br>" +
                                             prefixBin + "." + suffixBin + "<br><br>";


suffixBin = "";
suffixColonHex = "";


console.log(i);


}
}

function classAIP(){

  var prefix =  getRandomIntInclusive(1,127);

  amountOfIP = inputText();

  document.getElementById('math').innerHTML = "Class A with Prefix: " + prefix + "<br><br>";


        for(var i = 0; i < amountOfIP; i++){
          var a = getRandomIntInclusive(1,255)
          var b = getRandomIntInclusive(1,255)
          var c = getRandomIntInclusive(1,254)

          ipString =  prefix + "." + a + "." + b + "." + c + "<br><br>" +
                      prefix.toString(2) + "." + a.toString(2) + "." + b.toString(2) + "." + c.toString(2);


          sessionStorage.setItem(ipString, ipString);

        document.getElementById('math').innerHTML += ipString + "<br><br>";


};
console.log(sessionStorage);
};

function classBIP(){

  document.getElementById('math').innerHTML = " ";

  var a = getRandomIntInclusive(128,191);
  var b = getRandomIntInclusive(0,255);

  var prefixDec =  a + "." + b;
      amountOfIP = inputText();

  var prefixBin = a.toString(2) + "." + b.toString(2);

  document.getElementById('math').innerHTML = "Class B with Prefix: " + prefixDec + "<br><br>";

  amountOfIP = inputText();


      for(var i = 0; i < amountOfIP; i++){

          var a = getRandomIntInclusive(1,255);
          var b = getRandomIntInclusive(1,254);

          ipString = prefixDec + "." + a + "." + b + "<br><br>" +
                      prefixBin + "." + a.toString(2) + "." + b.toString(2);

          document.getElementById('math').innerHTML += ipString + "<br><br>";
      };

};

function classCIP(){

    document.getElementById('math').innerHTML = " ";

    var a = getRandomIntInclusive(192,223);
    var b = getRandomIntInclusive(0,255);
    var c = getRandomIntInclusive(0,255);

      var prefixDec =  a + "." +
                       b + "." +
                       c;
      var prefixBin = a.toString(2) + "." + b.toString(2) + "." + c.toString(2);
              amountOfIP = inputText();

        if (amountOfIP < 255) {
  document.getElementById('math').innerHTML = "Class C with Prefix: " + prefixDec + "<br><br>";



        for(var i = 0; i < amountOfIP; i++){

          var d = getRandomIntInclusive(1,254);

          ipString = prefixDec + "." + d + "<br><br>" +
          prefixBin + "." + d.toString(2);


          document.getElementById('math').innerHTML += ipString + "<br><br>";

  };
}
      else {
        document.getElementById('math').innerHTML = "Too many addresses for class C";
      }
};

function classDIP(){

  var prefix =  getRandomIntInclusive(224,239);

  document.getElementById('math').innerHTML = "Class D " + "<br><br>";

    amountOfIP = inputText();

    for(var i = 0; i < amountOfIP; i++){

      var a = getRandomIntInclusive(1,255);
      var b = getRandomIntInclusive(1,255);
      var c = getRandomIntInclusive(1,254);

      ipString =  prefix + "." + a + "." + b + "." + c + "<br><br>" +
                  prefix.toString(2) + "." + a.toString(2) + "." + b.toString(2) + "." + c.toString(2);

         document.getElementById('math').innerHTML += ipString + "<br><br>";

    };
};

function classEIP(){

  document.getElementById('math').innerHTML = " ";

      document.getElementById('math').innerHTML +=
      "This Class is the reserved Class <br>";
    };

})
