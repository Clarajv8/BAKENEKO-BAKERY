document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. DATA & TRANSLATION SYSTEM (ES / EN / JP)
       ========================================= */
    const translations = {
        es: {
            cart: "Cesta", pretitle: "Portal al Reino Yokai", subtitle: "El Refugio de los Espíritus Dulces",
            cta: "Entrar al Portal", introTitle: "Dulzura Entre Mundos",
            introText: "No horneamos para el hambre del cuerpo, sino para los antojos del alma. Guiados por el Bakeneko, nuestros dulces cierran la brecha entre la prisa moderna y la quietud antigua.",
            collectionTitle: "La Colección", addToCart: "Añadir a la Cesta",
            oracleTitle: "El Oráculo del Bakeneko", oracleDesc: "¿Dudas? Deja que el destino elija el espíritu que tu alma necesita hoy.", oracleBtn: "Consultar al Oráculo",
            tabAll: "El Grimorio Completo", tabDesserts: "Postres Yokai", tabWines: "Vinos Espirituales"
        },
        en: {
            cart: "Cart", pretitle: "Gateway to the Yokai Realm", subtitle: "Sanctuary of Sweet Spirits",
            cta: "Enter the Portal", introTitle: "Sweetness Between Worlds",
            introText: "We do not bake for the body's hunger, but for the soul's cravings. Guided by the Bakeneko, our sweets bridge the gap between modern rush and ancient stillness.",
            collectionTitle: "The Collection", addToCart: "Add to Cart",
            oracleTitle: "The Bakeneko Oracle", oracleDesc: "In doubt? Let fate choose the spirit your soul needs today.", oracleBtn: "Consult the Oracle",
            tabAll: "The Complete Grimoire", tabDesserts: "Yokai Sweets", tabWines: "Spiritual Wines"
        },
        jp: {
            cart: "カート", pretitle: "妖怪のレルムへの入り口", subtitle: "甘い精霊の聖域",
            cta: "ポータルに入る", introTitle: "世界の間の甘さ",
            introText: "私たちは体の飢えのためではなく、魂の渇望のために焼きます。化け猫に導かれ、私たちのスイーツは現代の慌ただしさと古代の静けさの間の架け橋となります。",
            collectionTitle: "コレクション", addToCart: "カートに追加",
            oracleTitle: "化け猫の神託", oracleDesc: "迷っていますか？今日あなたの魂が必要とする精霊を運命に選ばせましょう。", oracleBtn: "神託を伺う",
            tabAll: "完全な魔導書", tabDesserts: "妖怪のスイーツ", tabWines: "霊的なワイン"
        }
    };

    // ¡Aquí cambiamos "model:" por "img:"!
    const productsDB = {
        p1: {
            es: { name: "Dorayaki", desc: "El Tanuki es un espíritu del bosque famoso por su gran barriga y su amor por los festines. Este dulce redondo rinde homenaje a su apetito insaciable." },
            en: { name: "Dorayaki", desc: "The Tanuki is a forest spirit famous for its big belly and love of feasts. This round sweet pays homage to its insatiable appetite." },
            jp: { name: "どら焼き", desc: "タヌキは大きなお腹と宴会好きで有名な森の精霊です。この丸いお菓子は彼の飽くなき食欲に敬意を表しています。" },
            class: "Tanuki", img: "assets/images/dorayaki-tanuki.jpg"
        },
        p2: {
            es: { name: "Mochi Daifuku", desc: "Se dice que el Kitsune cambia de forma para engañar a los viajeros. Este mochi, suave y pálido por fuera, esconde un corazón astuto." },
            en: { name: "Mochi Daifuku", desc: "It is said that the Kitsune shapeshifts to trick travelers. This mochi, soft and pale on the outside, hides a cunning heart." },
            jp: { name: "大福餅", desc: "キツネは旅人を騙すために姿を変えると言われています。外は柔らかく白いこの餅は、ずる賢い心を隠しています。" },
            class: "Kitsune", img: "assets/images/mochi-kitsune.jpg"
        },
        p3: {
            es: { name: "Dango Tricolor", desc: "Tres esferas perfectas que representan a tres pequeños gatos traviesos jugando en equilibrio bajo los cerezos." },
            en: { name: "Tricolor Dango", desc: "Three perfect spheres representing three mischievous little cats playing in balance under the cherry trees." },
            jp: { name: "三色団子", desc: "桜の下でバランスを取りながら遊ぶ3匹のいたずら好きな子猫を表す3つの完璧な球体。" },
            class: "Bakeneko", img: "assets/images/dango-bakeneko.jpg"
        },
        p4: {
            es: { name: "Kuzumochi", desc: "Fresco, acuoso y transparente como el río donde habita el Kappa. Un postre que se desliza en el paladar." },
            en: { name: "Kuzumochi", desc: "Fresh, watery, and transparent like the river where the Kappa lives. A dessert that glides on the palate." },
            jp: { name: "葛餅", desc: "カッパが住む川のように新鮮で水っぽく透明です。口の中で滑るデザート。" },
            class: "Kappa", img: "assets/images/kuzumochi-kappa.jpg"
        },
        p5: {
            es: { name: "Yokan Nocturno", desc: "Oscuro, denso y profundo como el océano donde emerge el gigante Umibozu. Un sabor intenso para valientes." },
            en: { name: "Night Yokan", desc: "Dark, dense, and deep like the ocean where the giant Umibozu emerges. An intense flavor for the brave." },
            jp: { name: "夜の羊羹", desc: "巨大な海坊主が現れる海のように暗く、密度が濃く、深い。勇者のための強烈な風味。" },
            class: "Umibozu", img: "assets/images/yokan-umibozu.jpg"
        },
        p6: {
            es: { name: "Nerikiri de Camelia", desc: "Arte comestible. Tan bello, pálido y delicado como la Yuki-Onna. Captura una belleza fría y efímera." },
            en: { name: "Camellia Nerikiri", desc: "Edible art. As beautiful, pale, and delicate as the Yuki-Onna. It captures a cold, ephemeral beauty." },
            jp: { name: "椿の練り切り", desc: "食べられる芸術。雪女のように美しく、青白く、繊細です。冷たく儚い美しさを捉えています。" },
            class: "Yuki-Onna", img: "assets/images/nerikiri-yukionna.jpg"
        },
        p7: {
            es: { name: "Vino Sangre de Oni", desc: "Tinto roble robusto. El rey de los demonios, Shuten-Dōji, era temido por su sed insaciable de vino." },
            en: { name: "Oni's Blood Wine", desc: "Robust oak red. The demon king, Shuten-Dōji, was feared for his insatiable thirst for wine." },
            jp: { name: "鬼の血ワイン", desc: "力強いオーク赤ワイン。鬼の王、酒呑童子は尽きることのないワインへの渇望で恐れられていました。" },
            class: "Shuten-Dōji", img: "assets/images/vino-tinto-oni.jpg"
        },
        p8: {
            es: { name: "Lágrimas de Ningyo", desc: "Blanco joven y afrutado. Las leyendas cuentan que beber las lágrimas de esta sirena concede juventud eterna." },
            en: { name: "Ningyo's Tears", desc: "Young and fruity white. Legends say drinking this mermaid's tears grants eternal youth." },
            jp: { name: "人魚の涙", desc: "若々しくフルーティーな白。この人魚の涙を飲むと永遠の若さが得られるという伝説があります。" },
            class: "Ningyo", img: "assets/images/vino-blanco-ningyo.jpg"
        },
        p9: {
            es: { name: "El Sueño del Kodama", desc: "Licor de ciruela (Umeshu) que encierra la calma y la dulzura de un bosque centenario protegido por los Kodama." },
            en: { name: "Kodama's Dream", desc: "Plum liquor (Umeshu) that encapsulates the calm and sweetness of a centuries-old forest protected by the Kodama." },
            jp: { name: "木霊の夢", desc: "木霊に守られた何百年もの歴史を持つ森の穏やかさと甘さを閉じ込めた梅酒。" },
            class: "Kodama", img: "assets/images/vino-umeshu-kodama.jpg"
        }
    };

    // Language Logic
    const langs = ['es', 'en', 'jp'];
    let currentLangIndex = 0;
    const langBtn = document.getElementById('lang-toggle');

    langBtn.addEventListener('click', () => {
        currentLangIndex = (currentLangIndex + 1) % langs.length;
        const currentLang = langs[currentLangIndex];
        langBtn.innerText = langs.map(l => l.toUpperCase()).join(' / ');
        document.body.setAttribute('data-lang', currentLang);
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang][key]) el.innerText = translations[lang][key];
        });

        document.querySelectorAll('.product-card').forEach(card => {
            const id = card.getAttribute('data-id');
            const nameEl = card.querySelector('[data-i18n-product="name"]');
            if(productsDB[id]) nameEl.innerText = productsDB[id][lang].name;
        });

        const activeId = document.querySelector('.modal-content').getAttribute('data-active-id');
        if(activeId) fillModal(activeId);
    }

    /* =========================================
       2. SCROLL & ANIMATION (GSAP)
       ========================================= */
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true
        });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
    }

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const heroTl = gsap.timeline({
            scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
        });
        heroTl.to(".hero-bg", { yPercent: 30 }, 0)
              .to(".hero-mid", { yPercent: 15 }, 0)
              .to(".hero-content", { yPercent: 60, opacity: 0 }, 0);

        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, i) => {
            gsap.fromTo(card, 
                { y: 150, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.75)",
                    scrollTrigger: { trigger: card, start: "top 90%" },
                    delay: i * 0.1
                }
            );
        });
    }

    /* =========================================
       3. MODAL DE PRODUCTO (CON IMAGEN 2D)
       ========================================= */
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close-modal');
    const activeImage = document.querySelector('#active-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDesc = document.querySelector('.modal-desc');
    const modalClass = document.querySelector('.modal-yokai-class');

    function fillModal(id) {
        const lang = langs[currentLangIndex];
        const data = productsDB[id];
        
        // Rellenar textos
        modalTitle.innerText = data[lang].name;
        modalDesc.innerText = data[lang].desc;
        modalClass.innerText = `Espíritu Guardián: ${data.class}`;
        
        // Cargar imagen en lugar del modelo 3D
        activeImage.src = data.img;
        
        modalContent.setAttribute('data-active-id', id);
    }

    // Abrir Modal al hacer clic en un producto
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            fillModal(id);
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita hacer scroll mientras el modal está abierto
        });
    });

    // Cerrar Modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { activeImage.src = ""; }, 500); // Limpia la imagen al cerrar
    }

    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    /* =========================================
       4. LÓGICA DE PESTAÑAS (FILTROS) Y ORÁCULO
       ========================================= */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');

    // Funcionalidad de las pestañas
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            if(typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        });
    });

    // Funcionalidad del Oráculo (Ruleta)
    const spinBtn = document.getElementById('spin-btn');
    const runesContainer = document.getElementById('runes-container');

    spinBtn.addEventListener('click', () => {
        spinBtn.disabled = true;
        const originalText = spinBtn.innerText;
        spinBtn.innerText = "...";
        
        runesContainer.classList.add('spinning');

        setTimeout(() => {
            runesContainer.classList.remove('spinning');
            spinBtn.disabled = false;
            spinBtn.innerText = originalText;
            
            // Elegir aleatoriamente entre p1 y p9
            const keys = Object.keys(productsDB);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            
            fillModal(randomKey);
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
        }, 2000);
    });

});