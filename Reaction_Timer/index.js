const bdy = document.getElementById("parent");
const st = document.getElementById("child");

let timeoutId = null;
let startTime = null;
let isWaiting = false;

bdy.addEventListener("click", () => {
    if (timeoutId == null) {
        isWaiting = true;
        bdy.style.backgroundColor = "red";
        let randomDelay = Number.parseInt(Math.random() * 1000) + 1000;
        timeoutId = setTimeout(() => {
            bdy.style.backgroundColor = "green";
            st.innerText = "CLICK!";
            startTime = Date.now();
            isWaiting = false;
        }, randomDelay);
    }
    else if (isWaiting) {
        clearTimeout(timeoutId);
        st.innerText = "Too early!";
        isWaiting = false;
    }
    else if (startTime) {
        let reactionTime = Date.now() - startTime;
        st.innerText = `${reactionTime} ms`;
        console.log(`Reaction time: ${reactionTime} ms`);
        startTime = null;
    }
});