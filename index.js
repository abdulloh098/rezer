let root = document.querySelector(".root")
const API_URL ="https://razer-api.onrender.com/devices";



async function apiGet() {
    const reponse = await fetch(API_URL);
    const data = await reponse.json();
    console.log(data);
    Add(data)
}


apiGet()

function Add(newData) {
    let html = '';
    newData.map((el) => {
        html += `
            <div class="card">

                <img src=${el.image} />
                <h3>${el.title.slice(0,50)}....</h3>
                <p>${el.description}</p>
                 <br>
                 <b>${el.category}</b>
                <h5>${el.price}</h5>
         
                <br/>
                <br/>
            </div>
            `
        root.innerHTML = html
    })
}



async function apiGetNot() {
    const reponse = await fetch(API_URL);
    const data = await reponse.json();
    console.log(data);
    AddNot(data)
}



function AddNot(newData) {
    let html = '';
    const filteredData = newData.filter((el)=> el.category ==="Laptop")
    filteredData.map((el) => {
        html += `
            <div class="card">
                <img src=${el.image} />
                <p>${el.description}</p>
                 <br>
                 <b>${el.category}</b>
                <h5>${el.price}</h5>
                <br/>
                <br/>
            </div>
            `
        root.innerHTML = html
    })
}