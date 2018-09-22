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
function check(){
  var q1 = document.myform.q1.value;
  var q2 = document.myform.q2.value;
  var q3 = document.myform.q3.value;
  var q4 = document.myform.q4.value;
  var q5 = document.myform.q5.value;
  var  res =0;

  if (q1==="a"){
           res+=4;
  }
  if (q2==="a"){
           res+=4;
  }
  if (q3==="a"){
           res+=4;
  }
  if (q4==="b"){
           res+=4;
  }
  if (q5==="d"){
           res+=4;
   }
   alert("great "+ res+ " marks");

};
