console.log('This would be the main JS file.');
<script>
function myFunction(e) {
    x = e.clientX;
    y = e.clientY;
    coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor
}
</script>

