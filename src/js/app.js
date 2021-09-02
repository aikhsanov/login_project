import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";
import { loginFormUI, signupFormUI } from "./config/ui.config";
import { validate } from "./helpers/validate";
import { removeInputError, showInputError } from "./views/form";
import { login, register } from "./services/auth.service";
import { notify } from "./views/notifications";
import locations from "./store/store";
import autocomplete from "./helpers/autocomplete";

const { form: loginForm, inputEmail, inputPassword } = loginFormUI;
const { form: signupForm, ...signupInputs } = signupFormUI;
const inputs = [inputEmail, inputPassword];

initApp();
signupInputs.country.addEventListener("change", (e) =>
  setTimeout(() => onCityInputFocus(signupInputs.country.value), 1200)
);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  onLoginFormSubmit();
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  onSignupFormSubmit();
});
inputs.forEach((el) =>
  el.addEventListener("focus", () => removeInputError(el))
);
Object.values(signupInputs).forEach((el) =>
  el.addEventListener("focus", () => removeInputError(el))
);

//Handlers
async function initApp() {
  await locations.init();
  autocomplete(signupInputs.country, locations.countriesAutocompleteList);
}

async function onLoginFormSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;
  try {
    await login(inputEmail.value, inputPassword.value);
    loginForm.reset();
    //show success notify
    notify({ msg: "Login successful", className: "alert-success" });
  } catch (err) {
    //show error notify
    notify({ msg: "Login failed", className: "alert-danger" });
  }
}

async function onSignupFormSubmit() {
  const isValidForm = Object.values(signupInputs).every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    const data = Object.keys(signupInputs).reduce((acc, val) => {
      acc[val] = signupInputs[val].value;
      return acc;
    }, {});
    await register(data);
    signupForm.reset();
    //show success notify
    notify({ msg: "SignUp successful", className: "alert-success" });
  } catch (err) {
    console.log(err);
    //show error notify
    notify({ msg: `${err}`, className: "alert-danger" });
  }
}
async function onCityInputFocus(country) {
  console.log("out");
  console.log(country);
  if (!country) return;
  const index = locations.getIndexByCountryName(country);
  if (index) {
    await locations.getCitiesByIndex(index);
    signupInputs.city.removeAttribute("readonly");
    autocomplete(signupInputs.city, locations.citiesAutocompleteList);
  } else {
    notify({ msg: "Country is invalid", className: "alert-danger" });
  }
}
