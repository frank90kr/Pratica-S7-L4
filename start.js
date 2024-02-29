const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const imgAll = document.querySelectorAll("img");

// console.log(imgAll);

const cardAll = document.querySelectorAll(".col-md-4");
const btnHide = document.querySelectorAll(".btn-danger");

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
