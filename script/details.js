function getData(){
    var idCard = 1
    data.events.map(evento => evento.id = idCard++)

    var id = location.search.split("?id=").filter(Number)

    var selectID = Number(id[0])
    console.log(selectID)

    var evento = data.events.find((evento) => {
        return evento.id == selectID
    })

var templateHTML = `
<div class="card border-primary   mb-3 mt-3 p-3" style="max-width: 100%, font-size:1.2rem">
    <div class="row g-3">
            <div class="col-md-5 align-self-center">           
                <img src="${evento.image}" class="align-self-center" style="width:100%; height: auto;" alt="img">
            </div>
        <div class="col-md-7">
        <div class="card-body">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <p class="card-text">${evento.date}</p>
                    <p class="card-foot">$${evento.price}</p>
                    <p class="card-text">${evento.category}</p>
                    <p class="card-text">${evento.capacity}</p>
                    <p class="card-text">${evento.assistance}</p>
            <div class="d-flex flex-row justify-content-center">
                    <a href="./index.html" class="btn btn-primary">Home</a>
            </div>               
        </div>
    </div>
</div>`


document.getElementById('tarjetasDetail').innerHTML = templateHTML
}
getData ()