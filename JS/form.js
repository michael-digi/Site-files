document.addEventListener('DOMContentLoaded', function() {

  const ipv4 = document.getElementById('ipv4');
  const ipv6 = document.getElementById('ipv6');

  const classfulOrClassless = document.getElementById('classfulOrClassless');
  const whichClass = document.getElementById('whichClass');
  const bitsPrefix = document.getElementById('bitsPrefix');


  const classful = document.getElementById('classful');
  const classless = document.getElementById('classless');


ipv4.addEventListener('click', function() {
  classfulOrClassless.disabled = false;
  whichClass.disabled = false;
});

ipv6.addEventListener('click', function() {
  classfulOrClassless.disabled = true;
  whichClass.disabled = true;
  bitsPrefix.disabled = false;
});

classful.addEventListener('click',function() {
  bitsPrefix.disabled = true;
  whichClass.disabled = false;
})

classless.addEventListener('click',function() {
  bitsPrefix.disabled = false;
  whichClass.disabled = true;
})
});
