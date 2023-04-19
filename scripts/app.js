const usersList = [ "lorenzo@gmail.com", 
                    "andrea@gmail.com", 
                    "mario@gmail.com",
                    "giacomo@gmail.com",
                    "alessia@gmail.com",];

let nameAccount;

function updateAccount(){
    const elResult = document.getElementsByClassName("card-footer")[0];

    if(checkUserLogin()){
        elResult.innerHTML = `
            <span class="text-success">Account trovato: </span>${nameAccount}
        `;
    }else{
        elResult.innerHTML = `
            <span class="text-danger">ERRORE: </span> account non trovato. Riprova.
        `;
    }
}

function checkUserLogin(){
    const elInput = document.getElementById("floatingInput");

    for(user of usersList){
        if(user == elInput.value){
            nameAccount = elInput.value.split("@")[0];
            return true;
        }
    }

    return false;
}