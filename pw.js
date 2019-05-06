$(document).ready(function(){
  $('#psw-repeat').on('keyup', function () {
    if ($('#password').val() == $('#psw-repeat').val()) {
      $('#passwordConfirmationMessage').html(' Passwords are matching').css('color', 'green');
    }
    else
      $('#passwordConfirmationMessage').html('Passwords are not matching').css('color', 'red');
  });

  $('#tel').keyup(function(e){
    var ph = this.value.replace(/\D/g,'').substring(0,10);
    // Backspace and Delete keys
    var deleteKey = (e.keyCode == 8 || e.keyCode == 46);
    var len = ph.length;
    if(len==0){
        ph=ph;
    }else if(len<3){
        ph='('+ph;
    }else if(len==3){
        ph = '('+ph + (deleteKey ? '' : ') ');
    }else if(len<6){
        ph='('+ph.substring(0,3)+') '+ph.substring(3,6);
    }else if(len==6){
        ph='('+ph.substring(0,3)+') '+ph.substring(3,6)+ (deleteKey ? '' : '-');
    }else{
        ph='('+ph.substring(0,3)+') '+ph.substring(3,6)+'-'+ph.substring(6,10);
    }
    this.value = ph;
  });

  $('#signup').click(function () {
    if(($('#password').val() != null) && ($('#email').val() != null) && ($('#birthday').val() != null) && ($('#tel').val() != null) && ($('#psw-repeat').val() != null)){
      $("#signup").attr("disabled", "enabled");
    }
    else{
      $("#signup").attr("disabled", "disabled");
    }
  });

});
