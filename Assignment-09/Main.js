function generateHeader() {
  var headerContent = '<header>\
    <a href="Index.html"></a>\
    <a href="index.html"> <img src="Images/LogoColor.png" alt="Logo in Color" width="250px" height="auto" class="logo"></a>\
    <div class="dropdown">\
      <button class="dropbtn">Menu</button>\
      <div class="dropdown-content">\
        <a href="index.html">Home</a>\
        <a href="About.html">About</a>\
        <a href="Commissions.html">Commissions</a>\
        <a href="Portfolio.html">Portfolio</a>\
      </div>\
    </div>\
    <br><br><br>\
   <bar><hr style="height: 5px" color="#243f5c"></bar>\
  </header>';
  return headerContent;
}

function disableSubmit() {
  document.getElementById("Submit").disabled = true;
  }


window.onload = function() {
  var headerDiv = document.getElementById("header");
  headerDiv.innerHTML = generateHeader();
  disableSubmit(); 
  

};
