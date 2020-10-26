const submit = $("#submitButton")
const password = $("#password")
const name = $("#name")
const email = $("#email")
const form = $('#formId')

const passwordError = $("#passwordError")
const nameError = $("#nameError")
const emailError = $("#emailError")

let passwordIsFill;
let nameIsFill;
let emailIsFill;

$(window).on('load', function(){
    passwordUpdate();
    nameUpdate();
    emailUpdate();
    submitUpdate();
    removeErrors();
})

password.keyup((e)=>{
    passwordUpdate();
    submitUpdate();
})

name.keyup((e)=>{
    nameUpdate();
    submitUpdate();
})

email.keyup((e)=>{
    emailUpdate();
    submitUpdate();
})

passwordUpdate = function(){
    passwordIsFill = password.val().toString().length !== 0
    
    if(passwordIsFill) {
        password.addClass('valid')
        password.removeClass('invalid')
    }
    else { 
        password.addClass('invalid')
        password.removeClass('valid')
    }
}

nameUpdate = function(){
    nameIsFill = name.val().toString().length !== 0
    if(nameIsFill) {
        name.addClass('valid')
        name.removeClass('invalid')
    }
    else { 
        name.addClass('invalid')
        name.removeClass('valid')
    }
}

emailUpdate = function(){
    emailIsFill = email.val().toString().length !== 0
    
    if(emailIsFill) {
        email.addClass('valid')
        email.removeClass('invalid')
    }
    else { 
        email.addClass('invalid')
        email.removeClass('valid')
    }
}

submitUpdate = function() {
    submit.attr('disabled', !passwordIsFill || !nameIsFill || !emailIsFill) 
}

removeErrors = function() {
    passwordError.hide();
    emailError.hide();
    nameError.hide();
    email.removeClass('invalid');
    name.removeClass('invalid');
    password.removeClass('invalid');
}

form.submit(function (e) {
    if(!passwordIsFill || !nameIsFill || !emailIsFill) {
        alert("Invalid form !")
        removeErrors();
        e.preventDefault()
        if(!passwordIsFill)
            passwordError.show()
        if(!nameIsFill)
            nameError.show()
        if(!emailIsFill)
            emailError.show()
    } else if(email.attr('type') !== "email"){
        alert("Type error on email input !")
        email.attr('type', "email")
        e.preventDefault()
    } else {
        alert("It's all good !")
    }
})