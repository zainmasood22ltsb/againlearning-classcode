let abc = document.querySelector("#abc");
function expand (){
    let content = document.querySelector("#content");
    if(abc.innerHTML === "see less"){
        content.innerHTML = "welcome ther eis mor econtent ";
        abc.innerHTML = "see more";
    }
    else{
        content.innerHTML = "welcome there is more content";
        abc.innerHTML= " see more"
    }
}