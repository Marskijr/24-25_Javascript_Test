/* Put code for the task below */
<button type="button" onClick="backgroundChange()">Click Me</button>

<script>
    //document.getElementById("table").style.backgroundColor = "blue";

    // Access to the HTML Element
    table = document.getElementById("table");
    counter = 0;

    function backgroundChange(){
    if (counter % 2 === 0){
    table.style.backgroundColor = "red";
}else{
    table.style.backgroundColor = "blue";
}
    counter++;

}

</script>