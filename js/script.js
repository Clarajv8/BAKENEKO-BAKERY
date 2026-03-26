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
            tabAll: "El Grimorio Completo", tabDesserts: "Postres Yokai", tabWines: "Vinos Espirituales",
            collabSub: "Colaboración Exclusiva", collabDesc: "El equilibrio perfecto entre el Wagashi tradicional y la enología premium. Un maridaje de leyenda diseñado para despertar a los espíritus."
        },
        en: {
            cart: "Cart", pretitle: "Gateway to the Yokai Realm", subtitle: "Sanctuary of Sweet Spirits",
            cta: "Enter the Portal", introTitle: "Sweetness Between Worlds",
            introText: "We do not bake for the body's hunger, but for the soul's cravings. Guided by the Bakeneko, our sweets bridge the gap between modern rush and ancient stillness.",
            collectionTitle: "The Collection", addToCart: "Add to Cart",
            oracleTitle: "The Bakeneko Oracle", oracleDesc: "In doubt? Let fate choose the spirit your soul needs today.", oracleBtn: "Consult the Oracle",
            tabAll: "The Complete Grimoire", tabDesserts: "Yokai Sweets", tabWines: "Spiritual Wines",
            collabSub: "Exclusive Collaboration", collabDesc: "The perfect balance between traditional Wagashi and premium oenology. A legendary pairing designed to awaken the spirits."
        },
        jp: {
            cart: "カート", pretitle: "妖怪のレルムへの入り口", subtitle: "甘い精霊の聖域",
            cta: "ポータルに入る", introTitle: "世界の間の甘さ",
            introText: "私たちは体の飢えのためではなく、魂の渇望のために焼きます。化け猫に導かれ、私たちのスイーツは現代の慌ただしさと古代の静けさの間の架け橋となります。",
            collectionTitle: "コレクション", addToCart: "カートに追加",
            oracleTitle: "化け猫の神託", oracleDesc: "迷っていますか？今日あなたの魂が必要とする精霊を運命に選ばせましょう。", oracleBtn: "神託を伺う",
            tabAll: "完全な魔導書", tabDesserts: "妖怪のスイーツ", tabWines: "霊的なワイン",
            collabSub: "特別コラボレーション", collabDesc: "伝統的な和菓子と高級ワインの完璧なバランス。精霊を目覚めさせるためにデザインされた伝説のペアリング。"
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
       // --- VINOS BODEGAS KIZUNA ---
        p7: {
            es: { name: "Sauvignon Blanc 'The Raw'", desc: "D.O. Penedès. Bodegas Kizuna. Servir a 6°C. El elixir de la Ningyo (Sirena), ideal para acompañar cortes de pescado crudo, Sashimi y preparaciones con Wasabi. 12,5% Vol." },
            en: { name: "Sauvignon Blanc 'The Raw'", desc: "D.O. Penedès. Bodegas Kizuna. Serve at 6°C. The elixir of the Ningyo (Mermaid), ideal for raw fish, Sashimi, and Wasabi preparations. 12.5% Vol." },
            jp: { name: "ソーヴィニヨン・ブラン 'The Raw'", desc: "ペネデス原産地呼称。Kizunaワイナリー。6°Cで提供。人魚の霊薬。刺身やわさびの料理に最適です。アルコール度数12.5%。" },
            class: "Ningyo (Sirena)", img: "assets/images/vino-theraw.jpg"
        },
        p8: {
            es: { name: "Garnacha Tinta 'The Grill'", desc: "D.O. Penedès. Bodegas Kizuna. Servir a 14°C. El fuego del Shuten-Dōji. Maridaje óptimo para carnes a la brasa, Yakitori, anguila (Unagi) y salsas Teriyaki. 14% Vol." },
            en: { name: "Garnacha Tinta 'The Grill'", desc: "D.O. Penedès. Bodegas Kizuna. Serve at 14°C. The fire of Shuten-Dōji. Optimal pairing for grilled meats, Yakitori, eel (Unagi), and Teriyaki sauces. 14% Vol." },
            jp: { name: "ガルナッチャ・ティンタ 'The Grill'", desc: "ペネデス原産地呼称。Kizunaワイナリー。14°Cで提供。酒呑童子の炎。焼き鳥、うなぎ、照り焼きソースに最適です。アルコール度数14%。" },
            class: "Shuten-Dōji (Oni)", img: "assets/images/vino-thegrill.jpg"
        },
        p9: {
            es: { name: "Cava Brut Nature 'The Umami'", desc: "Cava D.O. Método Tradicional. Bodegas Kizuna. Servir a 5°C. La celebración del Kitsune. Estructura perfecta para Tempura, frituras y caldos ricos en Umami. 12% Vol." },
            en: { name: "Cava Brut Nature 'The Umami'", desc: "Cava D.O. Traditional Method. Kizuna Wineries. Serve at 5°C. The Kitsune's celebration. Perfect structure for Tempura, fried foods, and Umami-rich broths. 12% Vol." },
            jp: { name: "カヴァ・ブリュット 'The Umami'", desc: "カヴァ原産地呼称。伝統的製法。Kizunaワイナリー。5°Cで提供。狐の祝い。天ぷら、揚げ物、旨味豊かなスープに最適です。アルコール度数12%。" },
            class: "Kitsune (Zorro)", img: "assets/images/vino-theumami.jpg"
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