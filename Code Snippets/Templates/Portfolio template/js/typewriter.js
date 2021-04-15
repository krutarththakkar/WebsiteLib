// code to handle the position typewriter effect

let el = document.querySelector(".typewriter");

var data = "Empowering Communities through Open Source.";

var index = 0;
setInterval(() => {
    if(index==data.length){
        el.innerHTML = data;
        return;
    }else{
        let currentData = el.innerHTML;
        currentData = currentData.slice(0,currentData.length-2);
        // console.log(currentData);
        let toWrite = currentData.concat(data[index].concat(" |"));
        el.innerHTML = toWrite;
        index = index+1;
    }
},60);
