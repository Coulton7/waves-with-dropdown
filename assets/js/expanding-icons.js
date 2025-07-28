document.addEventListener("DOMContentLoaded", function() {
    const enquiryIcon = document.querySelector('.enquiry-icon');
    const enquiryIconFa = enquiryIcon.querySelector('i');
    const searchIcon = document.querySelector('.search-icon');
    const feedbackIcon = document.querySelector('.feedback-icon');
    const chatIcon = document.querySelector('.chat-icon');

    searchIcon.style.display = "none";
    feedbackIcon.style.display = "none";
    chatIcon.style.display = "none";

    let isOpen = false;

    enquiryIcon.addEventListener("click", function(event){
    event.preventDefault()  

        if (!isOpen) {
            searchIcon.style.display = "flex";
            feedbackIcon.style.display = "flex";
            chatIcon.style.display = "flex";
        
            // Add animation classes
            searchIcon.classList.add('slide-in-right'); // Use the new class name here
            feedbackIcon.classList.add('slide-in-left');
            chatIcon.classList.add('slide-in-up');
        
            enquiryIconFa.classList.remove('fa-question');
            enquiryIconFa.classList.add('fa-times');
            isOpen = true;
        } else {
            // Remove animation classes and hide buttons
            searchIcon.classList.remove('slide-in-right');
            feedbackIcon.classList.remove('slide-in-left');
            chatIcon.classList.remove('slide-in-up');
        
            searchIcon.style.display = "none";
            feedbackIcon.style.display = "none";
            chatIcon.style.display = "none";
        
            enquiryIconFa.classList.remove('fa-times');
            enquiryIconFa.classList.add('fa-question');
            isOpen = false;
        }
    });
});