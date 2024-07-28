let about = document.querySelector(".about");
console.log(about);

let val = 1;
document.querySelector(".about-clk").addEventListener("click", () => {
    console.log("clicked");
    if (val === 0) {
        about.style.display = "none";
        val = 1;
    } else {
        about.style.display = "block";
        val = 0;
    }
});

// Corrected part for showing modal after a delay
let modal = document.querySelector(".cookiesContent");
setTimeout(() => {
    modal.style.visibility = "visible";
}, 8000);


document.querySelector(".accept").addEventListener("click",()=>{
    modal.style.visibility = "hidden";
})
document.querySelector(".close").addEventListener("click",()=>{
    modal.style.visibility = "hidden";
})
document.querySelector(".signup-button").addEventListener("click",()=>{
    document.querySelector(".screen").style.display="block";
})

document.querySelector(".login__submit").addEventListener("click",()=>{
    document.querySelector(".screen").style.display="none";

})