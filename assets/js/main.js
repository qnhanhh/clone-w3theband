//modal box
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".modal");
const modalCloses = document.querySelector(".modal-closes");

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", () => {
        modal.classList.add("open");
    })
}

modalCloses.addEventListener("click", () => {
    modal.classList.remove("open");
})

//mobile menu
const header = document.querySelector("#header");
const headerHeight = header.clientHeight;
const mobileMenu = document.querySelector(".mobile-menu-btn");
mobileMenu.addEventListener("click", () => {
    const isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
})

//select menu
const menuItems = document.querySelectorAll("#nav li a[href*='#']");
menuItems.forEach(item => {
    item.addEventListener("click", (event) => {
        const isParentMenu = item.nextElementSibling && item.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }else{
            header.style.height = null;
        }
    })
});