document.addEventListener("DOMContentLoaded", function() {

    const intResultsNum = document.querySelector('#intResultsNum');
    var searchButton = document.querySelector('.ais-SearchBox-submit');
    var searchInput = document.querySelector('.ais-SearchBox-input');

    searchButton.addEventListener("click", function() {
        setTimeout(function() {
            if (intResultsNum.innerText === "0") {
                document.querySelector('#globalResultsTab').classList.add('highlight-tab');
            } else {
                document.querySelector('#globalResultsTab').classList.remove('highlight-tab');
            }
        }, 1000);
        document.querySelector(".stats-row").style.display = "inline-flex";
    });

    searchInput.addEventListener("keydown", function(e) {
        if (e.key === 'Enter') {
            setTimeout(function() {
                if (intResultsNum.innerText === "0") {
                    document.querySelector('#globalResultsTab').classList.add('highlight-tab');
                } else {
                    document.querySelector('#globalResultsTab').classList.remove('highlight-tab');
                }
            }, 1000);
        }
        document.querySelector(".stats-row").style.display = "inline-flex";
    })

});