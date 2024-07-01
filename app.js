 const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');
function PageTransition() {
    // Button click active class

    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            secBtn.forEach((btn)=>{
                btn.classList.remove('active-btn');
                secBtn[i].classList.add('active-btn');
            })
            sections.forEach((section)=>{
                section.classList.remove('active');
                sections[i].classList.add('active');
            })
        })
    }   
//     allsections.addEventListener('click', (e) =>{
//        const id = e.target.dataset.id;
//        if(id){
//             secBtns.forEach((btn)=>{
//             btn.classList.remove('active');
        
//             })
//             e.target.classList.add('active');

//             sections.forEach((section)=>{
//                 section.classList.remove('active');
               
//         })
//         const element = document.getElementById(id);
//         element.classList.add('active');
//        }
//     })
}
PageTransition();

const aboutlinks = document.querySelectorAll('.about-links');
const aboutContent = document.querySelectorAll('.about-content');

for(let i = 0; i < aboutlinks.length; i++){
    aboutlinks[i].addEventListener('click', ()=>{
        aboutlinks.forEach((link)=>{
            link.classList.remove('active-link');
            aboutlinks[i].classList.add('active-link');
            
            aboutContent.forEach((content)=>{
                content.classList.remove('active-content');
                aboutContent[i].classList.add('active-content');
            })
        })
        
       
    })
}
// Toggle Theme

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', ()=>{
    let element = document.body;
    element.classList.toggle('light-mode');
})