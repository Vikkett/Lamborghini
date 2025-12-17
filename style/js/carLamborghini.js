<><script src="https://code.jquery.com/jquery-3.6.4.min.js"></script><script>
    $(document).ready(function () { }
    var images = $(".gallery img");
    var currentIndex = 0;

    function showImage(index) {images.css("transform", "translateX(" + -index * 100 + "%)")};
    {"}"}

    $(".gallery").on("click", function () {currentIndex = (currentIndex + 1) % images.length};
    showImage(currentIndex);
    {"}"});
    {"}"});
</script></>
