// ------------- Theme changing--------------
const themeChangeBtn = document.querySelector('.light-mood');
themeChangeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('theme');
    if(document.body.classList.contains('theme')){
        themeChangeBtn.src = './image and icon folder/icon/sun.png'
    }else{
        themeChangeBtn.src = './image and icon folder/icon/moon.png'
    };
});

// -------------------Open and close Media query link navbar-----------
const openNav = document.querySelector('.open-menu-link-in-responsive');
const nav = document.querySelector('.nav');
openNav.addEventListener('click',()=>{
    openNav.classList.toggle('active');
    nav. classList.toggle('active');
});
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(link => link.addEventListener('click',()=>{
    openNav.classList.remove('active');
    nav.classList.remove('active');
}));

// for form submission using emailJS

function sendMailBtn(){
    let params = {
        f_name: document.getElementById('Fname').value,
        o_name: document.getElementById('Oname').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceID = 'service_r9yf1mi';
    const templateID = 'template_agf975b'; 

    emailjs.send(serviceID, templateID, params).then((res) => {
            document.getElementById('Fname').value = "";
            document.getElementById('Oname').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert('Your message sent successfully');
        })
        .catch((err) => console.log(err))
}
