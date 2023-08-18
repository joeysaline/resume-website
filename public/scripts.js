function hoverOn(obj) {
    console.log("yo")
    // obj.innerHTML.style = {{
    //     "background-color: #f2f2f2";
    // }}
    obj.innerHTML.style.backgroundColor = "red"
    // obj.innerHTML.css.style.backgroundColor = "#f2f2f2"
    console.log("done?")
}
function hoverOff(obj) {
    obj.innerHTML.style.backgroundColor = "#ffffff"
}