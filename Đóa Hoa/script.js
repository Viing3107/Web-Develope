const lyrics = [
    "anh chi muon qua nha",
    "tang cho nang mot doa hoa",
    "muon buoc di qua nha",
    "tang cho nang mot doa hoa",
    "sh italy",
    "anh dang doi em",
    "cho nang buoc ra",
    "cu vung yen ngoi sau",
    "om chat anh",
    "toan mui nuoc hoa",

    "anh chi muon qua nha",
    "tang cho nang mot doa hoa",
    "muon ruoc em qua nha",
    "con yeu co ay ma",
    "mama",
    "sh italy",
    "anh dang doi em",
    "cho nang buoc ra",
    "cu vung yen ngoi sau",
    "om chat anh",
    "toan mui nuoc hoa",
];
const length = lyrics.length;

// thời gian 1 câu chạy
const timeSentence = [1.75, 1.75, 1.5, 1.75, 0.8, 1, 1.25, 1.5, 1, 0.8,   1.75, 1.75, 1.35, 1, 0.7, 0.8, 1, 1.25, 1.5, 1, 1.75];

// thời gian delay của 1 câu trước khi chạy tính từ thời điểm bắt đầu run chương tình
const timeDelaySentence = [10, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2];

const container = document.querySelector(".container");

for (let index = 0, time = 0; index < length; index++) {
    const sentence = document.createElement("div");
    sentence.className = "container__sentence";
    sentence.textContent = lyrics[index];
    sentence.style.animation = `fadeIn ${timeSentence[index]}s ${time}s forwards`;
    time += timeSentence[index];
    container.appendChild(sentence);
}