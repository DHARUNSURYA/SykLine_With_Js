//select add button
var addbtn=document.querySelector(".add")
var overlayer=document.querySelector(".overlayer")
var popbox=document.querySelector('.pop-box')

addbtn.addEventListener("click",function(){
    overlayer.style.display='block'
    popbox.style.display='block'
})
// select cancal btn
var cancal=document.getElementById('Cancal')

cancal.addEventListener("click",function(event){
    event.preventDefault() 
    overlayer.style.display='none'
    popbox.style.display='none'
})
//select container content book-title book-author des add
 
var container = document.querySelector('.container');
var content=document.querySelector(".content")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var des=document.getElementById('des')
var addcon=document.getElementById('Add')

addcon.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute("class","content")
    container.appendChild(div); 
    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h3>${bookauthor.value}</h3>
    <p>${des.value}</p> <button id="Delete" onclick='deletee(event)'>Delete</button>
    `;
    overlayer.style.display='none'
    popbox.style.display='none'
})
function deletee(event) {
    event.target.parentElement.remove();
  }