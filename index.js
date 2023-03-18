//javascript code for bu
const optionbtns = document.querySelectorAll('.rock, .paper, .scissor');

for (const optionbtn of optionbtns){
    optionbtn.addEventListener('click', function optionclick(event) {   
        //romove 'active' class from all buttons
        optionbtns.forEach(optionbtn =>{
            optionbtn.classList.remove('active');
        });
        //add 'active' class to the clicked button
        event.target.classList.add('active');
    });
}