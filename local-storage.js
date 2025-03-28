// 1️⃣ Local Storage (Data persists even after closing the browser)
localStorage.setItem("username", "Peter");
localStorage.setItem("theme", "dark");

// Retrieve data from local storage
console.log("Username:", localStorage.getItem("username"));
console.log("Theme:", localStorage.getItem("theme"));

// Remove an item
localStorage.removeItem("theme");


// 2️⃣ Session Storage (Data is lost when the tab is closed)
sessionStorage.setItem("sessionID", "123456");
sessionStorage.setItem("loggedIn", "true");

// Retrieve session storage data
console.log("Session ID:", sessionStorage.getItem("sessionID"));
console.log("Logged In:", sessionStorage.getItem("loggedIn"));

// Remove session item
sessionStorage.removeItem("loggedIn");

