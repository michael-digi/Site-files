document.addEventListener('DOMContentLoaded', function() {


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

  function submitFunction() {
    if(ipv6Button.checked && hostsInput() != " ") {
      console.log("IPv6");
      }
    else{
      console.log("Doesn't work");
    }

  }





});
