<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Challenge 3</title>
</head>
<body>
<img src="../img/onepiece.jpg" width="100px" id="img" onmouseout="appear()" onmouseover="dissappear()">

    <button type="button" onclick="toggle()">Toggle</button>

    <script>
        function dissappear(){
        document.getElementById('img').style.display = "none";
    }

        function appear(){
        document.getElementById('img').style.display = "block";
    }

        function toggle(){

        const image = document.getElementById("turkey");

        if(image.style.display === "block"){
        image.style.display = "none";
    }else{
        image.style.display = "block";
    }
    }
    </script>
</body>
</html>