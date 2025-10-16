
const time = document.getElementById('time')
const camera = document.getElementById('uploadButton')
const avatarImage = document.getElementById('avatarImage');
const imageInput = document.getElementById('imageInput')


function updateTime(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0')

 

    time.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`


}

setInterval(updateTime, 1000);

updateTime();


camera.addEventListener('click', ()=>{
    imageInput.click();
})
camera.addEventListener('keydown', (e)=>{
if(e.key === 'Enter' || e.key === " "){
    imageInput.click();
}
})


imageInput.addEventListener('change', (event)=>{
    
    const file = event.target.files[0]
    console.log('This file name', file)
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            avatarImage.src = e.target.result
        }
        reader.readAsDataURL(file);
        console.log('This is the image file')
    }
})
