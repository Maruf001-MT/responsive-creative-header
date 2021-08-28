              //menubar toggle and sidebar
   
                const navigation=document.querySelector('.sidemenu');
                document.querySelector(".menu-click").onclick=function(){
                document.getElementById('toggle').classList.toggle('active');
                  navigation.classList.toggle('active');
                 }
                 document.querySelector("#toggle").onclick=function(){
                  document.getElementById('toggle').classList.toggle('active');
                  navigation.classList.toggle('active');
                   }

              /* mobile dropdown*/
              document.querySelector(".first-phn-dropdown-container").onclick=function(){
                document.querySelector(".first-phn-dropdown-container i").classList.toggle('active');
                document.querySelector(".first-phn-dropdown-content").classList.toggle('active');
              }
              document.querySelector(".second-phn-dropdown-container").onclick=function(){
                document.querySelector(".second-phn-dropdown-container i").classList.toggle('active');
                document.querySelector(".second-phn-dropdown-content").classList.toggle('active');
              }
              document.querySelector(".third-phn-dropdown-container").onclick=function(){
                document.querySelector(".third-phn-dropdown-container i").classList.toggle('active');
                document.querySelector(".third-phn-dropdown-content").classList.toggle('active');
              }
