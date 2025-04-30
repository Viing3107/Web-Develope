lyrics = [
    "I can lie to you and tell you",
    "\"I can't get you out my head\"",
    "But I'm lovin' watching you think",
    "You're controlling me instead, singing...",
    "There's another side that you don't know",
    "You don't know...",
    "I can't wait to get you all alone",
    "All alone...",
    "Once I'm in there ain't no letting go",
    "Letting go...",
    "Watch me turn your mind into my home...",
    "♫ ♫ ♫"
]
const time = [3, 3, 3, 3, 3.5, 2.5, 3.5, 2, 3.5, 2, 5, 5];
const length = lyrics.length;
const container = document.querySelector('.container');
for (let delay = 0, index = 0; index < length; index++) {
    const lyric = document.createElement('div');
    lyric.className = 'container-sentence';
    lyric.innerText = lyrics[index];
    container.appendChild(lyric);
    lyric.style.animation = `fadeIn ${time[index]}s ${delay}s both`;
    delay += time[index];
}