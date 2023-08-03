const btnDarkMode = document.querySelector(".dark-mode-btn");

/* 1 проверка тёмной темы на уровне системы */
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

/* 2 проверка тёмной темы localStorage */
if (localStorage.getItem("darkMode") === "dark") {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

/* если меняются системные настройки, меняем тему */
window.matchMedia("(prefers-color-scheme: dark}").addEventListener("change", (Event) => {
    const newColorScheme = Event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
    }
});

/* включение ночного режима по кнопке */
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");
    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

/* const isMain = document.body.classList.toggle("main");
    if (isMain) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    } */
