let jsAnswers = [
    "Массивы в JavaScript похожи на объекты",
    "В JavaScript есть много методов для работы со строкой",
    "В JS есть функции",
    "JavaScript имеет много версий",
    "Стрелочные функции в JavaScript выглядят очень компактно!"];

let phpAnswers = [
    "PHP относится к серверному программированию)",
    "В PHP есть массивы, как и в других язык программирования",
    "PHP также я имеет переменные"
];

let htmlAnswers = [
    "HTML есть теги",
    "В HTML можно писать текст",
    "HTML - язык разметки гипертекста",
    "HTML лёгкий в изучении",
    "HTML без JS и CSS - скучный"
];

alert("Привет!");

function javaScript() {
    while (true) {
        let botMessage1 = prompt("Что бы вы хотели узнать?");
        let changeCase = botMessage1.toLowerCase();
        if (changeCase == "привет") {
            alert("Приветствую!");
        }
        else if (changeCase == "кто ты?") {
            alert("Я бот Вася");
        }
        else if (changeCase.search("javascript") != -1) {
            let random = Math.floor(Math.random() * jsAnswers.length);
            let randomJsAnswers = jsAnswers[random];
            alert(randomJsAnswers);
        }
        else if (changeCase == "пока") {
            alert("До свидания, рад был пообщаться!");
            break;
        }
        else {
            alert("Я хочу беседовать о JavaScript!");
        }
    }
}

function php() {
    while (true) {
        let botMessage1 = prompt("Что бы вы хотели узнать?");
        let changeCase = botMessage1.toLowerCase();
        if (changeCase == "привет") {
            alert("Приветствую!");
        }
        else if (changeCase == "кто ты?") {
            alert("Я бот Вася");
        }
        else if (changeCase.search("php") != -1) {
            let random = Math.floor(Math.random() * phpAnswers.length);
            let randomPhpAnswers = phpAnswers[random];
            alert(randomPhpAnswers);
        }
        else if (changeCase == "пока") {
            alert("До свидания, рад был пообщаться!");
            break;
        }
        else {
            alert("Я хочу беседовать о PHP!");
        }
    }
}

function html() {
    while (true) {
        let botMessage1 = prompt("Что бы вы хотели узнать?");
        let changeCase = botMessage1.toLowerCase();
        if (changeCase == "привет") {
            alert("Приветствую!");
        }
        else if (changeCase == "кто ты?") {
            alert("Я бот Вася");
        }
        else if (changeCase.search("html") != -1) {
            let random = Math.floor(Math.random() * htmlAnswers.length);
            let randomHtmlAnswers = htmlAnswers[random];
            alert(randomHtmlAnswers);
        }
        else if (changeCase == "пока") {
            alert("До свидания, рад был пообщаться!");
            break;
        }
        else {
            alert("Я хочу беседовать о HTML!");
        }
    }
}