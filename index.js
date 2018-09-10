

$('#input1,#input2, #input3, #input4, #input5').keyup(function(){
   var $this = $(this);
   $('.'+$this.attr('id')+'').html($this.val());
   console.log("fdsfds");
});

