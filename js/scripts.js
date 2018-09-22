
function check(){
  var q1 = document.myform.q1.value;
  var q2 = document.myform.q2.value;
  var q3 = document.myform.q3.value;
  var q4 = document.myform.q4.value;
  var q5 = document.myform.q5.value;
  var  myResult =0;

  if (q1==="a"){
           myResult+=4;
  }
  if (q2==="a"){
           myResult+=4;
  }
  if (q3==="a"){
           myResult+=4;
  }
  if (q4==="b"){
           myResult+=4;
  }
  if (q5==="d"){
           myResult+=4;
   }
   alert("great "+ myResult+ " marks");

};
