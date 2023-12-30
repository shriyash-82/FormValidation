
let formData = document.querySelector(".form");
let submitBtn = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message")
let emptyFieldMessages = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");
let firstName,lastName,password,email;
let ftarget,ltarget,ptarget,etarget;
let fnFlag,lnFlag,pFLag,eFlag;
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

 for ( let err of errorMessages ){
      err.classList.add('d-none');
 }
 for ( let emptyField of emptyFieldMessages ) {
    emptyField.classList.add('d-none');
 }
formData.addEventListener( "keyup" ,(e) => {
    e.preventDefault();
    field = e.target.dataset.key;
    switch(field) {
        case "firstName" :
             firstName = e.target.value;
             ftarget = e.target;
             break;
        case "lastName" : 
              lastName = e.target.value;
              ltarget = e.target;
              break;
        case "email" :
              email = e.target.value;
              etarget = e.target;
              break;
        case "password" :
              password = e.target.value;
              ptarget = e.target;
              break;
        default :
         firstName = lastName = email = password = "";
         break; 
    }
})
// handling submit btn
submitBtn.addEventListener( 'click', (event)=>{
    event.preventDefault();
    // validating first name
    if( firstName ){
        emptyFieldMessages[0].classList.add("d-none");
       if(!nameRegex.test(firstName)){
         errorMessages[0].classList.remove('d-none');
         ftarget.classList.add('error')
         fnFlag = false;
       }
       else {
        errorMessages[0].classList.add('d-none');
        fnFlag = true;
       }
    }else {
        emptyFieldMessages[0].classList.remove('d-none');
    }
    // validating last name
    if( lastName ){
        emptyFieldMessages[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
         errorMessages[1].classList.remove('d-none');
         ltarget.classList.add('error')

         lnFlag = false;
        }else {
            errorMessages[1].classList.add('d-none');
            lnFlag = true;
        }
    }
    else {
        emptyFieldMessages[1].classList.remove('d-none');
    }
    // validating e-mail
    if( email ){
        emptyFieldMessages[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            errorMessages[2].classList.remove('d-none');
            etarget.classList.add('error');
            eFlag = false;

        }else {
            errorMessages[2].classList.add('d-none');
            eFlag = true;
        }
    }else {
        emptyFieldMessages[2].classList.remove('d-none');
    }
    
    // validating password 
    if( password ){
        emptyFieldMessages[3].classList.add("d-none");
        if(!pwdRegex.test(password)){
            errorMessages[3].classList.remove('d-none');
            ptarget.classList.add('error');
            pFLag = false;
        }
        else{
            errorMessages[3].classList.add('d-none');
            pFLag = true;
        }
    }else{
        emptyFieldMessages[3].classList.remove('d-none');
    }
    console.log("done")
    console.log(fnFlag,lnFlag,eFlag,pFLag)
    // if all field's were fyn then route to new page
    if( fnFlag && lnFlag && eFlag && pFLag ){
        ftarget.value = ltarget.value = etarget.value = ptarget.value = "";
        window.location.href = "success.html";
    }
})
  // handling show password btn 
  showPasswordBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(ptarget.getAttribute('type') === "text"){
        ptarget.setAttribute('type','password');
    } 
    else {
        ptarget.setAttribute('type','text');
    }
  })