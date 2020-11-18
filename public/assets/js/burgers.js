$(function() {
    $(".change-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newburger"); 

        var newBurgerMade = {
            devoured: newDevour            
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data:newBurgerMade
        }).then(
            function() {
                console.log("devoured burger", newDevour);
                // Reload the page to get the updated list
                location.reload(); 
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

    // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created a new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});