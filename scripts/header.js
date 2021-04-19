
/////////---------///////

let searchBox=document.querySelector("#search-box");
searchBox.addEventListener("keyup",handleSearchBox);

let posts=document.querySelectorAll(".post");
function handleSearchBox(e)
{
    let currentValue=e.currentTarget.value;
    for (let i=0; i<posts.length; i++)
    {
        let post=posts[i];
        if(post.textContent.indexOf(currentValue)>=0)
        {
            post.classList.remove("hidden");
        }
        else
        {
            post.classList.add("hidden");
        }
    }
}

/////////----Liked posts-----///////
let headerHeartIcon = document.querySelector("#header-content .heart-icon");
headerHeartIcon.addEventListener("click",handleHeaderHeartIconClick);


function handleHeaderHeartIconClick(e)
{
    let heartIcons=document.querySelectorAll(".post .heart-icon");
    for(let i = 0; i < heartIcons.length; i++)
    {
        let heartIcon=heartIcons[i];
        let post=heartIcon.parentElement.parentElement.parentElement.parentElement;
        if(headerHeartIcon.classList.contains("fas"))
        {
            if(heartIcon.classList.contains("fas"))
            {
                post.classList.remove("hidden");
            }
            else
            {
                post.classList.add("hidden");
            }
        }
        else
        {
            post.classList.remove("hidden");
        }
    }
}

///////----User icon----///////
let userIcon = document.querySelector(".user-icon");
userIcon.addEventListener("click", handleUserIconClick);
    

let accNames=document.querySelectorAll(".accountName-container")

function handleUserIconClick(e){
    if(userIcon.classList.contains("far"))
    { 
        userIcon.classList.remove("far");
        userIcon.classList.add("fas");
        let currentUser=document.querySelector("#profile-name p");
        let users=document.querySelectorAll(".username")
        for (let i=0; i<users.length; i++){
            let user=users[i];
            if(user.textContent!=currentUser.textContent)
            {
                let parent=user.parentElement.parentElement.parentElement;
                parent.classList.add("hidden");
            }
        }
       
    }
    else 
    {
        userIcon.classList.remove("fas");
        userIcon.classList.add("far");
        let currentUser=document.querySelector("#profile-name p");
        let users=document.querySelectorAll(".accountName-text p");
        for (let i=0; i<users.length; i++){
            let user=users[i];
                let parent=user.parentElement.parentElement.parentElement;
                parent.classList.remove("hidden");
            
        }
    }
}

function showCurrentUser(e)
{
    for (let i=0; i<accNames.length; i++)
    {
        let accName=accNames[i];
        let post=accName.parentElement;
        if(accName.textContent.indexOf("dani_283")>=0)
        {
            post.classList.remove("hidden");
        }
        else
        {
            post.classList.add("hidden");
        }
    }
}

