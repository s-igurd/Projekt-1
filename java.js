// viser dagens meny
function showDagensMeny() {
    const meny = {
      1: "Salat med agurk, tomat og kylling 20 kr",
      2: "Ostesmørbrød laget med ost og skinke, krydret med oregano 25 kr",
      3: "Vegetar wraps med hummus og grønnsaker 15 kr",
      4: "Kyllinggryte med ris og grønnsaker 15 kr",
      5: "Pizza med pepperoni og mozzarella 20 kr"
    };
    
    const dag = new Date().getDay();
    const dagensMeny = meny[dag] || "Kantinen er stengt i helgene.";
    document.getElementById("dagens-meny").innerHTML = `<h2>Dagens meny</h2><p>${dagensMeny}</p>`;
  }
  showDagensMeny();


  console.log("Hei")