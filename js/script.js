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
            collabSub: "Colaboración Exclusiva", collabDesc: "El equilibrio perfecto entre el Wagashi tradicional y la enología premium. Un maridaje de leyenda diseñado para despertar a los espíritus.", collabMarquee: "✦ BAKENEKO × BODEGAS KIZUNA ✦ MARIDAJE EXCLUSIVO ", cartTitle: "Tu Selección", cartEmpty: "El grimorio está vacío.", cartTotal: "Total Ritual:", cartCheckout: "Completar Invocación", cartTitle: "Tu Selección", cartEmpty: "El grimorio está vacío.", cartTotal: "Total Ritual:", cartCheckout: "Completar Invocación", cartAdded: "¡Añadido!", checkoutTitle: "Sellar el Pacto", checkoutSub: "Prepara tu ofrenda para recibir los elixires y wagashi.", checkoutShipping: "Destino del Ritual", chkName: "Nombre del Mortal", chkAddress: "Dirección (Plano Terrenal)", checkoutPayment: "Ofrenda de Intercambio", chkCard: "Runas de la Tarjeta (16 dígitos)", chkExp: "Caducidad (MM/AA)", chkSubmit: "Confirmar Invocación", successTitle: "Pacto Sellado", successText: "Los espíritus han aceptado tu ofrenda. Tu pedido está en camino a través del portal.", backToRealm: "Volver al Reino", returnStore: "← Volver al Grimorio", selectZone: "Selecciona tu Reino...", summaryTitle: "Resumen de Invocación", summarySub: "Subtotal", summaryShip: "Envío (Portal)", summaryTotal: "Total Ritual"
        },
        en: {
            cart: "Cart", pretitle: "Gateway to the Yokai Realm", subtitle: "Sanctuary of Sweet Spirits",
            cta: "Enter the Portal", introTitle: "Sweetness Between Worlds",
            introText: "We do not bake for the body's hunger, but for the soul's cravings. Guided by the Bakeneko, our sweets bridge the gap between modern rush and ancient stillness.",
            collectionTitle: "The Collection", addToCart: "Add to Cart",
            oracleTitle: "The Bakeneko Oracle", oracleDesc: "In doubt? Let fate choose the spirit your soul needs today.", oracleBtn: "Consult the Oracle",
            tabAll: "The Complete Grimoire", tabDesserts: "Yokai Sweets", tabWines: "Spiritual Wines",
            collabSub: "Exclusive Collaboration", collabDesc: "The perfect balance between traditional Wagashi and premium oenology. A legendary pairing designed to awaken the spirits.", collabMarquee: "✦ BAKENEKO × BODEGAS KIZUNA ✦ EXCLUSIVE PAIRING DROP ", cartTitle: "Your Selection", cartEmpty: "The grimoire is empty.", cartTotal: "Ritual Total:", cartCheckout: "Complete Invocation", cartTitle: "Your Selection", cartEmpty: "The grimoire is empty.", cartTotal: "Ritual Total:", cartCheckout: "Complete Invocation", cartAdded: "Added!", checkoutTitle: "Seal the Pact", checkoutSub: "Prepare your offering to receive the elixirs and wagashi.", checkoutShipping: "Ritual Destination", chkName: "Mortal's Name", chkAddress: "Address (Earthly Plane)", checkoutPayment: "Exchange Offering", chkCard: "Card Runes (16 digits)", chkExp: "Expiry (MM/YY)", chkSubmit: "Confirm Invocation", successTitle: "Pact Sealed", successText: "The spirits have accepted your offering. Your order is on its way through the portal.", backToRealm: "Return to Realm", returnStore: "← Return to Grimoire", selectZone: "Select your Realm...", summaryTitle: "Invocation Summary", summarySub: "Subtotal", summaryShip: "Shipping (Portal)", summaryTotal: "Ritual Total", returnStore: "← 魔導書に戻る", selectZone: "領域を選択...", summaryTitle: "召喚の概要", summarySub: "小計", summaryShip: "送料（ポータル）", summaryTotal: "儀式の合計"
        },
        jp: {
            cart: "カート", pretitle: "妖怪のレルムへの入り口", subtitle: "甘い精霊の聖域",
            cta: "ポータルに入る", introTitle: "世界の間の甘さ",
            introText: "私たちは体の飢えのためではなく、魂の渇望のために焼きます。化け猫に導かれ、私たちのスイーツは現代の慌ただしさと古代の静けさの間の架け橋となります。",
            collectionTitle: "コレクション", addToCart: "カートに追加",
            oracleTitle: "化け猫の神託", oracleDesc: "迷っていますか？今日あなたの魂が必要とする精霊を運命に選ばせましょう。", oracleBtn: "神託を伺う",
            tabAll: "完全な魔導書", tabDesserts: "妖怪のスイーツ", tabWines: "霊的なワイン",
            collabSub: "特別コラボレーション", collabDesc: "伝統的な和菓子と高級ワインの完璧なバランス。精霊を目覚めさせるためにデザインされた伝説のペアリング。", collabMarquee: "✦ 化け猫 × KIZUNAワイナリー ✦ 特別なペアリング ", cartTitle: "あなたの選択", cartEmpty: "魔導書は空です。", cartTotal: "儀式の合計:", cartCheckout: "召喚を完了する", cartTitle: "あなたの選択", cartEmpty: "魔導書は空です。", cartTotal: "儀式の合計:", cartCheckout: "召喚を完了する", cartAdded: "追加されました！", checkoutTitle: "契約を結ぶ", checkoutSub: "お供え物を準備して、霊薬と和菓子を受け取ります。", checkoutShipping: "儀式の目的地", chkName: "定命の者の名前", chkAddress: "住所（現世）", checkoutPayment: "交換の供物", chkCard: "カードのルーン（16桁）", chkExp: "有効期限 (MM/YY)", chkSubmit: "召喚を確認する", successTitle: "契約完了", successText: "精霊たちがあなたの供物を受け入れました。ご注文はポータルを通って向かっています。", backToRealm: "レルムに戻る"
        }
    };

    // ¡Aquí cambiamos "model:" por "img:"!
    const productsDB = {
        p1: {
            es: { name: "Dorayaki", desc: "El Tanuki es un espíritu del bosque famoso por su gran barriga y su amor por los festines. Este dulce redondo rinde homenaje a su apetito insaciable." },
            en: { name: "Dorayaki", desc: "The Tanuki is a forest spirit famous for its big belly and love of feasts. This round sweet pays homage to its insatiable appetite." },
            jp: { name: "どら焼き", desc: "タヌキは大きなお腹と宴会好きで有名な森の精霊です。この丸いお菓子は彼の飽くなき食欲に敬意を表しています。" },
            class: "Tanuki", price: 3.50, img: "assets/images/dorayaki-tanuki.jpg"
        },
        p2: {
            es: { name: "Mochi Daifuku", desc: "Se dice que el Kitsune cambia de forma para engañar a los viajeros. Este mochi, suave y pálido por fuera, esconde un corazón astuto." },
            en: { name: "Mochi Daifuku", desc: "It is said that the Kitsune shapeshifts to trick travelers. This mochi, soft and pale on the outside, hides a cunning heart." },
            jp: { name: "大福餅", desc: "キツネは旅人を騙すために姿を変えると言われています。外は柔らかく白いこの餅は、ずる賢い心を隠しています。" },
            class: "Kitsune", price: 3.80, img: "assets/images/mochi-kitsune.jpg"
        },
        p3: {
            es: { name: "Dango Tricolor", desc: "Tres esferas perfectas que representan a tres pequeños gatos traviesos jugando en equilibrio bajo los cerezos." },
            en: { name: "Tricolor Dango", desc: "Three perfect spheres representing three mischievous little cats playing in balance under the cherry trees." },
            jp: { name: "三色団子", desc: "桜の下でバランスを取りながら遊ぶ3匹のいたずら好きな子猫を表す3つの完璧な球体。" },
            class: "Bakeneko", price: 3.00, img: "assets/images/dango-bakeneko.jpg"
        },
        p4: {
            es: { name: "Kuzumochi", desc: "Fresco, acuoso y transparente como el río donde habita el Kappa. Un postre que se desliza en el paladar." },
            en: { name: "Kuzumochi", desc: "Fresh, watery, and transparent like the river where the Kappa lives. A dessert that glides on the palate." },
            jp: { name: "葛餅", desc: "カッパが住む川のように新鮮で水っぽく透明です。口の中で滑るデザート。" },
            class: "Kappa", price: 4.50, img: "assets/images/kuzumochi-kappa.jpg"
        },
        p5: {
            es: { name: "Yokan Nocturno", desc: "Oscuro, denso y profundo como el océano donde emerge el gigante Umibozu. Un sabor intenso para valientes." },
            en: { name: "Night Yokan", desc: "Dark, dense, and deep like the ocean where the giant Umibozu emerges. An intense flavor for the brave." },
            jp: { name: "夜の羊羹", desc: "巨大な海坊主が現れる海のように暗く、密度が濃く、深い。勇者のための強烈な風味。" },
            class: "Umibozu", price: 4.20, img: "assets/images/yokan-umibozu.jpg"
        },
        p6: {
            es: { name: "Nerikiri de Camelia", desc: "Arte comestible. Tan bello, pálido y delicado como la Yuki-Onna. Captura una belleza fría y efímera." },
            en: { name: "Camellia Nerikiri", desc: "Edible art. As beautiful, pale, and delicate as the Yuki-Onna. It captures a cold, ephemeral beauty." },
            jp: { name: "椿の練り切り", desc: "食べられる芸術。雪女のように美しく、青白く、繊細です。冷たく儚い美しさを捉えています。" },
            class: "Yuki-Onna", price: 5.50, img: "assets/images/nerikiri-yukionna.jpg"
        },
       // --- VINOS BODEGAS KIZUNA ---
        p7: {
            es: { name: "Sauvignon Blanc 'The Raw'", desc: "D.O. Penedès. Bodegas Kizuna. Servir a 6°C. El elixir de la Ningyo (Sirena), ideal para acompañar cortes de pescado crudo, Sashimi y preparaciones con Wasabi. 12,5% Vol." },
            en: { name: "Sauvignon Blanc 'The Raw'", desc: "D.O. Penedès. Bodegas Kizuna. Serve at 6°C. The elixir of the Ningyo (Mermaid), ideal for raw fish, Sashimi, and Wasabi preparations. 12.5% Vol." },
            jp: { name: "ソーヴィニヨン・ブラン 'The Raw'", desc: "ペネデス原産地呼称。Kizunaワイナリー。6°Cで提供。人魚の霊薬。刺身やわさびの料理に最適です。アルコール度数12.5%。" },
            class: "Ningyo (Sirena)", price: 16.50, img: "assets/images/vino-theraw.jpg"
        },
        p8: {
            es: { name: "Garnacha Tinta 'The Grill'", desc: "D.O. Penedès. Bodegas Kizuna. Servir a 14°C. El fuego del Shuten-Dōji. Maridaje óptimo para carnes a la brasa, Yakitori, anguila (Unagi) y salsas Teriyaki. 14% Vol." },
            en: { name: "Garnacha Tinta 'The Grill'", desc: "D.O. Penedès. Bodegas Kizuna. Serve at 14°C. The fire of Shuten-Dōji. Optimal pairing for grilled meats, Yakitori, eel (Unagi), and Teriyaki sauces. 14% Vol." },
            jp: { name: "ガルナッチャ・ティンタ 'The Grill'", desc: "ペネデス原産地呼称。Kizunaワイナリー。14°Cで提供。酒呑童子の炎。焼き鳥、うなぎ、照り焼きソースに最適です。アルコール度数14%。" },
            class: "Shuten-Dōji (Oni)", price: 18.00, img: "assets/images/vino-thegrill.jpg"
        },
        p9: {
            es: { name: "Cava Brut Nature 'The Umami'", desc: "Cava D.O. Método Tradicional. Bodegas Kizuna. Servir a 5°C. La celebración del Kitsune. Estructura perfecta para Tempura, frituras y caldos ricos en Umami. 12% Vol." },
            en: { name: "Cava Brut Nature 'The Umami'", desc: "Cava D.O. Traditional Method. Kizuna Wineries. Serve at 5°C. The Kitsune's celebration. Perfect structure for Tempura, fried foods, and Umami-rich broths. 12% Vol." },
            jp: { name: "カヴァ・ブリュット 'The Umami'", desc: "カヴァ原産地呼称。伝統的製法。Kizunaワイナリー。5°Cで提供。狐の祝い。天ぷら、揚げ物、旨味豊かなスープに最適です。アルコール度数12%。" },
            class: "Kitsune (Zorro)", price: 22.00, img: "assets/images/vino-theumami.jpg"
        }
    };

    // Language Logic & LocalStorage (Memoria)
    const langs = ['es', 'en', 'jp'];
    let currentLangIndex = 0;
    const langBtn = document.getElementById('lang-toggle');

    // --- NUEVO: Recuperar idioma guardado si existe ---
    const savedLang = localStorage.getItem('bakenekoLang');
    if (savedLang && langs.includes(savedLang)) {
        currentLangIndex = langs.indexOf(savedLang);
        document.body.setAttribute('data-lang', savedLang);
        updateLanguage(savedLang);
    }
    langBtn.innerText = langs.map(l => l.toUpperCase()).join(' / ');
    // --------------------------------------------------

    langBtn.addEventListener('click', () => {
        currentLangIndex = (currentLangIndex + 1) % langs.length;
        const currentLang = langs[currentLangIndex];
        langBtn.innerText = langs.map(l => l.toUpperCase()).join(' / ');
        document.body.setAttribute('data-lang', currentLang);
        
        // Guardamos el idioma en memoria al cambiarlo
        localStorage.setItem('bakenekoLang', currentLang);
        
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
        
        // NUEVO: Refrescar la cesta cuando se cambia el idioma
        if (typeof updateCartUI === 'function') {
            updateCartUI();
        }
    }

    /* =========================================
       2. SCROLL & ANIMATION (GSAP)
       ========================================= */
    if (typeof Lenis !== 'undefined') {
        window.lenis = new Lenis({ 
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true
        });
        function raf(time) { window.lenis.raf(time); requestAnimationFrame(raf); }
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
        card.addEventListener('click', (e) => {
            
            // --- MAGIA ANTI-SOLAPAMIENTO ---
            // Si el clic ha tocado el botón "Quick Add" (+), ignoramos el resto y no abrimos el modal
            if (e.target.closest('.quick-add-btn')) {
                return; 
            }
            // -------------------------------

            const id = card.getAttribute('data-id');
            fillModal(id);
            modalOverlay.classList.add('active');
            
            // Paramos el scroll de fondo
            document.body.style.overflow = 'hidden';
            if (window.lenis) window.lenis.stop(); // <-- ¡AQUÍ ESTÁ PERFECTO!
        });
    });

    // Cerrar Modal (¡Debe ir separado, fuera del bloque anterior!)
    function closeModal() {
        modalOverlay.classList.remove('active');
        
        // Reactivamos el scroll de fondo
        document.body.style.overflow = '';
        if (window.lenis) window.lenis.start(); // <-- ¡AQUÍ TAMBIÉN ESTÁ PERFECTO!
        
        setTimeout(() => { activeImage.src = ""; }, 500); 
    }

    // Escuchadores de cierre
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

    /* =========================================
       5. BANNER COLABORACIÓN (CERRAR CINTA)
       ========================================= */
    const collabBanner = document.getElementById('collab-banner');
    const closeCollabBtn = document.getElementById('close-collab');

    if (collabBanner && closeCollabBtn) {
        closeCollabBtn.addEventListener('click', () => {
            // Añadimos la clase para que haga la animación de desaparecer
            collabBanner.classList.add('hidden');
            
            // Esperamos a que acabe la animación (400ms) y lo borramos del espacio
            setTimeout(() => {
                collabBanner.style.display = 'none';
                // Si GSAP está cargado, le decimos que recalcule el tamaño de la página
                if(typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
            }, 400);
        });
    }

    /* =========================================
       6. LÓGICA DE LA CESTA (CART DRAWER)
       ========================================= */
    let cart = JSON.parse(localStorage.getItem('bakenekoCart')) || [];

    const cartTrigger = document.querySelector('.cart-trigger');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartDrawer = document.getElementById('cart-drawer');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartDot = document.querySelector('.cart-dot');
    const addCartBtn = document.querySelector('.add-cart-btn');

    // Funciones Abrir/Cerrar
    function openCart() {
        cartOverlay.classList.add('active');
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        if (window.lenis) window.lenis.stop(); // <-- Pausamos el scroll de fondo
    }
    
    function closeCartDrawer() {
        cartOverlay.classList.remove('active');
        cartDrawer.classList.remove('active');
        document.body.style.overflow = '';
        if (window.lenis) window.lenis.start(); // <-- Reanudamos el scroll
    }

    cartTrigger.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);

    // ========================================================
    // A) Función para añadir al carrito DESDE EL MODAL
    // ========================================================
    addCartBtn.addEventListener('click', () => {
        const activeId = document.querySelector('.modal-content').getAttribute('data-active-id');
        if(activeId) {
            const product = productsDB[activeId];
            const lang = langs[currentLangIndex];
            
            const existingItemIndex = cart.findIndex(item => item.id === activeId);
            
            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    id: activeId, name: product[lang].name, price: product.price, img: product.img, quantity: 1
                });
            }
            
            updateCartUI();
            
            // Feedback visual
            const originalText = addCartBtn.innerText;
            addCartBtn.innerText = translations[lang].cartAdded; 
            addCartBtn.style.background = "var(--c-gold)";
            addCartBtn.style.color = "var(--c-indigo)";
            
            setTimeout(() => {
                addCartBtn.innerText = originalText;
                addCartBtn.style.background = "";
                addCartBtn.style.color = "";
                closeModal();
                openCart();
            }, 800);
        }
    }); // <--- AQUÍ DEBÍA CERRARSE ESTA FUNCIÓN, la tuya englobaba a la siguiente.


    // ========================================================
    // B) Función "Quick Add" DESDE LA TARJETA (+)
    // ========================================================
    document.querySelectorAll('.quick-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 1. Evitamos que el clic "atraviese" al postre y abra el modal
            e.preventDefault();
            e.stopPropagation(); 
            
            // 2. Buscamos el ID del producto
            const card = btn.closest('.product-card');
            const activeId = card.getAttribute('data-id');
            
            if(!activeId) return;

            const product = productsDB[activeId];
            const lang = langs[currentLangIndex];
            
            // 3. Lógica de la Cesta
            const existingItemIndex = cart.findIndex(item => item.id === activeId);
            
            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    id: activeId, name: product[lang].name, price: product.price, img: product.img, quantity: 1
                });
            }
            
            // 4. Actualizamos la interfaz
            updateCartUI(); 
            
            // 5. --- FEEDBACK VISUAL DE ÉXITO ---
            const originalText = btn.innerText;
            btn.innerText = "✓";
            btn.classList.add('added');
            
            // Animación de la bolita
            if (cartDot) {
                cartDot.style.transform = 'scale(1.5)';
                setTimeout(() => cartDot.style.transform = 'scale(1)', 300);
            }
            
            // Restaurar el botón
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('added');
            }, 1000);
        });
    });


    // ========================================================
    // C) Funciones globales de la Cesta (Sumar, Restar, Dibujar)
    // ========================================================
    window.changeQuantity = function(index, delta) {
        if (cart[index]) {
            cart[index].quantity += delta;
            if (cart[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                updateCartUI();
            }
        }
    }

    window.updateCartUI = function() {
        cartItemsContainer.innerHTML = ''; 
        let total = 0;
        let totalItemsCount = 0;
        const lang = langs[currentLangIndex];

        if(cart.length === 0) {
            cartItemsContainer.innerHTML = `<div class="empty-cart-msg" data-i18n="cartEmpty">${translations[lang].cartEmpty}</div>`;
            cartDot.classList.remove('active');
        } else {
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                totalItemsCount += item.quantity;
                const translatedName = productsDB[item.id][lang].name;
                
                const itemEl = document.createElement('div');
                itemEl.classList.add('cart-item');
                itemEl.innerHTML = `
                    <img src="${item.img}" alt="${translatedName}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${translatedName}</h4>
                        <span class="cart-item-price">${item.price.toFixed(2)}€ / ud</span>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="cart-item-right">
                        <button class="remove-item" onclick="removeFromCart(${index})">×</button>
                        <span class="item-subtotal">${itemTotal.toFixed(2)}€</span>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
            cartDot.innerText = totalItemsCount;
            cartDot.classList.add('active');
        }
        cartTotalEl.innerText = `${total.toFixed(2)}€`;
        localStorage.setItem('bakenekoCart', JSON.stringify(cart));
    }

    window.removeFromCart = function(index) {
        const items = document.querySelectorAll('.cart-item');
        if(items[index]) {
            items[index].style.opacity = '0';
            items[index].style.transform = 'translateX(20px)';
            items[index].style.transition = 'all 0.3s ease';
        }
        setTimeout(() => {
            cart.splice(index, 1);
            updateCartUI();
        }, 300);
    }
    
    updateCartUI();

    /* =========================================
       8. IR AL CHECKOUT (NUEVA PÁGINA)
       ========================================= */
    const checkoutBtn = document.querySelector('.checkout-btn');

    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            
            // MAGIA DE TRADUCCIÓN: Actualizamos los nombres de la cesta al idioma actual justo antes de irnos
            const currentLang = langs[currentLangIndex];
            const cartTranslated = cart.map(item => {
                return {
                    id: item.id,
                    name: productsDB[item.id][currentLang].name, // Forzamos el nombre en el idioma correcto
                    price: item.price,
                    img: item.img,
                    quantity: item.quantity
                };
            });

            // Guardamos el carrito ya traducido y el idioma en la memoria
            localStorage.setItem('bakenekoCart', JSON.stringify(cartTranslated));
            localStorage.setItem('bakenekoLang', currentLang);
            
            // Viajamos a la nueva página
            window.location.href = 'checkout.html';
        }
    });

    /* =========================================
       9. ASISTENTE YOKAI (CHATBOT FAQ)
       ========================================= */
    const chatbotTrigger = document.getElementById('chatbot-trigger');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeChatBtn = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');

    // Árbol de decisiones del Bot (FAQ)
    const botDialogues = {
        es: {
            start: {
                msg: "¡Miau! 🐾 Soy el espíritu Bakeneko. ¿Qué secreto de la Bakery deseas desvelar?",
                options: [
                    { text: "📦 ¿Cuánto tarda el envío?", next: "envio" },
                    { text: "🌾 Alergias e Ingredientes", next: "alergenos" },
                    { text: "✨ ¡Recomiéndame algo!", next: "recomendar" }
                ]
            },
            envio: {
                msg: "Nuestros portales se abren a diario. El envío Estándar tarda 48-72h. Si pides productos frescos (como Mochi), usa el Exprés Frío (24h).",
                options: [{ text: "Tengo otra duda", next: "start" }, { text: "Todo claro, ¡gracias!", next: "fin" }]
            },
            alergenos: {
                msg: "Usamos harina de arroz glutinoso (sin gluten natural), pero procesamos soja, lácteos y frutos secos en nuestro obrador mágico. ¡Pregunta en la cesta si tienes dudas severas!",
                options: [{ text: "Tengo otra duda", next: "start" }, { text: "Entendido", next: "fin" }]
            },
            recomendar: {
                msg: "Si es tu primera vez, el Dorayaki es un clásico infalible. Si buscas una experiencia mística de maridaje, prueba el Sauvignon Blanc 'The Raw'.",
                options: [{ text: "Ver otra duda", next: "start" }]
            },
            fin: {
                msg: "¡Que los espíritus dulces te acompañen! Cierro el portal de chat.",
                options: []
            }
        },
        en: {
            start: {
                msg: "Meow! 🐾 I'm the Bakeneko spirit. What secret of the Bakery do you wish to unveil?",
                options: [
                    { text: "📦 Shipping times?", next: "envio" },
                    { text: "🌾 Allergies & Ingredients", next: "alergenos" },
                    { text: "✨ Recommend me something!", next: "recomendar" }
                ]
            },
            envio: { msg: "Standard takes 48-72h. For fresh items (like Mochi), please use Cold Express (24h).", options: [{ text: "Another question", next: "start" }, { text: "Thanks!", next: "fin" }] },
            alergenos: { msg: "We use glutinous rice flour (naturally gluten-free), but handle soy, dairy, and nuts. Ask us if you have severe allergies!", options: [{ text: "Another question", next: "start" }, { text: "Got it", next: "fin" }] },
            recomendar: { msg: "For beginners, the Dorayaki is a classic. For a mystical pairing, try the 'The Raw' Sauvignon Blanc.", options: [{ text: "Back to menu", next: "start" }] },
            fin: { msg: "May the sweet spirits be with you! Closing chat.", options: [] }
        },
        jp: {
            start: {
                msg: "ニャー！🐾 私は化け猫の精霊です。ベーカリーのどんな秘密を知りたいですか？",
                options: [
                    { text: "📦 配送時間は？", next: "envio" },
                    { text: "🌾 アレルギーと成分", next: "alergenos" },
                    { text: "✨ おすすめは？", next: "recomendar" }
                ]
            },
            envio: { msg: "通常配送は48〜72時間です。新鮮な商品にはクール便（24時間）をご利用ください。", options: [{ text: "他の質問", next: "start" }, { text: "ありがとう！", next: "fin" }] },
            alergenos: { msg: "もち米粉を使用していますが、大豆、乳製品、ナッツも取り扱っています。", options: [{ text: "他の質問", next: "start" }, { text: "了解", next: "fin" }] },
            recomendar: { msg: "初めての方には「どら焼き」がお勧めです。特別なペアリングには白ワイン「The Raw」をお試しください。", options: [{ text: "メニューに戻る", next: "start" }] },
            fin: { msg: "甘い精霊があなたと共にありますように！", options: [] }
        }
    };

    let chatInitialized = false;

    // Funciones abrir y cerrar
    chatbotTrigger.addEventListener('click', () => {
        chatbotWindow.classList.add('active');
        if (!chatInitialized) {
            startChat();
            chatInitialized = true;
        }
    });

    closeChatBtn.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });

    // Iniciar conversación
    function startChat() {
        chatMessages.innerHTML = ''; // Limpiar chat
        renderBotMessage("start");
    }

    // Dibujar mensaje del bot
    function renderBotMessage(nodeKey) {
        const lang = langs[currentLangIndex];
        const node = botDialogues[lang][nodeKey];
        
        // Simular que el bot está escribiendo (0.5 segundos de retraso)
        chatOptions.innerHTML = ''; // Ocultar botones mientras piensa
        
        setTimeout(() => {
            // Burbuja del bot
            const msgEl = document.createElement('div');
            msgEl.className = 'chat-bubble msg-bot';
            msgEl.innerText = node.msg;
            chatMessages.appendChild(msgEl);
            
            // Hacer scroll hacia abajo
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Renderizar botones de respuesta si hay
            renderOptions(node.options);
            
            // Si es el final, reiniciar después de 3 segundos
            if (nodeKey === "fin") {
                setTimeout(() => {
                    chatbotWindow.classList.remove('active');
                    chatInitialized = false;
                }, 3000);
            }
        }, 500);
    }

    // Dibujar las opciones para el usuario
    function renderOptions(optionsArray) {
        chatOptions.innerHTML = '';
        optionsArray.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chat-opt-btn';
            btn.innerText = opt.text;
            btn.addEventListener('click', () => handleUserClick(opt.text, opt.next));
            chatOptions.appendChild(btn);
        });
    }

    // Lo que pasa cuando el usuario hace clic en un botón
    function handleUserClick(userText, nextNode) {
        // Pintar burbuja del usuario
        const msgEl = document.createElement('div');
        msgEl.className = 'chat-bubble msg-user';
        msgEl.innerText = userText;
        chatMessages.appendChild(msgEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Llamar a la siguiente respuesta del bot
        renderBotMessage(nextNode);
    }

    // Resetear el chat si se cambia de idioma
    langBtn.addEventListener('click', () => {
        if(chatInitialized) {
            startChat();
        }
    });

});