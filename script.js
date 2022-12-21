console.log("hello welcome")
const sidebar = document.querySelector(".sidebar");

const closemanu = document.querySelector(".fa-xmark");
const openmanu = document.querySelector(".fa-bars");


openmanu.addEventListener("click" , () =>{
    sidebar.style.right = "0"
    console.log("open main manu")
})


closemanu.addEventListener("click" , () =>{
    sidebar.style.right = "-200px"
    
})




