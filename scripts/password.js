let password = document.getElementById('password'),
  password_confirm = document.getElementById('password_confirm');

function validarPass() {
  if (password.value != password_confirm.value) {
    password_confirm.setCustomValidity('Las contraseñas no coinciden');
  } else {
      //TODO: quitar esta linea y dejar entrar al usuario
    password_confirm.setCustomValidity('Estás dentro');
  }
}

password.onchange = validarPass;
password_confirm.onkeyup = validarPass;
