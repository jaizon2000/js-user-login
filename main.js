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

    let user = 'jaizon2000';
    let pass = '1';

    // RIGHT
    if (username == user && password == pass) {
        alert('Sign In Successful');

        // WRONG
    } else if (username != user || passwords != pass) {
        alert('Sign In Unsuccessful')

        // Wrong Username
        if (username != user) {
            document.getElementById('greet').innerHTML = 'Wrong username.<br>Please try again.';

            // Wrong password
        } else if (password != pass) {
            document.getElementById('greet').innerHTML = 'Wrong password.<br>Please try again.'

            // Both Wrong
        } else if (password != pass && username != user) {
            document.getElementById('greet').innerHTML = 'Wrong username and password.<br>Please try again.'
        }
        document.getElementById('greet').style.color = 'red';
    }
}