lyrics = [
    ["Luot di hoi nhanh tren con xe khong phanh", 1.5],
    ["Doi khi long minh le loi", 1.5],
    ["Am thanh vang len ngay o trong tai nghe", 1.5],
    ["Va tinh yeu thi da len ngoi", 1.5],
    ["Nhin dem troi gan sat ben toi", 1.5],
    ["Cham vao em va dua sat len moi", 1.5],
    ["Moi buon dau roi se quen thoiiii", 1.5],
    ["yeahhh", 1],
    ["La tai vi hinh bong cua em gio dang o trong dau", 2.75],
    ["Va anh da thuc biet bao nhieu la dem dai mong cau", 2.75],
    ["Khong can phai noi ma sao van cu hieu thau long nhau", 2.75],
    ["Same frequency", 1],
    ["I don't wanna let you go", 1.5],
    ["Yeah anh khong muon thuc day", 1.5],
    ["Chi mot dem nua thoi", 1.5],
    ["Yeah anh muon chim trong doi mat nang", 1.5],
    ["Chi mot dem nua thoi", 1.5],
    ["Cam bay van dang xung quanh em", 1.5],
    ["Chi mot dem nua thoi", 1.5],
    ["But you got it, got it, got it, girl", 2],
    ["♬♬♬♬♬♬♬♬♬♬♬♬♬♬", 5]
]
const container = document.querySelector('.container');

for (let delay = 0, index = 0; index < lyrics.length; index++) {
    const lyric = document.createElement('div');
    lyric.className = 'container-sentence';
    lyric.innerText = lyrics[index][0];
    container.appendChild(lyric);
    lyric.style.animation = `fadeIn ${lyrics[index][1]}s ${delay}s both`;
    delay += lyrics[index][1];
}