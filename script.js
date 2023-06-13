window.onload = () =>{
    const gridContainer= document.querySelector(".grid");
    for(let i=0;i<16;i++){
        const rowDiv= document.createElement('div');
        rowDiv.className= `row${i}`;
        rowDiv.style= 'display:flex; '
        gridContainer.appendChild(rowDiv);
        for(let j=0;j<16;j++){
            const colDiv= document.createElement('div');
            colDiv.className= `col${j}`;
            colDiv.style= 'height:40px; width:40px; background-color:pink';
            rowDiv.appendChild(colDiv);
        }
    }
}