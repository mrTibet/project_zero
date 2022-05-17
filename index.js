const warehouse = []
let userName = document.getElementById('fname');
let userSurname = document.getElementById('lname');
let userEmail = document.getElementById('email');
let submitBtn = document.getElementById('submit')
let form = document.getElementById('fform');
let searchUser = document.getElementById('search');
let searchBtn = document.getElementById('sbutton')
let sdiv = document.body.querySelector('.showtime');
//testing array
let warehouseTwo = [{username:'Robert',lastname:'Polson',usermail:'robert@gmail.com'},
{username:'Anet',lastname:'Grimjow',usermail:'grimmy@gmail.com'},
{username:'Brittany',lastname:'Pat',usermail:'britpat@gmail.com'}];


 

//creating of object
function sendData(){
  let obj = {username: userName.value, lastname: userSurname.value, usermail:userEmail.value}
  warehouse.push(obj)
  form.reset()//чистка полів форми
}
submitBtn.addEventListener('click',sendData)

//find user function

function findUser(){
sdiv.firstElementChild.innerHTML = '';

  if(warehouse.length>0){
    
//створив окрему змінну для функції пошуку об'єкта. вона повертає об'єкт і потім вираз перевіряє чи є результат об'єктом. і каже про це. 
    let varil;
    varil = searchInObject();

    if(typeof(varil)==='object' ){
      for(key in varil){
        sdiv.firstElementChild.insertAdjacentHTML("afterbegin",`<li>${key} : ${varil[key]}</li>`)
      }
    }else{
      sdiv.firstElementChild.insertAdjacentHTML("afterbegin",'<li>no objects</li>')
    }
    
  }else{
    sdiv.firstElementChild.insertAdjacentHTML("afterbegin",'<p>warehouse is empty</p>')
    console.log('warehouse is empty')
  }
}

function searchInObject(){
  for(let i = 0; i< warehouse.length; i++){
    if(warehouse[i].username===searchUser.value || warehouse[i].lastname===searchUser.value || warehouse[i].usermail===searchUser.value){
      return warehouse[i]
    }
  }
}



searchBtn.addEventListener('click', findUser) 


