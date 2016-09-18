    
function lStorage(form)
      	{
      	
        var fname = document.getElementById("fname");
        localStorage.setItem("fname", fname.value);

        var lname = document.getElementById("lname");
        localStorage.setItem("lname", lname.value);

        var email = document.getElementById("email");
        localStoragesetItem("email", email.value);
        
        var pwd = document.getElementById("pwd");
        localStorage.setItem("pwd", pwd.value);

        var cpwd = document.getElementById("cpwd");
        localStorage.setItem("cpwd", cpwd.value);

        var squestion = document.getElementById("squestion");
        localStorage.setItem("squestion", squestion.value);

        var sanswer = document.getElementById("sanswer");
        localStorage.setItem("sanswer", sanswer.value);

        var squestion2 = document.getElementById("squestion2");
        localStorage.setItem("squestion", squestion2.value);
        
        var sanswer2 = document.getElementById("sanswer2");
        localStorage.setItem("sanswer2", sanswer2.value);
        
        var phone = document.getElementById("phone");
        localStorage.setItem("phone", phone.value);
        
        var address = document.getElementById("address");
        localStorage.setItem("address", address.value);
        
        var area = document.getElementById("area");
        localStorage.setItem("area", area.value);
        
        var captcha = document.getElementById("captcha");
        localStorage.setItem("captcha", captcha.value);
        return true;

        }
 function lStorageGet(form)
        {
        
        var fname = localStorage.getItem("fname");
        return fname;
        }
    


    function verifypassword()
    {
      var pwd = document.getElementById("pwd").value;
      var cpwd = document.getElementById("cpwd").value;
      if(pwd != cpwd)
      {
        alert("Password must be same");
        document.getElementById("cpwd").value = "";
      }
    }
    