(function() {
    // Fecha de destino: 4 de noviembre de 2024
    const targetDate = new Date("Nov 4, 2024 00:00:00").getTime();

    const countdownElement = document.getElementById("countdown-timer");

    // Función que actualiza la cuenta regresiva
    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div style="display: inline-block; margin: 0 10px;">
                    <span>${days}</span> días
                </div>
                <div style="display: inline-block; margin: 0 10px;">
                    <span>${hours}</span> horas
                </div>
                <div style="display: inline-block; margin: 0 10px;">
                    <span>${minutes}</span> minutos
                </div>
                <div style="display: inline-block; margin: 0 10px;">
                    <span>${seconds}</span> segundos
                </div>
            `;
        } else {
            countdownElement.innerHTML = "¡El CyberMonday ha comenzado!";
            clearInterval(interval);
        }
    }

    // Actualiza cada segundo
    const interval = setInterval(updateCountdown, 1000);
})();
