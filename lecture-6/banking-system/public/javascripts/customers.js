$(document).ready(function() {
  $('.customer-remove-btn').on('click', (event) => {
    const userChoice = confirm("You are trying to remove the user from the system. Are you sure?");

    if (userChoice == true) {
      $.ajax({
        url: '/customers',
        data: {
          id: $(event.target).data('id')
        },
        type: 'DELETE',
        success: (response) => {
          if (response.error) {
            console.log(response.error)
          } else {
            location.reload()
          }
        }
      })
    }
  })
})