$(function() {
    $(".change-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger"); 

        var newBurgerMade = {
            devoured: newDevoured            
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data:newBurgerMade
        }).then(
            function() {
                console.log("devoured burger", newDevoured);
                location.reload(); 
            }
        );
    });

    $("create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[burger_name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created a new burger");
                location.reload();
            }
        );
    });
});