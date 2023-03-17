const tarjetasIndex = document.getElementById("tarjetas")

let tarjetasCargadas = crearTarjetas(data.events);

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
    return tarjetas;
}

function details(id) {
  window.location.href = `./details.html?id=${id}`;
}

tarjetasIndex.innerHTML = tarjetasCargadas;


//////busqueda////


const contenedor = document.getElementById('contenedor')
const contenedorCheck = document.getElementById('checkContainer')
const input = document.querySelector('input')

// el antes
/* input.addEventListener('input',()=>{
    let primerFiltro = filtrarPorTexto(people,input.value)
    let segundoFiltro = filtrarPorPais(primerFiltro)
    pintarPersonas(segundoFiltro)
}) */

/* contenedorCheck.addEventListener('change',()=>{
    let primerFiltro = filtrarPorTexto(people,input.value)
    let segundoFiltro = filtrarPorPais(primerFiltro)
    pintarPersonas(segundoFiltro)
}) */

// el despues
input.addEventListener('input',superFiltro)

contenedorCheck.addEventListener('change',superFiltro)


function superFiltro(){
    let primerFiltro = filtrarPorTexto(_id,input.value)
    let segundoFiltro = filtrarPorID(primerFiltro)
    pintarPersonas(segundoFiltro)
}


pintarPersonas(people)
crearCheckBoxes(people)


function crearCheckBoxes(array){
    let arrayEventos = array.map(persona => data.events)
    /* console.log(arrayCountrys) */
    let setEventos = new Set(arrayEventos)
    /* console.log(setCountry) */
    let arrayChecks = Array.from(setEventos)
    /* console.log(arrayChecks) */
    let checkboxes = ''
    arrayChecks.forEach(evento => {
        checkboxes += `
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
    })
    contenedorCheck.innerHTML = checkboxes
}

function pintarPersonas(array){
    if(array.length == 0){
        contenedor.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`
        return
    }
    let tarjetas = ''
    array.forEach(evento => {
        tarjetas += `
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
    })
    contenedor.innerHTML = tarjetas
}

function filtrarPorTexto(array,texto){
    let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

function filtrarPorEvento(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes);
    let arrayChecks = Array.from(checkboxes)
    let arrayChecksChecked = arrayChecks.filter(check => check.checked)
    console.log(arrayChecksChecked);
    let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
    console.log(arrayChecksCheckedValues);
    let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.events))
    console.log(arrayFiltrado);
    if(arrayChecksChecked.length > 0){
        return arrayFiltrado
    }
    return array
}