const tarjetasIndex = document.getElementById("tarjetas")

//let tarjetasCargadas = crearTarjetas(data.events);

function crearTarjetas(lista){
    let tarjetas = "";

    for (let evento of lista){
      tarjetas +=`
      <div class="card event__card border-0 text-center">
        <div class="col">
            <div class="card h-100" style="margin-left: 90px">
                <img class="card-img rounded" src=" ${evento.image} "width="100" height="200">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Name: ${evento.name}</h5>
                    <p class="card-text">Description: ${evento.description}</p>
                    <p class="card-text">Date: ${evento.date}</p>
                    <p class="card-foot">$${evento.price}</p>
                    <input type="button"  onclick="details('${evento._id}')" value="see more" class="btn mt-auto">      
                </div>
            </div>
          </div>
       </div>
    </div> `
  }
  tarjetasIndex.innerHTML = tarjetasCargadas;
   // return tarjetas;
}

function details(id) {
  window.location.href = `./details.html?id=${id}`;
}
