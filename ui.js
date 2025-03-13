class UI {

     static addFilmToUI(newFilm) {
        const filmList = document.getElementById("films");
        //innerHTML'e tr'leri ekşleyecğiz
        filmList.innerHTML += `
             <tr>
      <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
      <td>${newFilm.title}</td>
      <td>${newFilm.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
      `;
    }
    //girilen inputları temizlemek için 
    static clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
        //yaptığımız fonk addFilm() fonksiyonundan hemn sonra çağıracağız.
    }

    static displayMessages(message, type) {
        const cardBody = document.querySelectorAll(".card-body")[0];
        //alert divini oluşturuyoruz
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        cardBody.appendChild(alert);
        setTimeout(function () {
            alert.remove();
        }, 1000);
    }

    //Storageden alıp arayüze ekleme:
    static loadAllFilms(films) {
        const filmList = document.getElementById("films");
        films.forEach(function (film) {
            filmList.innerHTML += `<tr>
      <td><img src="${film.url} "class="img-fluid img-thumbnail"></td>
      <td>${film.title}</td>
      <td>${film.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>  `;
        });
    }

    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI() {
        const filmList = document.getElementById("films");

        //filmList.innerHTML="";
        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove();
        }
    }

}