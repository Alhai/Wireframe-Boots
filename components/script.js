
// document.addEventListener("DOMContentLoaded", function() {
//     var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
//     document.getElementById('exampleModal').addEventListener('shown.bs.modal', function () {
//         var myInput = document.getElementById('myInput');
//         if(myInput) myInput.focus();
//     });
// });

const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
