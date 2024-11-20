let text = document.getElementById('title_label');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
})

let gnb_link = document.querySelectorAll('.gnb a');
console.log(gnb_link)
gnb_link.forEach(element => {
    element.addEventListener('click', (e)=>{
        gnb_link.forEach(element => {
            element.classList.remove("active")
        });
        e.target.className = "active"
    })
});

//https://github.com/HyunSungLim-ppf/UI-UX.git