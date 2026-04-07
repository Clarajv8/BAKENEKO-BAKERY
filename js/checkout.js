document.addEventListener("DOMContentLoaded", () => {
    // 1. Recuperar datos del localStorage
    const savedCart = localStorage.getItem('bakenekoCart');
    const savedLang = localStorage.getItem('bakenekoLang') || 'es';
    let cart = savedCart ? JSON.parse(savedCart) : [];

    // Si entran aquí sin carrito, los devolvemos a la tienda
    if (cart.length === 0) {
        window.location.href = 'index.html';
        return;
    }

    // Traducciones básicas para el checkout
    const texts = {
        es: { 
            title: "Sellar el Pacto", sub: "Prepara tu ofrenda para recibir los elixires y wagashi.", ship: "1. Destino del Ritual", name: "Nombre", email: "Correo Electrónico (Para el Pergamino)", zip: "Código Postal", cardName: "Titular de la Tarjeta", addr: "Dirección Completa (Calle, Número, Piso)", zone: "Selecciona tu tipo de envío...", shipOpt1: "Envío Frío Estándar (48-72h) - +5.00€", shipOpt2: "Envío Frío Exprés (24h) - +8.00€", shipOpt3: "Islas e Int. (Frío) - +15.00€", pay: "2. Pago Seguro", card: "Número de Tarjeta", exp: "Caducidad (MM/AA)", btn: "Confirmar Pago", sumTitle: "Resumen del Pedido", subTotal: "Subtotal", shipping: "Envío", grandTotal: "Total", succTitle: "Pacto Sellado", succDesc: "Los espíritus han aceptado tu ofrenda. Tu pedido está en camino y el pergamino con el código de rastreo acaba de llegar a tu correo.", returnStore: "← Volver al Grimorio", unit: "/ ud", backToRealm: "Volver al Reino"
        },
        en: { 
            title: "Seal the Pact", sub: "Prepare your offering to receive the elixirs and wagashi.", ship: "1. Shipping Destination", name: "Full Name",   email: "Email Address (For the Scroll)", zip: "Postal Code", cardName: "Cardholder Name", addr: "Full Address (Street, Number, Floor)", zone: "Select shipping method...",  shipOpt1: "Cold Standard (48-72h) - +5.00€", shipOpt2: "Cold Express (24h) - +8.00€", shipOpt3: "Islands & Int. (Cold) - +15.00€", pay: "2. Secure Payment", card: "Card Number", exp: "Expiry (MM/YY)", btn: "Confirm Payment", sumTitle: "Order Summary", subTotal: "Subtotal", shipping: "Shipping", grandTotal: "Total",  succTitle: "Pact Sealed", succDesc: "The spirits have accepted your offering. Your order is on its way and the scroll with the tracking code has been sent to your email.", qtyLabel: "Qty.", returnStore: "← Back to Grimoire", unit: "/ ea", backToRealm: "Return to Realm"
        },
        jp: { 
            title: "契約を結ぶ", sub: "お供え物を準備して、霊薬と和菓子を受け取ります。", ship: "1. お届け先", name: "氏名", email: "メールアドレス", zip: "郵便番号", cardName: "カード名義人", addr: "完全な住所（通り、番地、階）", zone: "配送方法を選択...", shipOpt1: "通常クール便（48〜72時間）- +5.00€", shipOpt2: "お急ぎクール便（24時間）- +8.00€", shipOpt3: "離島・国際クール便 - +15.00€", pay: "2. 安全な支払い", card: "カード番号", exp: "有効期限 (MM/YY)", btn: "支払いを確認する", sumTitle: "注文の概要", subTotal: "小計", shipping: "送料", grandTotal: "合計", succTitle: "契約完了", succDesc: "精霊たちがあなたの供物を受け入れました。ご注文は発送され、追跡コードの巻物がメールに送信されました。", qtyLabel: "数量", returnStore: "← 魔導書に戻る", unit: "/ 個", backToRealm: "レルムに戻る"
        }
    };

    // Aplicar traducciones al HTML
    const t = texts[savedLang];
    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-subtitle').innerText = t.sub;
    document.getElementById('txt-ship-title').innerText = t.ship;
    document.getElementById('txt-name').innerText = t.name;
    document.getElementById('txt-email').innerText = t.email;
    document.getElementById('txt-zip').innerText = t.zip;
    document.getElementById('txt-card-name').innerText = t.cardName;
    document.getElementById('txt-address').innerText = t.addr;
    document.getElementById('txt-zone').innerText = t.zone;
    document.getElementById('txt-ship-opt1').innerText = t.shipOpt1;
    document.getElementById('txt-ship-opt2').innerText = t.shipOpt2;
    document.getElementById('txt-ship-opt3').innerText = t.shipOpt3;
    document.getElementById('txt-pay-title').innerText = t.pay;
    document.getElementById('txt-card').innerText = t.card;
    document.getElementById('txt-exp').innerText = t.exp;
    document.getElementById('txt-submit').innerText = t.btn;
    document.getElementById('txt-summary-title').innerText = t.sumTitle;
    document.getElementById('txt-subtotal').innerText = t.subTotal;
    document.getElementById('txt-shipping').innerText = t.shipping;
    document.getElementById('txt-total').innerText = t.grandTotal;
    document.getElementById('txt-success-title').innerText = t.succTitle;
    document.getElementById('txt-success-desc').innerText = t.succDesc;
    document.getElementById('txt-return').innerText = t.returnStore;
    document.getElementById('back-to-realm').innerText = t.backToRealm;

    // Elementos del DOM
    const summaryItems = document.getElementById('summary-items');
    const chkZone = document.getElementById('chk-zone');
    const chkAddress = document.getElementById('chk-address');
    let subtotalCost = 0;
    let shippingCost = 0;

    // Renderizar carrito
    // Renderizar carrito en el resumen
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity; // Subtotal de este postre
        subtotalCost += itemTotal;
        
        // CONDICIONAL: Solo mostramos el texto de "X€ / ud" si hay más de 1 cantidad
        const unitPriceBreakdown = item.quantity > 1 
            ? `<span style="opacity: 0.6; font-size: 0.9em; margin-left: 4px;">(${item.price.toFixed(2)}€ ${t.unit})</span>` 
            : ''; // Si es 1, lo deja vacío ('')
        
        summaryItems.innerHTML += `
            <div class="summary-item">
                <img src="${item.img}" class="summary-img" alt="${item.name}">
                <div class="summary-details">
                    <div class="summary-name">${item.name}</div>
                    <div class="summary-qty">
                        ${t.qtyLabel}: ${item.quantity} ${unitPriceBreakdown}
                    </div>
                </div>
                <div class="summary-price">${itemTotal.toFixed(2)}€</div>
            </div>
        `;
    });

    function updateTotals() {
        document.getElementById('summary-subtotal').innerText = `${subtotalCost.toFixed(2)}€`;
        document.getElementById('summary-shipping').innerText = shippingCost === 0 && chkZone.value === "" ? '--' : (shippingCost === 0 ? 'Gratis' : `+${shippingCost.toFixed(2)}€`);
        const final = subtotalCost + shippingCost;
        document.getElementById('summary-total').innerText = `${final.toFixed(2)}€`;
        document.getElementById('chk-btn-total').innerText = `${final.toFixed(2)}€`;
    }
    updateTotals();

    chkZone.addEventListener('change', (e) => {
        shippingCost = parseFloat(e.target.value);
        updateTotals();
    });

    // Validaciones de Regex Automáticas
    document.getElementById('chk-card').addEventListener('input', e => {
        let val = e.target.value.replace(/\D/g, '');
        val = val.replace(/(.{4})/g, '$1 ').trim();
        e.target.value = val;
    });

    document.getElementById('chk-exp').addEventListener('input', e => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 2) val = val.substring(0, 2) + '/' + val.substring(2, 4);
        e.target.value = val;
    });

    document.getElementById('chk-cvv').addEventListener('input', e => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

// Enviar el formulario y Sello Animado
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const chkAddress = document.getElementById('chk-address');
        const chkEmail = document.getElementById('chk-email');
        let formIsValid = true;
        
        // 1. Validar dirección (Debe tener números y cierta longitud)
        const addrVal = chkAddress.value.trim();
        const hasNumbers = /\d/.test(addrVal);
        if (addrVal.length < 10 || !hasNumbers) {
            chkAddress.parentElement.classList.add('invalid');
            formIsValid = false;
        }

        // 2. Validar Email estricto mediante Regex (Debe contener @ y un punto seguido de letras al final)
        const emailVal = chkEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(emailVal)) {
            chkEmail.parentElement.classList.add('invalid');
            formIsValid = false;
        }

        // 3. Validar Caducidad de Tarjeta (MM/AA)
        const chkExp = document.getElementById('chk-exp');
        const expVal = chkExp.value.trim();
        const expParts = expVal.split('/');
        
        if (expParts.length === 2) {
            const month = parseInt(expParts[0], 10);
            const year = parseInt("20" + expParts[1], 10); // Convertimos "26" a 2026
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1; // Enero es 0, sumamos 1
            const currentYear = currentDate.getFullYear();
            
            // Si el mes no existe (13) o el año es pasado, o es el año actual pero un mes anterior...
            if (month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth)) {
                chkExp.parentElement.classList.add('invalid');
                formIsValid = false;
            }
        } else {
            chkExp.parentElement.classList.add('invalid');
            formIsValid = false;
        }

        // Si falla alguna de las dos validaciones, cortamos el proceso
        if (!formIsValid) {
            return;
        }

        const submitBtn = document.getElementById('submit-checkout');
        submitBtn.innerText = "Invocando...";
        submitBtn.style.opacity = "0.7";
        
        setTimeout(() => {
            // Limpiamos carrito porque la compra ha sido un éxito
            localStorage.removeItem('bakenekoCart');
            
            // Pantalla final dramática
            document.getElementById('checkout-success').classList.add('active');
        }, 1500);
    });

// Limpiar alertas de error al escribir de nuevo
    document.getElementById('chk-address').addEventListener('input', (e) => e.target.parentElement.classList.remove('invalid'));
    document.getElementById('chk-email').addEventListener('input', (e) => e.target.parentElement.classList.remove('invalid'));
    chkAddress.addEventListener('input', () => chkAddress.parentElement.classList.remove('invalid'));

    document.getElementById('back-to-realm').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    /* =========================================
       MOTOR DEL CURSOR NEO-UKIYO-E (CHECKOUT)
       ========================================= */
    const cursor = document.getElementById('neo-cursor');
    
    if (cursor && typeof gsap !== 'undefined') {
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

        window.addEventListener("mousemove", (e) => { 
            xTo(e.clientX); 
            yTo(e.clientY); 
        });

        window.addEventListener('mousedown', () => cursor.classList.add('click'));
        window.addEventListener('mouseup', () => cursor.classList.remove('click'));

        // Inteligencia de hover para inputs, select y botones del checkout
        const interactables = document.querySelectorAll('a, button, input, select');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }
});