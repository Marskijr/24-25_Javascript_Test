<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Challenge 2</title>
</head>
<body>
<!-- Add a button that when you click it, the background of the table changes to blue -->

<table id="table">
    <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
    </tr>
    <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
    </tr>
    <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
    </tr>
</table>


<button type="button" onclick="backgroundChange()">Click Me</button>
<button type="button" onclick="backgroundChange1()">Click Me 2</button>
<button type="button" onclick="backgroundChange2()">Click me 3</button>

<script>
    //document.getElementById("table").style.backgroundColor = "blue";

    // Access to the HTML Element
    table = document.getElementById("table");
    counter = 0;

    function backgroundChange(){
    if (counter % 2 === 0){
    table.style.backgroundColor = "blue";
}
    counter++;

}

    table = document.getElementById("table");
    counter = 0;

    function backgroundChange1(){
    if (counter % 2 === 0){
    table.style.backgroundColor = "red";
}
    counter++;

}

    function backgroundChange2(){
    if (counter % 2 === 0){
    table.style.backgroundColor = "yellow";
}
    counter++;

}

</script>