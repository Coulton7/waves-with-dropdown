document.addEventListener("DOMContentLoaded", function() {

    var intResultsNum = document.querySelector('#intResultsNum');
    var searchButton = document.querySelector('.ais-SearchBox-submit');
    var searchInput = document.querySelector('.ais-SearchBox-input');

    searchButton.addEventListener("click", function() {

        if (intResultsNum.value === "0") {
            document.querySelector('#globalResultsTab').classList.add('highlight-tab');
        }

    })

    searchInput.addEventListener("keydown", function(e) {
        if (e.key === 'Enter') {
            if (intResultsNum.value === "0") {
                document.querySelector('#globalResultsTab').classList.add('highlight-tab');
            }

        }
    })

});