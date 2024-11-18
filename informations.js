/**************************************************************** 
 * Compteur de largeur et détection orientation - NE PAS MODIFIER
*****************************************************************/
window.onload = init;
window.onresize = init;
var largeur = document.querySelector('#largeur');
var sensEcran = document.querySelector('#taille');


function init() {
    largeur.textContent = window.innerWidth; 

    if (window.innerWidth  >= 1400) {
        sensEcran.textContent = "Extra extra large";  
    } else if (window.innerWidth  < 1400 && window.innerWidth >= 1200){
        sensEcran.textContent = "Extra large";  
    } else if (window.innerWidth  < 1200 && window.innerWidth >= 992){
        sensEcran.textContent = "Large";  
    } else if (window.innerWidth  < 992 && window.innerWidth >= 768){
        sensEcran.textContent = "Medium";  
    } else if (window.innerWidth  < 768 && window.innerWidth >= 576){
        sensEcran.textContent = "Small";  
    }else {
        sensEcran.textContent = "Extra small";  
    }
}
