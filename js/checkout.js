document.addEventListener("DOMContentLoaded", () => {
    const savedCart = localStorage.getItem('bakenekoCart');
    let savedLang = localStorage.getItem('bakenekoLang') || 'es';
    let cart = savedCart ? JSON.parse(savedCart) : [];

    if (cart.length === 0) {
        window.location.href = 'index.html';
        return;
    }

    const texts = {
        es: { 
            title: "Finalizar Compra", sub: "Completa tus datos de envío y pago de forma segura.", ship: "1. Dirección de Envío", name: "Nombre Completo", email: "Correo Electrónico (Para el recibo)", zip: "Código Postal", cardName: "Titular de la Tarjeta", addr: "Dirección Completa (Calle, Número, Piso)", zone: "Selecciona tu zona de envío...", shipOpt1: "Envío Frío Estándar (48-72h) - +5.00€", shipOpt2: "Envío Frío Exprés (24h) - +8.00€", shipOpt3: "Islas e Internacional (Frío) - +15.00€", pay: "2. Pago Seguro", card: "Número de Tarjeta", exp: "Caducidad (MM/AA)", btn: "Confirmar Pago", sumTitle: "Resumen de tu Pedido", subTotal: "Subtotal", shipping: "Envío", grandTotal: "Total", succTitle: "Pedido Confirmado", succDesc: "Tu pago se ha procesado con éxito. En breve recibirás un correo con la confirmación y tu número de seguimiento.", returnStore: "← Volver a la Tienda", unit: "/ ud", backToRealm: "Volver al Inicio", qtyLabel: "Cant."
        },
        en: { 
            title: "Checkout", sub: "Complete your shipping and payment details securely.", ship: "1. Shipping Address", name: "Full Name", email: "Email Address (For receipt)", zip: "Postal Code", cardName: "Cardholder Name", addr: "Full Address (Street, Number, Floor)", zone: "Select shipping zone...", shipOpt1: "Cold Standard (48-72h) - +5.00€", shipOpt2: "Cold Express (24h) - +8.00€", shipOpt3: "Islands & Int. (Cold) - +15.00€", pay: "2. Secure Payment", card: "Card Number", exp: "Expiry (MM/YY)", btn: "Confirm Payment", sumTitle: "Order Summary", subTotal: "Subtotal", shipping: "Shipping", grandTotal: "Total", succTitle: "Order Confirmed", succDesc: "Your payment has been successfully processed. You will shortly receive an email with your confirmation and tracking number.", returnStore: "← Back to Store", unit: "/ ea", backToRealm: "Return to Home", qtyLabel: "Qty."
        },
        jp: { 
            title: "チェックアウト", sub: "配送と支払いの詳細を安全に入力してください。", ship: "1. 配送先住所", name: "氏名", email: "メールアドレス（領収書用）", zip: "郵便番号", cardName: "カード名義人", addr: "完全な住所（通り、番地、階）", zone: "配送エリアを選択...", shipOpt1: "通常クール便（48〜72時間）- +5.00€", shipOpt2: "お急ぎクール便（24時間）- +8.00€", shipOpt3: "離島・国際クール便 - +15.00€", pay: "2. 安全な支払い", card: "カード番号", exp: "有効期限 (MM/YY)", btn: "支払いを確認する", sumTitle: "注文の概要", subTotal: "小計", shipping: "送料", grandTotal: "合計", succTitle: "注文完了", succDesc: "支払いが正常に処理されました。まもなく確認と追跡番号が記載されたメールが届きます。", returnStore: "← ストアに戻る", unit: "/ 個", backToRealm: "ホームに戻る", qtyLabel: "数量"
        }
    };

    const langs = ['es', 'en', 'jp'];
    const langDisplayNames = { es: 'ES', en: 'EN', jp: '日本語' };
    let currentLangIndex = langs.indexOf(savedLang);
    if (currentLangIndex === -1) currentLangIndex = 0;

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.innerText = langs.map(l => langDisplayNames[l]).join(' / ');
        
        langBtn.addEventListener('click', () => {
            currentLangIndex = (currentLangIndex + 1) % langs.length;
            const currentLang = langs[currentLangIndex];
            langBtn.innerText = langs.map(l => langDisplayNames[l]).join(' / ');
            localStorage.setItem('bakenekoLang', currentLang);
            updateLanguage(currentLang);
        });
    }

    const summaryItems = document.getElementById('summary-items');
    const chkZone = document.getElementById('chk-zone');
    const chkAddress = document.getElementById('chk-address');
    let subtotalCost = 0;
    let shippingCost = 0;

    function updateLanguage(lang) {
        const t = texts[lang];
        
        const el = (id, text) => { if(document.getElementById(id)) document.getElementById(id).innerText = text; };
        el('txt-title', t.title); el('txt-subtitle', t.sub); el('txt-ship-title', t.ship);
        el('txt-name', t.name); el('txt-email', t.email); el('txt-zip', t.zip);
        el('txt-card-name', t.cardName); el('txt-address', t.addr); el('txt-zone', t.zone);
        el('txt-ship-opt1', t.shipOpt1); el('txt-ship-opt2', t.shipOpt2); el('txt-ship-opt3', t.shipOpt3);
        el('txt-pay-title', t.pay); el('txt-card', t.card); el('txt-exp', t.exp);
        el('txt-submit', t.btn); el('txt-summary-title', t.sumTitle); el('txt-subtotal', t.subTotal);
        el('txt-shipping', t.shipping); el('txt-total', t.grandTotal); el('txt-success-title', t.succTitle);
        el('txt-success-desc', t.succDesc); el('txt-return', t.returnStore); el('back-to-realm', t.backToRealm);

        subtotalCost = 0;
        if(summaryItems) {
            summaryItems.innerHTML = '';
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotalCost += itemTotal;
                
                const unitPriceBreakdown = item.quantity > 1 
                    ? `<span style="opacity: 0.6; font-size: 0.9em; margin-left: 4px;">(${item.price.toFixed(2)}€ ${t.unit})</span>` 
                    : ''; 
                
                summaryItems.innerHTML += `
                    <div class="summary-item">
                        <img src="${item.img}" class="summary-img" alt="${item.name}">
                        <div class="summary-details">
                            <div class="summary-name">${item.name}</div>
                            <div class="summary-qty">${t.qtyLabel}: ${item.quantity} ${unitPriceBreakdown}</div>
                        </div>
                        <div class="summary-price">${itemTotal.toFixed(2)}€</div>
                    </div>
                `;
            });
            updateTotals();
        }
    }

    function updateTotals() {
        if(document.getElementById('summary-subtotal')) document.getElementById('summary-subtotal').innerText = `${subtotalCost.toFixed(2)}€`;
        if(document.getElementById('summary-shipping')) document.getElementById('summary-shipping').innerText = shippingCost === 0 && chkZone.value === "" ? '--' : (shippingCost === 0 ? 'Gratis' : `+${shippingCost.toFixed(2)}€`);
        const final = subtotalCost + shippingCost;
        if(document.getElementById('summary-total')) document.getElementById('summary-total').innerText = `${final.toFixed(2)}€`;
        if(document.getElementById('chk-btn-total')) document.getElementById('chk-btn-total').innerText = `${final.toFixed(2)}€`;
    }

    updateLanguage(langs[currentLangIndex]);

    if(chkZone) {
        chkZone.addEventListener('change', (e) => {
            shippingCost = parseFloat(e.target.value);
            updateTotals();
        });
    }

    const chkCard = document.getElementById('chk-card');
    if(chkCard) {
        chkCard.addEventListener('input', e => {
            let val = e.target.value.replace(/\D/g, '');
            val = val.replace(/(.{4})/g, '$1 ').trim();
            e.target.value = val;
        });
    }

    const chkExp = document.getElementById('chk-exp');
    if(chkExp) {
        chkExp.addEventListener('input', e => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length > 2) val = val.substring(0, 2) + '/' + val.substring(2, 4);
            e.target.value = val;
        });
    }

    const chkCvv = document.getElementById('chk-cvv');
    if(chkCvv) {
        chkCvv.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    const checkoutForm = document.getElementById('checkout-form');
    if(checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const chkEmail = document.getElementById('chk-email');
            let formIsValid = true;
            
            const addrVal = chkAddress.value.trim();
            const hasNumbers = /\d/.test(addrVal);
            if (addrVal.length < 10 || !hasNumbers) {
                chkAddress.parentElement.classList.add('invalid');
                formIsValid = false;
            }

            const emailVal = chkEmail.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!emailRegex.test(emailVal)) {
                chkEmail.parentElement.classList.add('invalid');
                formIsValid = false;
            }

            const expVal = chkExp.value.trim();
            const expParts = expVal.split('/');
            if (expParts.length === 2) {
                const month = parseInt(expParts[0], 10);
                const year = parseInt("20" + expParts[1], 10); 
                const currentDate = new Date();
                const currentMonth = currentDate.getMonth() + 1; 
                const currentYear = currentDate.getFullYear();
                
                if (month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth)) {
                    chkExp.parentElement.classList.add('invalid');
                    formIsValid = false;
                }
            } else {
                chkExp.parentElement.classList.add('invalid');
                formIsValid = false;
            }

            if (!formIsValid) return;

            const submitBtn = document.getElementById('submit-checkout');
            submitBtn.innerText = "Invocando...";
            submitBtn.style.opacity = "0.7";
            
            setTimeout(() => {
                localStorage.removeItem('bakenekoCart');
                const successOverlay = document.getElementById('checkout-success');
                if(successOverlay) successOverlay.classList.add('active');
            }, 1500);
        });
    }

    if(chkAddress) chkAddress.addEventListener('input', () => chkAddress.parentElement.classList.remove('invalid'));
    const chkEmail = document.getElementById('chk-email');
    if(chkEmail) chkEmail.addEventListener('input', (e) => e.target.parentElement.classList.remove('invalid'));
    if(chkExp) chkExp.addEventListener('input', (e) => e.target.parentElement.classList.remove('invalid'));

    const backToRealm = document.getElementById('back-to-realm');
    if(backToRealm) {
        backToRealm.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    /* =========================================
       6. SISTEMA UNIVERSAL DEL CURSOR NEO-UKIYO-E
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

            const interactables = document.querySelectorAll('a, button, input, select');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });
        }
    }
});