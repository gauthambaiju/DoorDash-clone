// // see more and see less
// let prev = 1;
// let flag = true;
// let another_flag = false;
// let yet_another_flag = false;

// const more = document.querySelector(".section-8 .more");
// const less = document.querySelector(".section-8 .less");
// const container = document.querySelector(".section-8 .container");

// document.querySelector("#see-more").addEventListener("click", () => {
//     // container.style.maxHeight = "none";
//     document.querySelectorAll(".section-8 .hide").forEach((element) => {
//         element.style.display = "block";
//     });
//     more.style.display = "none";
//     less.style.display = "flex";
//     flag = !flag;

//     if (another_flag && yet_another_flag) {
//         document.querySelector("#see-less").style.transform = "translateY(0)";
//     }
//     yet_another_flag = true;
// });

// document.querySelector("#see-less").addEventListener("click", () => {
//     // container.style.maxHeight = "580px";
//     document.querySelectorAll(".section-8 .hide").forEach((element) => {
//         element.style.display = "none";
//     });
//     more.style.display = "flex";
//     less.style.display = "none";
//     flag = !flag;

//     if (another_flag && yet_another_flag) {
//         document.querySelector("#see-more").style.transform = "translateY(0)";
//     }
//     yet_another_flag = true;
// });

// // top cities, top cuisines, top chains
// const cities = document.querySelectorAll(".cities");
// const cuisines = document.querySelectorAll(".cuisines");
// const chains = document.querySelectorAll(".chains");

// const citiesBtn = document.querySelector("#citiesBtn");
// const cuisinesBtn = document.querySelector("#cuisinesBtn");
// const chainsBtn = document.querySelector("#chainsBtn");

// citiesBtn.addEventListener("click", () => {
//     cities.forEach((city) => (city.style.display = "block"));
//     cuisines.forEach((cuisine) => (cuisine.style.display = "none"));
//     chains.forEach((chain) => (chain.style.display = "none"));

//     citiesBtn.style.color = "black";
//     citiesBtn.style.borderBottom = "2px solid black";
//     cuisinesBtn.style.color = "hsl(0, 0%, 50%)";
//     cuisinesBtn.style.borderBottom = "2px solid #dddddd";
//     chainsBtn.style.color = "hsl(0, 0%, 50%)";
//     chainsBtn.style.borderBottom = "2px solid #dddddd";

//     if (flag) {
//         more.style.display = "block";
//         container.style.maxHeight = "580px";
//     } else {
//         less.style.display = "block";
//         container.style.maxHeight = "none";
//     }

//     if (prev === 2 || prev === 3) {
//         document.querySelector("#see-more").style.transform =
//             "translateY(10px)";
//         document.querySelector("#see-less").style.transform =
//             "translateY(10px)";
//     } else if (prev === 1) {
//         document.querySelector("#see-more").style.transform =
//             "translateY(-10px)";
//         document.querySelector("#see-less").style.transform =
//             "translateY(-10px)";
//     }
//     prev = 1;
// });

// cuisinesBtn.addEventListener("click", () => {
//     prev = 2;
//     another_flag = true;

//     cities.forEach((city) => (city.style.display = "none"));
//     cuisines.forEach((cuisine) => (cuisine.style.display = "block"));
//     chains.forEach((chain) => (chain.style.display = "none"));

//     citiesBtn.style.color = "hsl(0, 0%, 50%)";
//     citiesBtn.style.borderBottom = "2px solid #dddddd";
//     cuisinesBtn.style.color = "black";
//     cuisinesBtn.style.borderBottom = "2px solid black";
//     chainsBtn.style.color = "hsl(0, 0%, 50%)";
//     chainsBtn.style.borderBottom = "2px solid #dddddd";

//     more.style.display = "none";
//     less.style.display = "none";
// });

// chainsBtn.addEventListener("click", () => {
//     prev = 3;
//     another_flag = true;

//     cities.forEach((city) => (city.style.display = "none"));
//     cuisines.forEach((cuisine) => (cuisine.style.display = "none"));
//     chains.forEach((chain) => (chain.style.display = "block"));

//     citiesBtn.style.color = "hsl(0, 0%, 50%)";
//     citiesBtn.style.borderBottom = "2px solid #dddddd";
//     cuisinesBtn.style.color = "hsl(0, 0%, 50%)";
//     cuisinesBtn.style.borderBottom = "2px solid #dddddd";
//     chainsBtn.style.color = "black";
//     chainsBtn.style.borderBottom = "2px solid black";

//     more.style.display = "none";
//     less.style.display = "none";
// });

const head = document.querySelector(".head");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
        head.classList.add("scrolled");
    } else {
        head.classList.remove("scrolled");
    }
});
