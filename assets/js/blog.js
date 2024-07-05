const backBtn = document.querySelector('#back-button')

let blogPosts = []

function start(){
    readLocalStorage()
}

function readLocalStorage(){
    
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'))
    for(let i = 0; i < blogPosts.length; i++){
        const newTitle = blogPosts[i].title
        const newContent = blogPosts[i].content
        const newUsername = blogPosts[i].username

        const postCard = document.createElement('container')
        const titleTag = document.createElement('h4')
        const contentTag = document.createElement('p')
        const signatureTag = document.createElement('p')

        const main = document.querySelector('main')

        postCard.classList.add('blog-post')
        titleTag.classList.add('post-title')
        contentTag.classList.add('post-content')
        signatureTag.classList.add('post-signature')

        titleTag.textContent = newTitle
        contentTag.textContent = newContent
        signatureTag.textContent = newUsername

        postCard.appendChild(titleTag)
        postCard.appendChild(contentTag)
        postCard.appendChild(signatureTag)
        
        main.appendChild(postCard)
    }
}


start()

backBtn.addEventListener('click', function(e){
    window.location.href = './index.html'
})
