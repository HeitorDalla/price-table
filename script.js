"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const botoesEnviar = document.querySelectorAll(".button");
    
    botoesEnviar.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const plano = e.currentTarget.parentElement.classList[1];
            console.log(plano)

            window.location.href = `assinatura.html?plano=${plano}`;
        })
    })
})