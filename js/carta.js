document.addEventListener("DOMContentLoaded", () => {
    
    // 1. "Base de Datos" de tus Cartas Yokai
    const cardDatabase = {
        "bakeneko": {
            kanji: "猫",
            name: "Bakeneko",
            title: "El Felino Metamorfo",
            desc: "Has invocado al Bakeneko. Un gato que ha vivido lo suficiente para ganar poder espiritual, caminar sobre dos patas y dominar las ilusiones. Lúdico y misterioso, es el anfitrión de nuestro Grimorio. Representado por la dulzura tricolor del Hanami Dango.",
            imagePath: "assets/images/card-bakeneko.webp" // Asegúrate de tener una imagen vertical de la carta
        },
        "kitsune": {
            kanji: "狐",
            name: "Kitsune",
            title: "El Zorro de Nueve Colas",
            desc: "Has descubierto al Kitsune. Maestro del engaño y poseedor de la sabiduría antigua. Un exterior blanco e inmaculado que oculta una complejidad abrumadora en su interior, como el Mochi Daifuku que custodia.",
            imagePath: "assets/images/card-kitsune.webp"
        },
        "tanuki": {
            kanji: "狸",
            name: "Tanuki",
            title: "El Guardián del Bosque",
            desc: "Has encontrado al Tanuki. Símbolo de prosperidad, jovialidad y abundancia. Su carácter afable, rústico y terrenal se manifiesta perfectamente en los bizcochos reconfortantes del Dorayaki.",
            imagePath: "assets/images/card-tanuki.webp"
        },
        "yuki-onna": {
            kanji: "雪",
            name: "Yuki-Onna",
            title: "La Dama de las Nieves",
            desc: "Un escalofrío recorre la estancia. Has invocado a la Yuki-Onna. Una belleza letal, gélida y efímera. Su espíritu se materializa en el delicado e hiperdetallado arte del Nerikiri de Camelia.",
            imagePath: "assets/images/card-yukionna.webp"
        },
        "kappa": {
            kanji: "河",
            name: "Kappa",
            title: "El Espíritu del Río",
            desc: "Las aguas se agitan. Has despertado al Kappa. Un guardián de los estanques dulces y frescos. Su esencia translúcida y resbaladiza habita en el refrescante Kuzumochi.",
            imagePath: "assets/images/card-kappa.webp"
        },
        "umibozu": {
            kanji: "海",
            name: "Umibozu",
            title: "El Monolito Abisal",
            desc: "Una sombra gigante emerge en la noche. Es el Umibozu. Denso, oscuro, misterioso y monolítico. Su poder se concentra en la pureza geométrica del Yokan nocturno.",
            imagePath: "assets/images/card-umibozu.webp"
        }
    };

    // 2. Leer la URL (Ej: bakeneko.co/carta.html?yokai=kitsune)
    const urlParams = new URLSearchParams(window.location.search);
    const scannedYokai = urlParams.get('yokai');

    // Elementos del DOM
    const elKanji = document.getElementById('yokai-kanji');
    const elName = document.getElementById('yokai-name');
    const elTitle = document.getElementById('yokai-title');
    const elDesc = document.getElementById('yokai-desc');
    const elImg = document.getElementById('card-image');
    const elStatus = document.getElementById('collection-status');

    // 3. Verificar si el Yokai existe en la base de datos
    if (scannedYokai && cardDatabase[scannedYokai]) {
        const data = cardDatabase[scannedYokai];

        // Inyectar los datos en el HTML
        elKanji.innerText = data.kanji;
        elName.innerText = data.name;
        elTitle.innerText = data.title;
        elDesc.innerText = data.desc;
        elImg.src = data.imagePath;
        elImg.classList.remove('hidden');

        // Lógica de Coleccionismo (Guardar en LocalStorage)
        let miColeccion = JSON.parse(localStorage.getItem('bakenekoGrimorio')) || [];
        
        if (!miColeccion.includes(scannedYokai)) {
            // Es una carta nueva!
            miColeccion.push(scannedYokai);
            localStorage.setItem('bakenekoGrimorio', JSON.stringify(miColeccion));
            elStatus.innerText = "¡Nueva carta descubierta y añadida a tu Grimorio personal!";
        } else {
            // Ya la tenía
            elStatus.innerText = "Ya poseías este espíritu en tu Grimorio, pero su poder se renueva.";
        }

    } else {
        // Si escanean un código falso o entran sin código
        elName.innerText = "Pacto Inválido";
        elTitle.innerText = "Espíritu Desconocido";
        elDesc.innerText = "El código rúnico que has introducido no pertenece a ninguno de nuestros Yokai. Vuelve al Grimorio y asegúrate de escanear un sello auténtico.";
        elKanji.innerText = "無"; // Kanji de "Nada/Vacío"
        elStatus.innerText = "No se ha añadido ninguna carta.";
    }

    // 4. ANIMACIONES GSAP (Aparición Majestuosa)
    const tl = gsap.timeline();

    tl.to(".reveal-header", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 })
      .to(".card-3d-wrapper", { opacity: 1, y: -10, duration: 1.5, ease: "power4.out" }, "-=0.5")
      .to(".yokai-lore", { opacity: 1, duration: 1 }, "-=1")
      .to(".reveal-actions", { opacity: 1, duration: 1 }, "-=0.5");

    // 5. EFECTO PARALLAX 3D CON EL RATÓN SOBRE LA CARTA
    const cardWrapper = document.getElementById('card-element');
    
    document.addEventListener('mousemove', (e) => {
        // Calculamos la posición del ratón respecto al centro de la pantalla
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        // Rotamos la carta sutilmente hacia el ratón
        cardWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Restaurar posición cuando el ratón sale
    document.addEventListener('mouseleave', () => {
        cardWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});