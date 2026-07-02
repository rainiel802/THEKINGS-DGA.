const products = [
  {
    id: 1,
    name: "Abrigo Personalizado Ronny GTA",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "oferta", "premium", "negro"],
    badge: "-20%",
    image: "1.jpg"
  },
  {
    id: 2,
    name: "Abrigo Personalizado Papy Crish Buenas Vibras",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "2.jpg"
  },
  {
    id: 3,
    name: "Abrigo Personalizado RD Javi",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Top",
    image: "3.jpg"
  },
  {
    id: 4,
    name: "Abrigo personalizado Huan 62 Lento Version",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "Oferta",
    image: "4.jpg"
  },
  {
    id: 5,
    name: "Abrigo Personalizado Dowel King",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium", "negro"],
    badge: "Premium",
    image: "5.jpg"
  },
  {
    id: 6,
    name: "Abrigo Personalizado Luis Brown",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "Pack",
    image: "6.jpg"
  },
  {
    id: 7,
    name: "Abrigo Personalizado Treintisiete 30",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "7.jpg"
  },
  {
    id: 8,
    name: "Abrigo Personalizado Kiry Curu",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Hot",
    image: "8.jpg"
  },
  {
    id: 9,
    name: "Abrigo Personalizado Lil Naay Version Web",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "-15%",
    image: "9.jpg"
  },
  {
    id: 10,
    name: "Abrigo Personalizado Yk its Junaa",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Premium",
    image: "10.jpg"
  },
  {
    id: 11,
    name: "Abrigo Personalizado Lil Naay",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "negro", "oferta"],
    badge: "Básico",
    image: "11.jpg"
  },
  {
    id: 12,
    name: "Abrigo Personalizado Little Loove",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "12.jpg"
  },
  {
    id: 13,
    name: "Abrigo Personalizado Papy Crish",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "13.jpg"
  },
  {
    id: 14,
    name: "Abrigo Personalizado Luis brown",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Premium",
    image: "14.jpg"
  },
  {
    id: 15,
    name: "Abrigo Personalizado Ronny GTA",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "Oferta",
    image: "15.jpg"
  },
  {
    id: 16,
    name: "Abrigo Personalizado Tomy Shelby",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium", "negro"],
    badge: "Top",
    image: "16.jpg"
  },
  {
    id: 17,
    name: "Abrigo Personalizado Aldeen",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "17.jpg"
  },
  {
    id: 18,
    name: "Abrigo Personalizado Little D3mon",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "-15%",
    image: "18.jpg"
  },
  {
    id: 19,
    name: "Abrigo Personalizado Aventura",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Hot",
    image: "19.jpg"
  },
  {
    id: 20,
    name: "Abrigo Personalizado Ozuna",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "20.jpg"
  },
  {
    id: 21,
    name: "Abrigo Personalizado Scarface",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Premium",
    image: "21.jpg"
  },
  {
    id: 22,
    name: "Abrigo Personalizado Yamaha",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta", "negro"],
    badge: "Oferta",
    image: "22.jpg"
  },
  {
    id: 24,
    name: "Abrigo Personalizado Lil Naay",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Top",
    image: "24.jpg"
  },
  {
    id: 25,
    name: "Abrigo Personalizado Huan 62",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "-20%",
    image: "25.jpg"
  },
  {
    id: 26,
    name: "Abrigo Personalizado Amenazzy",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium", "negro"],
    badge: "Premium",
    image: "26.jpg"
  },
  {
    id: 27,
    name: "Abrigo Personalizado Omar Courtz",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "27.jpg"
  },
  {
    id: 28,
    name: "Abrigo Personalizado Hikigaya",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "Oferta",
    image: "28.jpg"
  },
  {
    id: 29,
    name: "Abrigo Personalizado Blessd",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Hot",
    image: "29.jpg"
  },
  {
    id: 30,
    name: "Abrigo Personalizado Hades 66",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "30.jpg"
  },
  {
    id: 31,
    name: "Abrigo Personalizado Bad Bunny",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Premium",
    image: "31.jpg"
  },
  {
    id: 32,
    name: "Abrigo Personalizado Hades 66",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta", "negro"],
    badge: "Oferta",
    image: "32.jpg"
  },
  {
    id: 33,
    name: "Abrigo Personalizado Satoru Gojo",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "33.jpg"
  },
  {
    id: 34,
    name: "Abrigo Personalizado Lil Naay",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Top",
    image: "34.jpg"
  },
  {
    id: 35,
    name: "Abrigo Personalizado Bad Bunny",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "-15%",
    image: "35.jpg"
  },
  {
    id: 36,
    name: "Abrigo Personalizado xxxTentacion",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium", "negro"],
    badge: "Premium",
    image: "36.jpg"
  },
  {
    id: 37,
    name: "Abrigo Personalizado Donaty",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "37.jpg"
  },
  {
    id: 38,
    name: "Abrigo Personalizado Milo J",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "Oferta",
    image: "38.jpg"
  },
  {
    id: 39,
    name: "Abrigo Personalizado Dowell King",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Hot",
    image: "39.jpg"
  },
  {
    id: 40,
    name: "Abrigo Personalizado Cat Noir",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "40.jpg"
  },
  {
    id: 41,
    name: "Abrigo Personalizado Ladibug",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Premium",
    image: "41.jpg"
  },
  {
    id: 42,
    name: "Abrigo Personalizado Beele",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta", "negro"],
    badge: "Oferta",
    image: "42.jpg"
  },
  {
    id: 43,
    name: "Abrigo Personalizado Papy Crish",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "43.jpg"
  },
  {
    id: 44,
    name: "Abrigo Personalizado Treintisiete 30",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Top",
    image: "44.jpg"
  },
  {
    id: 45,
    name: "Abrigo Personalizado Bilie Eilish",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "-20%",
    image: "45.jpg"
  },
  {
    id: 46,
    name: "Abrigo Personalizado Ronny GTA",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium", "negro"],
    badge: "Premium",
    image: "46.jpg"
  },
  {
    id: 47,
    name: "Abrigo Personalizado Anuel AA",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "47.jpg"
  },
  {
    id: 48,
    name: "Abrigo Personalizado Yk Its Junaa",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "Oferta",
    image: "48.jpg"
  },
  {
    id: 49,
    name: "Abrigo Personalizado Itachi",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Hot",
    image: "49.jpg"
  },
  {
    id: 50,
    name: "Abrigo Personalizado Huan 62",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "50.jpg"
  },
  {
    id: 51,
    name: "Abrigo Personalizado Jezzy el Chef",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Premium",
    image: "51.jpg"
  },
  {
    id: 52,
    name: "Abrigo Personalizado Meliodas",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta", "negro"],
    badge: "Oferta",
    image: "52.jpg"
  },
  {
    id: 53,
    name: "Abrigo Personalizado NLE Choppa",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "53.jpg"
  },
  {
    id: 54,
    name: "Abrigo Personalizado Canserbero",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Top",
    image: "54.jpg"
  },
  {
    id: 55,
    name: "Abrigo Personalizado Eladio Carrion",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "-15%",
    image: "55.jpg"
  },
  {
    id: 56,
    name: "Abrigo Personalizado Arcangel",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium", "negro"],
    badge: "Premium",
    image: "56.jpg"
  },
  {
    id: 57,
    name: "Abrigo Personalizado Venom",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "57.jpg"
  },
  {
    id: 58,
    name: "Abrigo Personalizado Okarun",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "Oferta",
    image: "58.jpg"
  },
  {
    id: 59,
    name: "Abrigo Personalizado Inosuke",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Hot",
    image: "59.jpg"
  },
  {
    id: 60,
    name: "Abrigo Personalizado Momo",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "60.jpg"
  },
  {
    id: 61,
    name: "Abrigo Personalizado Zenitsu",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Premium",
    image: "61.jpg"
  },
  {
    id: 62,
    name: "Abrigo Personalizado Spider Miles",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta", "negro"],
    badge: "Oferta",
    image: "62.jpg"
  },
  {
    id: 63,
    name: "Abrigo Personalizado Tanjiro",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "63.jpg"
  },
  {
    id: 64,
    name: "Abrigo Personalizado Tomioka",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Top",
    image: "64.jpg"
  },
  {
    id: 65,
    name: "Abrigo Personalizado Muichiro Tokito",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "-20%",
    image: "65.jpg"
  },
  {
    id: 66,
    name: "Abrigo Personalizado Muzan Kibutsuji",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium", "negro"],
    badge: "Premium",
    image: "66.jpg"
  },
  {
    id: 67,
    name: "Abrigo Personalizado Itachi",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "67.jpg"
  },
  {
    id: 68,
    name: "Abrigo Personalizado Sasuke",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "oferta"],
    badge: "Oferta",
    image: "68.jpg"
  },
  {
    id: 69,
    name: "Abrigo Personalizado Anuel AA",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Hot",
    image: "69.jpg"
  },
  {
    id: 70,
    name: "Abrigo Personalizado Naruto",
    price: 1900,
    oldPrice: 2200,
    category: ["todos", "nuevo"],
    badge: "Nuevo",
    image: "70.jpg"
  },
  {
    id: 71,
    name: "Abrigo Personalizado HIkigaya",
    price: 1900,
    oldPrice: 2300,
    category: ["todos", "premium"],
    badge: "Premium",
    image: "71.jpg"
  }
];
let cart = [];
let wishlist = [];
let currentFilter = "todos";

const productsGrid = document.getElementById("productsGrid");
const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const checkoutBtn = document.getElementById("checkoutBtn");
const filterButtons = document.querySelectorAll(".filter-btn");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const customForm = document.getElementById("customForm");

function money(value) {
  if (value === undefined || value === null || isNaN(value)) {
    return "";
  }

  return "RD$" + Number(value).toLocaleString("es-DO");
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function getProductSearchText(product) {
  return normalizeText(`
    ${product.id}
    ${product.name}
    ${product.price}
    ${product.oldPrice}
    ${product.badge}
    ${product.category.join(" ")}
    producto ${product.id}
    modelo ${product.id}
    abrigo ${product.id}
  `);
}

function getFilteredProducts() {
  let list = products;

  if (currentFilter !== "todos") {
    list = list.filter(product => product.category.includes(currentFilter));
  }

  const searchValue = searchInput ? normalizeText(searchInput.value) : "";

  if (searchValue !== "") {
    list = list.filter(product => {
      const searchableText = getProductSearchText(product);
      return searchableText.includes(searchValue);
    });
  }

  return list;
}

function updateResultsText(total) {
  const existingText = document.getElementById("resultsText");

  if (existingText) {
    const searchValue = searchInput ? searchInput.value.trim() : "";

    if (searchValue === "") {
      existingText.textContent = `Mostrando ${total} productos`;
    } else {
      existingText.textContent = `Resultados para "${searchValue}": ${total} producto(s)`;
    }
  }
}

function renderProducts(list) {
  if (!productsGrid) {
    console.error("No existe el contenedor con id='productsGrid' en el HTML.");
    return;
  }

  productsGrid.innerHTML = "";

  updateResultsText(list.length);

  if (!list || list.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-products">
        <h3>No se encontraron productos</h3>
        <p>Prueba buscando por nombre, número, categoría o precio.</p>
        <button class="clear-search-btn" id="clearSearchBtn">Limpiar búsqueda</button>
      </div>
    `;

    const clearSearchBtn = document.getElementById("clearSearchBtn");

    if (clearSearchBtn && searchInput) {
      clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        currentFilter = "todos";

        filterButtons.forEach(btn => {
          btn.classList.remove("active");

          if (btn.dataset.filter === "todos") {
            btn.classList.add("active");
          }
        });

        renderProducts(getFilteredProducts());
      });
    }

    return;
  }

  list.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const oldPriceHTML = product.oldPrice
      ? `<span class="old-price">${money(product.oldPrice)}</span>`
      : "";

    const wishlistActive = wishlist.includes(product.id) ? "active" : "";
    const wishlistIcon = wishlist.includes(product.id) ? "♥" : "♡";

    card.innerHTML = `
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='imagenes/default.jpg'">
        <span class="badge">${product.badge}</span>
        <button class="wish-btn ${wishlistActive}" data-id="${product.id}">${wishlistIcon}</button>
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>

        <div class="price-row">
          <span class="price">${money(product.price)}</span>
          ${oldPriceHTML}
        </div>

        <div class="stars">★★★★★ 4.9</div>

        <div class="card-actions">
          <button class="add-cart" data-id="${product.id}">Agregar</button>
          <button class="view-btn" data-id="${product.id}">Ver</button>
        </div>
      </div>
    `;

    productsGrid.appendChild(card);
  });

  activateProductButtons();
}

function refreshProducts() {
  renderProducts(getFilteredProducts());
}

function activateProductButtons() {
  const addButtons = document.querySelectorAll(".add-cart");
  const wishButtons = document.querySelectorAll(".wish-btn");
  const viewButtons = document.querySelectorAll(".view-btn");

  addButtons.forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      addToCart(id);
    });
  });

  wishButtons.forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      toggleWishlist(id, button);
    });
  });

  viewButtons.forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      viewProduct(id);
    });
  });
}

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) {
    console.error("Producto no encontrado:", id);
    return;
  }

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      ...product,
      qty: 1
    });
  }

  updateCart();

  if (cartSidebar) {
    cartSidebar.classList.add("active");
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  if (!cartItems || !cartTotal || !cartCount) {
    return;
  }

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Tu carrito está vacío.</p>";
  }

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" onerror="this.src='imagenes/default.jpg'">
      <div>
        <h4>${item.name}</h4>
        <p>${money(item.price)} x ${item.qty}</p>
      </div>
      <button class="remove-item" data-id="${item.id}">×</button>
    `;

    cartItems.appendChild(div);
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  cartTotal.textContent = money(total);
  cartCount.textContent = count;

  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", () => {
      removeFromCart(Number(button.dataset.id));
    });
  });
}

function toggleWishlist(id, button) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    button.classList.remove("active");
    button.textContent = "♡";
  } else {
    wishlist.push(id);
    button.classList.add("active");
    button.textContent = "♥";
  }
}

function viewProduct(id) {
  const product = products.find(item => item.id === id);

  if (!product) {
    alert("Producto no encontrado.");
    return;
  }

  const message =
    `Producto: ${product.name}%0A` +
    `Precio: ${money(product.price)}%0A` +
    `Hola, quiero más información de este abrigo personalizado.`;

  window.open(`https://wa.me/18095098441?text=${message}`, "_blank");
}

function checkout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  let message = "Hola, quiero comprar estos abrigos:%0A%0A";

  cart.forEach(item => {
    message += `• ${item.name} - Cantidad: ${item.qty} - ${money(item.price)}%0A`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  message += `%0ATotal: ${money(total)}%0A`;
  message += "Quiero confirmar disponibilidad y personalización.";

  window.open(`https://wa.me/18095098441?text=${message}`, "_blank");
}

function filterProducts(filter) {
  currentFilter = filter;
  refreshProducts();
}

if (filterButtons) {
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      filterProducts(button.dataset.filter);
    });
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    refreshProducts();
  });

  searchInput.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      searchInput.value = "";
      refreshProducts();

      if (searchPanel) {
        searchPanel.classList.remove("active");
      }
    }
  });
}

if (cartBtn && cartSidebar) {
  cartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("active");
  });
}

if (closeCart && cartSidebar) {
  closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
  });
}

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", checkout);
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });
}

if (closeMenu && mobileMenu) {
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
}

if (searchBtn && searchPanel && searchInput) {
  searchBtn.addEventListener("click", () => {
    searchPanel.classList.add("active");
    searchInput.focus();
  });
}

if (closeSearch && searchPanel) {
  closeSearch.addEventListener("click", () => {
    searchPanel.classList.remove("active");

    if (searchInput) {
      searchInput.value = "";
      refreshProducts();
    }
  });
}

if (customForm) {
  customForm.addEventListener("submit", event => {
    event.preventDefault();

    const customText = document.getElementById("customText");
    const customColor = document.getElementById("customColor");
    const customSize = document.getElementById("customSize");
    const customDesign = document.getElementById("customDesign");

    const text = customText ? customText.value : "";
    const color = customColor ? customColor.value : "";
    const size = customSize ? customSize.value : "";
    const design = customDesign ? customDesign.value : "";

    const message =
      `Hola, quiero personalizar un abrigo:%0A%0A` +
      `Texto: ${text}%0A` +
      `Color: ${color}%0A` +
      `Talla: ${size}%0A` +
      `Diseño: ${design}%0A%0A` +
      `Quiero saber precio y disponibilidad.`;

    window.open(`https://wa.me/18095098441?text=${message}`, "_blank");
  });
}

function startCountdown() {
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  if (!hoursElement || !minutesElement || !secondsElement) {
    return;
  }

  let totalSeconds = 8 * 60 * 60 + 30 * 60;

  setInterval(() => {
    if (totalSeconds <= 0) {
      totalSeconds = 8 * 60 * 60 + 30 * 60;
    }

    totalSeconds--;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  refreshProducts();
  updateCart();
  startCountdown();
});