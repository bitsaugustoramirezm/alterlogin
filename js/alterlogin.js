(function ($, Drupal) {
  Drupal.behaviors.alterlogin = {

    attach: function (context, settings) {

      // Escuchar evento captcha para determinar cuando
      // hacer el submir del formulario, en función de
      // validación de campos.
      var form = context.getElementById('user-login-form');
      form.addEventListener('captcha', e => {
        console.log('event captcha', e.detail.validity);
        if (e.detail.validity === false) {
          // Escribir mensaje de error.
          jQuery(form).prepend('<div class= "messages__wrapper layout-container" ><div role="contentinfo" aria-label="Error message" class="messages messages--error"><div role="alert"><h2 class="visually-hidden">Error message</h2>Captcha inválido</div></div></div>');
        }
      });

      // Escuchar evento captchaKeyDown para limpiar mensaje de error.
      form.addEventListener('captchaKeyDown', e => {
        if (document.getElementsByClassName('messages__wrapper').length != 0) {
          document.getElementsByClassName('messages__wrapper')[0].remove();
        }
      });
    }
  };
  }) (jQuery, Drupal);
