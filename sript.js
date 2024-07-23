    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.querySelector('.menu-btn');
        const menuItems = document.querySelector('.menuitems');

        menuBtn.addEventListener('click', function() {
            menuItems.classList.toggle('active');
            console.log(50);
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const login = document.querySelector('.login');
        const signup = document.querySelector('.signup');
        const signForm = document.querySelector('.sign-up');
        const logForm = document.querySelector('.log-in');
    
        login.addEventListener('click', function() {
            signForm.classList.add('hide');
            logForm.classList.remove('hide');
        });
    
        signup.addEventListener('click', function() {
            logForm.classList.add('hide');
            signForm.classList.remove('hide');
        });
    });
    


