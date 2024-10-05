let card = document.querySelectorAll(".card")
let circle = document.querySelectorAll(".circle")
let headers = document.querySelectorAll(".name")
let content = document.querySelectorAll(".content")
// circle.addEventListener('click', () => {
//     circle.classList.toggle("active");
// })

card.forEach(item =>{
    item.addEventListener('click', () => {
        item.classList.toggle("active");
    })

})       
// headers.forEach(item =>{
//     item.classList.toggle("hide");
// })