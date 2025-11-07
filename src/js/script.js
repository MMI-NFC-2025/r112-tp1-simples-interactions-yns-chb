// TODO
const aMettreEnRouge= document.querySelector ('#a-mettre-en-rouge');
aMettreEnRouge.style.color = "red"



const collH2 = document.querySelectorAll("H2")
collH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color = 'red';
    });
});
    
