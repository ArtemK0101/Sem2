console.log("hello")

document.body.onload = () => {
    console.log("onload")
    let request = new XMLHttpRequest;
    request.open("Get", "./header.html", true)
    request.send()
    request.onreadystatechange = function () {
        if(request.readyState === 4)
        if(request.status === 200) {
            console.log(request.responseText)
            document.body.innerHTML = request.responseText + document.body.innerHTML
        }
    }
    console.log("onload")
    let request1 = new XMLHttpRequest;
    request1.open("Get", "./footer.html", true)
    request1.send()
    request1.onreadystatechange = function () {
        if(request1.readyState === 4)
        if(request1.status === 200) {
            console.log(request1.responseText)
            document.body.innerHTML += request1.responseText 
        }
    }
}