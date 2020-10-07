var new_html = '';
window.onload = function () {
    initApp();
    displayEmpData();
};
const database = firebase.database();
const usersRef = database.ref('/users');

function displayEmpData() {

    usersRef.on('child_added', function (userData) {
        console.log(userData.val());

        new_html += '<tr id="'+userData.val().userId+'">';
        new_html += '<td id="name_'+userData.val().userId+'">' + userData.val().Name + '</td>';
        new_html += '<td id="email_'+userData.val().userId+'">' + userData.val().email + '</td>';
        new_html += '<td id="address_'+userData.val().userId+'">' + userData.val().age + '</td>';
        new_html += '<td id="phone_'+userData.val().userId+'">' + userData.val().contact + '</td>';
        new_html += '<td id="phone_'+userData.val().userId+'">' + userData.val().gender + '</td>';
        new_html += '<td id="phone_'+userData.val().userId+'">' + userData.val().bloodgroup + '</td>';
        new_html += '<td id="phone_'+userData.val().userId+'">' + userData.val().weight + '</td>';

        
        new_html += '</td>';
        new_html += '</tr>';

        $("#emp-table").html(new_html);
       
 
    });
}