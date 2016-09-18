            
var qcount;
var score;
var correctq;  
var rcount;
var rscore;
var correctr;
var acount;
var ascore;
var correcta;       
function cal1() 
{
  if(document.getElementById("1").checked || document.getElementById("2").checked || document.getElementById("3").checked || document.getElementById("4").checked) 
  {
      qcount=1;     
  }
  else
  {
    qcount =0;
  }
  if(document.getElementById("2").checked) 
  {
    correctq=1;                          
    score = 10;
  } 
  else
  {
    correctq=0;                
    score =0;
  }
  document.getElementById("c1").value= correctq; 
  document.getElementById("a1").value=qcount;
  document.getElementById("score1").value=score;
}

function queryString(qs) 
{  
   
   //?input1=1&attempt1=1&correct1=0&score1=0
   var queryStr = qs.substr(1).split("&"),obj={};
   //alert(queryStr);
   var qarray=[];
    for(var i=0; i < queryStr.length;i++){
        obj[queryStr[i].split("=")[0]] = queryStr[i].split("=")[1];
        qarray[i]=parseInt(obj[queryStr[i].split("=")[0]]);
    }
    //alert(qarray);
    return qarray;
   
    //alert("hello qarray");    //cal2(qarray);
}

function cal2(params) {

  qcount = params[1];
  correctq = params[2];
  score = params[3];
  
  if(document.getElementById("5").checked || document.getElementById("6").checked || document.getElementById("7").checked || document.getElementById("8").checked) 
  {
      qcount=qcount+1;     
  }
  else
  {
    qcount =qcount+0;
  }
  if(document.getElementById("5").checked) 
  {
    correctq=correctq+1;                          
    score = score+10;
  } 
  else
  {
    correctq=correctq+0;                
    score =score+0;
  }
  document.getElementById("c2").value= correctq; 
  document.getElementById("a2").value=qcount;
  document.getElementById("score2").value=score;
}

function cal3(params1) {

  qcount = params1[1];
  correctq = params1[2];
  score = params1[3];

  
  if(document.getElementById("9").checked || document.getElementById("10").checked || document.getElementById("11").checked) 
  {
      rcount=1;     
  }
  else
  {
    rcount=0;
  }
  if(document.getElementById("9").checked) 
  {
    correctr=1;                          
    rscore = 10;
  } 
  else
  {
   correctr=0;                
    rscore =0;
  }
  document.getElementById("c22").value= correctq; 
  document.getElementById("a22").value=qcount;
  document.getElementById("score22").value=score;
  document.getElementById("c3").value= correctr; 
  document.getElementById("a3").value=rcount;
  document.getElementById("score3").value=rscore;
}
   
function cal4(params2) {

  qcount = params2[1];
  correctq = params2[2];
  score = params2[3];
  rcount=params2[4];
  correctr=params2[5];
  rscore=params2[6];

  
  if(document.getElementById("12").checked || document.getElementById("13").checked || document.getElementById("14").checked || document.getElementById("15").checked) 
  {
      acount=1;     
  }
  else
  {
    acount=0;
  }
  if(document.getElementById("12").checked) 
  {
    correcta=1;                          
    ascore = 10;
  } 
  else
  {
   correcta=0;                
    ascore =0;
  }
  document.getElementById("c222").value= correctq; 
  document.getElementById("a222").value=qcount;
  document.getElementById("score222").value=score;
  document.getElementById("c33").value= correctr; 
  document.getElementById("a33").value=rcount;
  document.getElementById("score33").value=rscore;
  document.getElementById("c4").value= correcta; 
  document.getElementById("a4").value=acount;
  document.getElementById("score4").value=ascore;
}

function cal5(params3) {

  qcount = params3[1];
  correctq = params3[2];
  score = params3[3];
  rcount=params3[4];
  correctr=params3[5];
  rscore=params3[6];
  acount=params3[7];
  correcta=params3[8];
  ascore=params3[9];
  
  document.getElementById("a2222").value=qcount;
  document.getElementById("c2222").value= correctq; 
  document.getElementById("score2222").value=score;
  document.getElementById("a333").value=rcount;
  document.getElementById("c333").value= correctr; 
  document.getElementById("score333").value=rscore;
  document.getElementById("a44").value=acount;
  document.getElementById("c44").value= correcta; 
  document.getElementById("score44").value=ascore;
}



function final_result(params3) {

  qcount = params3[2];
  correctq = params3[3];
  score = params3[4];
  rcount=params3[5];
  correctr=params3[6];
  rscore=params3[7];
  acount=params3[8];
  correcta=params3[9];
  ascore=params3[10];

  document.getElementById("result1").innerHTML= qcount; 
  document.getElementById("result2").innerHTML=correctq;
  document.getElementById("result3").innerHTML=score;
  document.getElementById("result4").innerHTML= rcount; 
  document.getElementById("result5").innerHTML=correctr;
  document.getElementById("result6").innerHTML=rscore;
  document.getElementById("result7").innerHTML= acount; 
  document.getElementById("result8").innerHTML=correcta;
  document.getElementById("result9").innerHTML=ascore;
}

       