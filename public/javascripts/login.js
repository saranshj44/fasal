const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".containers");

sign_up_btn.addEventListener("click", () => {
    console.log("hello");
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});


document.querySelector("#button_one").addEventListener('click', function (e) {
    document.querySelector("#image_one").click();
})
document.querySelector("#button_two").addEventListener('click', function (e) {
    document.querySelector("#image_two").click();
})
document.querySelector("#button_three").addEventListener('click', function (e) {
    document.querySelector("#image_three").click();
})
