function submit(){
    var x = document.forms["humpty"]["answer"].value;
if (x.length < 1) {
  alert("enter an answer its not rocket science");   
} 
else if (x.toLowerCase() =="anthropomorphic egg"){
    $(".contentContainer").css("display","none");
    $(".keyCode").css("display","flex");
} else{
    alert("nup wrong answer, try again uce");
}
}