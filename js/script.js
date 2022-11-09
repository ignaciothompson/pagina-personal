function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function copiarMail() {
    navigator.clipboard.writeText("chonathomp@gmail.com");
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "chonathomp@gmail.com" 
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }