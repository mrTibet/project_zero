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
let warehouseTwo = [{name:'Robert',lastname:'Polson',email:'robert@gmail.com'},
{name:'Anet',lastname:'Grimjow',email:'grimmy@gmail.com'},
{name:'Brittany',lastname:'Pat',email:'britpat@gmail.com'}];

/*при натисканні клавіши сабміт 
функція створює обьект в середині массиву
 та додає туди необіхідні данні- виконано
 -додати строку для прізвищ -- done
 -зробити так щоб поле інпут очищалось після натискання сабміту -- done
 -колонка для відображення занотованого массиву
 -пошук занотованного та відображення його -- зробив
 -зберігання у локал сторадж
 -show list of all users
тестові мила та імена
Robert Polson
robert@gmail.com
--
Anet Grimjow
grimmy@gmail.com
--
Brittany Pat
britpat@gmail.com 
 */
function sendData(){
  let obj = {username: userName.value, lastname: userSurname.value, usermail:userEmail.value}
  warehouse.push(obj)
  form.reset()
}
submitBtn.addEventListener('click',sendData)

//find user function

function findUser(){
  for(let i = 0; i< warehouseTwo.length; i++){
    if(warehouseTwo[i].name===searchUser.value || warehouseTwo[i].lastname===searchUser.value || warehouseTwo[i].email===searchUser.value){
      console.log(warehouseTwo[i])
      //-результати мають виводитись на екран, а не в консоль--done
      //-вивід на екран має бути в лоігчному порядку
      //-
      for(key in warehouseTwo[i]){
        sdiv.firstElementChild.insertAdjacentHTML("afterbegin",`<li>${key} : ${warehouseTwo[i][key]}</li>`)
      }
    }
  }
}

searchBtn.addEventListener('click', findUser)