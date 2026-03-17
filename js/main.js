// Base de datos de productos (Simulada)
const products = [
    // --- LOS POSTRES (Wagashi) ---
    {
        id: 1,
        name: "Dorayaki",
        category: "postres",
        yokai: "Tanuki",
        price: 3.50,
        desc: "Dos bizcochos esponjosos de miel rellenos de pasta dulce de judía roja (anko).",
        myth: "El Tanuki es un espíritu del bosque famoso por su gran barriga y su amor por los festines. Este dulce redondo y reconfortante rinde homenaje a su apetito insaciable y su carácter jovial.",
        img: "assets/images/dorayaki-tanuki.jpg" 
    },
    {
        id: 2,
        name: "Mochi Daifuku",
        category: "postres",
        yokai: "Kitsune (Zorro)",
        price: 3.80,
        desc: "Suave pastel de arroz glutinoso espolvoreado, escondiendo un corazón dulce.",
        myth: "Se dice que el místico zorro Kitsune cambia de forma para engañar a los viajeros. Este mochi, suave y pálido por fuera, esconde una sorpresa en su interior, tan astuto y elegante como él.",
        img: "assets/images/mochi-kitsune.jpg"
    },
    {
        id: 3,
        name: "Dango Tricolor",
        category: "postres",
        yokai: "Bakeneko (Los 3 Gatos)",
        price: 3.00,
        desc: "Brocheta de tres bolitas dulces de masa de arroz: cerezo, vainilla y té verde.",
        myth: "Tres esferas perfectas que representan a tres pequeños gatos traviesos jugando en equilibrio sobre una rama durante el festival de la primavera (Hanami).",
        img: "assets/images/dango-bakeneko.jpg"
    },
    {
        id: 4,
        name: "Kuzumochi",
        category: "postres",
        yokai: "Kappa",
        price: 4.50,
        desc: "Cubos translúcidos de almidón de Kuzu, servidos con polvo de soja y miel negra.",
        myth: "Fresco, acuoso y transparente como el río donde habita el misterioso Kappa. Un postre que se desliza en el paladar, refrescante y profundamente arraigado a la naturaleza.",
        img: "assets/images/kuzumochi-kappa.jpg"
    },
    {
        id: 5,
        name: "Yokan Nocturno",
        category: "postres",
        yokai: "Umibozu",
        price: 4.20,
        desc: "Bloque denso y elegante de gelatina oscura de agar-agar con castaña dorada.",
        myth: "Oscuro, denso y profundo como el océano donde emerge el gigante Umibozu. Un sabor intenso y adulto para quienes no temen mirar hacia el abismo dulce.",
        img: "assets/images/yokan-umibozu.jpg"
    },
    {
        id: 6,
        name: "Nerikiri de Camelia",
        category: "postres",
        yokai: "Yuki-Onna",
        price: 5.50,
        desc: "Arte comestible. Pasta de judía blanca esculpida a mano con forma de flor estacional.",
        myth: "Tan bello, pálido y delicado como la Mujer de las Nieves (Yuki-Onna). Un postre que captura una belleza fría, elegante y efímera que se deshace al probarlo.",
        img: "assets/images/nerikiri-yukionna.jpg"
    },

    // --- LOS VINOS (Maridaje) ---
    {
        id: 7,
        name: "Vino Tinto 'Sangre de Oni'",
        category: "vinos",
        yokai: "Shuten-Dōji (Rey Demonio)",
        price: 18.00,
        desc: "Vino tinto roble, robusto e intenso, con notas de frutos rojos oscuros, ciruela y especias.",
        myth: "Shuten-Dōji, el rey de los Oni (demonios), era temido por su fuerza y su sed insaciable de vino. Esta botella de tinto captura su intensidad: un trago cálido y poderoso que despierta el espíritu nocturno.",
        img: "assets/images/vino-tinto-oni.jpg"
    },
    {
        id: 8,
        name: "Vino Blanco 'Lágrimas de Ningyo'",
        category: "vinos",
        yokai: "Ningyo (Sirena Japonesa)",
        price: 16.50,
        desc: "Vino blanco joven y afrutado, con destellos cítricos, notas florales y una acidez refrescante.",
        myth: "Las leyendas cuentan que beber de las lágrimas de una Ningyo concede la juventud eterna. Este blanco cristalino y puro es perfecto para limpiar el paladar, aportando una frescura mítica e inolvidable.",
        img: "assets/images/vino-blanco-ningyo.jpg"
    },
    {
        id: 9,
        name: "Umeshu 'El Sueño del Kodama'",
        category: "vinos",
        yokai: "Kodama (Espíritu del Bosque)",
        price: 22.00,
        desc: "Licor de ciruela japonesa (Umeshu), dulce, denso y macerado pacientemente con notas amaderadas.",
        myth: "Los Kodama son los guardianes de los árboles más antiguos. Este vino de ciruela encierra la calma y la dulzura de un bosque centenario. El maridaje perfecto para acompañar la suavidad de un Mochi.",
        img: "assets/images/vino-umeshu-kodama.jpg"
    }
];

// --- FUNCIONES ---

const productContainer = document.getElementById('product-container');
const modal = document.getElementById('product-modal');

// 1. Renderizar Productos
function renderProducts(filter = 'all') {
    productContainer.innerHTML = ''; // Limpiar contenedor
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        // Al hacer click, abrimos el modal pasando el ID del producto
        card.onclick = () => openModal(product.id);

        card.innerHTML = `
            <div class="card-img" style="background-image: url('${product.img}');">
                <span class="tag">${product.yokai}</span>
            </div>
            <div class="card-info">
                <span class="yokai-name">Espíritu: ${product.yokai}</span>
                <h3>${product.name}</h3>
                <p class="price">${product.price.toFixed(2)}€</p>
            </div>
        `;
        productContainer.appendChild(card);
    });
}

// 2. Filtrar Productos (Tabs)
function filterProducts(category) {
    // Actualizar estilo de botones
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Renderizar de nuevo
    renderProducts(category);
}

// 3. Lógica del Modal
function openModal(id) {
    const product = products.find(p => p.id === id);
    
    // Rellenar datos en el HTML del modal
    document.getElementById('modal-img').style.backgroundImage = `url('${product.img}')`;
    document.getElementById('modal-yokai').innerText = product.yokai;
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-desc').innerText = product.desc;
    document.getElementById('modal-myth').innerText = product.myth;
    document.getElementById('modal-price').innerText = `${product.price.toFixed(2)}€`;
    
    // Mostrar modal
    modal.style.display = 'flex';
}

// Cerrar Modal
document.querySelector('.close-btn').onclick = () => {
    modal.style.display = 'none';
}

// Cerrar si se hace click fuera del contenido
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Inicializar la web cargando todos los productos
renderProducts();

// --- SCROLL REVEAL ANIMATION ---
// 1. Configurar el Observador
const observerOptions = {
    root: null, // viewport
    threshold: 0.15, // Se activa cuando el 15% del elemento es visible
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cuando el elemento entra en pantalla, añadimos la clase 'active'
            entry.target.classList.add('active');
            // Dejamos de observar (para que no se anime otra vez al subir)
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// 2. Seleccionar todos los elementos con la clase .reveal
document.querySelectorAll('.reveal').forEach((section) => {
    observer.observe(section);
});

// --- EFECTO PARALLAX SUAVE EN NAVEGACIÓN ---
// Esto hace que al hacer click en "Menú", el scroll sea suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- LÓGICA DEL ORÁCULO (Gamificación) ---
const spinBtn = document.getElementById('spin-btn');
const runesContainer = document.getElementById('runes-container');

spinBtn.addEventListener('click', () => {
    // 1. Desactivar el botón para que no hagan doble click
    spinBtn.disabled = true;
    spinBtn.innerText = "Los espíritus deciden...";
    
    // 2. Activar la animación de las letras japonesas
    runesContainer.classList.add('spinning');

    // 3. Crear el suspense (esperamos 2 segundos)
    setTimeout(() => {
        // Elegir un postre aleatorio del array 'products'
        const randomElement = products[Math.floor(Math.random() * products.length)];
        
        // Detener animación y resetear botón
        runesContainer.classList.remove('spinning');
        spinBtn.disabled = false;
        spinBtn.innerText = "Volver a Consultar";

        // Abrir el modal que ya tienes programado con el producto ganador
        openModal(randomElement.id);
        
    }, 2000); // 2000 milisegundos = 2 segundos de intriga
});