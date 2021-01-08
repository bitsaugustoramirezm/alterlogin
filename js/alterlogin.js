(function ($, Drupal) {
  Drupal.behaviors.alterlogin = {

    attach: function (context, settings) {

      // Escuchar evento captcha para determinar cuando
      // hacer el submir del formulario, en función de
      // validación de campos.
      var form = context.getElementById('user-login-form')
      form.addEventListener('captcha', e => {
        console.log('event captcha', e.detail.validity);
        if (e.detail.validity === false) {
          // Escribir mensaje de error.

        }
      });

      // Escuchar evento captchaKeyDown para limpiar mensaje de error.
      form.addEventListener('captchaKeyDown', e => {
      });
    }
  };
  }) (jQuery, Drupal);
