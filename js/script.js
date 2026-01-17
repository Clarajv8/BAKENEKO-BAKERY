document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. DATA & TRANSLATION SYSTEM (ES / EN / JP)
       ========================================= */
    const translations = {
        es: {
            cart: "Cesta",
            pretitle: "Portal al Reino Yokai",
            subtitle: "El Refugio de los Espíritus Dulces",
            cta: "Entrar al Portal",
            introTitle: "Dulzura Entre Mundos",
            introText: "No horneamos para el hambre del cuerpo, sino para los antojos del alma. Guiados por el Bakeneko, nuestros dulces cierran la brecha entre la prisa moderna y la quietud antigua.",
            collectionTitle: "La Colección",
            addToCart: "Añadir a la Cesta"
        },
        en: {
            cart: "Cart",
            pretitle: "Gateway to the Yokai Realm",
            subtitle: "Sanctuary of Sweet Spirits",
            cta: "Enter the Portal",
            introTitle: "Sweetness Between Worlds",
            introText: "We do not bake for the body's hunger, but for the soul's cravings. Guided by the Bakeneko, our sweets bridge the gap between modern rush and ancient stillness.",
            collectionTitle: "The Collection",
            addToCart: "Add to Cart"
        },
        jp: {
            cart: "カート",
            pretitle: "妖怪のレルムへの入り口",
            subtitle: "甘い精霊の聖域",
            cta: "ポータルに入る",
            introTitle: "世界の間の甘さ",
            introText: "私たちは体の飢えのためではなく、魂の渇望のために焼きます。化け猫に導かれ、私たちのスイーツは現代の慌ただしさと古代の静けさの間の架け橋となります。",
            collectionTitle: "コレクション",
            addToCart: "カートに追加"
        }
    };

    const productsDB = {
        p1: {
            es: { name: "Dorayaki Tanuki", desc: "Favorito de los Tanuki. Pasta de judía roja y castaña." },
            en: { name: "Tanuki Dorayaki", desc: "Tanuki favorite. Red bean paste and chestnut." },
            jp: { name: "狸どら焼き", desc: "タヌキのお気に入り。小豆と栗の餡。" },
            class: "Classic", model: "media/models/dorayaki.glb"
        },
        p2: {
            es: { name: "Mochi Kitsune", desc: "Robado de una boda de zorros en el bosque." },
            en: { name: "Kitsune Mochi", desc: "Stolen from a fox wedding in the forest." },
            jp: { name: "狐餅", desc: "森の狐の結婚式から盗まれたもの。" },
            class: "Classic", model: "media/models/mochi.glb"
        },
        p3: {
            es: { name: "Dango Tsukumogami", desc: "Tres esferas que cobran vida a medianoche." },
            en: { name: "Tsukumogami Dango", desc: "Three spheres that come alive at midnight." },
            jp: { name: "付喪神団子", desc: "真夜中に動き出す三つの団子。" },
            class: "Classic", model: "media/models/dango.glb"
        },
        p4: {
            es: { name: "Kuzumochi Kappa", desc: "El pago favorito para cruzar el río." },
            en: { name: "Kappa Kuzumochi", desc: "The preferred toll for crossing the river." },
            jp: { name: "河童葛餅", desc: "川を渡るための好まれた通行料。" },
            class: "Exotic", model: "media/models/kuzumochi.glb"
        },
        p5: {
            es: { name: "Nerikiri Yuki-onna", desc: "Se derrite en la boca como la nieve." },
            en: { name: "Yuki-onna Nerikiri", desc: "Melts in your mouth like falling snow." },
            jp: { name: "雪女練り切り", desc: "雪のように口の中で溶ける。" },
            class: "Exotic", model: "media/models/nerikiri.glb"
        },
        p6: {
            es: { name: "Yokan Umibozu", desc: "Sabe a las profundidades del océano, pero dulce." },
            en: { name: "Umibozu Yokan", desc: "Tastes like the ocean depths, but sweet." },
            jp: { name: "海坊主羊羹", desc: "深海の味がするが、甘い。" },
            class: "Exotic", model: "media/models/yokan.glb"
        }
    };

    // Language Logic
    const langs = ['es', 'en', 'jp'];
    let currentLangIndex = 0;
    const langBtn = document.getElementById('lang-toggle');

    langBtn.addEventListener('click', () => {
        // Cycle: 0 -> 1 -> 2 -> 0
        currentLangIndex = (currentLangIndex + 1) % langs.length;
        const currentLang = langs[currentLangIndex];
        
        // Update Button Text
        langBtn.innerText = langs.map(l => l.toUpperCase()).join(' / ');
        
        // Update Data Attribute for CSS (fonts)
        document.body.setAttribute('data-lang', currentLang);
        
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        // UI Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang][key]) el.innerText = translations[lang][key];
        });

        // Product Cards
        document.querySelectorAll('.product-card').forEach(card => {
            const id = card.getAttribute('data-id');
            const nameEl = card.querySelector('[data-i18n-product="name"]');
            if(productsDB[id]) nameEl.innerText = productsDB[id][lang].name;
        });

        // Update Modal if open
        const activeId = document.querySelector('.modal-content').getAttribute('data-active-id');
        if(activeId) fillModal(activeId);
    }

    /* =========================================
       2. SCROLL & ANIMATION
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
       3. 3D MODAL
       ========================================= */
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close-modal');
    const modelViewer = document.querySelector('#active-model');
    const modalTitle = document.querySelector('.modal-title');
    const modalDesc = document.querySelector('.modal-desc');
    const modalClass = document.querySelector('.modal-yokai-class');

    function fillModal(id) {
        const lang = langs[currentLangIndex];
        const data = productsDB[id];
        modalTitle.innerText = data[lang].name;
        modalDesc.innerText = data[lang].desc;
        modalClass.innerText = `Class: ${data.class}`;
        modelViewer.src = data.model;
        modalContent.setAttribute('data-active-id', id);
    }

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            fillModal(id);
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { modelViewer.src = ""; }, 500);
    }

    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});