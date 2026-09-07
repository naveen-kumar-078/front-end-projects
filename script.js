let images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400"
];

let currentImage = 0;

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("sliderImage").src = images[currentImage];
    document.getElementById("imageNumber").innerText =
        (currentImage + 1) + " / " + images.length;
}

function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("sliderImage").src = images[currentImage];
    document.getElementById("imageNumber").innerText =
        (currentImage + 1) + " / " + images.length;
}