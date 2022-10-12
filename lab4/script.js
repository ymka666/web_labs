let flag = true;
function changeColorFirst(textColor, bgColor){
    let element = document.getElementById("first-el")
    if (flag){
        element.style.color = textColor
        element.style.backgroundColor = bgColor
        flag = false
    }else {
        element.style.color = bgColor
        element.style.backgroundColor = textColor
        flag = true
    }
}
function changeColorSecond(textColor, bgColor) {
    let element2 = document.querySelector(".second-el")
    if (flag){
        element2.style.color = textColor
        element2.style.backgroundColor = bgColor
        flag = false
    }else {
        element2.style.color = bgColor
        element2.style.backgroundColor = textColor
        flag = true
    }
}
function addImg() {
    let element = document.getElementById("img")
    element.innerHTML += "<img id='addedIMG' src='https://bukinfo.com.ua/news-gallery/628f7bbdda395.jpg' " +
        "alt='Картинка відсутня' style='width: 800px; height: 500px;'>"
}
function increaseImg(){
    let element = document.getElementById("addedIMG")
    let width = element.clientWidth
    console.log(width)
    let height = element.clientHeight
    element.style.width = (width + 20) + "px"
    element.style.height = (height + 20) + "px"
}
function reduceImg (){
    let element = document.getElementById("addedIMG")
    let width = element.clientWidth
    let height = element.clientHeight
    element.style.width = (width - 20) + "px"
    element.style.height = (height - 20) + "px"
}
function deleteImg() {
    let element = document.getElementById("img")
    element.innerHTML = ""
}