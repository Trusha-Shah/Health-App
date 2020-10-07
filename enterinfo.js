var firebase = app_firebase; 

//TABLE REFERENCE
var empRef = firebase.database().ref('employee');
//$('#emp-table').find('tbody').html('');
var new_html = '';
window.onload = function () {
    
    displayEmpData();
};
//BUTTONS OR ACTIONS
document.getElementById('add_emp').addEventListener('click', addNewEmp, false);










// INSERT DATA
function addNewEmp() {
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var bloodgroup = document.getElementById('bloodgroup').value;
    var weight = document.getElementById('weight').value;
    var gender = document.getElementById('gender').value;
    var timeStamp = new Date().getTime();
    var empID = 'EMP_' + timeStamp;
    
    empRef.child(empID).set({
        name: name,
        email: email,
        age: age,
        phone: phone,
        bloodgroup: bloodgroup,
        weight: weight,
        gender: gender,
        emp_id: empID
    });
    $('#name').val('');
    $('#email').val('');
    $('#age').val('');
    $('#phone').val('');
    $('#bloodgroup').val('');
    $('#weight').val('');
    $('#gender').val('');
    
}



//Display Employee Data 


function displayEmpData() {

    empRef.on('child_added', function (empData) {
        console.log(empData.val());

        new_html += '<tr id="'+empData.val().emp_id+'">';
        new_html += '<td id="name_'+empData.val().emp_id+'">' + empData.val().name + '</td>';
        new_html += '<td id="email_'+empData.val().emp_id+'">' + empData.val().email + '</td>';
        new_html += '<td id="age_'+empData.val().emp_id+'">' + empData.val().age + '</td>';
        new_html += '<td id="phone_'+empData.val().emp_id+'">' + empData.val().phone + '</td>';
        new_html += '<td id="bloodgroup_'+empData.val().emp_id+'">' + empData.val().bloodgroup + '</td>';
        new_html += '<td id="weight_'+empData.val().emp_id+'">' + empData.val().weight + '</td>';
        new_html += '<td id="gender_'+empData.val().emp_id+'">' + empData.val().gender + '</td>';
        new_html += '<td><a  class="edit" data-toggle="modal"><i class="material-icons editEmp"';
        new_html += 'data-toggle="tooltip" data-emp-id="' + empData.val().emp_id + '" title="Edit">&#xE254;</i></a>';
        new_html += '<a class="" data-toggle="modal"><i class="material-icons delete"';
        new_html += 'data-toggle="tooltip"  data-emp-id="' + empData.val().emp_id + '" title="Delete">&#xE872;</i></a>';
        new_html += '</td>';
        new_html += '</tr>';

        $("#emp-table").html(new_html);
       
    });

    

    // $('#emp-table').find('tbody').append(new_html);

}




    
