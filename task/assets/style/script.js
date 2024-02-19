function search() {
    const starWarsBox = document.getElementById('starWarsBox');
    const inputBox = document.getElementById('input-box');
    const answerBox = document.querySelector('.answer');

    let url = '';
try{
    if (starWarsBox.value === 'people' && inputBox.value > 0 && inputBox.value <= 10) {
        url = `https://swapi.dev/api/people/${inputBox.value}/`;
    } else if (starWarsBox.value === 'planets' && inputBox.value > 0 && inputBox.value <= 10) {
        url = `https://swapi.dev/api/planets/${inputBox.value}/`;
    } else if (starWarsBox.value === 'films' && inputBox.value > 0 && inputBox.value <= 10) {
        alert('Фильм лишь один в своем роде - "Звездные воины". Именно по его мотивам был создан этот поисковик');
    }
} catch (error) {
        console.error('Произошла ошибка:', error.message);
        answerBox.textContent = 'Выберите категорию и введите число от 1 до 10';
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let name;
            const category = starWarsBox.value;

            if (category === 'people') {
                name = data.name;
            } else if (category === 'planets') {
                name = data.name;
            } else if (category === 'films') {
                alert('Фильм лишь один в своем роде - "Звездные воины". Именно по его мотивам был создан этот поисковик');
            }

            answerBox.textContent = `${name}`;
        })
        .catch(error => {
            console.error('Произошла ошибка:', error.message);
            answerBox.textContent = `Ошибка: ${error.message}`;
        });
}

//почему-то алерт не работает, а JSON массив с фильмами, вообще не читается, даже при выборе 1цы. Хотя как минимум должен выдать название "Звездные воины"
