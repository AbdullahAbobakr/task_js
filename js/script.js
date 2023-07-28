var allproducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var total = document.querySelector("#total")
var totalprice = 0

allproducts.forEach(function (item) {
    item.onclick = function () {
        content.innerHTML += item.textContent + ".&nbsp"
        totalprice += +(item.getAttribute("price"))
        if (content.innerHTML != "") {
            btn.style.display = "block"
        }
    }
})
btn.onclick = function () {
    console.log(totalprice)
    document.getElementById("total").innerHTML = totalprice;

}