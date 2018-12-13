
// for register.html - Jess
function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('at-field-password');
    var pass2 = document.getElementById('at-field-password_again');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}  
function SubForm (){

//   debugger;
  var sendMe = {};
      sendMe.username = $('#at-field-email').val();
      sendMe.password = $('#at-field-password').val();
      sendMe.firstName = $('#at-field-first_name').val();
      sendMe.lastName = $('#at-field-last_name').val();
    $.ajax({
        type:'POST',
        url:'http://localhost:4000/users/register',
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(sendMe),
        success: function(response){
              alert(response);        
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                console.log("msg = ",msg)
                // $('#post').html(msg);
            }, 
    }
    // window.location.assign("/bounce");
  );
}