function checkAnswer(button, correct) {

    const result = document.getElementById("quiz-result");

    const buttons = document.querySelectorAll(".answers button");


    // Отключаем остальные кнопки
    buttons.forEach(function(item) {

        item.disabled = true;

    });


    if (correct) {

        result.textContent =
            "✓ Правильно! Это был Дарий III.";

        button.style.background = "#e99ab0";

        button.style.borderColor = "#e99ab0";

    } else {

        result.textContent =
            "Почти! Правильный ответ — Дарий III.";

        button.style.background = "#8c6558";

    }

}