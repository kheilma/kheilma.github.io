function myFunction(e) {
    x = e.clientX;
    y = e.clientY;
    coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor
}