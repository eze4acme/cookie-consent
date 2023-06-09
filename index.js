
const modal = document.getElementById('modal')
const modalBtn = document.getElementById("modal-close-btn")
modalBtn.addEventListener('click', remove)
function remove() {
    modal.style.display = 'none'
}
setTimeout(() => {
    modal.style.display = 'inline'
}, 1500);


const modalText = document.getElementById('modal-text')
const consentForm = document.getElementById('consent-form')
consentForm.addEventListener('submit', function (e){
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    console.log(consentFormData);
    const retriveFormData = consentFormData.get('name')
    console.log(retriveFormData);

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
        Uploading your data to the dark web...
        </p>
        </div>
        `
    const uploadText = document.getElementById('upload-text')
    message = 'Making the sale...'
    setTimeout(() => {
     uploadText.textContent = `${message}`
    }, 1500);
    setTimeout(() => {
        document.getElementById('modal-text').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${retriveFormData}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
   <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `
    const modalClosebtn = document.getElementById('modal-close-btn')
    modalClosebtn.disabled = false
    document.getElementById('consent-form').style.display = 'none'
    }, 3000);
})
const modalRverse = document.getElementById('modal-choice-btns')
const declineBtn = document.getElementById('decline-btn')
declineBtn.addEventListener('mouseenter', function(){
    modalRverse.classList.toggle('reverse')
})







