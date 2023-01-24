// Get the steps
const stepsElement = document.querySelectorAll('.step');

//Get bar
const barElement = document.getElementById('bar');

//Get buttons
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//Save the current step
let currentStep = 1;

//Listen the next button
nextButton.addEventListener('click', () => {
    if(currentStep < 4){
        currentStep++;
        updateProgress();
    }
});

prevButton.addEventListener('click', () => {
    if(currentStep > 1){
        currentStep--;
        updateProgress();
    }
})

//Funcion para actualizar el estado de los paseos
const updateProgress = () => {
    stepsElement.forEach((step, idx) => {
        if(idx < currentStep){
            step.classList.add('active');
        }else{
            step.classList.remove('active');
        }
    })

    //Actualizar barra
    const progress = (currentStep - 1) / (stepsElement.length -1 ) * 100;
    barElement.style.width = progress + '%';
    // console.log(progress);

    //Control de los botones
    if(currentStep >= stepsElement.length){
        nextButton.disabled = true;
    }else if(currentStep <= 1){
        prevButton.disabled = false;
    }else{
        prevButton.disabled = nextButton.disabled = false;
    }
}


