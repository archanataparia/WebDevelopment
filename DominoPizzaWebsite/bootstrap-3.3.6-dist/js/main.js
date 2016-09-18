
var a1,b1,c1,pizzatype;

function submit1(form){
    document.getElementById("submit1").onclick=function()
    {
    	if(document.getElementById("radio1").checked || document.getElementById("radio2").checked || document.getElementById("radio3").checked || document.getElementById("radio4").checked||document.getElementById("radio5").checked||document.getElementById("radio6").checked
    		|| document.getElementById("radio7").checked||document.getElementById("radio8").checked||document.getElementById("radio9").checked||document.getElementById("radio10").checked) 
    	{
         	pizzatype = $("input[name='radiopizza']:checked").val();
          	sessionStorage.setItem("pizzatype",pizzatype);
   		 }
   	}
   	
}
function submit2(form){

    document.getElementById("submit2").onclick=function()
    {
    	if(document.getElementById("check1").checked) 
    	{
         	var cheese = $("input[id='check1']").val();
          	sessionStorage.setItem("checkone",cheese);
          	var cheeseratio = $( "#cheeseList" ).val();
          	sessionStorage.setItem("cheeselist",cheeseratio);
   		 }

   		 if(document.getElementById("check2").checked) 
    	{
         	var sauce = $("input[id='check2']").val();
          	sessionStorage.setItem("checktwo",sauce);	
          	var sauceratio = $( "#sauceList" ).val();
          	sessionStorage.setItem("saucelist",sauceratio);
   		 }
   		 if(document.getElementById("radio11").checked || document.getElementById("radio12").checked || document.getElementById("radio13").checked || document.getElementById("radio14").checked || document.getElementById("radio15").checked) 
    	{
         	var rsauce = $("input[name='radioSauce']:checked").val();
          	sessionStorage.setItem("rsauce",rsauce);
   		 }
   	}
}
function submit3(form){

    document.getElementById("submit3").onclick=function()
    {
 	var meat= $("input[name='meat']:checked").map(function () {return this.value;}).get().join(",");
 	var nonmeat= $("input[name='nonmeat']:checked").map(function () {return this.value;}).get().join(",");
 	sessionStorage.setItem("meatlist",meat);
 	sessionStorage.setItem("nonmeatlist",nonmeat); 
  }
}
function home(form)
{
	window.open('index.html','_self', false);
}
