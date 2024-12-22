const touches = [...document.querySelectorAll('.bouton')]
const listKeycode = touches.map(touche => touche.dataset.key)
const ecran = document.querySelector('.ecran')
const divError = document.querySelector('.pb-error')

document.addEventListener('keydown',(e)=>{
    const valeur = e.keyCode.toString()
    calculer(valeur)
})
document.addEventListener('click', (e)=>{
    const valeur = e.target.dataset.key
    calculer(valeur)
})

const calculer = (valeur)=>{
    if(listKeycode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent= "";
                break;
            case '13':
                const calcul = eval(ecran.textContent)
                //eval permet d'evaluer le contenu de la case et de l'executer
                ecran.textContent = calcul
                break;
            default:
                const indexKeycode = listKeycode.indexOf(valeur)
                const touche = touches[indexKeycode]
                ecran.textContent += touche.innerHTML
        }
    }

}

window.addEventListener('error', (e)=>{
    alert('une erreur est survenue dans le calcul '+ e.message)
})