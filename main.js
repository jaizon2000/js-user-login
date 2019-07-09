/*
Check proper sign in credentials

&& AND
|| OR
!() NOT

*/

// Event listener
document.getElementById('btn').addEventListener('click', main);

// Function
function main() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Credentials
    var user = '1';
    var pass = '1';

    // RIGHT 
    if (username == user && password == pass) {
        alert('Sign In Successful :)');
        document.getElementById('greet').style.color = 'lightGreen';
        document.getElementById('greet').innerHTML = 'Welcome!';


    } if (username != user || password != pass) { // WRONG
        alert('Sign In Unsuccessful :(')
        document.getElementById('greet').style.color = 'red';

        // Both Wrong
        if (password != pass && username != user) {
            document.getElementById('greet').innerHTML = 'Wrong username and password.<br>Please try again.'

            // Wrong Username
        } else if (username != user) {
            document.getElementById('greet').innerHTML = 'Wrong username.<br>Please try again.';

            // Wrong password
        } else if (password != pass) {
            document.getElementById('greet').innerHTML = 'Wrong password.<br>Please try again.'
        }

    }
}