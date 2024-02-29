const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const imgAll = document.querySelectorAll("img");

// console.log(imgAll);

const cardAll = document.querySelectorAll(".col-md-4");
const btnHide = document.querySelectorAll(".btn-danger");

const allText = document.querySelectorAll(".text-id"); //recuperiamo il testo 9 mins

const form = document.getElementById("form"); //creazione campo di ricerca es.6
const input = document.getElementById("input");

form.onsubmit = function (e) {
  e.preventDefault();
  call(input.value);
};

btn1.onclick = function () {
  call("calabria");
};
btn2.onclick = function () {
  call("cat");
};

function call(nome) {
  fetch(`https://api.pexels.com/v1/search?query=[${nome}]`, {
    method: "GET",
    headers: {
      Authorization: "A6HFkBEGNJXaLFL26I4o4aMj1s558AX09slicg3LuXquoD2eIoDKZR9N",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE NEL REPERIMENTO DATI");
      }
    })
    .then((oggetti) => {
      console.log(oggetti);

      imgAll.forEach((img, index) => {
        img.setAttribute("src", oggetti.photos[index].src.tiny);
      });

      //For each per sostituire 9 mins nell'id delle foto

      allText.forEach((id, index) => {
        id.textContent = oggetti.photos[index].id;
      });

      //   console.log(oggetti.photos);
    })
    .catch((error) => console.log(error));
}

//Funzione che elimina le card

btnHide.forEach((btnHide, index) => {
  //hide,index(secondo valore) parametri a piacimento

  btnHide.onclick = () => {
    cardAll[index].remove();
  };
});
