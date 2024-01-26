/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const imageModal = document.getElementById('imageModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

if (imageModal) {
    imageModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const div = event.relatedTarget
      // Extract info from data-bs-* attributes
      const image = div.getAttribute('data-bs-image')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.
  
      // Update the modal's content.
    //   const modalTitle = imageModal.querySelector('.modal-title')
      const modalImage = imageModal.querySelector('.modal-body img')
  
    //   modalTitle.textContent = `New message to ${recipient}`
    modalImage.src = image
    })
  }