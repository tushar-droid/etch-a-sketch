window.onload = () =>{ 
    makeGrid(16)
}
let prev_size = 0;
function makeGrid(size){
    prev_size=size;
    const gridContainer= document.querySelector(".grid");
    for(let i=0;i<size;i++){
        const rowDiv= document.createElement('div');
        rowDiv.className= `row${i}`;
        const ht= 500/size-2;
        rowDiv.style= `display:flex;`
        gridContainer.appendChild(rowDiv);
        for(let j=0;j<size;j++){
            const colDiv= document.createElement('div');
            colDiv.className= `col${j}`;
            colDiv.classList.add('griditem');
            colDiv.style= ` height:${ht}px; width:${ht}px; margin:1px; border-radius:4px`;
            rowDiv.appendChild(colDiv);
            colDiv.addEventListener('mouseover', ()=>{
                const rainbow= checkRainbowMode();
                if(rainbow){
                    color= random_bg_color();
                    colDiv.style.backgroundColor=color;
                }
                else{
                    colDiv.style.backgroundColor="black";
                }
            })
        }
    }
}

function removeGrid(){
    for(let i=0;i<prev_size;i++){
        const elem= document.querySelector(`.row${i}`);
        elem.remove();
    }
}

btn = document.querySelector('.prompt-button');
btn.addEventListener("click", () =>{
    let size=prev_size;
    let condition = true;
    size = parseInt(prompt("enter the size (less than 100)"));
    if(isNaN(size)){
        size=16;
    }
    while (size>100 || size<=0) {
        alert("Please enter within bounds");
        size= parseInt(prompt("enter the size (less than 100)"));
    }


    removeGrid();
    makeGrid(size);
})


function checkRainbowMode(){
    const checkBox= document.querySelector('.rainbow-mode');
    if(checkBox.checked==true){
        return true;
    }
    else{
        return false;
    }
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
    }