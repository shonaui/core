const handleThemeChange = (theme: string) => {
    // remove current theme class
    if (document?.body?.classList !== undefined) {
        // console.log("document?.body?.classList", document?.body?.classList);

        document.body.classList.remove(
            ...Array.from(document.body.classList.entries())
                .map(([, c]) => c)
                .filter((c) => c.startsWith("theme")),
        );

        // Set the current theme to the new one
        document.body.classList.add(`theme-${theme}`);

        // save the new theme in localStorage
        localStorage.setItem("shonaui-theme", theme);
    }
};

export const toggleDarkTheme = () => {
    // Get the current selected theme, on the first run
    let currentTheme = localStorage.getItem("shonaui-theme");

    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";

    handleThemeChange(switchToTheme);
};

export const setTheme = (theme: string) => {
    handleThemeChange(theme);
};

export const darkModeHandler = async (config: any) => {
    const onDocumentReady = await config?.onDocumentReady;

    if (onDocumentReady === true) {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
            const colorScheme = e.matches ? "dark" : "light";
            handleThemeChange(colorScheme);
        });
        // Wait for document to load
        document.addEventListener("DOMContentLoaded", function (event) {
            const isSystemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

            const savedTheme = localStorage.getItem("shonaui-theme");
            handleThemeChange(savedTheme ? savedTheme : isSystemDarkMode ? "dark" : "light");
            // console.log("darkModeHandler ran!");
        });
    } else {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
            const colorScheme = e.matches ? "dark" : "light";
            handleThemeChange(colorScheme);
        });
        const isSystemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const savedTheme = localStorage.getItem("shonaui-theme");
        handleThemeChange(savedTheme ? savedTheme : isSystemDarkMode ? "dark" : "light");
        // console.log("darkModeHandler ran!");
    }
};
