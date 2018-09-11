

$('#input1,#input2, #input3, #input4, #input5').keyup(function(){
   var $this = $(this);
   $('.'+$this.attr('id')+'').html($this.val());
   console.log("fdsfds");
});

function changeimg() {
  document.getElementById(sec1).style.backgroundImage="url(https://creative.blis.com/JamieInviteTest/pink.png)";
}

