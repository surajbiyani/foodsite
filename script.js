document.querySelector('.menu').addEventListener('click' ,()=> {
    document.querySelectorAll('.target').forEach((item)=>
        {
            item.classList.toggle('change')
    })
})

const icons = document.querySelectorAll('.section-1-icons i'); // Select all icons
let i = 0; // Start index at 0

setInterval(() => {
    // Remove 'change' class from the current icon
    icons[i].classList.remove('change');

    // Move to the next icon in the array
    i = (i + 1) % icons.length; // Ensures circular looping

    // Add 'change' class to the next icon
    icons[i].classList.add('change');
}, 3000);
