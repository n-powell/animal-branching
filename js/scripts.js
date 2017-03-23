// BACK END

// FRONT END
$(function() {
  $(".buttonClass").click(function(){
    var answer = prompt("Do you want to learn about deer, snake, turtle??");
    if(answer === "deer" || answer === "Deer" || answer === "DEER"){
      $(".snake-hidden").hide();
      $(".turtle-hidden").hide();
      $(".deer-hidden").show();
    }
    else if(answer === "snake" || answer === "Snake" || answer === "SNAKE") {
      $(".snake-hidden").show();
      $(".turtle-hidden").hide();
      $(".deer-hidden").hide();
    }
    else if(answer === "turtle" || answer === "Turtle" || answer === "TURTLE") {
      $(".snake-hidden").hide();
      $(".turtle-hidden").show();
      $(".deer-hidden").hide();
    }
    else {
      alert("You are horrible at following directions!")
    }
  });
});
