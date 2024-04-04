// const btn = document.getElementById("btn");
// let count = 1;
// let say = true; 

// btn.addEventListener("click", () => {
//     if (say) {
//         if (count < 10) {
//             btn.textContent = `Click me ${count++}`;
//         } else {
//             say = false;
//             count--;
//         }
//     } else {
//         if (count >= 1) {
//             btn.textContent = `Click me ${count--}`;
//         } else {
//             say = true; 
//             count++;
//         }
//     }
// });
const btn = document.getElementById("btn");
let count = 1;
let say = true; // Artma durumunu belirlemek için bir bayrak

btn.addEventListener("click", () => {
    if (say) {
        if (count < 10) {
            btn.textContent = `Click me ${count++}`;
        } else {
            say = false; 
            count--;
        }
    } else {
        if (count >= 1) {
            btn.textContent = `Click me ${count--}`;
        } else {
            say = true; 
            count++;
        }
    }
});