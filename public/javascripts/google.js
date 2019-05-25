var user;
function onSignIn(googleUser) {
    user = googleUser.getBasicProfile();
    console.log(user);

    if (user.getEmail().split("@")[1] != "tlu.ee") {
        alert("Palun kasuta oma TLU emaili sisse logimiseks");

        let auth = gapi.auth2.getAuthInstance();
        auth.signOut();
    } else {
        $('.g-signin2').addClass("hidden");

        $('.user').removeClass("hidden");
        $('#user #name').append(user.getName());
        $('#user #image').attr('src', user.getImageUrl());
    }
    let id_token = googleUser.getAuthResponse().id_token;
    authUser(id_token);
  }

function authUser(token) {
    $.ajax({
        url: '/user/auth',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({ googleToken: token }),
        success: (data) => {
            console.log(data);
        }
    });
}