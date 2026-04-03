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
            title: "Sellar el Pacto", sub: "Prepara tu ofrenda para recibir los elixires y wagashi.", ship: "1. Destino del Ritual", name: "Nombre", addr: "Dirección Completa (Calle, Número, Piso)", zone: "Selecciona tu tipo de envío...", 
            shipOpt1: "Envío Estándar (48-72h) - +5.00€", shipOpt2: "Envío Exprés Frío (24h) - +8.00€", shipOpt3: "Islas e Internacional - +15.00€",
            pay: "2. Pago Seguro", card: "Número de Tarjeta", exp: "Caducidad (MM/AA)", btn: "Confirmar Pago", sumTitle: "Resumen del Pedido", subTotal: "Subtotal", shipping: "Envío", grandTotal: "Total", succTitle: "Pacto Sellado", succDesc: "Los espíritus han aceptado tu ofrenda. Tu pedido está en camino." 
        },
        en: { 
            title: "Seal the Pact", sub: "Prepare your offering to receive the elixirs and wagashi.", ship: "1. Shipping Destination", name: "Full Name", addr: "Full Address (Street, Number, Floor)", zone: "Select shipping method...", 
            shipOpt1: "Standard Shipping (48-72h) - +5.00€", shipOpt2: "Cold Express Shipping (24h) - +8.00€", shipOpt3: "Islands & International - +15.00€",
            pay: "2. Secure Payment", card: "Card Number", exp: "Expiry (MM/YY)", btn: "Confirm Payment", sumTitle: "Order Summary", subTotal: "Subtotal", shipping: "Shipping", grandTotal: "Total", succTitle: "Pact Sealed", succDesc: "The spirits have accepted your offering. Your order is on its way." 
        },
        jp: { 
            title: "契約を結ぶ", sub: "お供え物を準備して、霊薬と和菓子を受け取ります。", ship: "1. お届け先", name: "氏名", addr: "完全な住所（通り、番地、階）", zone: "配送方法を選択...", 
            shipOpt1: "通常配送（48〜72時間）- +5.00€", shipOpt2: "クール便 / お急ぎ（24時間）- +8.00€", shipOpt3: "離島・国際配送 - +15.00€",
            pay: "2. 安全な支払い", card: "カード番号", exp: "有効期限 (MM/YY)", btn: "支払いを確認する", sumTitle: "注文の概要", subTotal: "小計", shipping: "送料", grandTotal: "合計", succTitle: "契約完了", succDesc: "精霊たちがあなたの供物を受け入れました。ご注文は発送されました。" 
        }
    };

    // Aplicar traducciones al HTML
    const t = texts[savedLang];
    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-subtitle').innerText = t.sub;
    document.getElementById('txt-ship-title').innerText = t.ship;
    document.getElementById('txt-name').innerText = t.name;
    document.getElementById('txt-address').innerText = t.addr;
    document.getElementById('txt-zone').innerText = t.zone;
    
    // Las 3 nuevas opciones de envío
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

    // Elementos del DOM
    const summaryItems = document.getElementById('summary-items');
    const chkZone = document.getElementById('chk-zone');
    const chkAddress = document.getElementById('chk-address');
    let subtotalCost = 0;
    let shippingCost = 0;

    // Renderizar carrito
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotalCost += itemTotal;
        summaryItems.innerHTML += `
            <div class="summary-item">
                <img src="${item.img}" class="summary-img" alt="${item.name}">
                <div class="summary-details">
                    <div class="summary-name">${item.name}</div>
                    <div class="summary-qty">Cant: ${item.quantity}</div>
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
        
        // Validar dirección
        const addrVal = chkAddress.value.trim();
        const hasNumbers = /\d/.test(addrVal);
        if (addrVal.length < 10 || !hasNumbers) {
            chkAddress.parentElement.classList.add('invalid');
            chkAddress.focus();
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

    chkAddress.addEventListener('input', () => chkAddress.parentElement.classList.remove('invalid'));

    document.getElementById('back-to-realm').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});