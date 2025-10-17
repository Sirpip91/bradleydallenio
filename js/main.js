// Example: Simple dynamic greeting
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const hour = new Date().getHours();
    let greeting = "Hello!";
    if(hour < 12) greeting = "Good morning!";
    else if(hour < 18) greeting = "Good afternoon!";
    else greeting = "Good evening!";

    const greetingEl = document.createElement("p");
    greetingEl.textContent = greeting;
    main.prepend(greetingEl);
});
