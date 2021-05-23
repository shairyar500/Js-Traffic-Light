function printcolor(){
    let color=prompt('What is the color?');
    if (color =='red') {
         alert('red light');
    } 
    else if (color == 'yellow'){
        alert('yellow light');
    } 
    else if(color == 'green') {
       alert('green light');
    }  
    else {
        return  alert('not matched');
    }
}