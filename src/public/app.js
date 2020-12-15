$(function(){
    
    $('#getUsers').on ('click', function (){
        $.ajax({
            url: '/usuarios',
            success: function (users){
               let tbody = $('tbody');
               tbody.html =('');
               users.forEach(user => {
                   tbody.append(`
                   <tr>
                     <td class="id">${user.id}</td>
                     <td>
                       <input type="text" class="User" value="${user.User}"/>
                       <input type="text" class="Name" value="${user.Name}"/>
                       <input type="text" class="LstName" value="${user.LastName}"/>
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
        let nUser = $('#User');
        let nName = $('#Name');
        let nLstName = $('#LstName');
        let nEmail = $('#Email');
        let nRol = $('#Rol');
        let nTelefono = $('#Telefono');
        let nEstatus = $('Estatus');

        $.ajax({
            url: '/usuarios',
            method: 'POST',
            data: {
                Name: nName.val(),
                User: nUser.val(),
                LstName: nLstName.val(),
                Email: nEmail.val(),
                Rol: nRol.val(),
                Telefono: nTelefono.val(),
                Estatus: nEstatus.val()
            },
            success: function(response) {
                console.log(response)
                
            }
      })
    })
})