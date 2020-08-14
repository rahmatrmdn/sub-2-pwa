import {dbDeleteFavorite, dbGetAllFavTeam, dbInsertFavorite} from "./local/db-repo"
import {loadPage} from "./nav";

const favorite = () => {
    document.addEventListener("DOMContentLoaded", function () {

        let favoriteButtons = document.querySelectorAll(".favoriteButton");
        for(let button of favoriteButtons) {
            button.addEventListener("click", function (event) {
                window.alert('fav clicked')
                let teamId = event.target.id;
                dbInsertFavorite(teamId).then(() => {
                    loadPage()
                })
            })
        }

    })
}

export default favorite
