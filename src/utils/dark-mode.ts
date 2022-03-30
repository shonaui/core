function setDarkMode(colorScheme: string) {
    let body: any = document.querySelector("body");

    if (colorScheme === "dark") {
        body.style.backgroundColor = "#1a1a1a";
        console.log("dark mode");
    } else {
        body.style.backgroundColor = "#f5f5f5";
        console.log("light mode");
    }
}

export const darkMode = () => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        const colorScheme = e.matches ? "dark" : "light";
        setDarkMode(colorScheme);
    });

    // Wait for document to load
    document.addEventListener("DOMContentLoaded", function (event) {
        const isSystemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const savedTheme = localStorage.getItem("shonaui-theme");
        document.body.setAttribute("shonaui-theme", savedTheme ? savedTheme : isSystemDarkMode ? "dark" : "light");
    });
};

export const toggleDarkTheme = () => {
    // Get the current selected theme, on the first run
    let currentTheme = document.body.getAttribute("shonaui-theme");

    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";

    // Set the current theme to the new one
    document.body.setAttribute("shonaui-theme", switchToTheme);

    // save the new theme in localStorage
    localStorage.setItem("shonaui-theme", switchToTheme);
};

let theme = localStorage.getItem("shonaui-theme");
// window.addEventListener("DOMContentLoaded", (event: any) => {
//     const targetNode: any = document.body;
//     const config2: any = { childList: true, subtree: true, attributes: true };

//     const callback = function (mutationsList: any, observer: any) {
//         for (let mutation of mutationsList) {
//             if (mutation.type === "attributes" && mutation.attributeName === "shonaui-theme") {
//                 theme = document.body.getAttribute("shonaui-theme");
//                 console.log("gggggggggggggggg");
//             }
//         }
//     };

//     const observer = new MutationObserver(callback);
//     observer.observe(targetNode, config2);
// });

export const isDarkTheme = theme === "dark";

// setDarkMode("dark");

// autoDarkMode;

// transition smoothly from one theme to another instead of instantly jumping from light to dark theme.
// * {
//   transition: background-color 0.6s ease, color 1s ease;
// }
