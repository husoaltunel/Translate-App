function UI() {


}

UI.prototype.translateUI = function(word,lang){
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200522T093853Z.017d2bddbbf0188d.c4d96c5f7118032461bdd3adc52f60a6261818a2&text=${word}&lang=${lang};
    `);
    xhr.onload = () => {
        if(xhr.status === 200){
            document.querySelector('#outputWord').textContent = JSON.parse(xhr.responseText).text;
        }
    }
    xhr.send();
    
}
UI.prototype.changeFlag = function(){
    let lang = select.options[select.selectedIndex].value
    flag.src = `images/${lang}.png`;
    flagLang.textContent = select.options[select.selectedIndex].textContent;
}