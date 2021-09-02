const loginFormUI = {
  form: document.forms["loginForm"],
  inputEmail: document.getElementById("email"),
  inputPassword: document.getElementById("password"),
};

const signupFormUI = {
  form: document.forms["signupForm"],
  email: document.getElementById("signUpEmail"),
  password: document.getElementById("signUpPassword"),
  nickname: document.getElementById("nickname"),
  first_name: document.getElementById("first_name"),
  last_name: document.getElementById("last_name"),
  phone: document.getElementById("phone"),
  gender_orientation: document.getElementById("gender_orientation"),
  city: document.getElementById("city"),
  country: document.getElementById("country"),
  date_of_birth_day: document.getElementById("date_of_birth_day"),
  date_of_birth_month: document.getElementById("date_of_birth_month"),
  date_of_birth_year: document.getElementById("date_of_birth_year"),
};

export { loginFormUI, signupFormUI };
