document.addEventListener('DOMContentLoaded', function() {
    // Create header element
    var header = document.createElement('header');
    header.style.position = 'fixed'; // Set position to fixed
    header.style.top = '0'; // Set top position to 0
    header.style.width = '100vw'; // Set width to 100%
    header.style.zIndex = '9999'; // Set z-index to a high value

    // Create navigation bar element
    var navigationBar = document.createElement('nav');
    navigationBar.id = 'navigation-bar';

    // Create h1 element for the "Welcome" text
    var welcomeText = document.createElement('h1');
    welcomeText.textContent = 'Welcome';

    // Create ul element for the navigation links
    var navLinks = document.createElement('ul');

    // Create an array of link names and href values
    var linkNames = ['Home', 'About Me', 'Student Projects', 'Contact'];
    var hrefValues = ['index.html', '#about', '#projects', '#contact'];

    // Loop through the link names and href values to create anchor elements
    for (var i = 0; i < linkNames.length; i++) {
        var link = document.createElement('a');
        link.href = hrefValues[i];
        link.textContent = linkNames[i];
        navLinks.appendChild(link);
    }

    // Append the welcomeText and navLinks elements to the navigationBar element
    navigationBar.appendChild(welcomeText);
    navigationBar.appendChild(navLinks);

    // Append the navigationBar element to the header element
    header.appendChild(navigationBar);

    // Append the header element to the body as the first child
    document.body.insertBefore(header, document.body.firstChild);

    // Get the container element
    var container = document.getElementById('home');
    let modalFlexboxGallery = document.querySelector('.flexbox-gallery');
// Set initial position of container
    var posX = 0;
    var posY = 0;

// Set flag to indicate if dragging is active
    var isDragging = false;

// Set scroll sensitivity
    var scrollSensitivity = 30;

// Add event listener for mouse down event
    container.addEventListener('mousedown', function(e) {
        // Set dragging flag to true
        isDragging = true;

        // Store current mouse position
        posX = e.clientX;
        posY = e.clientY;

        // Prevent default behavior of dragging
        e.preventDefault();
    });
    modalFlexboxGallery.addEventListener('mousedown', function(e) {
        // Set dragging flag to true
        isDragging = true;

        // Store current mouse position
        posX = e.clientX;
        posY = e.clientY;

        // Prevent default behavior of dragging
        e.preventDefault();
    });
// Add event listener for mouse move event
    container.addEventListener('mousemove', function(e) {
        // Check if dragging is active
        if (isDragging) {
            // Calculate the distance moved by the mouse
            var deltaX = e.clientX - posX;
            var deltaY = e.clientY - posY;

            // Update the container's position based on the distance moved
            container.scrollLeft -= deltaX;
            container.scrollTop -= deltaY;

            // Update the stored mouse position
            posX = e.clientX;
            posY = e.clientY;

            // Check if the mouse is close to the left edge of the container
            if (e.clientX <= container.getBoundingClientRect().left + scrollSensitivity) {
                // Scroll left
                container.scrollLeft -= scrollSensitivity;
            }

            // Check if the mouse is close to the right edge of the container
            if (e.clientX >= container.getBoundingClientRect().right - scrollSensitivity) {
                // Scroll right
                container.scrollLeft += scrollSensitivity;
            }
        }
    });
    modalFlexboxGallery.addEventListener('mousemove', function(e) {
        // Check if dragging is active
        if (isDragging) {
            // Calculate the distance moved by the mouse
            var deltaX = e.clientX - posX;
            var deltaY = e.clientY - posY;

            // Update the container's position based on the distance moved
            modalFlexboxGallery.scrollLeft -= deltaX;
            modalFlexboxGallery.scrollTop -= deltaY;

            // Update the stored mouse position
            posX = e.clientX;
            posY = e.clientY;

            // Check if the mouse is close to the left edge of the container
            if (e.clientX <= container.getBoundingClientRect().left + scrollSensitivity) {
                // Scroll left
                modalFlexboxGallery.scrollLeft -= scrollSensitivity;
            }

            // Check if the mouse is close to the right edge of the container
            if (e.clientX >= container.getBoundingClientRect().right - scrollSensitivity) {
                // Scroll right
                modalFlexboxGallery.scrollLeft += scrollSensitivity;
            }
        }
    });

    // Add event listener for mouse up event
    modalFlexboxGallery.addEventListener('mouseup', function() {
        // Set dragging flag to false
        isDragging = false;
    });

// Add event listener for mouse leave event
    modalFlexboxGallery.addEventListener('mouseleave', function() {
        // Set dragging flag to false
        isDragging = false;
    });



// Add event listener for mouse up event
    container.addEventListener('mouseup', function() {
        // Set dragging flag to false
        isDragging = false;
    });

// Add event listener for mouse leave event
    container.addEventListener('mouseleave', function() {
        // Set dragging flag to false
        isDragging = false;
    });

    // Get all the flexbox-item elements
    const flexboxItems = document.querySelectorAll('.flexbox-item');

// Add a click event listener to each flexbox-item
    flexboxItems.forEach(flexboxItem => {
        flexboxItem.addEventListener('click', () => {
            // Show the modal
            const modal = document.getElementById('modal');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling on body
            setModalContent(flexboxItem.dataset.projectId);
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal element and the close button element
    var modal = document.querySelector('.modal');
    var closeBtn = document.querySelector('.close');

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling on body
        document.querySelector('.flexbox-gallery').innerHTML= '';
    }

    // Add event listener to close button
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    // Add event listener to escape key
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
            closeModal();
        }
    });

    // Add event listener to modal background
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});






