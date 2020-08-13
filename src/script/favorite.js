import {dbDeleteFavorite, dbGetAllFavTeam, dbInsertFavorite} from "./local/db-repo"

document.addEventListener("DOMContentLoaded", function () {

    let removeButtons = document.querySelectorAll(".removeButton");
    for(let button of removeButtons) {
        button.addEventListener("click", function (event) {
            let bookId = event.target.id;
            dbDeleteBook(bookId).then(() => {
                showAllBook()
            })
        })
    }
})