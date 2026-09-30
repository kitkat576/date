let noAttempts = 0;
let chosenPlace = "";

const noMessages = [
    "Нет",
    "Точно нет?",
    "Может подумаешь?",
    "Куда убегаешь?)",
    "Так нечестно",
    "Выбора нет ❤️"
];

// Открытие письма по клику
function openLetterContent() {
    document.querySelector('.envelope-box').style.display = 'none';
    const letterText = document.getElementById('letter-text');
    letterText.classList.remove('hidden');
}

// Переход к вопросу о свидании
function goToQuestion() {
    document.getElementById('letter-screen').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('question-screen').classList.remove('hidden');
    }, 200); // Небольшая задержка для плавной смены карточек
}

// Кнопка "Нет" убегает и уменьшается
function dodgeNo() {
    noAttempts++;
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    let scaleYes = 1 + (noAttempts * 0.22);
    yesBtn.style.transform = `scale(${scaleYes})`;

    let scaleNo = Math.max(0.45, 1 - (noAttempts * 0.09));
    noBtn.style.transform = `scale(${scaleNo})`;

    if (noAttempts < noMessages.length) {
        noBtn.innerText = noMessages[noAttempts];
    }

    // Увеличенный диапазон убегания
    const randomX = (Math.random() - 0.5) * 160;
    const randomY = (Math.random() - 0.5) * 100;
    noBtn.style.position = 'relative';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Когда нажимает "Да" — переходим к выбору места
function sayYes() {
    document.getElementById('question-screen').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('place-screen').classList.remove('hidden');
    }, 200);
}

// Выбор конкретного места
function selectPlace(element, placeName) {
    document.querySelectorAll('.place-card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');
    chosenPlace = placeName;

    const finishBtn = document.getElementById('finish-btn');
    finishBtn.disabled = false;
    finishBtn.style.opacity = '1';
    finishBtn.style.cursor = 'pointer';
}

// Финал: показ фото со спецэффектами
function finishSelection() {
    if (chosenPlace) {
        document.getElementById('final-text').innerText = `Выбрано: ${chosenPlace} ✨ Жди детали свидания!`;
    }
    
    document.getElementById('place-screen').classList.add('hidden');
    
    setTimeout(() => {
        document.getElementById('success-screen').classList.remove('hidden');
        // Запуск анимации появления фото
        setTimeout(() => {
            document.querySelector('.fade-photo').classList.add('show');
        }, 150);
    }, 200);
}