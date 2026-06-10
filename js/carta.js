document.addEventListener("DOMContentLoaded", () => {
    
    // 1. "Base de Datos" de tus Cartas Yokai
    const cardDatabase = {
        "bakeneko": {
            kanji: "猫",
            name: "Bakeneko",
            title: "El Felino Metamorfo",
            desc: "Has invocado al Bakeneko. Un gato que ha vivido lo suficiente para ganar poder espiritual, caminar sobre dos patas y dominar las ilusiones. Lúdico y misterioso, es el anfitrión de nuestro Grimorio. Representado por la dulzura tricolor del Hanami Dango.",
            imagePath: "assets/images/card-bakeneko.webp"
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

    const urlParams = new URLSearchParams(window.location.search);
    const scannedYokai = urlParams.get('yokai');

    const elKanji = document.getElementById('yokai-kanji');
    const elName = document.getElementById('yokai-name');
    const elTitle = document.getElementById('yokai-title');
    const elDesc = document.getElementById('yokai-desc');
    const elImg = document.getElementById('card-image');
    const elStatus = document.getElementById('collection-status');

    if (scannedYokai && cardDatabase[scannedYokai]) {
        const data = cardDatabase[scannedYokai];

        elKanji.innerText = data.kanji;
        elName.innerText = data.name;
        elTitle.innerText = data.title;
        elDesc.innerText = data.desc;
        elImg.src = data.imagePath;
        elImg.classList.remove('hidden');

        let miColeccion = JSON.parse(localStorage.getItem('bakenekoGrimorio')) || [];
        
        if (!miColeccion.includes(scannedYokai)) {
            miColeccion.push(scannedYokai);
            localStorage.setItem('bakenekoGrimorio', JSON.stringify(miColeccion));
            elStatus.innerText = "¡Nueva carta descubierta y añadida a tu Grimorio personal!";
        } else {
            elStatus.innerText = "Ya poseías este espíritu en tu Grimorio, pero su poder se renueva.";
        }

    } else {
        elName.innerText = "Pacto Inválido";
        elTitle.innerText = "Espíritu Desconocido";
        elDesc.innerText = "El código rúnico que has introducido no pertenece a ninguno de nuestros Yokai. Vuelve al Grimorio y asegúrate de escanear un sello auténtico.";
        elKanji.innerText = "無"; 
        elStatus.innerText = "No se ha añadido ninguna carta.";
    }

    const tl = gsap.timeline();

    tl.to(".reveal-header", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 })
      .to(".card-3d-wrapper", { opacity: 1, y: -10, duration: 1.5, ease: "power4.out" }, "-=0.5")
      .to(".yokai-lore", { opacity: 1, duration: 1 }, "-=1")
      .to(".reveal-actions", { opacity: 1, duration: 1 }, "-=0.5");

    // 5. EFECTO PARALLAX 3D CON EL RATÓN SOBRE LA CARTA
    const cardWrapper = document.getElementById('card-element');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        cardWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    document.addEventListener('mouseleave', () => {
        cardWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
    /* =========================================
       SISTEMA UNIVERSAL DEL CURSOR NEO-UKIYO-E
       ========================================= */
    const cursor = document.getElementById('neo-cursor');
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

    if (cursor && typeof gsap !== 'undefined') {
        if (isTouchDevice) {
            cursor.style.display = 'none';
        } else {
            gsap.set(cursor, { xPercent: -50, yPercent: -50 });
            const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
            const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

            window.addEventListener("mousemove", (e) => { 
                xTo(e.clientX); 
                yTo(e.clientY); 
            });

            window.addEventListener('mousedown', () => cursor.classList.add('click'));
            window.addEventListener('mouseup', () => cursor.classList.remove('click'));

            const interactables = document.querySelectorAll('a, button, input, select, .product-card, .cart-trigger, .oracle-interactive');
            
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });
        }
    }
});