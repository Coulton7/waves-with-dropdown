document.addEventListener("DOMContentLoaded", function() {

    const prodImgModal = document.getElementById('prodImgModal');
    if(prodImgModal){
        prodImgModal.addEventListener('show.bs.modal', function(event) {
            document.getElementById('zoomedImage').src = event.relatedTarget.dataset.imgurl;
        });
    }
})
