//get elements by their class name
const input_search = document.getElementById('input_search');
const input_button = document.getElementById('input_button');

const input_search_mobile = document.getElementById('input_search_mobile');
const input_button_mobile = document.getElementById('input_button_mobile');

//add event listener to the button
input_button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const searchInput = input_search.value;
    
    if(!searchInput){
        alert('Please enter a search input');
    }

    else{
        alert(`Searching for "${searchInput}".....`);
        alert("Sorry, we couldn't find the input you provided since our backend-developer hasn't finished their PHP classes.")
    }

});

input_button_mobile.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const searchInput_mobile = input_search_mobile.value;
    
    if(!searchInput_mobile){
        alert('Please enter a search input');
    }

    else{
        alert(`Searching for "${searchInput_mobile}".....`);
        alert("Sorry, we couldn't find the input you provided since our backend-developer hasn't finished their PHP classes.")
    }

});
