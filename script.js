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
        const ht= 960/size;
        rowDiv.style= `display:flex;`
        gridContainer.appendChild(rowDiv);
        for(let j=0;j<size;j++){
            const colDiv= document.createElement('div');
            colDiv.className= `col${j}`;
            colDiv.classList.add('griditem');
            colDiv.style= ` height:${ht}px; width:${ht}px; `;
            rowDiv.appendChild(colDiv);
            colDiv.addEventListener('mouseover', ()=>{
                colDiv.classList.add('hovering');
                colDiv.classList.remove('griditem');
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

    while (size>100 || size<=0) {
        alert("Please enter within bounds");
        size= parseInt(prompt("enter the size (less than 100)"));
    }


    removeGrid();
    makeGrid(size);
})