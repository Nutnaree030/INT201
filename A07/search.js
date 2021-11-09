const search = document.querySelector("#search");

let popSearch = true;

search.addEventListener("click", () => {
    popSearch = !popSearch;
    if (popSearch) {
        document.querySelector(
            "#searchBar"
        ).innerHTML += `<input type="text" style="margin:10px;" class="form-control mb-2" placeholder="Search..." id="form">`;
        let log = document.getElementById("form");
        log.addEventListener("keyup", () => {
            let input = document.getElementById("form");
            let filter = input.value.toLowerCase();
            let divID = document.getElementById("products");
            let divClass = divID.getElementsByClassName("product");
            for (let i = 0; i < divClass.length; i++) {
                let txtValue = divClass[i].textContent;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    divClass[i].style.display = "";
                } else {
                    divClass[i].style.display = "none";
                }
            }
        });
    } else document.querySelector("#searchBar").innerHTML = "";
});