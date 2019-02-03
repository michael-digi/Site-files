document.addEventListener('DOMContentLoaded', function() {

  const dropdown = document.getElementById('my-dropdown');
  const dropbtn = document.getElementById('dropbtn');

  dropbtn.addEventListener('click', function() {
    dropdown.classList.toggle('show');
  });

  document.addEventListener('click', function(e) {
    const inside = dropbtn.contains(e.target);
    if (!inside) {
      dropdown.classList.remove('show');
    }
  });

  const hamburger = document.getElementById('hamburger');
  const topnavbar = document.getElementById('this-navbar');

    hamburger.addEventListener('click', function() {
      topnavbar.classList.toggle('responsive')
  });
});
