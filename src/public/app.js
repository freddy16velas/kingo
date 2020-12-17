$(function(){
    
    $('#getUsers').on ('click', function (){
        $.ajax({
            url: '/usuarios',
            success: function (users){
               let tbody = $('tbody');
               tbody.html('');
               users.forEach(user => {
                   tbody.append(`
                   <tr>
                     <td class="id">${user.id}</td>
                     <td>
                       <input type="text" class="User" value="${user.User}"/>
                       <input type="text" class="Name" value="${user.Name}"/>
                       <input type="text" class="LstName" value="${user.LstName}"/>
                       <input type="text" class="Email" value="${user.Email}"/>
                       <input type="text" class="Rol" value="${user.Rol}"/>
                       <input type="text" class="Telefono" value="${user.Telefono}"/>
                       <input type="text" class="Estatus" value="${user.Estatus}"/>
                     </td>
                     <td>
                       <button class="update-button">UPDATE</button>
                       <button class="delete-button">DELETE</button>
                     </td>
                   </tr>
               `)
               });
            }
        })
    });
    
   $('#usersForm').on ('submit', function (e){
      e.preventDefault();
        let User = $('#nUser');
        let Name = $('#nName');
        let LstName = $('#nLstName');
         let Email = $('#nEmail');
        let Rol = $('#nRol');
        let Telefono = $('#nTelefono');
        let Estatus = $('nEstatus');

        $.ajax({
            url: '/usuarios',
            method: 'POST',
            data: {
                Name: Name.val(),
                User: User.val(),
                LstName: LstName.val(),
                Email: Email.val(),
                Rol: Rol.val(),
                Telefono: Telefono.val(),
                Estatus: Estatus.val()
            },
            success: function(response) {
               $('#getUsers').click();
            }
      })
    });
    $('table').on('click', '.update-button', function(){
      let row = $(this).closest('tr');
      let id = row.find('.id').text();
      let Name = row.find('.Name').val();
      let User = row.find('.User').val();
      let LstName = row.find('.LstName').val();
      let Email = row.find('.Email').val();
      let Rol = row.find('.Rol').val();
      let Telefono = row.find('.Telefono').val();
      let Estatus = row.find('.Estatus').val();

      $.ajax ({
        url: "/usuarios/"+ id,
        method:'PUT',
        data: {
          Name: Name, 
          User:User,
          LstName: LstName, 
          Email: Email,
          Rol: Rol,
          Telefono: Telefono,
          Estatus: Estatus
        },
        success: function (response) {
          $('#getUsers').click();
        }
      })

    });

  $('table').on ('click', '.delete-button', function() {
    let row = $(this).closest('tr');
    let id = row.find('.id').text();

    $.ajax({
      url: '/usuarios/' + id,
      method: 'DELETE',
      success: function (response) {
        console.log (response);
        $('#getUsers').click();
      }
    })

  })
})