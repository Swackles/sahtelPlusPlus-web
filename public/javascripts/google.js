function onSignIn(googleUser) {
    const user = googleUser.getBasicProfile();

    if (user.getEmail().split("@")[1] != "tlu.ee") {
        alert("Palun kasuta oma TLU emaili sisse logimiseks");

        let auth = gapi.auth2.getAuthInstance();
        auth.signOut();
    } else {
        alert("Edukalt sisse logitud");

        $('.google').addClass("hidden");

        $('.user').removeClass("hidden");
        $('#user #name').append(user.getName());
        $('#user #image').attr('src', user.getImageUrl());
    }
    let id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }