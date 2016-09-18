

            function reset1(form){
                document.getElementById("1").checked = false;
                document.getElementById("2").checked = false;
                document.getElementById("3").checked = false;
                document.getElementById("4").checked = false;
            }

            function reset2(form){
                document.getElementById("5").checked = false;
                document.getElementById("6").checked = false;
                document.getElementById("7").checked = false;
                document.getElementById("8").checked = false;
            }
            function reset3(form){
                document.getElementById("9").checked = false;
                document.getElementById("10").checked = false;
                document.getElementById("11").checked = false;
            }

            function op1(form){
                document.getElementById("mark1").innerHTML = "$650";
                document.getElementById("mark2").innerHTML = "Twitter";
            }
            function op2(form){
                document.getElementById("mark1").innerHTML = "$550";
                document.getElementById("mark2").innerHTML = "Google";
            }
            function op3(form){
                document.getElementById("mark1").innerHTML = "$650";
                document.getElementById("mark2").innerHTML = "Facebook";
            }
           
            function replace3(form){
                document.getElementById("mark1").innerHTML = "__";
                document.getElementById("mark2").innerHTML = "__";
            }

            
            function reset4(form){
                document.getElementById("12").checked = false;
                document.getElementById("13").checked = false;
                document.getElementById("14").checked = false;
                document.getElementById("15").checked = false;  
            }

            function skipsurvey(form) { 
                    window.open('summary.html', '_self', false);
            }  
            function closewindow(form){
                window.open('login.html', '_self', false);
            }   