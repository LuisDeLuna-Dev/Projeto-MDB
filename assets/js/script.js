document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".button");
    const usuarioInput = document.querySelector("input[type='text']");
    const senhaInput = document.querySelector("input[type='password']");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();

        const usuario = usuarioInput.value.trim();
        const senha = senhaInput.value.trim();

        if (usuario === "" || senha === "") {
            alert("Por favor, preencha ambos os campos!");
            return;
        }

        const usuarioCorreto = "admin";
        const senhaCorreta = "12345";

        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            alert("Login bem-sucedido!");
            window.location.href = "index.html";
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
});
