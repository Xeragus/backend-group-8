$(document).ready(function() {
  $('.currency-select').select2();

  $('.customer-remove-btn').on('click', (event) => {
    const userChoice = confirm("You are trying to remove the user from the system. By removing the user you will remove all accounts related to it. Are you sure?");

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
            location.href = 'http://localhost:3000/customers'
          }
        }
      })
    }
  })

  $('#customer_update_btn').on('click', (event) => {
    event.preventDefault()

    $('#customer_update_form').submit()
  })

  $('#customer_update_form').on('submit', (event) => {
    event.preventDefault()

    $.ajax({
      url: `/customers/${$('#customer_id').val()}`,
      method: 'POST',
      data: $('#customer_update_form').serialize(),
      success: function(response) {
        location.reload()
      }
    })
  })

  $('#account_create_btn').on('click', (event) => {
    event.preventDefault()

    $('#account_create_form').submit()
  })

  $('#account_create_form').on('submit', (event) => {
    event.preventDefault()

    $.ajax({
      url: '/accounts',
      method: 'POST',
      data: $('#account_create_form').serialize(),
      success: function(response) {
        location.reload()
      }
    })
  })

  $('#make_transfer_btn').on('click', (event) => {
    event.preventDefault()

    $('#make_transfer_form').submit()
  })

  $('#make_transfer_form').on('submit', (event) => {
    event.preventDefault()

    $.ajax({
      url: '/transfer',
      method: 'POST',
      data: $('#make_transfer_form').serialize(),
      success: function(response) {
        if (response.error) {
          $('#make_transfer_errors').removeClass('d-none')
          $('#make_transfer_errors span').text(response.messages[0])
          $('#make_transfer_errors').addClass('d-block')
          return
        }

        location.href = 'http://localhost:3000'
      }
    })
  })

  
})