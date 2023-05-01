window.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("form");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const cpfNumber = document.getElementById("cpf-number");
  const phoneNumber = document.getElementById("phone-number");
  const email = document.getElementById("email");
  const birthday = document.getElementById("birthday");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (firstName.value === "") {
      alert("Por favor, insira um nome.");
      return;
    }
    if (lastName.value === "") {
      alert("Por favor, insira um e-mail.");
      return;
    }
    if (cpfNumber.value === "") {
      alert("Por favor, insira um CPF");
      return;
    }
    if (phoneNumber.value === "") {
      alert("Por favor, insira um telefone para contato");
      return;
    }
    if (email.value === "") {
      alert("Por favor, insira um e-mail");
      return;
    }
    if (birthday.value === "") {
      alert("Por favor, insira uma data de nascimento");
      return;
    }

    alert(
      "Formulário enviado! Verifique o e-mail cadastrado para continuar o seu cadastro."
    );
  });
});
