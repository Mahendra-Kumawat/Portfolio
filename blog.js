console.log("hello welcome to the blog section -----")

const blog_button = document.querySelector("#blog-btn1");
console.log(blog_button)
const blog_1 = document.querySelector("#blog-1")
console.log(blog_1)


function fetch_blog_data(){
    let url = "./blog1.txt"
    fetch(url).then((Response) =>{
        return Response.text()
    }).then((data) =>{
        console.log(data)
        blog_1.innerText = data
        blog_button.style.display = "none"
    })
}

blog_button.addEventListener("click" , () =>{
    fetch_blog_data()
})



// second blog part start here 
const blog2_button = document.querySelector("#blog-btn-2");
const blog_2 = document.querySelector("#blog-2")
console.log(blog_1)



console.log(blog2_button)

function blog2_data(){
    let url = "./blog2.txt"
    fetch(url).then((Response) =>{
        return Response.text()
    }).then((data) =>{
        console.log(data)
        blog_2.innerText = data
        blog2_button.style.display = "none"
    })
}


blog2_button.addEventListener("click" , () =>{
    blog2_data()
})