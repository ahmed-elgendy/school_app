

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validatetext(text) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(text);
}
function validatenumber(number) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(number);
}
function validate() {
    var $result = $(".result");
    var $error = $(".error");
    var email = $("#email").val();
    $result.text("");
    if (validateEmail(email)) {
        $result.text("Email success. You are subscribed to our newsletter.");
        $result.css("color", "green");
        $error.css("border", " 2px solid green" );
    } else{

        $result.text("Please enter a valid email");
        $result.css("color", " red" );
        $error.css("border", " 2px solid red" );
    }
    $("#email").on('keyup', function () {
        $(".result").css("opacity" , "0"),
            $(".error").css("border", " 2px solid #fff" );
    });
    $("#email").on('focus', function () {
        $("#email").empty();
    });
    return false;
}

$(".validate").on("click", validate);


// end subscribe-content validate

function validated() {
    var $resultPhone = $(".resultPhone");
    var $resultName = $(".resultName");
    var $resultEmail = $(".resultEmail");
    var $resultSubject = $(".resultSubject");
    var $resultTextarea = $(".resultTextarea");
    var $name = $(".name");
    var name = $("#name").val();
    // end name
    var $phone = $(".phone");
    var phone = $("#phone").val();
    //end phone
    var $Email = $(".Email");
    var Email = $("#Email").val();
    //end email
    var $subject = $(".subject");
    var subject = $("#subject").val();
    //end subject
    var $message = $(".message");
    var message = $("#message").val();
    //end message
    $resultPhone.text("");
    $resultName.text("");
    $resultEmail.text("");
    $resultSubject.text("");
    $resultTextarea.text("");
    //end result
    if (validatetext(name)) {
        $resultName.css("color", " green" );
        $name.css("border", " 2px solid green" );
    } else{
        $resultName.text("Please enter your name");
        $resultName.css("color", " red" );
        $name.css("border", " 1px solid red" );
    }
    // end name

    if (validatenumber(phone)) {
        $resultPhone.css("color", " green" );
        $phone.css("border", " 2px solid green" );
    } else{
        $resultPhone.text("Please enter your phone");
        $resultPhone.css("color", " red" );
        $phone.css("border", " 1px solid red" );
    }
    //end phone
    if (validateEmail(Email)) {
        $resultEmail.css("color", " green" );
        $Email.css("border", " 2px solid green" );
    } else{
        $resultEmail.text("Please enter your Email");
        $resultEmail.css("color", " red" );
        $Email.css("border", " 1px solid red" );
    }
    //end Email
    if (validatetext(subject)) {
        $resultSubject.css("color", " green" );
        $subject.css("border", " 2px solid green" );
    } else{
        $resultSubject.text("Please enter your subject");
        $resultSubject.css("color", " red" );
        $subject.css("border", " 1px solid red" );
    }
    //end subject
    if (validatetext(message)) {
        $resultTextarea.css("color", " green" );
        $message.css("border", " 2px solid green" );
    } else{
        $resultTextarea.text("Please enter your message");
        $resultTextarea.css("color", " red" );
        $message.css("border", " 1px solid red" );
    }
    //end textarea

    $("#name").on('keyup', function () {
        $(".resultName").css("opacity" , "0"),
            $(".name").css("border", " 1px solid #ddd" );
    });
    $("#name").on('focus', function () {
        $("#name").empty();
    });
    // end name

    $("#phone").on('keyup', function () {
        $(".resultPhone").css("opacity" , "0"),
            $(".phone").css("border", " 1px solid #ddd" );
    });
    $("#phone").on('focus', function () {
        $("#phone").empty();
    });
    //end phone
    $("#Email").on('keyup', function () {
        $(".resultEmail").css("opacity" , "0"),
            $(".Email").css("border", " 1px solid #ddd" );
    });
    $("#Email").on('focus', function () {
        $("#Email").empty();
    });
    //end Email
    $("#subject").on('keyup', function () {
        $(".resultSubject").css("opacity" , "0"),
            $(".subject").css("border", " 1px solid #ddd" );
    });
    $("#subject").on('focus', function () {
        $("#subject").empty();
    });
    //end subject
    //end Email
    $("#message").on('keyup', function () {
        $(".resultTextarea").css("opacity" , "0"),
            $(".message").css("border", " 1px solid #ddd" );
    });
    $("#message").on('focus', function () {
        $("#message").empty();
    });
    //end message
    return false;
}

$(".form-submit").on("click", validated);
