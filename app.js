var btn = document.querySelector('.btn');
var flag = document.getElementById('outputImage');
var flagLang = document.getElementById('outputLanguage');
var select = document.getElementById('language');
const ui = new UI;
eventListeners();

function eventListeners() {

    btn.addEventListener('click',translate);
    document.querySelector('#language').onchange = function(e){
        ui.changeFlag();
        translate(e);
        e.preventDefault();
    }

}


function translate(e){
    var word = document.getElementById('word').value;
    var lang = document.querySelector('#language').value;
    
    ui.translateUI(word,lang);
    
    e.preventDefault();
}




