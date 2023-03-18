//js code for buttons
// const optBtns = document.querySelector('.options');
// optBtns.addEventListener('click', function(event){
//     if (event.target.matches('.rock, .paper, .scissor')){
//         container.classList.add('active');
//     }
//     else
//     {
//         container.classList.remove('active');
//     }
// });

// function optBtnToggle()
// {
//     console.log('Clicked');
// }







// const btnEl = document.getElementById('btn');

// btnEl.addEventListener('click', optBtnToggle);

const optionbtns = document.querySelectorAll('.rock, .paper, .scissor');

for (const optionbtn of optionbtns){
    optionbtn.addEventListener('click', function optionclick(event) {
    //    if (event.target.matches('.rock, .paper, .scissor'))
    //    {
    //     optionbtn.classList.add('active');
    //    }
    //    else
    //    {
    //     optionbtn.classList.remove('active')
    //    }

        //romove 'active' class from all buttons
        optionbtns.forEach(optionbtn =>{
            optionbtn.classList.remove('active');
        });
        //add 'active' class to the clicked button
        event.target.classList.add('active');
    });
}