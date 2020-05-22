function frameit(options) {
    let images = document.querySelectorAll('.frameit');

    if(options.shadow_type === 'hard')
        options.shadow_type = '0px'
    else
        options.shadow_type = '15px'

    images.forEach(image =>{
        image.style.boxShadow = `inset 0 0 10px #000000`;

        if(options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.frameit = frameit;