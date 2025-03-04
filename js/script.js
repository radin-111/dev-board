document.getElementById("rd").addEventListener("click", function () {
    window.location.href = "./blog.html";
})



// card1
document.getElementById('b1').addEventListener("click", function () {
    alert("Board updated successfully");
    let work = document.getElementById('work')
    const wk = work.innerText;
    let twork = parseInt(wk);
    const o = 1;
    const h = document.getElementById("history");
    const divtt = document.createElement("div");
    const nh1 = document.createElement("h1");
    const currentTime = new Date().toLocaleTimeString();
    nh1.innerText = `You have Completed The Task Fix Mobile Button Issue  at ${currentTime}`;

    divtt.appendChild(nh1);
    divtt.classList.add("history");
    h.appendChild(divtt);
    document.getElementById('b1').style.opacity = "20%";
    document.getElementById('b1').setAttribute('disabled', 'true');

    let t = twork - o;
    work.innerText = t;
    
    if(t === 0){
        alert("Congrates!!! You have completed all current task");
    }

});
// card2
document.getElementById('b2').addEventListener("click", function () {
    alert("Board updated successfully");
    let work = document.getElementById('work')
    const wk = work.innerText;
    let twork = parseInt(wk);
    const o = 1;

    const h = document.getElementById("history");
    const divtt = document.createElement("div");
    const nh1 = document.createElement("h1");
    const currentTime = new Date().toLocaleTimeString();
    nh1.innerText = `You have Completed The Task Add Dark Mode at ${currentTime}`;

    divtt.appendChild(nh1);
    divtt.classList.add("history");
    h.appendChild(divtt);
    document.getElementById('b2').style.opacity = "20%";
    document.getElementById('b2').setAttribute('disabled', 'true');
    let t = twork - o;
    work.innerText = t;
    
    if(t === 0){
        alert("Congrates!!! You have completed all current task");
    }

});
// card3
document.getElementById('b3').addEventListener("click", function () {
    alert("Board updated successfully");
    let work = document.getElementById('work')
    const wk = work.innerText;
    let twork = parseInt(wk);
    const o = 1;
    const h = document.getElementById("history");
    const divtt = document.createElement("div");
    const nh1 = document.createElement("h1");
    const currentTime = new Date().toLocaleTimeString();
    nh1.innerText = `You have Completed The Task Optimize  Home page  at ${currentTime}`;

    divtt.appendChild(nh1);
    divtt.classList.add("history");
    h.appendChild(divtt);
    document.getElementById('b3').style.opacity = "20%";
    document.getElementById('b3').setAttribute('disabled', 'true');
    let t = twork - o;
    work.innerText = t;
    
    if(t === 0){
        alert("Congrates!!! You have completed all current task");
    }

});
// card4
document.getElementById('b4').addEventListener("click", function () {
    alert("Board updated successfully");
    let work = document.getElementById('work')
    const wk = work.innerText;
    let twork = parseInt(wk);
    const o = 1;
    const h = document.getElementById("history");
    const divtt = document.createElement("div");
    const nh1 = document.createElement("h1");
    const currentTime = new Date().toLocaleTimeString();
    nh1.innerText = `You have Completed The Task Add new emoji 🤲  at ${currentTime}`;

    divtt.appendChild(nh1);
    divtt.classList.add("history");
    h.appendChild(divtt);
    document.getElementById('b4').style.opacity = "20%";
    document.getElementById('b4').setAttribute('disabled', 'true');
    let t = twork - o;
    work.innerText = t;
    
    if(t === 0){
        alert("Congrates!!! You have completed all current task");
    }
});
// card5
document.getElementById('b5').addEventListener("click", function () {
    alert("Board updated successfully");
    let work = document.getElementById('work')
    const wk = work.innerText;
    let twork = parseInt(wk);
    const o = 1;

    const h = document.getElementById("history");
    const divtt = document.createElement("div");
    const nh1 = document.createElement("h1");
    const currentTime = new Date().toLocaleTimeString();
    nh1.innerText = `You have Completed The Task Improve Job searching  at ${currentTime}`;

    divtt.appendChild(nh1);
    divtt.classList.add("history");
    h.appendChild(divtt);
    document.getElementById('b5').style.opacity = "20%";
    document.getElementById('b5').setAttribute('disabled', 'true');
    
    let t = twork - o;
    
    work.innerText = t;
    
    if(t === 0){
        alert("Congrates!!! You have completed all current task");
    }

});





document.getElementById('b6').addEventListener("click", function () {
    alert("Board updated successfully");
    let work = document.getElementById('work')
    const wk = work.innerText;
    let twork = parseInt(wk);
    const o = 1;

    const h = document.getElementById("history");
    const divtt = document.createElement("div");
    const nh1 = document.createElement("h1");
    const currentTime = new Date().toLocaleTimeString();
    nh1.innerText = `You have Completed The Task Improve Job Searching at ${currentTime}`;

    divtt.appendChild(nh1);
    divtt.classList.add("history");
    h.appendChild(divtt);
    document.getElementById('b6').style.opacity = "20%";
    document.getElementById('b6').setAttribute('disabled', 'true');
    let t = twork - o;
    work.innerText = t;
    
    if(t === 0){
        alert("Congrates!!! You have completed all current task");
    }

});


document.getElementById("clear").addEventListener("click", function () {
    const cache = document.getElementById("history");
    cache.innerHTML = "";
})