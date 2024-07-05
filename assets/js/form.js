const submitBtn = document.querySelector("#submit-btn")
const usernameForm = document.querySelector('#username')
const titleForm = document.querySelector("#title")
const contentForm = document.querySelector('#content')

let blogPosts = []

readLocalStorage()

function readLocalStorage(){
    if (JSON.parse(localStorage.getItem('blogPosts')) !== null){
        blogPosts = JSON.parse(localStorage.getItem('blogPosts'))
}}


submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    let newPost = {
        username: '',
        title: '',
        content:''
    }
    if(usernameForm.value == '' || titleForm.value == '' || contentForm.value == ''){
        alert('All forms must be filled out')
    } else {
        newPost.username = usernameForm.value
        newPost.title = titleForm.value
        newPost.content = contentForm.value
        
        blogPosts.push(newPost)

        localStorage.setItem('blogPosts', JSON.stringify(blogPosts))
        window.location.href = './blog.html';
    }
})