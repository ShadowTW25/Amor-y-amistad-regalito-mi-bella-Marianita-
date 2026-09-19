/* =========================================================
   ❤️ AMOR Y AMISTAD — JAVASCRIPT COMPLETO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           📌 ELEMENTOS
        ===================================================== */

        const inicio =
            document.getElementById("inicio");

        const sobrePantalla =
            document.getElementById("sobrePantalla");

        const cartaPantalla =
            document.getElementById("cartaPantalla");

        const secretoPantalla =
            document.getElementById("secretoPantalla");

        const finalPantalla =
            document.getElementById("finalPantalla");


        const abrirBtn =
            document.getElementById("abrirBtn");

        const abrirSobreBtn =
            document.getElementById("abrirSobreBtn");

        const finalBtn =
            document.getElementById("finalBtn");

        const continuarSecretoBtn =
            document.getElementById(
                "continuarSecretoBtn"
            );

        const sonrisaBtn =
            document.getElementById(
                "sonrisaBtn"
            );


        const sobre =
            document.getElementById("sobre");

        const particulas =
            document.getElementById(
                "particulas"
            );


        const musica =
            document.getElementById("musica");

        const sonidoBtn =
            document.getElementById(
                "sonidoBtn"
            );


        const textoSecreto =
            document.getElementById(
                "textoSecreto"
            );


        const mensajeSonrisa =
            document.getElementById(
                "mensajeSonrisa"
            );


        /* =====================================================
           ✨ PARTÍCULAS DEL FONDO
        ===================================================== */

        const simbolos = [
            "❤️",
            "🩷",
            "♥",
            "♡",
            "✦",
            "✧",
            "✨"
        ];


        if (particulas) {

            for (
                let i = 0;
                i < 45;
                i++
            ) {

                const particula =
                    document.createElement(
                        "span"
                    );


                particula.className =
                    "particula";


                particula.textContent =
                    simbolos[
                        Math.floor(
                            Math.random() *
                            simbolos.length
                        )
                    ];


                particula.style.left =
                    (
                        Math.random() * 100
                    ) + "%";


                particula.style.fontSize =
                    (
                        .55 +
                        Math.random() * 1.1
                    ) + "rem";


                particula.style.animationDuration =
                    (
                        7 +
                        Math.random() * 10
                    ) + "s";


                particula.style.animationDelay =
                    (
                        Math.random() * 10
                    ) + "s";


                particulas.appendChild(
                    particula
                );

            }

        }


        /* =====================================================
           🎵 MÚSICA
        ===================================================== */

        let musicaActiva = false;


        if (sonidoBtn && musica) {

            sonidoBtn.addEventListener(
                "click",
                function (evento) {

                    evento.stopPropagation();


                    if (!musicaActiva) {

                        musica
                            .play()
                            .then(function () {

                                musicaActiva = true;

                                sonidoBtn.textContent =
                                    "🔊";

                                sonidoBtn.setAttribute(
                                    "aria-label",
                                    "Desactivar música"
                                );

                            })
                            .catch(function () {

                                alert(
                                    "No pude reproducir la música. Revisa que el archivo 'musica-amor.mp3' esté en la misma carpeta. ❤️"
                                );

                            });

                    } else {

                        musica.pause();

                        musicaActiva = false;

                        sonidoBtn.textContent =
                            "🔇";

                        sonidoBtn.setAttribute(
                            "aria-label",
                            "Activar música"
                        );

                    }

                }
            );

        }


        /* =====================================================
           ❤️ INICIO → SOBRE
        ===================================================== */

        if (abrirBtn) {

            abrirBtn.addEventListener(
                "click",
                function () {

                    crearExplosion(28);


                    setTimeout(
                        function () {

                            cambiarPantalla(
                                inicio,
                                sobrePantalla
                            );

                        },
                        300
                    );

                }
            );

        }


        /* =====================================================
           💌 ABRIR SOBRE
        ===================================================== */

        if (abrirSobreBtn && sobre) {

            abrirSobreBtn.addEventListener(
                "click",
                function () {

                    sobre.classList.add(
                        "abierto"
                    );


                    crearExplosion(18);


                    abrirSobreBtn.textContent =
                        "Leer mi carta ❤️";


                    setTimeout(
                        function () {

                            abrirSobreBtn.onclick =
                                function () {

                                    cambiarPantalla(
                                        sobrePantalla,
                                        cartaPantalla
                                    );

                                    crearExplosion(
                                        35
                                    );

                                };

                        },
                        1000
                    );

                }
            );

        }


        /* =====================================================
           💖 CARTA → SECRETO
        ===================================================== */

        if (finalBtn) {

            finalBtn.addEventListener(
                "click",
                function () {

                    crearExplosion(40);


                    setTimeout(
                        function () {

                            cambiarPantalla(
                                cartaPantalla,
                                secretoPantalla
                            );


                            iniciarTextoSecreto();

                        },
                        500
                    );

                }
            );

        }


        /* =====================================================
           ✨ TEXTO SECRETO
        ===================================================== */

        function iniciarTextoSecreto() {

            if (!textoSecreto) {
                return;
            }


            const texto =
                "Y aunque podría seguir escribiéndote durante horas, creo que hay cosas que simplemente se sienten mejor cuando se dicen poquito a poquito. Solo quería que supieras que te quiero muchísimo, mi vidaaa. Y que me encanta seguir descubriendo este camino contigo, sin afán, disfrutando cada pasito. ❤️";


            textoSecreto.textContent =
                "";


            let indice = 0;


            const velocidad = 28;


            const escribir =
                setInterval(
                    function () {

                        textoSecreto.textContent +=
                            texto[indice];


                        indice++;


                        if (
                            indice >=
                            texto.length
                        ) {

                            clearInterval(
                                escribir
                            );

                        }

                    },
                    velocidad
                );

        }


        /* =====================================================
           🫶 SECRETO → FINAL
        ===================================================== */

        if (continuarSecretoBtn) {

            continuarSecretoBtn.addEventListener(
                "click",
                function () {

                    crearExplosion(35);


                    setTimeout(
                        function () {

                            cambiarPantalla(
                                secretoPantalla,
                                finalPantalla
                            );


                            crearLluvia();

                        },
                        450
                    );

                }
            );

        }


        /* =====================================================
           🥹 SONRISITA
        ===================================================== */

        if (sonrisaBtn) {

            sonrisaBtn.addEventListener(
                "click",
                function () {

                    crearExplosion(100);


                    if (mensajeSonrisa) {

                        mensajeSonrisa.classList.remove(
                            "oculto"
                        );

                    }


                    sonrisaBtn.textContent =
                        "Esa era ❤️";


                    sonrisaBtn.disabled =
                        true;


                    sonrisaBtn.style.opacity =
                        ".8";


                    crearLluvia();


                    crearLluvia();


                    setTimeout(
                        function () {

                            crearExplosion(
                                80
                            );

                        },
                        900
                    );

                }
            );

        }


        /* =====================================================
           🌹 CAMBIAR PANTALLA
        ===================================================== */

        function cambiarPantalla(
            pantallaActual,
            pantallaNueva
        ) {

            if (pantallaActual) {

                pantallaActual.classList.add(
                    "oculto"
                );

            }


            if (pantallaNueva) {

                pantallaNueva.classList.remove(
                    "oculto"
                );

            }


            window.scrollTo(
                0,
                0
            );

        }


        /* =====================================================
           💥 EXPLOSIÓN DE CORAZONES
        ===================================================== */

        function crearExplosion(
            cantidad
        ) {

            const explosion =
                document.createElement(
                    "div"
                );


            explosion.className =
                "explosion";


            const elementos = [
                "❤️",
                "🩷",
                "♥",
                "♡",
                "✨",
                "✦",
                "🌹"
            ];


            for (
                let i = 0;
                i < cantidad;
                i++
            ) {

                const elemento =
                    document.createElement(
                        "span"
                    );


                elemento.textContent =
                    elementos[
                        Math.floor(
                            Math.random() *
                            elementos.length
                        )
                    ];


                const angulo =
                    (
                        Math.PI * 2 * i
                    ) /
                    cantidad;


                const distancia =
                    90 +
                    Math.random() * 240;


                elemento.style.setProperty(
                    "--x",
                    (
                        Math.cos(angulo) *
                        distancia
                    ) + "px"
                );


                elemento.style.setProperty(
                    "--y",
                    (
                        Math.sin(angulo) *
                        distancia
                    ) + "px"
                );


                elemento.style.animationDelay =
                    (
                        Math.random() * .2
                    ) + "s";


                explosion.appendChild(
                    elemento
                );

            }


            document.body.appendChild(
                explosion
            );


            setTimeout(
                function () {

                    explosion.remove();

                },
                1800
            );

        }


        /* =====================================================
           💞 LLUVIA DE CORAZONES
        ===================================================== */

        function crearLluvia() {

            for (
                let i = 0;
                i < 45;
                i++
            ) {

                const corazon =
                    document.createElement(
                        "span"
                    );


                corazon.textContent =
                    Math.random() > .5
                        ? "❤️"
                        : "🩷";


                corazon.style.position =
                    "fixed";


                corazon.style.left =
                    (
                        Math.random() * 100
                    ) + "%";


                corazon.style.top =
                    "-50px";


                corazon.style.zIndex =
                    "9999";


                corazon.style.pointerEvents =
                    "none";


                corazon.style.fontSize =
                    (
                        .7 +
                        Math.random() * 1.4
                    ) + "rem";


                const duracion =
                    3 +
                    Math.random() * 4;


                corazon.animate(
                    [
                        {
                            transform:
                                "translateY(0) rotate(0deg)",

                            opacity: 0
                        },

                        {
                            transform:
                                "translateY(25vh) rotate(120deg)",

                            opacity: 1
                        },

                        {
                            transform:
                                "translateY(115vh) rotate(360deg)",

                            opacity: 0
                        }
                    ],
                    {
                        duration:
                            duracion * 1000,

                        delay:
                            Math.random() * 1500,

                        easing:
                            "ease-in",

                        fill:
                            "both"
                    }
                );


                document.body.appendChild(
                    corazon
                );


                setTimeout(
                    function () {

                        corazon.remove();

                    },
                    (
                        duracion + 2
                    ) * 1000
                );

            }

        }


        /* =====================================================
           💗 CORAZONES AL TOCAR
        ===================================================== */

        document.addEventListener(
            "click",
            function (evento) {

                if (
                    evento.target.closest(
                        ".sonido-btn"
                    )
                ) {
                    return;
                }


                const brillo =
                    document.createElement(
                        "span"
                    );


                brillo.textContent =
                    Math.random() > .4
                        ? "✦"
                        : "♥";


                brillo.style.position =
                    "fixed";


                brillo.style.left =
                    evento.clientX + "px";


                brillo.style.top =
                    evento.clientY + "px";


                brillo.style.zIndex =
                    "10000";


                brillo.style.pointerEvents =
                    "none";


                brillo.style.color =
                    "#ff78a5";


                brillo.style.fontSize =
                    "1.3rem";


                brillo.style.textShadow =
                    "0 0 8px #ff477e, 0 0 20px #ff477e";


                document.body.appendChild(
                    brillo
                );


                brillo.animate(
                    [
                        {
                            opacity: 1,

                            transform:
                                "scale(.2) rotate(0deg)"
                        },

                        {
                            opacity: 0,

                            transform:
                                "scale(2) rotate(180deg) translateY(-25px)"
                        }
                    ],
                    {
                        duration: 700,

                        easing: "ease-out"
                    }
                );


                setTimeout(
                    function () {

                        brillo.remove();

                    },
                    750
                );

            }
        );


    }
);