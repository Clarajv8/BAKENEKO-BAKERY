// Base de datos de productos (Simulada)
const products = [
    // --- LOS CLÁSICOS ---
    {
        id: 1,
        name: "Mochi Daifuku",
        category: "clasicos",
        yokai: "Kitsune (Zorro)",
        price: 3.50,
        desc: "Pastel de arroz glutinoso relleno de anko suave y fresas frescas.",
        myth: "Se dice que el Kitsune cambia de forma para engañar a los viajeros. Este mochi suave esconde una sorpresa dulce en su interior, tan astuto como el zorro.",
        img: "assets/images/mochi-kitsune.jpg" // Asegúrate de tener esta imagen o cambiar la ruta
    },
    {
        id: 2,
        name: "Dorayaki",
        category: "clasicos",
        yokai: "Tanuki",
        price: 3.00,
        desc: "Dos bizcochos esponjosos de miel rellenos de pasta de judía roja.",
        myth: "El Tanuki, con su gran barriga, ama los festines. Este dulce redondo y lleno rinde homenaje a su apetito insaciable y su carácter jovial.",
        img: "assets/images/dorayaki-tanuki.jpg"
    },
    {
        id: 3,
        name: "Taiyaki",
        category: "clasicos",
        yokai: "Nekomata",
        price: 4.00,
        desc: "Gofre tradicional con forma de besugo, relleno de crema pastelera.",
        myth: "La ironía suprema: un gato monstruo de dos colas custodiando un pez. Cómelo antes de que el Nekomata decida que es suyo.",
        img: "assets/images/taiyaki-nekomata.jpg"
    },
    {
        id: 4,
        name: "Dango Tricolor",
        category: "clasicos",
        yokai: "Tsukumogami",
        price: 2.50,
        desc: "Brocheta de tres bolitas de masa de arroz: matcha, vainilla y sakura.",
        myth: "Como los objetos que cobran vida, estas tres esferas parecen pequeños espíritus jugando en equilibrio.",
        img: "assets/images/dango-tsuku.jpg"
    },
    {
        id: 5,
        name: "Matcha Kasutera",
        category: "clasicos",
        yokai: "Tengu",
        price: 4.50,
        desc: "Bizcocho Castella noble infundido con té matcha de Kioto.",
        myth: "El Tengu gobierna las montañas y los bosques. Este sabor terroso y elevado es digno de su abanico de plumas.",
        img: "assets/images/kasutera-tengu.jpg"
    },
    // --- LOS EXÓTICOS ---
    {
        id: 6,
        name: "Kuzumochi",
        category: "exoticos",
        yokai: "Kappa",
        price: 5.00,
        desc: "Pastel transparente de almidón de Kuzu, servido con kinako y miel negra.",
        myth: "Fresco y acuoso como el río donde vive el Kappa. Un postre que se desliza, refrescante y misterioso.",
        img: "assets/images/kuzumochi-kappa.jpg"
    },
    {
        id: 7,
        name: "Monaka",
        category: "exoticos",
        yokai: "Karakasa",
        price: 3.80,
        desc: "Obleas crujientes de arroz rellenas de mermelada de yuzu.",
        myth: "Como la sombrilla cíclope que se abre, estas obleas crujientes protegen un interior suave y sorprendente.",
        img: "assets/images/monaka-karakasa.jpg"
    },
    {
        id: 8,
        name: "Nerikiri",
        category: "exoticos",
        yokai: "Yuki-onna",
        price: 6.00,
        desc: "Arte comestible. Pasta de judía blanca esculpida a mano con formas estacionales.",
        myth: "Tan bello y pálido como la Mujer de las Nieves. Un postre que captura una belleza fría y efímera.",
        img: "assets/images/nerikiri-yuki.jpg"
    },
    {
        id: 9,
        name: "Yokan Nocturno",
        category: "exoticos",
        yokai: "Umibozu",
        price: 4.20,
        desc: "Bloque denso de gelatina de agar-agar y judía negra.",
        myth: "Oscuro y profundo como el océano del Umibozu. Un sabor intenso para los valientes que miran al abismo.",
        img: "assets/images/yokan-umibozu.jpg"
    },
    {
        id: 10,
        name: "Sakuramochi",
        category: "exoticos",
        yokai: "Zashiki-warashi",
        price: 3.50,
        desc: "Mochi rosa envuelto en hoja de cerezo encurtida (comestible).",
        myth: "El espíritu infantil que trae prosperidad al hogar. Un sabor floral que anuncia la primavera y la buena suerte.",
        img: "assets/images/sakura-zashiki.jpg"
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