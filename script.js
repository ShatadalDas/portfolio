function toggle_theme() {
    var d = document.getElementById("dark");
    var l = document.getElementById("light");
    var card1 = document.getElementById("c1");
    var card2 = document.getElementById("c2");
    var card3 = document.getElementById("c3");
    var cont = document.getElementById("content");

    if(card1.classList.contains('card') && cont.classList.contains('content-dark'))
    {
      card1.classList.remove("card");
      card1.classList.add("clight");
      card2.classList.remove("card");
      card2.classList.add("clight");
      card3.classList.remove("card");
      card3.classList.add("clight");
      cont.classList.remove("content-dark");
      cont.classList.add("content-light");
      d.style.display = "inline";
      l.style.display = "none";
    }
    else {
      card1.classList.remove("clight");
      card1.classList.add("card");
      card2.classList.remove("clight");
      card2.classList.add("card");
      card3.classList.remove("clight");
      card3.classList.add("card");
      cont.classList.remove("content-light");
      cont.classList.add("content-dark");
      l.style.display = "inline";
      d.style.display = "none";
      }
  }