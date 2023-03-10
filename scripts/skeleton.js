//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
// function loadSkeleton() {
//     firebase.auth().onAuthStateChanged(function (user) {
//     console.log($('#navbarPlaceholder').load('./text/nav.html'));
//     console.log($('#footerPlaceholder').load('./text/footer.html'));
// });
// }
// loadSkeleton();  //invoke the function

function loadSkeleton() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here.
            //console.log($('#navbarPlaceholder').load('./text/navbar.html'));
            console.log($('#footerSignInPlaceholder').load('./text/footer_signin.html'));
        } else {
            // No user is signed in.
            //console.log($('#navbarPlaceholder').load('./text/navbar.html'));
            console.log($('#footerPlaceholder').load('./text/footer.html'));
        }
    });
}
loadSkeleton(); //invoke the function