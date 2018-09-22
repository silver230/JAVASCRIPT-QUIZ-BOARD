// $(document).ready(function() {
//     $("#blanks form").submit(function(event) {
//       var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
//
//       blanks.forEach(function(blank) {
//         var userInput = $("input#" + blank).val();
//         $("." + blank).text(userInput);
//       });
//
//       $("#story").show();
//
//       event.preventDefault();
//     });
//   });
//

$(document).ready(function(){
  $("#quiz form").submit(function(event){
    var questions = ["Inside which HTML element do we put the JavaScript?" ,"what is the correct place to insert a JavaScript?" , "The external JavaScript file must contain the <scripts> tag?" ,"how do you write an if statement in JavaScript?"," How can you add a comment in a JavaScript?"];
    var answers = ["scripts", "The head section" ,"True", "if (i==5)then" ,"//comment"];
       var res =[var answers === var questions];
     res.forEach(function(res){
       var userInput=$(userInput + answer).val();
       alert(res);

       event.preventDefault();
     })

  });
});
