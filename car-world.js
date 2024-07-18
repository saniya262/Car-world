// store 

function storeRecords(){

    car={

        carbrand:cbrand.value,
        carpri:cprice.value,
        ckey:key.value
    }

    if(car.carbrand==""|| car.carpri=="" || car.ckey=="" ){

        alert('Please fill the missing field')
    }
    else {

        if(car.ckey in localStorage){

            alert('already existed key value')
        }
        else{
            localStorage.setItem(car.ckey,JSON.stringify(car))
            alert('Succsess fully added')
        }
    }
}


// retreive

function retrieveRecords(){


let data= key2.value
let car=JSON.parse(localStorage.getItem(data))


details.innerHTML=`
    <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${car.carbrand}</li>
    <li class="list-group-item">${car.carpri}</li>
    <li class="list-group-item">${car.ckey}</li>
  </ul>
</div>`


}


// remove single key

function removeRecords(){

    let key=remove.value;

    if(localStorage.getItem(key)!==null){

        localStorage.removeItem(key)
        alert(`data of key ${key}is removed`)
    }
    else{
        alert('no data is found')
    }

}

// clear all data

function clearAll(){

    localStorage.clear()
    alert('all data remove')
}
