document.getElementById("expandableDiv").addEventListener("click", function() {
    var content = document.getElementById("content");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        content.style.height = "200px";
    } else {
        content.style.display = "none";
    }
});