
function setError(firstId, secondId, message, color) {
    // remove existing error
    const div = document.getElementById(firstId);
    if(div.children.length > 1) {
        div.removeChild(div.lastChild);
    }
    // change background to red
    secondId.style.background = color;

    // create label
    const node = document.createElement("label");

    // create message for label
    const textnode = document.createTextNode(message);

    // create and set attribute
    const att = document.createAttribute("for");       // Create a "class" attribute
    att.value = secondId; 
    node.setAttributeNode(att);

    // append message to label and append label to parent
    node.appendChild(textnode); 
    document.getElementById(firstId).appendChild(node); 
}


function unsetError(firstId, secondId, color) {
    const div = document.getElementById(firstId);

    /*
        if div has more than 1 child
        child[0] is the input
        anything greater needs to be removed
        and background of the input needs to changed back to non error state

    */
    if(div.children.length > 1) {
        div.removeChild(div.lastChild);
    }
    secondId.style.background = color;
}


function emailValidation(email) {
    /*
        Using regex I can validate an email by allowing only numbers, letters
        And following a specific pattern ____@___.__

    */
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

// Forms
const contactForm = document.querySelector('#contactForm');
const subscribeForm = document.querySelector('#subscribeForm');
const commentForm = document.querySelector('#commentForm');
const mobileMenu = document.querySelector('#mobileIcon');

// Mobile Menu
if(mobileMenu) {
    mobileMenu.addEventListener('click', function(event) {
        console.log('hi')
        const menu = document.getElementById("mobileMenu");
        menu.style.display = "block";
        // Close menuu
        const closeMenu = document.querySelector('#closeMenu');
        closeMenu.addEventListener('click', function(event) {
            menu.style.display = "none";
        });
    })
}

// Contact form
if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const subject = document.querySelector('#subject');
        const message = document.querySelector('#message');
        
        const inputName = document.querySelector('#inputName');
        const inputEmail = document.querySelector('#inputEmail');
        const inputSubject = document.querySelector('#inputSubject');
        const inputMessage = document.querySelector('#inputMessage');

        event.preventDefault();

        if(!inputName.value.trim()) {
            setError('name', inputName, 'You must enter your name', '#fbe7f0')       
        } else {
            unsetError('name', inputName, '#f6f6f6');
        }
        if(!inputEmail.value.trim()) {
            setError('email', inputEmail, 'You must enter your email', '#fbe7f0')       
        } else {
            unsetError('email', inputEmail, '#f6f6f6');
        }
        if(!emailValidation(inputEmail.value) && inputEmail.value.trim()) {
            setError('email', inputEmail, 'Enter a valid email address', '#fbe7f0') 
        }
        if(!inputSubject.value.trim()) {
            setError('subject', inputSubject, 'You must enter a subject', '#fbe7f0')       
        } else {
            unsetError('subject', inputSubject, '#f6f6f6');
        }
        if(!inputMessage.value.trim()) {
            setError('message', inputMessage, 'You must enter a message', '#fbe7f0');
        } else {
            unsetError('message', inputMessage, '#f6f6f6');
        }
        if(inputName.value.trim() && inputEmail.value.trim() && emailValidation(inputEmail.value) && inputSubject.value.trim() && inputMessage.value.trim()) {
            const popup = document.getElementById("popup");
            popup.style.display = "block";
            document.querySelector('#popupMessage').innerHTML = 'Success! Message has been sent <i class="far fa-check-circle"></i>';
            contactForm.reset();
        }
    });
}

// Subscribe form
if(subscribeForm) {
    subscribeForm.addEventListener('submit', function(event) {
        const subscribeEmail = document.querySelector('#subscribeEmail');

        event.preventDefault();

        if(!subscribeEmail.value.trim()) {
            setError('subscribeForm', subscribeEmail, 'You must enter your email', '#fbe7f0')       
        } else {
            unsetError('subscribeForm', subscribeEmail, '#535353');
        }
        if(!emailValidation(subscribeEmail.value) && subscribeEmail.value.trim()) {
            setError('subscribeForm', subscribeEmail, 'Enter a valid email address', '#fbe7f0') 
        }
        if(subscribeEmail.value.trim() && emailValidation(subscribeEmail.value)) {
            const popup = document.getElementById("popup");
            popup.style.display = "block";
            document.querySelector('#popupMessage').innerHTML = 'Success! You have subscribed to our newsletter <i class="far fa-check-circle"></i>';
            subscribeForm.reset();
        }
    });
}

// Comment form
if(commentForm) {
    commentForm.addEventListener('submit', function(event) {
        const commentName = document.querySelector('#commentName');
        const commentEmail = document.querySelector('#commentEmail');
        const comment = document.querySelector('#comment');
        
        const inputCommentName = document.querySelector('#inputCommentName');
        const inputCommentEmail = document.querySelector('#inputCommentEmail');
        const inputComment = document.querySelector('#inputComment');

        event.preventDefault();

        if(!inputCommentName.value.trim()) {
            setError('commentName', inputCommentName, 'You must enter your name', '#fbe7f0')       
        } else {
            unsetError('commentName', inputCommentName, '#f6f6f6');
        }
        if(!inputCommentEmail.value.trim()) {
            setError('commentEmail', inputCommentEmail, 'You must enter your email', '#fbe7f0')       
        } else {
            unsetError('commentEmail', inputCommentEmail, '#f6f6f6');
        }
        if(!emailValidation(inputCommentEmail.value) && inputCommentEmail.value.trim()) {
            setError('commentEmail', inputCommentEmail, 'Enter a valid email address', '#fbe7f0') 
        }
        if(!inputComment.value.trim()) {
            setError('comment', inputComment, 'You must enter a message', '#fbe7f0');
        } else {
            unsetError('comment', inputComment, '#f6f6f6');
        }
        if(inputCommentName.value.trim() && inputCommentEmail.value.trim() && emailValidation(inputCommentEmail.value) && inputComment.value.trim()) {
            const popup = document.getElementById("popup");
            popup.style.display = "block";
            document.querySelector('#popupMessage').innerHTML = 'Success! Comment has been posted <i class="far fa-check-circle"></i>';
            commentForm.reset();
        }
    });
}

// Close popup
const closePopup = document.querySelector('#closePopup');
closePopup.addEventListener('click', function(event) {
    popup.style.display = "none";
});

