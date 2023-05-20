const loginForm = document.querySelector(".login-form");

const handleSubmit = (submit) => {
  const emailForm = loginForm.elements.email;
  const passwordForm = loginForm.elements.password;

  if (emailForm.value === "" || passwordForm.value === "") {
    alert("Please fill in all fields.");
    return
  }

  const formObj = {
    email: emailForm.value,
    password: passwordForm.value,
  };

  console.log(formObj);

  submit.preventDefault();

  loginForm.reset();
};

loginForm.addEventListener("submit", handleSubmit)
