
/////-----Heart----///////
let heartIcons = document.querySelectorAll(".heart-icon");
for(let i = 0; i < heartIcons.length; i++){
    let heartIcon = heartIcons[i];
    heartIcon.addEventListener("click", handleHeartIconClick);
}

function handleHeartIconClick(e){
    let heartIcon = e.currentTarget; //Srce na koje smo sad klikli
    if(heartIcon.classList.contains("far")){ //"prazno" srce
        heartIcon.classList.remove("far");
        heartIcon.classList.add("fas");
    }
    else {
        heartIcon.classList.remove("fas");
        heartIcon.classList.add("far");
    }
}

/////------Dinamičko kreiranje postova//////------
let newPost= document.querySelector("#add-button-container");

newPost.addEventListener("click",(e)=>{
    let location = prompt("unesi lokaciju", "lokacija");
    if(!location) {return}

    let imageUrl = prompt("unesi url slike", "images/profile.jpg");
    if(!imageUrl) {return}

    let hashtags = prompt("unesi tagove", "#domaci");
    if(!hashtags) {return}

    let postTemplate = document.querySelector("#post-template");
    let postElement = document.importNode(postTemplate.content, true);


    postElement.querySelector(".location").textContent=location;
    postElement.querySelector(".post-picture").src=imageUrl;
    postElement.querySelector(".hashtag-container p").textContent=hashtags;

    postElement.querySelector(".heart-icon").addEventListener("click",handleHeartIconClick);
    postElement.querySelector(".heart-icon").addEventListener("click",handleHeartIncrement);
    postElement.querySelector(".comment-icon").addEventListener("click",handleCommentClick);
    postElement.querySelector(".comment-input").addEventListener("keydown",handleCommentEnter);
    postElement.querySelector(".bookmark-icon").addEventListener("click",handleBookmarkIncrement);

    let Container=document.querySelector("#post-container");
    let post=document.querySelector(".post")
    Container.insertBefore(postElement,post);
});

//////-----Like increment------/////
let heartIncIcons = document.querySelectorAll(".post .heart-icon");
for(let i=0;i<heartIncIcons.length;i++){
   let heartIncIcon=heartIncIcons[i];
    heartIncIcon.addEventListener("click",handleHeartIncrement);
}

function handleHeartIncrement(e){
    let heartIncIcon=e.currentTarget;
    if(heartIncIcon.classList.contains("fas"))
    {
        let parent=heartIncIcon.parentElement.parentElement.parentElement;
        let numLeft=parent.querySelector(".post-liked p:last-child");
        numLeft.textContent=Number(numLeft.textContent)+1;
        let numRight=document.querySelector("#likes-num");
        numRight.textContent=Number(numRight.textContent)+1;

    }
    else
    {
        let parent=heartIncIcon.parentElement.parentElement.parentElement;
        let numLeft=parent.querySelector(".post-liked p:last-child");
        numLeft.textContent=Number(numLeft.textContent)-1;
        let numRight=document.querySelector("#likes-num");
        numRight.textContent=Number(numRight.textContent)-1;
    }
}

////////------Bookmark---------//////

let bookmarks = document.querySelectorAll(".post .bookmark-icon");
for(let i=0;i<bookmarks.length;i++){
   let bookmark=bookmarks[i];
    bookmark.addEventListener("click",handleBookmarkIncrement);
}

function handleBookmarkIncrement(e){
    let bookmark=e.currentTarget;
    if(bookmark.classList.contains("far"))
    {
        bookmark.classList.remove("far");
        bookmark.classList.add("fas");
        let bookmarkNum=document.querySelector("#bookmarks-num");
        bookmarkNum.textContent=Number(bookmarkNum.textContent)+1;

    }
    else
    {
        bookmark.classList.remove("fas");
        bookmark.classList.add("far");
        let bookmarkNum=document.querySelector("#bookmarks-num");
        bookmarkNum.textContent=Number(bookmarkNum.textContent)-1;
    }
}

///////-------Comment icon----/////////
let comments=document.querySelectorAll(".comment-icon");
for(let i=0;i<comments.length;i++){
    let comment=comments[i];
comment.addEventListener("click",handleCommentClick);
}
function handleCommentClick(e)
{
    let comment=e.currentTarget;
    let parent=comment.parentElement.parentElement.parentElement;
    let commentBar=parent.querySelector(".comment-input");
    commentBar.focus();
}


///////-----Comment enter----//////////
let Comments=document.querySelectorAll(".comment-input");
for(let i=0;i<Comments.length;i++){
    let comment=Comments[i];
    comment.addEventListener("keydown",handleCommentEnter);
}

function handleCommentEnter(e)
{
    
    if(e.keyCode==13)
    {
        e.preventDefault();
        let comment=e.currentTarget;
        let commentTemplate=document.querySelector("#comment-template");
        let commentElement=document.importNode(commentTemplate.content,true);
        if(comment.value)
        {
            let user=document.querySelector("#profile-name p");
            commentElement.querySelector(".comment-user").textContent=user.textContent;
            commentElement.querySelector(".comment-text").textContent=comment.value;
            let parent=comment.parentElement;
            parent.insertBefore(commentElement,comment);
            comment.value="";
        }
    }
}

/////----Delete suggestion------/////

let deleteBtns=document.querySelectorAll(".delete-button");
for(let i=0;i<deleteBtns.length;i++){
    let deleteBtn=deleteBtns[i];
    deleteBtn.addEventListener("click",handleDeleteIconClick);
}

function handleDeleteIconClick(e)
{
    let x=e.currentTarget;
    let parent=x.parentElement;
    parent.classList.add("hidden");
    let userLeft=parent.querySelector(".suggested-left-profile p");
    let userRight=document.querySelectorAll(".suggested-right-profile p");
    for(let i=0; i<userRight.length; i++){
        if(userRight[i].textContent==userLeft.textContent)
        {
            userRight[i].parentElement.parentElement.classList.add("hidden");
        }
    }
}

//////----Follow button-----//////

let followBtns=document.querySelectorAll(".clickable-follow");
for(let i=0;i<followBtns.length;i++){
    let followBtn=followBtns[i];
    followBtn.addEventListener("click",handleFollowClick);
}

function handleFollowClick(e)
{
    let fol=e.currentTarget;
    let followNum=document.querySelector("#following-num");
    followNum.textContent=Number(followNum.textContent)+1;
    let parent=fol.parentElement.parentElement;
    parent.classList.add("hidden");
    let userLeft=parent.querySelector(".suggested-left-profile p");
    let userRight=document.querySelectorAll(".suggested-right-profile p");
    for(let i=0;i<userRight.length;i++){
        if(userRight[i].textContent==userLeft.textContent)
        {
            userRight[i].parentElement.parentElement.classList.add("hidden");
        }
    }
}

///////-----Suggested right follow-----//////

let followRightBtns=document.querySelectorAll(".user-follow-right");
for(let i=0;i<followRightBtns.length;i++){
    let followRightBtn=followRightBtns[i];
    followRightBtn.addEventListener("click",handleFollowRightClick);
}

function handleFollowRightClick(e)
{
    let fol=e.currentTarget;
    let followNum=document.querySelector("#following-num");
    followNum.textContent=Number(followNum.textContent)+1;
    let parent=fol.parentElement;
    parent.classList.add("hidden");
    let userLeft=document.querySelectorAll(".suggested-left-profile p");
    let userRight=parent.querySelector(".suggested-right-profile p");
    for(let i=0;i<userLeft.length;i++){
        if(userLeft[i].textContent==userRight.textContent)
        {
            userLeft[i].parentElement.parentElement.classList.add("hidden");
        }
    }
}