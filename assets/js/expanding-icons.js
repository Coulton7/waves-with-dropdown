document.addEventListener("DOMContentLoaded", function() {
    const enquiryIcon = document.querySelector('.enquiry-icon');
    const enquiryIconFa = enquiryIcon.querySelector('i');
    const searchIcon = document.querySelector('.search-icon');
    const feedbackIcon = document.querySelector('.feedback-icon');
    const chatIcon = document.querySelector('.chat-icon');

    searchIcon.style.display = "none";
    feedbackIcon.style.display = "none";
    if(chatIcon){
        chatIcon.style.display = "none";
    }

    let isOpen = false;

    enquiryIcon.addEventListener("click", function(event){
    event.preventDefault()  

        if (!isOpen) {
            searchIcon.style.display = "flex";
            feedbackIcon.style.display = "flex";
            if(chatIcon){
                chatIcon.style.display = "flex";
            }
        
            // Add animation classes
            searchIcon.classList.add('slide-up-btn-2'); 
            feedbackIcon.classList.add('slide-up-btn-3'); 
            if(chatIcon){
                chatIcon.classList.add('slide-up-btn-1');
            }
        
            enquiryIconFa.classList.remove('fa-question');
            enquiryIconFa.classList.add('fa-times');
            isOpen = true;
        } else {
            // Remove animation classes and hide buttons
            searchIcon.classList.remove('slide-up-btn-2');
            feedbackIcon.classList.remove('slide-up-btn-3');
            if(chatIcon){
                chatIcon.classList.remove('slide-up-btn-1');
            }
        
            searchIcon.style.display = "none";
            feedbackIcon.style.display = "none";
            if(chatIcon){
                chatIcon.style.display = "none";
            }
        
            enquiryIconFa.classList.remove('fa-times');
            enquiryIconFa.classList.add('fa-question');
            isOpen = false;
        }
    });
});