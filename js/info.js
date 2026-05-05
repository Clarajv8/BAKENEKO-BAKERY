document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Diccionario exclusivo para la página de Info / Legal
    const infoTexts = {
        es: {
            backStore: "← Volver a la Tienda", infoIndex: "Índice del Grimorio", infoFAQ: "Preguntas Frecuentes", 
            infoAllergens: "Guía de Alérgenos", infoPrivacy: "Política de Privacidad", infoTOS: "Términos del Pacto (TOS)", infoSocial: "Redes Espirituales",
            faqQ1: "¿Cómo se envían los wagashi?",
            faqA1: "Todos nuestros postres viajan en arcas refrigeradas mágicas para garantizar que lleguen tan frescos como cuando salieron de nuestro obrador en el plano espiritual.",
            faqQ2: "¿Dónde está mi pedido?",
            faqA2: "Al sellar el pacto (comprar), recibes un pergamino electrónico (email) con un Código de Invocación. Puedes usar ese número en el portal de nuestro transportista para ver por dónde va.",
            allTitle: "Guía de Alérgenos por Postre",
            allIntro: "En la Bakeneko Bakery procesamos ingredientes en un obrador compartido. Aunque usamos harina de arroz glutinoso (libre de gluten por naturaleza), no podemos garantizar la ausencia de trazas cruzadas.",
            allList: "<li><strong>Dorayaki (Tanuki):</strong> Trigo, Huevo, Soja.</li><li><strong>Mochi Daifuku (Kitsune):</strong> Soja (Polvo Kinako). Sin gluten.</li><li><strong>Dango Tricolor (Bakeneko):</strong> Sésamo, Soja.</li><li><strong>Kuzumochi (Kappa):</strong> Soja. Sin gluten.</li><li><strong>Yokan Nocturno (Umibozu):</strong> Libre de alérgenos principales (Vegano).</li><li><strong>Nerikiri de Camelia (Yuki-Onna):</strong> Frutos de cáscara (Nueces), Soja.</li><li><strong>Vinos Espirituales (Bodegas Kizuna):</strong> Contienen Sulfitos.</li>",
            priv1: "En Bakeneko Bakery, nos tomamos muy en serio la privacidad y seguridad de sus datos personales. Toda la información proporcionada durante el proceso de compra (nombre, dirección de envío y datos de pago) es procesada mediante protocolos de encriptación de alta seguridad (SSL/TLS), cumpliendo estrictamente con las normativas vigentes de protección de datos (RGPD).",
            priv2: "Nos comprometemos a no vender, ceder ni compartir su información personal con terceros bajo ninguna circunstancia, salvo para fines estrictamente logísticos (empresas de mensajería). Su correo electrónico será utilizado de manera exclusiva para enviarle actualizaciones sobre el estado de su pedido y notificaciones operativas vitales.",
            tos1: "Al realizar una transacción en nuestro sitio web, el cliente acepta expresamente los presentes Términos de Servicio. Todos los pedidos están sujetos a disponibilidad de los ingredientes y confirmación del pago. Los precios mostrados incluyen los impuestos aplicables.",
            tos2: "<strong>Política de Devoluciones y Reembolsos:</strong> Dada la naturaleza perecedera de nuestros productos artesanales (alimentos frescos), no aplica el derecho de desistimiento ni se aceptan devoluciones estándar por motivos de seguridad alimentaria. Las sustituciones o reembolsos íntegros solo procederán en caso de que el producto llegue dañado, en mal estado, o si ha ocurrido un error logístico demostrable. En tales casos, el cliente deberá contactar con nuestro equipo de soporte en un plazo máximo de 24 horas tras la recepción del pedido, aportando pruebas fotográficas del estado del envío.",
            soc1: "Síguenos en nuestros portales de comunicación para descubrir nuevos postres antes que nadie y ver el proceso de creación en nuestro obrador."
        },
        en: {
            backStore: "← Back to Store", infoIndex: "Grimoire Index", infoFAQ: "Frequently Asked Questions", 
            infoAllergens: "Allergen Guide", infoPrivacy: "Privacy Policy", infoTOS: "Terms of the Pact (TOS)", infoSocial: "Spiritual Networks",
            faqQ1: "How are the wagashi shipped?",
            faqA1: "All our sweets travel in magical refrigerated arks to ensure they arrive as fresh as when they left our spiritual bakery.",
            faqQ2: "Where is my order?",
            faqA2: "Upon sealing the pact (purchasing), you receive an electronic scroll (email) with an Invocation Code. You can use that number on our courier's portal to track it.",
            allTitle: "Allergen Guide per Dessert",
            allIntro: "At Bakeneko Bakery we process ingredients in a shared facility. Although we use glutinous rice flour (naturally gluten-free), we cannot guarantee the absence of cross-contamination.",
            allList: "<li><strong>Dorayaki (Tanuki):</strong> Wheat, Egg, Soy.</li><li><strong>Mochi Daifuku (Kitsune):</strong> Soy (Kinako dust). Gluten-free.</li><li><strong>Tricolor Dango (Bakeneko):</strong> Sesame, Soy.</li><li><strong>Kuzumochi (Kappa):</strong> Soy. Gluten-free.</li><li><strong>Night Yokan (Umibozu):</strong> Free of major allergens (Vegan).</li><li><strong>Camellia Nerikiri (Yuki-Onna):</strong> Tree Nuts (Walnuts), Soy.</li><li><strong>Spiritual Wines:</strong> Contain Sulfites.</li>",
            priv1: "At Bakeneko Bakery, we take the privacy and security of your personal data very seriously. All information provided during the checkout process (name, shipping address, and payment details) is processed using high-security encryption protocols (SSL/TLS), strictly complying with current data protection regulations (GDPR).",
            priv2: "We are committed to never selling, transferring, or sharing your personal information with third parties under any circumstances, except for strictly logistical purposes (shipping carriers). Your email address will be used exclusively to send you order status updates and vital operational notifications.",
            tos1: "By making a transaction on our website, the customer expressly accepts these Terms of Service. All orders are subject to ingredient availability and payment confirmation. Displayed prices include applicable taxes.",
            tos2: "<strong>Returns and Refunds Policy:</strong> Given the perishable nature of our artisanal products (fresh food), standard rights of withdrawal and returns are not accepted for food safety reasons. Replacements or full refunds will only be issued if the product arrives damaged, in poor condition, or if a demonstrable logistical error has occurred. In such cases, the customer must contact our support team within a maximum of 24 hours of receiving the order, providing photographic evidence of the shipment's condition.",
            soc1: "Follow us on our communication portals to discover new desserts before anyone else and see the creation process in our bakery."
        },
        jp: {
            backStore: "← ショップに戻る", infoIndex: "魔導書の目次", infoFAQ: "よくある質問", 
            infoAllergens: "アレルギーガイド", infoPrivacy: "プライバシーポリシー", infoTOS: "契約条件（TOS）", infoSocial: "霊的なネットワーク",
            faqQ1: "和菓子はどのように配送されますか？",
            faqA1: "すべてのスイーツは、霊的な工房を出た時と同じ新鮮さを保つため、魔法の冷蔵箱に入れて配送されます。",
            faqQ2: "注文はどこですか？",
            faqA2: "契約（購入）が完了すると、召喚コードが記載された電子の巻物（メール）が届きます。その番号を使って配送業者のポータルで追跡できます。",
            allTitle: "デザート別アレルギーガイド",
            allIntro: "化け猫ベーカリーでは、共有の工房で材料を加工しています。もち米粉（自然なグルテンフリー）を使用していますが、交差汚染がないことを保証することはできません。",
            allList: "<li><strong>どら焼き（タヌキ）:</strong> 小麦、卵、大豆</li><li><strong>大福餅（キツネ）:</strong> 大豆（きな粉）。グルテンフリー。</li><li><strong>三色団子（化け猫）:</strong> ごま、大豆。</li><li><strong>葛餅（カッパ）:</strong> 大豆。グルテンフリー。</li><li><strong>夜の羊羹（海坊主）:</strong> 主要なアレルゲンなし（ヴィーガン）。</li><li><strong>椿の練り切り（雪女）:</strong> 木の実（クルミ）、大豆。</li><li><strong>霊的なワイン:</strong> 亜硫酸塩を含む</li>",
            priv1: "Bakeneko Bakeryでは、お客様の個人データのプライバシーとセキュリティを非常に重視しています。購入手続き中に提供されたすべての情報（氏名、配送先住所、支払い詳細）は、現行のデータ保護規則（GDPR）に厳密に準拠し、高度なセキュリティの暗号化プロトコル（SSL/TLS）を使用して処理されます。",
            priv2: "当社は、厳格な物流目的（配送業者）を除き、いかなる状況下でもお客様の個人情報を第三者に販売、譲渡、または共有しないことをお約束します。メールアドレスは、ご注文状況の更新や重要な運用に関する通知を送信するためにのみ使用されます。",
            tos1: "当ウェブサイトで取引を行うことにより、お客様は本利用規約に明示的に同意したものとみなされます。すべてのご注文は、材料の在庫状況および支払いの確認を条件とします。表示価格には適用される税金が含まれています。",
            tos2: "<strong>返品および返金ポリシー：</strong> 当社の職人技による製品（生鮮食品）は傷みやすい性質があり、食品安全上の理由から標準的な撤回権や返品は受け付けておりません。交換または全額返金は、製品が破損・不良の状態で到着した場合、または明らかな物流上のエラーが発生した場合にのみ行われます。そのような場合、お客様は商品到着後24時間以内に、配送状態の写真証拠を添えてサポートチームにご連絡いただく必要があります。",
            soc1: "私たちのコミュニケーションポータルをフォローして、誰よりも早く新しいデザートを発見し、工房での制作過程をご覧ください。"
        }
    };

    // 2. Lógica de Memoria y Cambio de Idioma
    const langs = ['es', 'en', 'jp'];
    const langDisplayNames = { es: 'ES', en: 'EN', jp: '日本語' };
    let currentLangIndex = 0;
    const langBtn = document.getElementById('lang-toggle');

    // Recuperar idioma de la memoria
    const savedLang = localStorage.getItem('bakenekoLang');
    if (savedLang && langs.includes(savedLang)) {
        currentLangIndex = langs.indexOf(savedLang);
    } else {
        localStorage.setItem('bakenekoLang', langs[currentLangIndex]);
    }

    // Función para traducir toda la página
    function translateInfoPage() {
        const currentLang = langs[currentLangIndex];
        const t = infoTexts[currentLang];
        
        // Actualizar el botón
        langBtn.innerText = langs.map(l => langDisplayNames[l]).join(' / ');
        
        // Inyectar textos
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                // Usamos innerHTML porque hay etiquetas <strong> y <li> en los textos legales
                el.innerHTML = t[key]; 
            }
        });
    }

    // Evento de clic en el botón de idioma
    langBtn.addEventListener('click', () => {
        currentLangIndex = (currentLangIndex + 1) % langs.length;
        localStorage.setItem('bakenekoLang', langs[currentLangIndex]);
        translateInfoPage();
    });

    // Traducir al cargar la página por primera vez
    translateInfoPage();

    // 3. Smooth Scroll (Lenis) para esta página y Enlaces del Índice
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({ duration: 1.2, smooth: true });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);

        // --- MAGIA PARA EL ÍNDICE ---
        // Buscamos todos los enlaces que empiecen por "#" (las anclas de tu índice)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // Evitamos el salto instantáneo y brusco
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Le decimos a Lenis que nos lleve allí con un deslizamiento súper suave.
                    // offset: -100 es el truco para que la cabecera fija no tape el título al llegar.
                    lenis.scrollTo(targetElement, { 
                        offset: -100, 
                        duration: 1.5, 
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Curva de aceleración súper lujosa
                    }); 
                }
            });
        });
    }

    /* =========================================
       SISTEMA UNIVERSAL DEL CURSOR NEO-UKIYO-E
       ========================================= */
    const cursor = document.getElementById('neo-cursor');
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

    if (cursor && typeof gsap !== 'undefined') {
        if (isTouchDevice) {
            // Si es un móvil/tablet, destruye el cursor falso para no dar problemas
            cursor.style.display = 'none';
        } else {
            // Si es ordenador, inicia el motor de GSAP
            gsap.set(cursor, { xPercent: -50, yPercent: -50 });
            const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
            const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

            window.addEventListener("mousemove", (e) => { 
                xTo(e.clientX); 
                yTo(e.clientY); 
            });

            window.addEventListener('mousedown', () => cursor.classList.add('click'));
            window.addEventListener('mouseup', () => cursor.classList.remove('click'));

            // Detecta todo lo clickeable de cualquier página (Tienda, Info, Checkout)
            const interactables = document.querySelectorAll('a, button, input, select, .product-card, .cart-trigger, .oracle-interactive');
            
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });
        }
    }
});