const size =document.getElementById("sizePicker");
const rows=document.getElementById("inputHeight");
const cells=document.getElementById("inputWidth"); 
const pixelCanvas= document.getElementById("pixelCanvas");  
const color= document.getElementById("colorPicker");  

// when size is submited
size.addEventListener('submit', function (event){
    pixelCanvas.innerHTML="";
    event.preventDefault();
    makeGrid();
  });
  // function to make table
    function makeGrid(){

    for (let r=1; r<=rows.value; r++){
        let row =document.createElement("tr");
        pixelCanvas.appendChild(row);
    
        for (let c=1; c<=cells.value; c++){
            let column =document.createElement("td");
            row.appendChild(column);
        }
    }
}
 // changing color of pixel
 pixelCanvas.addEventListener("click" , function(eve){
     if (eve.target.nodeName ==='TD')   
    eve.target.style.background= color.value;
        });