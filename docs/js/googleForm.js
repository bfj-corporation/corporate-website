/**
 * お問い合わせフォームをSubmitする.
 *
 */
var submitForm = function () {
  document.getElementById('googleForm').submit();

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('tel').value = '';
  document.getElementById('content').value = '';

  document.getElementById('name-required-error').style.display = 'none';
  document.getElementById('email-required-error').style.display = 'none';
  document.getElementById('content-required-error').style.display = 'none';

  toastr.success('お問い合わせ完了');
}

document.getElementById('submit_button').addEventListener('click', function () {
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  tel = document.getElementById('tel').value;
  content = document.getElementById('content').value;
  if (name && email && content) {
    submitForm();
  }
  if (!name) {
    document.getElementById('name-required-error').style.display = 'inline';
  }
  if (!email) {
    document.getElementById('email-required-error').style.display = 'inline';
  }
  if (!content) {
    document.getElementById('content-required-error').style.display = 'inline';
  }
})