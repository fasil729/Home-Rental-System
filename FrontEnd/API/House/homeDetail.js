
'use strict!';

const homeId = localStorage.homeDetailId;
const Token = localStorage.getItem('access_token');
console.log(homeId,Token)
const userId = localStorage.getItem('userId')
const detailsPhotoDiv = document.getElementById('test')

async function getDetails() {
    let url = `http://localhost:3336/house/${homeId}/lesse/${userId}`;

    try {
        let res = await fetch(url,{
            headers: {
                Authorization: `Bearer ${Token}`
            }
        });
        if (res.status != 200) {
            window.location.href = 'lesseLogin.html';
        }
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
console.log(localStorage)
async function renderDetails() {
   
    let details = await getDetails();
    console.log(details)
    // for( let photo in details){
    //     document.getElementById('test').innerHTML += `
    //         <div class="col-sm-4 images">
    //         <img class=" image" src="${details.image}" alt="house image3"> 
    //         </div> `
    //     } 
    let html = '';
    
        let htmlSegment =`
        <div class="start-deal-holder col-sm-6"> 
        <p> We hope you love the house.If so click the button below and get the owner's contact</p>
        </div>
        <button class=" btn btn-primary col-sm-3" id="start-deal">Start Deal</button>
        <div id="detailed"  class="detailed" >
        <h1 id = 'statuss'> </h1>
        <h6>here is owner's Informaiton</h6>
        <p>Phone Number:<b>${details.lesser.Phone_Number}</b></p>
        <p>Email: <b>${details.lesser.Email}</b></p>
        <button class="btn btn-danger m-3" id="Report">Report</button>
        <button class="btn btn-danger m-3" id="like">like</button>
        </div> `
        document.getElementById('detailed_container').innerHTML = htmlSegment;

        let data1=`
                <div class="col-sm-12 text-center mb-5 house_information py-4" >
                <h1>House Information</h1>
                <p>Owners Name: <b>${details.lesser.First_Name} ${details.lesser.Last_Name}</b></p>
                <p>Sub City: <b>${details.Sub_City}</b></p>
               <p>Wereda: <b>${details.Wereda} </b> </p>
               <p>Kebele: <b>${details.Kebele} </b> </p>
               <p>Size: <b>${details.Size} </b> </p>
               <p>price: <b>${details.Price} </b> </p>
                </div>  
                 ` 
        document.getElementById('target').innerHTML = data1;
            
            
    


const btnn = document.getElementById('start-deal');
const contact = document.getElementById('detailed');
const report = document.getElementById('Report');
const startDealCard =document.querySelector('.start-deal-holder')
const likeButton = document.getElementById('like');
// let deals = Number (document.getElementById('numberOfDeals'));


// console.log(typeof( Number(deals.innerText)))

console.log()
let deals = 0;

if(details.id == 2){
    btnn.addEventListener(('click'),() =>{
        document.getElementById('statuss').innerHTML = 'you start dealing';
        btnn.classList.toggle('hidden');
        startDealCard.classList.toggle('hidden');
        contact.classList.toggle('contact_info');
        deals += 1;
        console.log(deals)
        document.getElementById('numberOfDeals').innerText = deals; 
    }) 
} else if (details.id == 1){
    document.getElementById('statuss').innerHTML = 'you had already start deal';
    btnn.classList.add('hidden');
    startDealCard.classList.add('hidden');
    contact.classList.add('contact_info');  
}

if(true){
    report.addEventListener(("click"),() =>{
        report.classList.add('disabled');
    })
}


if(true) {
    likeButton.addEventListener(("click"),() =>{
        likeButton.classList.toggle('disabled');
    })
}

for (let value in details.Home_Photo){
    console.log(value,"here")
       if (value  == 'houseId' || value == 'id' || value == 'Home_license' || value == 'Toilet'){
        continue
       }
       console.log(details.Home_Photo[value])
        const item = document.createElement('div');
        item.classList.add('col-md-4')
        item.innerHTML += `
            <div><h6 class="pb-3 text-center">${value}</h6></div>
            <div class="images">
            <img class="img-fluid rounded " src="${details.Home_Photo[value]}" style="height:45vh; width:auto" alt="house image3"> 
            </div>`
        detailsPhotoDiv.appendChild(item) 
}
}

// ${details.Home_Photo[value]}

renderDetails();


// photosFetch();

