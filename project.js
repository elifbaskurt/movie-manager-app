const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardbody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    //DOMContentLoaded eventi=sayfa yüklendi eventi,arayüzü başlatır:
    document.addEventListener("DOMContentLoaded",function(){
        //localStorage'den filmleri alıyoruz
        let films=Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    if(title==="" || director==="" || url===""){
        UI.displayMessages("Tüm alanları doldurunuz...","danger");
    }
    else{
        const newFilm=new Film(title,director,url);
        UI.addFilmToUI(newFilm); 
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film başarıyla eklendi...","success");
    }
    UI.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}
function deleteFilm(e){
    //a etiketinin ıd:delete-film
    if(e.target.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);
        //filmleri storage'den silmek için:
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi başarılı...","success");
    }
}
function clearAllFilms(){
    if(confirm("Emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}