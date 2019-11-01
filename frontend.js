/* Popup Message */
// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}



/* Menu Navigation Section */
var nav = document.getElementById('nav')
   
   window.onscroll = function()
   {
   	if(window.pageYOffset > 100)
   	{
   		nav.style.position = 'fixed';
   		nav.style.top = 0;
   	}
   	else{
   		//nav.style.position = "absolute";
   		nav.style.position = 'relative'; //fixed
   		nav.style.top = 100;
   	}
   }


   /* Onclick Play for Audio */
function playclip()
{
   if(navigator.appName == "Microsoft internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) ||
   (navigator.appVersion.indexOf("MSIE 8")!=-1))
   {
      if(document.all)
      {
         document.all.sound.src="audios/Jingle-Bells.mp3";
      }
   }
   else 
   {
      var audio = document.getElementsByTagName("audio")[0];
      audio.play();
   }
}


