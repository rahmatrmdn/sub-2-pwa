import {getAllStandings} from "./api/data"

const nav = () => {
    document.addEventListener("DOMContentLoaded", function () {
        let page;
        // Activate sidebar nav
        const elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems);
        loadNav();

        function loadNav() {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status !== 200) return;

                    // Muat daftar tautan menu
                    document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
                        elm.innerHTML = xhttp.responseText;
                    });

                    // Daftarkan event listener untuk setiap tautan menu
                    document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
                        elm.addEventListener("click", function(event) {
                            // Tutup sidenav
                            var sidenav = document.querySelector(".sidenav");
                            M.Sidenav.getInstance(sidenav).close();

                            // Muat konten halaman yang dipanggil
                            page = event.target.getAttribute("href").substr(1);
                            loadPage(page);
                        });
                    });
                }
            };
            xhttp.open("GET", "nav.html", true);
            xhttp.send();
        }

        // Load pages content
        page = window.location.hash.substr(1);
        if (page === "") page = "standing";
        loadPage(page);

        function loadPage(page) {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4) {
                    const content = document.querySelector("#body-content");
                    if (this.status === 200) {
                        content.innerHTML = xhttp.responseText;
                        getAllStandings()
                    } else if (this.status === 404) {
                        content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
                    } else {
                        content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
                    }
                }
            };
            xhttp.open("GET",  page + ".html", true);
            xhttp.send();
        }
    });
}

export default nav
