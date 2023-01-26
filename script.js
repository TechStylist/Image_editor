let myform = document.getElementById('myform');
let targetimage = document.getElementById('targetimage');
myform.addEventListener('submit', function (e) {
    let urlimage = document.getElementById('onlineurl');
    let urlimageval = urlimage.value;
    if (urlimageval.length) {
        targetimage.setAttribute('src', urlimageval);
        urlimage.value = '';
    }
    e.preventDefault();

})
let slider = document.querySelectorAll('.slider')
for (let i = 0; i < slider.length - 1; i++) {
    slider[i].addEventListener('input', editimage);

}
function editimage() {
    let gsval = document.getElementById('gs').value;
    let blurval = document.getElementById('blur').value;
    let huerotateval = document.getElementById('hue-rotate').value;
    let sepiaval = document.getElementById('sepia').value;
    let brightnessval = document.getElementById('brightness').value;
    let contrastval = document.getElementById('contrast').value;
    targetimage.style.filter = 'grayscale(' + gsval + '%) blur(' + blurval + 'px) hue-rotate(' + huerotateval + 'deg) sepia(' + sepiaval + '%) brightness(' + brightnessval + '%) contrast(' + contrastval + '%)';

}
let sliderform = document.getElementById('slider-form')
sliderform.addEventListener('reset', function () {
    sliderform.reset();
    setTimeout(function () {
        editimage();
    }, 0)
})

const selectimage = document.querySelector('.select-image')
const inputfile = document.getElementById('upload')
selectimage.addEventListener('click', function () {
    inputfile.click();
})

inputfile.addEventListener('change', function () {
    const image = this.files[0];
    if (image) {
        const reader = new FileReader();
        // console.log(image);
        reader.onload = function () {
            const result = reader.result;
            targetimage.setAttribute('src', result);
        }
        reader.readAsDataURL(image)
    }

})