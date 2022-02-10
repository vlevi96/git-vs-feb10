window.onload = () => {
    const flashes = document.querySelectorAll('.flash');
    setInterval(() => {
        for (let flash of flashes) {
            flash.classList.toggle('red');
        }
    }, 1000);
}