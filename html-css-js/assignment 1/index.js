function validate() {
    let name = document.getElementById('name').value,
    email = document.getElementById('email').value,
    email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    !name ? invalid('name', 'Name Field is required') : invalid('name', '');
    !email ? invalid('email', 'Email Field is required') : ( !email_pattern.test(email) ? invalid('email', 'Email pattern is not valid') : invalid('email', '') );
    // if (!email) {
    //     invalid('email', 'Email Field is required');
    // } else if( !email_pattern.test(email) ) {
    //     invalid('email', 'Email pattern is not valid');
    // } else {
    //     invalid('email', '');
    // }
}
function invalid(id, message) {
    document.getElementById('error-'+id).innerHTML = message;
    if (message) {
        document.getElementById(id).style.border = '1px solid red';
    } else{
        document.getElementById(id).style.border = '';
    }
}