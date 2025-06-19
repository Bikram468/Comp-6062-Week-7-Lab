let element= document.querySelector("#numberInput")
element.addEventListener("input",function(){
    if (element.value<=-10 || element.value>=10)
        alert("The numbershould be between-10 and 10")
})
let fruits={
    name:'Apple',
    color:'Red',
    taste:"Sweet"
}
let fruitName=document.querySelector("#fruitName");

let fruitColor=document.querySelector("#fruitColor");

let fruitTaste=document.querySelector("#fruitTaste");

fruitName.innerHTML=`Name:${fruits.name}`
fruitColor.innerHTML=`Color:${fruits.color}`
fruitTaste.innerHTML=`Taste:${fruits.name}`

