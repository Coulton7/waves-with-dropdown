document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelectorAll("#pillarBtn").length > 0){
        document.querySelector("#pillarBtn").addEventListener("click",
        function pillarBtn(){
            document.querySelector("#newsTab").classList.add('d-none');
            document.querySelector("#newsTab").classList.remove('d-md-block', 'd-inline-flex');
            document.querySelector("#pillarTab").classList.remove('d-none');
            document.querySelector("#pillarTab").classList.add('d-md-block', 'd-inline-flex');
            document.querySelector("#newsBtn").classList.remove('invisible');
            document.querySelector("#newsBtn").classList.add('visible')
            document.querySelector(".news-slider").classList.add('d-none');
            document.querySelector(".pillar-slider").classList.remove('d-none');
            document.querySelector("#pillarCounter").classList.remove('d-none');
            document.querySelector("#pillar-controls").classList.remove('d-none');
            document.querySelector("#newsCounter").classList.add('d-none');
            document.querySelector("#news-controls").classList.add('d-none');
            document.querySelector('.pillar-text').classList.add('d-block');
            document.querySelector('.pillar-text').classList.remove('d-none');
            document.querySelector('.news-text').classList.remove('d-block');
            document.querySelector('.news-text').classList.add('d-none');
            document.querySelector('.pillar-btns').classList.add('visible');
            document.querySelector('.pillar-btns').classList.remove('invisible');
        })

        document.querySelector("#newsBtn").addEventListener("click",
        function newsBtn(){
            document.querySelector("#pillarTab").classList.add('d-none');
            document.querySelector("#pillarTab").classList.remove('d-md-block', 'd-inline-flex');
            document.querySelector("#newsTab").classList.remove('d-none');
            document.querySelector("#newsTab").classList.add('d-md-block', 'd-inline-flex');
            document.querySelector("#newsBtn").classList.add('invisible');
            document.querySelector("#newsBtn").classList.remove('visible');
            document.querySelector(".pillar-slider").classList.add('d-none');
            document.querySelector(".news-slider").classList.remove('d-none');
            document.querySelector("#pillarCounter").classList.add('d-none');
            document.querySelector("#pillar-controls").classList.add('d-none');
            document.querySelector("#newsCounter").classList.remove('d-none');
            document.querySelector("#news-controls").classList.remove('d-none');
            document.querySelector('.pillar-text').classList.add('d-none');
            document.querySelector('.pillar-text').classList.remove('d-block');
            document.querySelector('.news-text').classList.add('d-block');
            document.querySelector('.news-text').classList.remove('d-none');
            document.querySelector('.pillar-btns').classList.add('invisible');
            document.querySelector('.pillar-btns').classList.remove('visible');
        })
    }
});