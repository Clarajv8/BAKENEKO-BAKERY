document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. DATA & TRANSLATION SYSTEM (ES / EN / JP)
       ========================================= */
    const translations = {
        es: {
            cart: "Cesta", pretitle: "Portal al Reino Yokai", subtitle: "El Refugio de los Espíritus Dulces", cta: "Entrar al Portal", introTitle: "Dulzura Entre Mundos", introText: "No horneamos para el hambre del cuerpo, sino para los antojos del alma. Guiados por el Bakeneko, nuestros dulces cierran la brecha entre la prisa moderna y la quietud antigua.", collectionTitle: "La Colección", addToCart: "Añadir a la Cesta", oracleTitle: "El Oráculo del Bakeneko", oracleDesc: "¿Dudas? Deja que el destino elija el espíritu que tu alma necesita hoy.", oracleBtn: "Consultar al Oráculo", tabAll: "El Grimorio Completo", tabDesserts: "Postres Yokai", tabWines: "Vinos Espirituales", collabSub: "Colaboración Exclusiva", collabDesc: "El equilibrio perfecto entre el Wagashi tradicional y la enología premium. Un maridaje de leyenda diseñado para despertar a los espíritus.", collabMarquee: "✦ BAKENEKO × BODEGAS KIZUNA ✦ MARIDAJE EXCLUSIVO ", cartTitle: "Tu Selección", cartEmpty: "El grimorio está vacío.", cartTotal: "Total Ritual:", cartCheckout: "Completar Invocación", cartAdded: "¡Añadido!", checkoutTitle: "Sellar el Pacto", checkoutSub: "Prepara tu ofrenda para recibir los elixires y wagashi.", checkoutShipping: "Destino del Ritual", chkName: "Nombre del Mortal", chkAddress: "Dirección (Plano Terrenal)", checkoutPayment: "Ofrenda de Intercambio", chkCard: "Runas de la Tarjeta (16 dígitos)", chkExp: "Caducidad (MM/AA)", chkSubmit: "Confirmar Invocación", successTitle: "Pacto Sellado", successText: "Los espíritus han aceptado tu ofrenda. Tu pedido está en camino a través del portal.", backToRealm: "Volver al Reino", returnStore: "← Volver al Grimorio", selectZone: "Selecciona tu Reino...", summaryTitle: "Resumen de Invocación", summarySub: "Subtotal", summaryShip: "Envío (Portal)", summaryTotal: "Total Ritual", yokaiClass: "Espíritu Guardián:", allergenLabel: "Alérgenos:", unit: "/ ud", botName: "Espíritu Bakeneko", botStatus: "Guardián del Grimorio", ftBio: "Dulzura entre mundos. Unimos la tradición del wagashi con la vanguardia, guiados por el Bakeneko.",
            ftQuickLinks: "Enlaces Rápidos", ftShop: "El Grimorio (Tienda)", ftFAQ: "Preguntas Frecuentes", ftTrack: "Rastrear Ofrenda", ftLegal: "Legal y Transparencia", ftPrivacy: "Política de Privacidad", ftTerms: "Términos del Pacto (TOS)", ftAllergensInfo: "Guía de Alérgenos", ftContactAcc: "Atención y Cuenta", ftContactUs: "📞 Habla con un Monje", ftMyAccount: "👤 Mi Cuenta / Iniciar Sesión", ftRights: "© 2026 Bakeneko Bakery.", navConcept: "CONCEPTO", navSocial: "REDES", enterShop: "ENTRAR AL GRIMORIO", vLabelEssence: "ESENCIA", vLabelConcept: "CONCEPTO", introWhoTitle: "Artesanía de otro mundo", introWhoText: "Bakeneko Bakery no es una pastelería convencional. Somos un espacio donde la técnica milenaria del Wagashi se encuentra con el misticismo. Cada pieza es una ofrenda esculpida a mano para conectar el paladar con la mitología japonesa."
        },
        en: {
            cart: "Cart", pretitle: "Gateway to the Yokai Realm", subtitle: "Sanctuary of Sweet Spirits", cta: "Enter the Portal", introTitle: "Sweetness Between Worlds", introText: "We do not bake for the body's hunger, but for the soul's cravings. Guided by the Bakeneko, our sweets bridge the gap between modern rush and ancient stillness.", collectionTitle: "The Collection", addToCart: "Add to Cart", oracleTitle: "The Bakeneko Oracle", oracleDesc: "In doubt? Let fate choose the spirit your soul needs today.", oracleBtn: "Consult the Oracle", tabAll: "The Complete Grimoire", tabDesserts: "Yokai Sweets", tabWines: "Spiritual Wines", collabSub: "Exclusive Collaboration", collabDesc: "The perfect balance between traditional Wagashi and premium oenology. A legendary pairing designed to awaken the spirits.", collabMarquee: "✦ BAKENEKO × BODEGAS KIZUNA ✦ EXCLUSIVE PAIRING DROP ", cartTitle: "Your Selection", cartEmpty: "The grimoire is empty.", cartTotal: "Ritual Total:", cartCheckout: "Complete Invocation", cartAdded: "Added!", checkoutTitle: "Seal the Pact", checkoutSub: "Prepare your offering to receive the elixirs and wagashi.", checkoutShipping: "Ritual Destination", chkName: "Mortal's Name", 
            chkAddress: "Address (Earthly Plane)", checkoutPayment: "Exchange Offering", chkCard: "Card Runes (16 digits)", chkExp: "Expiry (MM/YY)", chkSubmit: "Confirm Invocation", successTitle: "Pact Sealed", successText: "The spirits have accepted your offering. Your order is on its way through the portal.", backToRealm: "Return to Realm", returnStore: "← Return to Grimoire", selectZone: "Select your Realm...", summaryTitle: "Invocation Summary", summarySub: "Subtotal", summaryShip: "Shipping (Portal)", summaryTotal: "Ritual Total", yokaiClass: "Guardian Spirit:", allergenLabel: "Allergens:", unit: "/ ea", botName: "Bakeneko Spirit", botStatus: "Grimoire Guardian", ftBio: "Sweetness between worlds. We blend wagashi tradition with the avant-garde, guided by the Bakeneko.", ftQuickLinks: "Quick Links", ftShop: "The Grimoire (Shop)", ftFAQ: "Frequently Asked Questions",  ftTrack: "Track Offering",  ftLegal: "Legal & Transparency", ftPrivacy: "Privacy Policy", ftTerms: "Terms of the Pact (TOS)", ftAllergensInfo: "Allergen Guide", ftContactAcc: "Support & Account", ftContactUs: "📞 Speak with a Monk", ftMyAccount: "👤 My Account / Login", ftRights: "© 2026 Bakeneko Bakery.", navConcept: "CONCEPT", navSocial: "SOCIALS", enterShop: "ENTER THE GRIMOIRE", vLabelEssence: "ESSENCE", vLabelConcept: "CONCEPT", introWhoTitle: "Otherworldly Craft", introWhoText: "Bakeneko Bakery is not a conventional pastry shop. We are a space where ancient Wagashi techniques meet mysticism. Each piece is a hand-sculpted offering to connect your palate with Japanese mythology."
        },
        jp: {
            cart: "カート", pretitle: "妖怪のレルムへの入り口", subtitle: "甘い精霊の聖域", cta: "ポータルに入る", introTitle: "世界の間の甘さ", introText: "私たちは体の飢えのためではなく、魂の渇望のために焼きます。化け猫に導かれ、私たちのスイーツは現代の慌ただしさと古代の静けさの間の架け橋となります。", collectionTitle: "コレクション", addToCart: "カートに追加", oracleTitle: "化け猫の神託", oracleDesc: "迷っていますか？今日あなたの魂が必要とする精霊を運命に選ばせましょう。", oracleBtn: "神託を伺う", tabAll: "完全な魔導書", tabDesserts: "妖怪のスイーツ", tabWines: "霊的なワイン", collabSub: "特別コラボレーション", collabDesc: "伝統的な和菓子と高級ワインの完璧なバランス。精霊を目覚めさせるためにデザインされた伝説のペアリング。", collabMarquee: "✦ 化け猫 × KIZUNAワイナリー ✦ 特別なペアリング ", cartTitle: "あなたの選択", cartEmpty: "魔導書は空です。", cartTotal: "儀式の合計:", cartCheckout: "召喚を完了する", cartAdded: "追加されました！", checkoutTitle: "契約を結ぶ", checkoutSub: "お供え物を準備して、霊薬と和菓子を受け取ります。", checkoutShipping: "儀式の目的地", chkName: "定命の者の名前", chkAddress: "住所（現世）", checkoutPayment: "交換の供物", chkCard: "カードのルーン（16桁）", chkExp: "有効期限 (MM/YY)", chkSubmit: "召喚を確認する", successTitle: "契約完了", successText: "精霊たちがあなたの供物を受け入れました。ご注文はポータルを通って向かっています。", backToRealm: "レルムに戻る", returnStore: "← 魔導書に戻る", selectZone: "領域を選択...", summaryTitle: "召喚の概要", summarySub: "小計", summaryShip: "送料（ポータル）", summaryTotal: "儀式の合計", yokaiClass: "守護霊:", allergenLabel: "アレルギー物質:", unit: "/ 個", botName: "化け猫の精霊", botStatus: "魔導書の守護者", ftBio: "世界の間の甘さ。化け猫に導かれ、和菓子の伝統とアバンギャルドを融合させています。", ftQuickLinks: "クイックリンク", ftShop: "魔導書（ショップ）", ftFAQ: "よくある質問", ftTrack: "供物の追跡", ftLegal: "法的情報と透明性", ftPrivacy: "プライバシーポリシー", ftTerms: "契約条件（TOS）", ftAllergensInfo: "アレルギーガイド", ftContactAcc: "サポートとアカウント", ftContactUs: "📞 僧侶と話す", ftMyAccount: "👤 マイアカウント / ログイン", ftRights: "© 2026 Bakeneko Bakery.", navConcept: "理念", navSocial: "縁", enterShop: "魔導書へ入る", vLabelEssence: "本質", vLabelConcept: "理念", introWhoTitle: "異世界の職人技", introWhoText: "化け猫ベーカリーは、単なる菓子店ではありません。千年の歴史を持つ和菓子の技術と神秘主義が融合する場所です。一つひとつが、日本の神話とあなたの味覚を繋ぐために手作りされた供物なのです。"
        }
    };

    const productsDB = {
        p1: {
            es: { name: "Dorayaki", desc: "El Tanuki es un espíritu del bosque famoso por su gran barriga y su amor por los festines. Este dulce redondo rinde homenaje a su apetito insaciable.", allergens: "Trigo, Huevo, Soja." },
            en: { name: "Dorayaki", desc: "The Tanuki is a forest spirit famous for its big belly and love of feasts. This round sweet pays homage to its insatiable appetite.", allergens: "Wheat, Egg, Soy." },
            jp: { name: "どら焼き", desc: "タヌキは大きなお腹と宴会好きで有名な森の精霊です。この丸いお菓子は彼の飽くなき食欲に敬意を表しています。", allergens: "小麦、卵、大豆。" },
            class: "Tanuki", price: 3.50, img: "assets/images/dorayaki.webp"
        },
        p2: {
            es: { name: "Mochi Daifuku", desc: "Se dice que el Kitsune cambia de forma para engañar a los viajeros. Este mochi, suave y pálido por fuera, esconde un corazón astuto.", allergens: "Soja (Polvo Kinako). Sin Gluten." },
            en: { name: "Mochi Daifuku", desc: "It is said that the Kitsune shapeshifts to trick travelers. This mochi, soft and pale on the outside, hides a cunning heart.", allergens: "Soy (Kinako dust). Gluten-Free." },
            jp: { name: "大福餅", desc: "キツネは旅人を騙すために姿を変えると言われています。外は柔らかく白いこの餅は、ずる賢い心を隠しています。", allergens: "大豆（きな粉）。グルテンフリー。" },
            class: "Kitsune", price: 3.80, img: "assets/images/mochi.webp"
        },
        p3: {
            es: { name: "Dango Tricolor", desc: "Tres esferas perfectas que representan a tres pequeños gatos traviesos jugando en equilibrio bajo los cerezos.", allergens: "Sésamo, Soja." },
            en: { name: "Tricolor Dango", desc: "Three perfect spheres representing three mischievous little cats playing in balance under the cherry trees.", allergens: "Sesame, Soy." },
            jp: { name: "三色団子", desc: "桜の下でバランスを取りながら遊ぶ3匹のいたずら好きな子猫を表す3つの完璧な球体。", allergens: "ごま、大豆。" },
            class: "Bakeneko", price: 3.00, img: "assets/images/dangos.webp"
        },
        p4: {
            es: { name: "Kuzumochi", desc: "Fresco, acuoso y transparente como el río donde habita el Kappa. Un postre que se desliza en el paladar.", allergens: "Soja. Sin Gluten." },
            en: { name: "Kuzumochi", desc: "Fresh, watery, and transparent like the river where the Kappa lives. A dessert that glides on the palate.", allergens: "Soy. Gluten-Free." },
            jp: { name: "葛餅", desc: "カッパが住む川のように新鮮で水っぽく透明です。口の中で滑るデザート。", allergens: "大豆。グルテンフリー。" },
            class: "Kappa", price: 4.50, img: "assets/images/kuzumochi.webp"
        },
        p5: {
            es: { name: "Yokan Nocturno", desc: "Oscuro, denso y profundo como el océano donde emerge el gigante Umibozu. Un sabor intenso para valientes.", allergens: "Libre de alérgenos principales (Vegano)." },
            en: { name: "Night Yokan", desc: "Dark, dense, and deep like the ocean where the giant Umibozu emerges. An intense flavor for the brave.", allergens: "Free of major allergens (Vegan)." },
            jp: { name: "夜の羊羹", desc: "巨大な海坊主が現れる海のように暗く、密度が濃く、深い。勇者のための強烈な風味。", allergens: "主要なアレルゲンなし（ヴィーガン）。" },
            class: "Umibozu", price: 4.20, img: "assets/images/yokan.webp"
        },
        p6: {
            es: { name: "Nerikiri de Camelia", desc: "Arte comestible. Tan bello, pálido y delicado como la Yuki-Onna. Captura una belleza fría y efímera.", allergens: "Frutos de cáscara (Nueces), Soja." },
            en: { name: "Camellia Nerikiri", desc: "Edible art. As beautiful, pale, and delicate as the Yuki-Onna. It captures a cold, ephemeral beauty.", allergens: "Tree Nuts (Walnuts), Soy." },
            jp: { name: "椿の練り切り", desc: "食べられる芸術。雪女のように美しく、青白く、繊細です。冷たく儚い美しさを捉えています。", allergens: "木の実（クルミ）、大豆。" },
            class: "Yuki-Onna", price: 5.50, img: "assets/images/nerikiri.webp"
        },
        p7: {
            es: { name: "Sauvignon Blanc 'The Raw'", desc: "D.O. Penedès. Bodegas Kizuna. Servir a 6°C. El elixir de la Ningyo (Sirena), ideal para acompañar cortes de pescado crudo.", allergens: "Contiene Sulfitos." },
            en: { name: "Sauvignon Blanc 'The Raw'", desc: "D.O. Penedès. Bodegas Kizuna. Serve at 6°C. The elixir of the Ningyo (Mermaid), ideal for raw fish.", allergens: "Contains Sulfites." },
            jp: { name: "ソーヴィニヨン・ブラン 'The Raw'", desc: "ペネデス原産地呼称。Kizunaワイナリー。6°Cで提供。人魚の霊薬。刺身料理に最適です。", allergens: "亜硫酸塩が含まれています。" },
            class: "Ningyo (Sirena)", price: 16.50, img: "assets/images/vino-theraw.jpg"
        },
        p8: {
            es: { name: "Garnacha Tinta 'The Grill'", desc: "D.O. Penedès. Bodegas Kizuna. Servir a 14°C. El fuego del Shuten-Dōji. Maridaje óptimo para carnes a la brasa y yakitori.", allergens: "Contiene Sulfitos." },
            en: { name: "Garnacha Tinta 'The Grill'", desc: "D.O. Penedès. Bodegas Kizuna. Serve at 14°C. The fire of Shuten-Dōji. Optimal pairing for grilled meats and yakitori.", allergens: "Contains Sulfites." },
            jp: { name: "ガルナッチャ・ティンタ 'The Grill'", desc: "ペネデス原産地呼称。Kizunaワイナリー。14°Cで提供。酒呑童子の炎。焼き鳥や肉料理に最適です。", allergens: "亜硫酸塩が含まれています。" },
            class: "Shuten-Dōji (Oni)", price: 18.00, img: "assets/images/vino-thegrill.jpg"
        },
        p9: {
            es: { name: "Cava Brut Nature 'The Umami'", desc: "Cava D.O. Método Tradicional. Bodegas Kizuna. Servir a 5°C. Estructura perfecta para Tempura y caldos ricos en Umami.", allergens: "Contiene Sulfitos." },
            en: { name: "Cava Brut Nature 'The Umami'", desc: "Cava D.O. Traditional Method. Kizuna Wineries. Serve at 5°C. Perfect structure for Tempura and Umami-rich broths.", allergens: "Contains Sulfites." },
            jp: { name: "カヴァ・ブリュット 'The Umami'", desc: "カヴァ原産地呼称。伝統的製法。Kizunaワイナリー。5°Cで提供。天ぷらや旨味豊かなスープに最適です。", allergens: "亜硫酸塩が含まれています。" },
            class: "Kitsune (Zorro)", price: 22.00, img: "assets/images/vino-theumami.jpg"
        },
        p10: {
            es: { name: "Tanuki Blend", desc: "El Tanuki es glotón y terrenal. Este origen Brasil (Proceso Natural) aporta notas a chocolate que actúan como el complemento clásico para el bizcocho horneado del Dorayaki.<br><br><b>Notas:</b> Avellana, Cacao, Caramelo<br><b>Maridaje:</b> Dorayaki Clásico<br><br>Cuerpo: 🌕🌕🌕🌕🌕<br>Acidez: 🌕🌑🌑🌑🌑<br>Dulzor: 🌕🌕🌕🌕🌑", allergens: "Café de Especialidad 100% Arábica." },
            en: { name: "Tanuki Blend", desc: "The Tanuki is gluttonous and earthy. This natural process Brazil origin brings chocolate notes that act as the classic complement to the Dorayaki.<br><br><b>Notes:</b> Hazelnut, Cocoa, Caramel<br><b>Pairing:</b> Classic Dorayaki<br><br>Body: 🌕🌕🌕🌕🌕<br>Acidity: 🌕🌑🌑🌑🌑<br>Sweetness: 🌕🌕🌕🌕🌑", allergens: "100% Arabica Specialty Coffee." },
            jp: { name: "タヌキブレンド", desc: "タヌキは食いしん坊です。このブラジル産は、どら焼きを補完するチョコレートのノートをもたらします。<br><br><b>ノート:</b> ヘーゼルナッツ、カカオ<br><b>ペアリング:</b> どら焼き<br><br>ボディ: 🌕🌕🌕🌕🌕<br>酸味: 🌕🌑🌑🌑🌑<br>甘味: 🌕🌕🌕🌕🌑", allergens: "100%アラビカ種スペシャルティコーヒー。" },
            class: "Tanuki (Brasil)", price: 12.00, img: "assets/images/cafe-tanuki.jpg"
        },
        p11: {
            es: { name: "Kitsune Roast", desc: "El Kitsune engaña a los sentidos. Este café etíope lavado parece un té ligero, pero explota con acidez brillante que limpia el paladar tras la densa dulzura del Mochi.<br><br><b>Notas:</b> Jazmín, Melocotón blanco, Miel<br><b>Maridaje:</b> Mochi Daifuku<br><br>Acidez floral: 🌕🌕🌕🌕🌕<br>Cuerpo: 🌕🌕🌑🌑🌑<br>Complejidad: 🌕🌕🌕🌕🌑", allergens: "Café de Especialidad 100% Arábica." },
            en: { name: "Kitsune Roast", desc: "The Kitsune deceives the senses. This washed Ethiopian coffee looks like tea but explodes with bright acidity to cleanse the palate after the Mochi.<br><br><b>Notes:</b> Jasmine, White Peach, Honey<br><b>Pairing:</b> Mochi Daifuku", allergens: "100% Arabica Specialty Coffee." },
            jp: { name: "キツネロースト", desc: "エチオピア産のこのコーヒーは、大福餅の甘さの後に口蓋をきれいにする明るい酸味で爆発します。<br><br><b>ノート:</b> ジャスミン、白桃<br><b>ペアリング:</b> 大福餅", allergens: "100%アラビカ種スペシャルティコーヒー。" },
            class: "Kitsune (Etiopía)", price: 14.50, img: "assets/images/cafe-kitsune.jpg"
        },
        p12: {
            es: { name: "Bakeneko Sakura", desc: "El Bakeneko representa el juego primaveral. El proceso 'Honey' le da un dulzor frutal vibrante que enlaza maravillosamente con el Dango Tricolor.<br><br><b>Notas:</b> Cereza dulce, Frutos Rojos, Panela<br><b>Maridaje:</b> Dango Tricolor<br><br>Equilibrio: 🌕🌕🌕🌕🌕<br>Dulzor: 🌕🌕🌕🌕🌑<br>Intensidad: 🌕🌕🌕🌑🌑", allergens: "Café de Especialidad 100% Arábica." },
            en: { name: "Bakeneko Sakura", desc: "The 'Honey' process gives it a vibrant fruity sweetness that links beautifully with the Tricolor Dango.<br><br><b>Notes:</b> Sweet Cherry, Red Berries, Panela<br><b>Pairing:</b> Tricolor Dango", allergens: "100% Arabica Specialty Coffee." },
            jp: { name: "化け猫サクラ", desc: "ハニープロセスは、三色団子と美しくつながる活気に満ちたフルーティーな甘さを与えます。<br><br><b>ノート:</b> さくらんぼ、赤い果実<br><b>ペアリング:</b> 三色団子", allergens: "100%アラビカ種スペシャルティコーヒー。" },
            class: "Bakeneko (Costa Rica)", price: 15.00, img: "assets/images/cafe-bakeneko.jpg"
        },
        p13: {
            es: { name: "Kappa Cold Brew", desc: "El Kappa requiere frescor acuático. Un Cold Brew elimina el amargor y resalta la frescura, siendo la única bebida lógica para el Kuzumochi traslúcido.<br><br><b>Notas:</b> Manzana verde, Té negro, Caña de azúcar<br><b>Maridaje:</b> Kuzumochi<br><br>Frescor: 🌕🌕🌕🌕🌕<br>Limpieza en boca: 🌕🌕🌕🌕🌕<br>Amargor: 🌕🌑🌑🌑🌑", allergens: "Café de Especialidad 100% Arábica." },
            en: { name: "Kappa Cold Brew", desc: "A Cold Brew eliminates bitterness and highlights freshness, making it the only logical drink for translucent Kuzumochi.<br><br><b>Notes:</b> Green Apple, Black Tea<br><b>Pairing:</b> Kuzumochi", allergens: "100% Arabica Specialty Coffee." },
            jp: { name: "カッパコールドブリュー", desc: "コールドブリューは苦味を排除し、新鮮さを強調します。<br><br><b>ノート:</b> 青リンゴ、紅茶<br><b>ペアリング:</b> 葛餅", allergens: "100%アラビカ種スペシャルティコーヒー。" },
            class: "Kappa (Colombia)", price: 11.00, img: "assets/images/cafe-kappa.jpg"
        },
        p14: {
            es: { name: "Umibozu Dark", desc: "El Yokan es tan denso que aplastaría un café suave; requiere este origen de Sumatra con tueste oscuro y cuerpo muy pesado para sostener el pulso.<br><br><b>Notas:</b> Chocolate 90%, Tabaco, Especias<br><b>Maridaje:</b> Yokan Nocturno<br><br>Intensidad: 🌕🌕🌕🌕🌕<br>Cuerpo: 🌕🌕🌕🌕🌕<br>Acidez: 🌑🌑🌑🌑🌑", allergens: "Café de Especialidad 100% Arábica." },
            en: { name: "Umibozu Dark", desc: "Requires this Sumatra origin with a dark roast and very heavy body to sustain the pulse against the Yokan.<br><br><b>Notes:</b> 90% Chocolate, Tobacco, Spices<br><b>Pairing:</b> Night Yokan", allergens: "100% Arabica Specialty Coffee." },
            jp: { name: "海坊主ダーク", desc: "羊羹に負けない、非常に重いボディを持つスマトラ産のダークローストが必要です。<br><br><b>ノート:</b> 90%チョコレート、スパイス<br><b>ペアリング:</b> 夜の羊羹", allergens: "100%アラビカ種スペシャルティコーヒー。" },
            class: "Umibozu (Sumatra)", price: 13.50, img: "assets/images/cafe-umibozu.jpg"
        },
        p15: {
            es: { name: "Yuki-Onna Geisha", desc: "La belleza fría del Nerikiri merece el café más exclusivo del mundo (Variedad Geisha). Es tan floral y sutil que casi parece desvanecerse como la nieve.<br><br><b>Notas:</b> Flor de Azahar, Bergamota, Té blanco<br><b>Maridaje:</b> Nerikiri de Camelia<br><br>Elegancia: 🌕🌕🌕🌕🌕<br>Aroma: 🌕🌕🌕🌕🌕<br>Rareza: 🌕🌕🌕🌕🌕", allergens: "Lote Exclusivo (Variedad Geisha)." },
            en: { name: "Yuki-Onna Geisha", desc: "The cold beauty of Nerikiri deserves the world's most exclusive coffee (Geisha variety). It is so floral it seems to fade like snow.<br><br><b>Notes:</b> Orange Blossom, Bergamot<br><b>Pairing:</b> Camellia Nerikiri", allergens: "Exclusive Lot (Geisha Variety)." },
            jp: { name: "雪女ゲイシャ", desc: "練り切りの冷たい美しさは、世界で最も高級なコーヒー（ゲイシャ種）に値します。<br><br><b>ノート:</b> オレンジの花、ベルガモット<br><b>ペアリング:</b> 椿の練り切り", allergens: "エクスクルーシブロット（ゲイシャ種）。" },
            class: "Yuki-Onna (Panamá)", price: 35.00, img: "assets/images/cafe-yukionna.jpg"
        }
    };

    // Language Logic
    const langs = ['es', 'en', 'jp'];
    const langDisplayNames = { es: 'ES', en: 'EN', jp: '日本語' };
    
    let currentLangIndex = 0;
    const langBtn = document.getElementById('lang-toggle');

    if (langBtn) {
        const savedLang = localStorage.getItem('bakenekoLang');
        if (savedLang && langs.includes(savedLang)) {
            currentLangIndex = langs.indexOf(savedLang);
            document.body.setAttribute('data-lang', savedLang);
            updateLanguage(savedLang);
        }
        
        langBtn.innerText = langs.map(l => langDisplayNames[l]).join(' / ');

        langBtn.addEventListener('click', () => {
            currentLangIndex = (currentLangIndex + 1) % langs.length;
            const currentLang = langs[currentLangIndex];
            langBtn.innerText = langs.map(l => langDisplayNames[l]).join(' / ');
            document.body.setAttribute('data-lang', currentLang);
            localStorage.setItem('bakenekoLang', currentLang);
            updateLanguage(currentLang);
        });
    }

    function updateLanguage(lang) {
        const t = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(t[key]) el.innerText = t[key];
        });
        
        const botNameEl = document.getElementById('bot-name');
        if (botNameEl) botNameEl.innerText = t.botName;
        const botStatusEl = document.getElementById('bot-status');
        if (botStatusEl) botStatusEl.innerText = t.botStatus;

        document.querySelectorAll('.product-card').forEach(card => {
            const id = card.getAttribute('data-id');
            const nameEl = card.querySelector('[data-i18n-product="name"]');
            if(productsDB[id] && nameEl) nameEl.innerText = productsDB[id][lang].name;
        });

        const activeId = document.querySelector('.modal-content')?.getAttribute('data-active-id');
        if(activeId) fillModal(activeId);
        
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

        
        ScrollTrigger.batch(".product-card", {
            start: "top 85%",
            once: true, 
            onEnter: (batch) => {
                gsap.fromTo(batch,
                    { y: 50, opacity: 0 }, // He bajado el salto de 80 a 50 para que sea más sutil
                    {
                        y: 0, 
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out"
                    }
                );
            }
        });
    }

    /* =========================================
       3. MODAL DE PRODUCTO (2D)
       ========================================= */
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close-modal');
    const activeImage = document.querySelector('#active-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDesc = document.querySelector('.modal-desc');
    const modalClass = document.querySelector('.modal-yokai-class');
    let clearImageTimer; 

    function fillModal(id) {
        if (!modalContent || !productsDB[id]) return;
        const lang = langs[currentLangIndex];
        const data = productsDB[id];
        
        modalTitle.innerText = data[lang].name;
        modalDesc.innerHTML = data[lang].desc;
        modalClass.innerText = `${translations[lang].yokaiClass} ${data.class}`;
        document.querySelector('[data-i18n="allergenLabel"]').innerText = translations[lang].allergenLabel;
        document.getElementById('active-allergens').innerText = data[lang].allergens;
        
        activeImage.src = data.img;
        modalContent.setAttribute('data-active-id', id);
    }

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.quick-add-btn')) return; 

            clearTimeout(clearImageTimer); 
            const id = card.getAttribute('data-id');
            fillModal(id);
            modalOverlay.classList.add('active');
            
            document.body.style.overflow = 'hidden';
            if (window.lenis) window.lenis.stop(); 
        });
    });

    function closeModal() {
        if(!modalOverlay) return;
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (window.lenis) window.lenis.start(); 
        clearImageTimer = setTimeout(() => { if(activeImage) activeImage.src = ""; }, 500); 
    }

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    /* =========================================
       4. PESTAÑAS Y TRAGAPERRAS OMIKUJI
       ========================================= */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');

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

    // --- EL TRAGAPERRAS MÁGICO (OMIKUJI) ---
    const spinBtn = document.getElementById('spin-btn');
    const strip = document.getElementById('rune-strip');
    const runasBase = ["火", "水", "木", "金", "土"];
    let isSpinning = false;

    if (strip && spinBtn) {
        const totalLoops = 8;
        let stripHTML = "";
        for (let i = 0; i < totalLoops; i++) {
            runasBase.forEach(runa => {
                stripHTML += `<div class="rune-item">${runa}</div>`;
            });
        }
        strip.innerHTML = stripHTML;

        spinBtn.addEventListener('click', () => {
            if (isSpinning) return;
            isSpinning = true;

            spinBtn.disabled = true;
            const originalText = spinBtn.innerText;
            spinBtn.innerText = "...";

            const keys = Object.keys(productsDB);
            const randomProductKey = keys[Math.floor(Math.random() * keys.length)];
            const winnerRuneIndex = Math.floor(Math.random() * runasBase.length);

            const itemHeight = 120;
            const itemsPerLoop = runasBase.length;
            const targetItemPos = ((totalLoops - 1) * itemsPerLoop) + winnerRuneIndex;
            const targetY = -(targetItemPos * itemHeight);

            gsap.set(strip, { y: 0 });

            gsap.to(strip, {
                y: targetY,
                duration: 3.5,
                ease: "power4.inOut",
                onStart: () => gsap.to(strip, { filter: "blur(4px)", duration: 0.5 }),
                onComplete: () => {
                    gsap.to(strip, { filter: "blur(0px)", duration: 0.2 });
                    
                    setTimeout(() => {
                        fillModal(randomProductKey);
                        modalOverlay.classList.add('active');
                        document.body.style.overflow = 'hidden';
                        if (window.lenis) window.lenis.stop();

                        spinBtn.disabled = false;
                        spinBtn.innerText = originalText;
                        isSpinning = false;
                    }, 500);
                }
            });
        });
    }

    /* =========================================
       5. BANNER COLABORACIÓN
       ========================================= */
    const collabBanner = document.getElementById('collab-banner');
    const closeCollabBtn = document.getElementById('close-collab');

    if (collabBanner && closeCollabBtn) {
        closeCollabBtn.addEventListener('click', () => {
            collabBanner.classList.add('hidden');
            setTimeout(() => {
                collabBanner.style.display = 'none';
                if(typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
            }, 400);
        });
    }

    /* =========================================
       6. LÓGICA DE LA CESTA
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

    function openCart() {
        if(!cartOverlay) return;
        cartOverlay.classList.add('active');
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        if (window.lenis) window.lenis.stop(); 
    }
    
    function closeCartDrawer() {
        if(!cartOverlay) return;
        cartOverlay.classList.remove('active');
        cartDrawer.classList.remove('active');
        document.body.style.overflow = '';
        if (window.lenis) window.lenis.start(); 
    }

    if(cartTrigger) cartTrigger.addEventListener('click', openCart);
    if(closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
    if(cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

    if(addCartBtn) {
        addCartBtn.addEventListener('click', () => {
            const activeId = document.querySelector('.modal-content').getAttribute('data-active-id');
            if(activeId) {
                const product = productsDB[activeId];
                const lang = langs[currentLangIndex];
                
                const existingItemIndex = cart.findIndex(item => item.id === activeId);
                if (existingItemIndex !== -1) {
                    cart[existingItemIndex].quantity += 1;
                } else {
                    cart.push({ id: activeId, name: product[lang].name, price: product.price, img: product.img, quantity: 1 });
                }
                
                updateCartUI();
                
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
        }); 
    }

    document.querySelectorAll('.quick-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); 
            
            const card = btn.closest('.product-card');
            const activeId = card.getAttribute('data-id');
            if(!activeId) return;

            const product = productsDB[activeId];
            const lang = langs[currentLangIndex];
            
            const existingItemIndex = cart.findIndex(item => item.id === activeId);
            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({ id: activeId, name: product[lang].name, price: product.price, img: product.img, quantity: 1 });
            }
            
            updateCartUI(); 
            
            const originalText = btn.innerText;
            btn.innerText = "✓";
            btn.classList.add('added');
            
            if (cartDot) {
                cartDot.style.transform = 'scale(1.5)';
                setTimeout(() => cartDot.style.transform = 'scale(1)', 300);
            }
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('added');
            }, 1000);
        });
    });

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
        if(!cartItemsContainer) return;
        cartItemsContainer.innerHTML = ''; 
        let total = 0;
        let totalItemsCount = 0;
        const lang = langs[currentLangIndex];

        if(cart.length === 0) {
            cartItemsContainer.innerHTML = `<div class="empty-cart-msg" data-i18n="cartEmpty">${translations[lang].cartEmpty}</div>`;
            if(cartDot) cartDot.classList.remove('active');
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
                        <span class="cart-item-price">${item.price.toFixed(2)}€ ${translations[lang].unit}</span>
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
            if(cartDot) {
                cartDot.innerText = totalItemsCount;
                cartDot.classList.add('active');
            }
        }
        if(cartTotalEl) cartTotalEl.innerText = `${total.toFixed(2)}€`;
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

    const checkoutBtn = document.querySelector('.checkout-btn');
    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                const currentLang = langs[currentLangIndex];
                const cartTranslated = cart.map(item => {
                    return {
                        id: item.id,
                        name: productsDB[item.id][currentLang].name, 
                        price: item.price,
                        img: item.img,
                        quantity: item.quantity
                    };
                });
                localStorage.setItem('bakenekoCart', JSON.stringify(cartTranslated));
                localStorage.setItem('bakenekoLang', currentLang);
                window.location.href = 'checkout.html';
            }
        });
    }

    /* =========================================
       9. ASISTENTE YOKAI (CHATBOT)
       ========================================= */
    const chatbotTrigger = document.getElementById('chatbot-trigger');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeChatBtn = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');

    const botDialogues = {
        es: {
            start: { msg: "¡Miau! 🐾 Soy el espíritu Bakeneko. ¿En qué te puedo ayudar hoy?", options: [{ text: "📍 ¿Dónde está mi pedido?", next: "rastrear" }, { text: "📦 Tiempos de envío", next: "envio" }, { text: "🌾 Alergias", next: "alergenos" }, { text: "👤 Contacto", next: "contacto" }] },
            rastrear: { msg: "Busca tu <b>Número de Pacto</b> en el email de confirmación.", options: [{ text: "Menú", next: "start" }] },
            contacto: { msg: "Llámanos al <b>+34 900 000 000</b> o escribe a ayuda@bakeneko.com.", options: [{ text: "Menú", next: "start" }, { text: "Cerrar", next: "fin" }] },
            envio: { msg: "Todo viaja en frío mágico. Estándar (48-72h) o Exprés (24h).", options: [{ text: "Menú", next: "start" }] },
            alergenos: { msg: "Usamos arroz sin gluten, pero hay trazas de soja, leche y nueces.", options: [{ text: "Menú", next: "start" }] },
            fin: { msg: "¡Que los espíritus te acompañen! 🌸", options: [] }
        },
        en: {
            start: { msg: "Meow! 🐾 I'm Bakeneko. How can I help?", options: [{ text: "📍 Order status", next: "rastrear" }, { text: "📦 Shipping", next: "envio" }, { text: "🌾 Allergies", next: "alergenos" }, { text: "👤 Contact", next: "contacto" }] },
            rastrear: { msg: "Check your email for the <b>Pact Number</b>.", options: [{ text: "Menu", next: "start" }] },
            contacto: { msg: "Call <b>+34 900 000 000</b> or email help@bakeneko.com.", options: [{ text: "Menu", next: "start" }, { text: "Close", next: "fin" }] },
            envio: { msg: "Cold shipping always. Standard (48-72h) or Express (24h).", options: [{ text: "Menu", next: "start" }] },
            alergenos: { msg: "We use gluten-free rice, but handle soy, milk, and nuts.", options: [{ text: "Menu", next: "start" }] },
            fin: { msg: "May the spirits guide you! 🌸", options: [] }
        },
        jp: {
            start: { msg: "ニャー！🐾 化け猫です。どうされましたか？", options: [{ text: "📍 注文状況", next: "rastrear" }, { text: "📦 配送について", next: "envio" }, { text: "🌾 アレルギー", next: "alergenos" }, { text: "👤 お問い合わせ", next: "contacto" }] },
            rastrear: { msg: "確認メールの<b>契約番号</b>をご覧ください。", options: [{ text: "メニュー", next: "start" }] },
            contacto: { msg: "電話: <b>+34 900 000 000</b> または help@bakeneko.com まで。", options: [{ text: "メニュー", next: "start" }, { text: "閉じる", next: "fin" }] },
            envio: { msg: "クール便で発送します。通常便（48〜72時間）かお急ぎ便（24時間）。", options: [{ text: "メニュー", next: "start" }] },
            alergenos: { msg: "グルテンフリーですが、大豆やナッツも扱っています。", options: [{ text: "メニュー", next: "start" }] },
            fin: { msg: "良い旅を！🌸", options: [] }
        }
    };

    let chatInitialized = false;

    if(chatbotTrigger) {
        chatbotTrigger.addEventListener('click', () => {
            chatbotWindow.classList.add('active');
            if (!chatInitialized) { startChat(); chatInitialized = true; }
        });
    }

    if(closeChatBtn) closeChatBtn.addEventListener('click', () => chatbotWindow.classList.remove('active'));

    function startChat() { chatMessages.innerHTML = ''; renderBotMessage("start"); }

    function renderBotMessage(nodeKey) {
        const lang = langs[currentLangIndex];
        const node = botDialogues[lang][nodeKey];
        chatOptions.innerHTML = ''; 
        setTimeout(() => {
            const msgEl = document.createElement('div');
            msgEl.className = 'chat-bubble msg-bot';
            msgEl.innerHTML = node.msg;
            chatMessages.appendChild(msgEl);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            renderOptions(node.options);
            if (nodeKey === "fin") {
                setTimeout(() => { chatbotWindow.classList.remove('active'); chatInitialized = false; }, 3000);
            }
        }, 500);
    }

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

    function handleUserClick(userText, nextNode) {
        const msgEl = document.createElement('div');
        msgEl.className = 'chat-bubble msg-user';
        msgEl.innerText = userText;
        chatMessages.appendChild(msgEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        renderBotMessage(nextNode);
    }

    /* =========================================
       10. EASTER EGG: ZARPA DEL BAKENEKO
       ========================================= */
    const paw = document.getElementById('bakeneko-paw');
    if (paw) {
        let idleTimer;
        let isPawActive = false;
        let haSucedidoTravesura = false; 
        let haPulsadoPostre = false;     
        let isAutoScrolling = false; 
        let isRetracting = false; 

        const IDLE_TIME = 8000; 
        const PROBABILITY = 0.30; 
        const COOLDOWN = 120000; 
        let lastPawTime = 0; 
        const allProducts = document.querySelectorAll('.product-card');

        function triggerPawMischief(forzar = false) {
            if (isPawActive) return;
            if (!forzar && haSucedidoTravesura) return;

            haSucedidoTravesura = true; 
            const now = Date.now();
            
            if (!forzar) {
                if (now - lastPawTime < COOLDOWN) return;
                if (Math.random() > PROBABILITY) return;
            }

            lastPawTime = now; 
            isPawActive = true;
            paw.style.display = 'block';

            const viewportCenterY = window.innerHeight / 2;
            let targetProduct = null;
            let minDistance = Infinity;

            allProducts.forEach(product => {
                if (product.style.display !== 'none') {
                    const rect = product.getBoundingClientRect();
                    const productCenterY = rect.top + rect.height / 2;
                    const isVisible = productCenterY > 100 && productCenterY < (window.innerHeight - 100);
                    if (isVisible) {
                        const distance = Math.abs(viewportCenterY - productCenterY);
                        if (distance < minDistance) { minDistance = distance; targetProduct = product; }
                    }
                }
            });

            if (targetProduct && !haPulsadoPostre) {
                ejecutarSustoDelPostre(targetProduct);
            } else {
                ejecutarTravesuraScroll();
            }
        }

        function ejecutarSustoDelPostre(targetProduct) {
            haPulsadoPostre = true; 
            const productRect = targetProduct.getBoundingClientRect();
            const targetY = productRect.top + (productRect.height / 2) - (paw.offsetHeight / 2);
            const targetX = -(paw.offsetWidth * 0.4);

            const tl = gsap.timeline({
                onComplete: () => { 
                    if(isPawActive && !isRetracting) {
                        isRetracting = true;
                        gsap.to(paw, { x: 150, duration: 1.2, ease: "power2.inOut", onComplete: () => {
                            paw.style.display = 'none'; isPawActive = false; isRetracting = false;
                        }});
                    }
                }
            });

            gsap.set(paw, { y: targetY, x: 0, rotation: 0, scale: 1 });
            tl.to(paw, { x: targetX, duration: 2, ease: "power2.out" })
              .to(paw, { rotation: -10, scale: 1.1, duration: 0.3, ease: "back.out(2)" }, "+=0.2")
              .add(() => {
                  if (isPawActive) {
                      targetProduct.click();
                      isRetracting = true; 
                      gsap.killTweensOf(paw); 
                      gsap.to(paw, { x: 150, rotation: 20, duration: 0.8, ease: "power2.in",
                          onComplete: () => { paw.style.display = 'none'; isPawActive = false; isRetracting = false; }
                      });
                  }
              });
        }

        function ejecutarTravesuraScroll() {
            const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200;
            const scrollAmount = isAtBottom ? -450 : 450; 
            const centerY = (window.innerHeight / 2) - (paw.offsetHeight / 2);

            const pawTimeline = gsap.timeline({ onComplete: () => { paw.style.display = 'none'; isPawActive = false; } });

            gsap.set(paw, { y: centerY, x: 0, rotation: 0, scale: 1 });

            pawTimeline.to(paw, { x: -120, duration: 2, ease: "power1.inOut" }) 
                       .add(() => { isAutoScrolling = true; }) 
                       .to(paw, { 
                           y: centerY + (isAtBottom ? -100 : 100), rotation: isAtBottom ? 30 : -30, duration: 0.8, ease: "power2.in",
                           onStart: () => {
                               if (window.lenis) { window.lenis.scrollTo(window.scrollY + scrollAmount, { duration: 1.5, onComplete: () => { isAutoScrolling = false; } }); } 
                               else { window.scrollBy({ top: scrollAmount, behavior: 'smooth' }); setTimeout(() => { isAutoScrolling = false; }, 1000); }
                           }
                       })
                       .to(paw, { x: 150, duration: 1.2, ease: "power2.in" });
        }

        function resetIdleTimer(e) {
            if (isAutoScrolling && e && e.type === 'scroll') return;
            haSucedidoTravesura = false; 

            if (isPawActive && !isRetracting) {
                isRetracting = true; 
                gsap.killTweensOf(paw);
                gsap.to(paw, { x: 150, rotation: 15, scale: 1, duration: 0.8, ease: "power2.in", 
                    onComplete: () => { paw.style.display = 'none'; isPawActive = false; isRetracting = false; }
                });
            }

            clearTimeout(idleTimer);
            const modalOpen = document.querySelector('.modal-overlay.active');
            const cartOpen = document.querySelector('.cart-overlay.active');
            const chatOpen = document.querySelector('.chatbot-window.active');

            if (!modalOpen && !cartOpen && !chatOpen) { idleTimer = setTimeout(triggerPawMischief, IDLE_TIME); }
        }

        ['mousemove', 'scroll', 'keydown', 'click', 'touchstart'].forEach(evt => window.addEventListener(evt, resetIdleTimer));
        resetIdleTimer({type: 'init'});
        
        window.invocarZarpa = function() {
            haPulsadoPostre = false; triggerPawMischief(true); console.log("🐈‍⬛ ¡Bakeneko invocado mediante magia de consola!");
        };
    }

    /* =========================================
       11. CURSOR CIRCULAR
       ========================================= */
    const cursor = document.getElementById('neo-cursor');
    if (cursor) {
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

        window.addEventListener("mousemove", (e) => { xTo(e.clientX); yTo(e.clientY); });
        window.addEventListener('mousedown', () => cursor.classList.add('click'));
        window.addEventListener('mouseup', () => cursor.classList.remove('click'));

        const interactables = document.querySelectorAll('a, button, .product-card, .cart-trigger, input, select');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    /* =========================================
       12. SELLOS HANKO
       ========================================= */
    const kanjis = ["猫", "霊", "契", "甘", "狐"]; 
    document.addEventListener('click', (e) => {
        const clicValido = !e.target.closest('button, a, input, select, .product-card, .modal-content, .cart-drawer, .chatbot-window, .main-nav, .hero-content, .omikuji-window');
        if (!clicValido) return;

        const stamp = document.createElement('div');
        stamp.className = 'hanko-stamp';
        stamp.innerText = kanjis[Math.floor(Math.random() * kanjis.length)];
        const rotation = Math.floor(Math.random() * 40) - 20;
        stamp.style.left = e.pageX + 'px';
        stamp.style.top = e.pageY + 'px'; 
        stamp.style.setProperty('--rot', rotation + 'deg');
        document.body.appendChild(stamp);
        setTimeout(() => stamp.remove(), 4000);
    });

    window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

});