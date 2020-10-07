var firebase = app_firebase; 
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
   uid = user.id;


} else {
   uid = null;
   window.location.replace("login.html")
}
});

function logout(){
 firebase.auth().signOut();
}




     
     
