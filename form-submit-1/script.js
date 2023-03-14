let userFormDOM = document.getElementById('userForm')
userFormDOM.addEventListener('submit',userSubmit );
function userSubmit(e){
    e.preventDefault();
    const usernameDOM = document.getElementById('username');
    const emailDOM = document.getElementById('email');
    const nameDOM = document.getElementById('name');
    const passwordDOM = document.getElementById('password');
    let message = document.getElementById('message');
    const alert = document.querySelector('.alert');
if(usernameDOM.value.length == 0 || !emailDOM.value.includes('@') || nameDOM.value.length == 0 || passwordDOM.value.length == 0){

alert.classList.add('show', 'alert-danger');

setTimeout(function(){ alert.classList.remove('show', 'alert-danger') }, 3000);
    
    
  
    alert.innerHTML =" İŞLEM HATALI"
} else{
    alert.classList.add('show', 'alert-success');

setTimeout(function(){ alert.classList.remove('show', 'alert-success') }, 3000);
    alert.innerHTML = "İŞLEMLERİNİZ BAŞARIYLA KAYDEDİLDİ"

}
    message.innerHTML = `Kullanıcı bilgileriniz ${usernameDOM.value} Mailiniz: ${emailDOM.value}, Adınız ${nameDOM.value}`
    

   
}

