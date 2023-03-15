// fonction pour ajouter les données dans le tableau et les stocker localement
function addData() {
  // récupérer les valeurs des inputs
  let date = document.getElementById("Datetime").value;
  let operation = document.getElementById("operation").value;
  let montant = parseFloat(document.getElementById("num1").value);
  let taxe = parseFloat(document.getElementById("num2").value);
  let montantHorsTaxe = montant / (1 + taxe / 100);
  let montantTotal = montant;

  // créer une nouvelle ligne pour le tableau
  let row = document.createElement("tr");
  row.innerHTML = `<td>${date}</td><td>${operation}</td><td>${montant}</td><td>${taxe}</td><td>${montantHorsTaxe.toFixed(2)}</td><td>${montantTotal.toFixed(2)}</td>`;

  // ajouter la nouvelle ligne dans le tableau
  let tableBody = document.getElementById("tableBody");
  tableBody.appendChild(row);

  // stocker les données localement
  let data = {
      date: date,
      operation: operation,
      montant: montant,
      taxe: taxe,
      montantHorsTaxe: montantHorsTaxe,
      montantTotal: montantTotal
  };

  let allData = JSON.parse(localStorage.getItem("data")) || [];
  allData.push(data);
  localStorage.setItem("data", JSON.stringify(allData));

  // réinitialiser les valeurs des inputs
  document.getElementById("Datetime").value = "";
  document.getElementById("operation").value = "";
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

let data = JSON.parse(localStorage.getItem("data"));

// vérifier si des données ont été stockées localement
if (data) {
    // parcourir les données et les afficher dans la console
    data.forEach((item) => {
        console.log(item.date);
        console.log(item.operation);
        console.log(item.montant);
        console.log(item.taxe);
        console.log(item.montantHorsTaxe);
        console.log(item.montantTotal);
    });
} else {
    console.log("Aucune donnée trouvée.");
}

const body = document.querySelector("body")
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });
      searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove("close");
      });

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
      });

