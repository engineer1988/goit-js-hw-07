const registerForm = document.querySelector('.login-form');

const user = {
  email: '',
  password: '',
};

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  user.email = form.elements.email.value.trim() + '';
  user.password = form.elements.password.value.trim() + '';

  if (user.email === '' || user.password === '') {
    return alert('All form fields must be filled in');
  }

  console.log(user);
  form.reset();
}
