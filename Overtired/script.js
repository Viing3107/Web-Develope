lyrics = [
    "Du em ghet the nao",
    "Anh se thet gao",
    "Duoi con mua rao",
    "La yeu em den tung te bao",
    "Anh da co gang roi bo",
    "Nhung sao ong troi lai khong cho",
    "Anh da co khong day vo",
    "Nho em trong can phong nho",
    "Tung loi hat tren moi em",
    "Van dang vang vong ben tai",
    "Giat minh tinh giac nhan ra",
    "Thi ra anh dang o sai thuc tai"
]
const time = [2, 1, 1.5, 1.5, 2, 2, 2, 2.5, 2, 2, 2, 5];
const container = document.querySelector('.container');

for (let delay = 0, index = 0; index < lyrics.length; index++) {
    const lyric = document.createElement('div');
    lyric.className = 'container-sentence';
    lyric.innerText = lyrics[index];
    container.appendChild(lyric);
    lyric.style.animation = `fadeIn ${time[index]}s ${delay}s both`;
    delay += time[index];
}