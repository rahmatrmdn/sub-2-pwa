import {dbDeleteFavorite, dbGetAllFavTeam, dbInsertFavorite} from "./local/db-repo"
import {loadPage} from "./nav";

export function favoriteCondition() {

    let favoriteButtons = document.querySelectorAll(".favoriteButton");
    for (let button of favoriteButtons) {
        button.addEventListener("click", function (event) {
            let teamId = event.target.id;
            dbInsertFavorite(teamId).then(() => {
                let page = window.location.hash.substr(1);
                loadPage(page)
            })
        })
    }
}

