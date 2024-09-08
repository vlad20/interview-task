document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        this.textContent = "Added";
        this.style.backgroundColor = "#28a745";
    }); 
});