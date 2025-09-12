document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Product Data
    const products = {
        flashSale: [
            {
                id: 101,
                name: "Neutra Chrono Silver (Limited)",
                price: 279.99,
                originalPrice: 349.99,
                image: "assets/images/watches/neutra-silver.jpg",
                category: "men",
                type: "chronograph",
                rating: 4,
                isSale: true
            },
            {
                id: 102,
                name: "Townsman Automatic Black",
                price: 399.99,
                originalPrice: 499.99,
                image: "assets/images/watches/townsman-black.jpg",
                category: "men",
                type: "automatic",
                rating: 5,
                isSale: true
            },
            {
                id: 103,
                name: "Raquel Rose Gold",
                price: 343.99,
                originalPrice: 429.99,
                image: "assets/images/watches/raquel-rose.jpg",
                category: "women",
                type: "chronograph",
                rating: 4,
                isSale: true
            },
            {
                id: 104,
                name: "Fossil Gen 6 Black",
                price: 239.99,
                originalPrice: 299.99,
                image: "assets/images/watches/fossil-gen6-black.jpg",
                category: "unisex",
                type: "smartwatch",
                rating: 4,
                isSale: true
            },
            {
                id: 105,
                name: "Minimalist Slim Silver",
                price: 199.99,
                originalPrice: 249.99,
                image: "assets/images/watches/minimalist-slim.jpg",
                category: "women",
                type: "quartz",
                rating: 4,
                isSale: true
            }
        ],
        men: [
            {
                id: 201,
                name: "Heritage Automatic",
                price: 599.99,
                image: "assets/images/watches/heritage-auto.jpg",
                category: "men",
                type: "automatic",
                rating: 5
            },
            {
                id: 202,
                name: "Diver Pro 300m",
                price: 799.99,
                image: "assets/images/watches/diver-pro.jpg",
                category: "men",
                type: "diver",
                rating: 5
            },
            {
                id: 203,
                name: "Leather Strap - Brown",
                price: 49.99,
                image: "assets/images/accessories/leather-strap-brown.jpg",
                category: "men",
                type: "strap"
            },
            {
                id: 204,
                name: "Metal Bracelet - Silver",
                price: 59.99,
                image: "assets/images/accessories/metal-bracelet-silver.jpg",
                category: "men",
                type: "strap"
            },
            {
                id: 205,
                name: "Silicone Band - Black",
                price: 29.99,
                image: "assets/images/accessories/silicone-band-black.jpg",
                category: "men",
                type: "strap"
            },
            {
                id: 206,
                name: "Chronograph Blue",
                price: 349.99,
                image: "assets/images/watches/chrono-blue.jpg",
                category: "men",
                type: "chronograph",
                rating: 4
            },
            {
                id: 207,
                name: "Pilot's Watch",
                price: 459.99,
                image: "assets/images/watches/pilot-watch.jpg",
                category: "men",
                type: "aviation",
                rating: 4
            },
            {
                id: 208,
                name: "Leather Strap - Black",
                price: 49.99,
                image: "assets/images/accessories/leather-strap-black.jpg",
                category: "men",
                type: "strap"
            }
        ],
        women: [
            {
                id: 301,
                name: "Elegance Pearl",
                price: 379.99,
                image: "assets/images/watches/elegance-pearl.jpg",
                category: "women",
                type: "quartz",
                rating: 4
            },
            {
                id: 302,
                name: "Rose Gold Mesh",
                price: 429.99,
                image: "assets/images/watches/rose-gold-mesh.jpg",
                category: "women",
                type: "quartz",
                rating: 5
            },
            {
                id: 303,
                name: "Dress Watch with Crystals",
                price: 499.99,
                image: "assets/images/watches/dress-crystals.jpg",
                category: "women",
                type: "quartz",
                rating: 4
            },
            {
                id: 304,
                name: "Smart Hybrid Strap",
                price: 39.99,
                image: "assets/images/accessories/smart-hybrid-strap.jpg",
                category: "women",
                type: "strap"
            },
            {
                id: 305,
                name: "Minimalist Gold",
                price: 349.99,
                image: "assets/images/watches/minimalist-gold.jpg",
                category: "women",
                type: "quartz",
                rating: 4
            },
            {
                id: 306,
                name: "Diamond Accent Watch",
                price: 599.99,
                image: "assets/images/watches/diamond-accent.jpg",
                category: "women",
                type: "quartz",
                rating: 5
            },
            {
                id: 307,
                name: "Rose Gold Bracelet",
                price: 59.99,
                image: "assets/images/accessories/rose-gold-bracelet.jpg",
                category: "women",
                type: "strap"
            },
            {
                id: 308,
                name: "Pearl Strap",
                price: 49.99,
                image: "assets/images/accessories/pearl-strap.jpg",
                category: "women",
                type: "strap"
            }
        ],
        accessories: [
            {
                id: 401,
                name: "Classic Leather Belt - Brown",
                price: 59.99,
                image: "assets/images/accessories/leather-belt-brown.jpg",
                category: "accessories",
                type: "belts"
            },
            {
                id: 402,
                name: "Braided Leather Belt - Black",
                price: 49.99,
                image: "assets/images/accessories/braided-belt-black.jpg",
                category: "accessories",
                type: "belts"
            },
            {
                id: 403,
                name: "Premium Loafers - Brown",
                price: 129.99,
                image: "assets/images/accessories/loafers-brown.jpg",
                category: "accessories",
                type: "shoes"
            },
            {
                id: 404,
                name: "Smart Casual Shoes - Black",
                price: 109.99,
                image: "assets/images/accessories/casual-shoes-black.jpg",
                category: "accessories",
                type: "shoes"
            },
            {
                id: 405,
                name: "Stainless Steel Ring",
                price: 39.99,
                image: "assets/images/accessories/steel-ring.jpg",
                category: "accessories",
                type: "rings"
            },
            {
                id: 406,
                name: "Fashion Ring Set",
                price: 59.99,
                image: "assets/images/accessories/ring-set.jpg",
                category: "accessories",
                type: "rings"
            },
            {
                id: 407,
                name: "Reversible Belt - Black/Brown",
                price: 69.99,
                image: "assets/images/accessories/reversible-belt.jpg",
                category: "accessories",
                type: "belts"
            },
            {
                id: 408,
                name: "Formal Dress Shoes",
                price: 149.99,
                image: "assets/images/accessories/dress-shoes.jpg",
                category: "accessories",
                type: "shoes"
            },
            {
                id: 409,
                name: "Minimalist Band Ring",
                price: 29.99,
                image: "assets/images/accessories/band-ring.jpg",
                category: "accessories",
                type: "rings"
            },
            {
                id: 410,
                name: "Casual Sneakers - White",
                price: 89.99,
                image: "assets/images/accessories/sneakers-white.jpg",
                category: "accessories",
                type: "shoes"
            },
            {
                id: 411,
                name: "Statement Ring - Gold",
                price: 49.99,
                image: "assets/images/accessories/statement-ring.jpg",
                category: "accessories",
                type: "rings"
            }
        ]
    };

    // Load products into sections
    function loadProducts() {
        loadFlashSaleProducts();
        loadMensProducts();
        loadWomensProducts();
        loadAccessories();
    }

    function loadFlashSaleProducts() {
        const container = document.querySelector('.flash-sale-section .products-grid');
        container.innerHTML = '';
        
        products.flashSale.forEach(product => {
            const isLiked = checkIfLiked(product.id);
            const productCard = createProductCard(product, true, isLiked);
            container.appendChild(productCard);
        });
    }

    function loadMensProducts() {
        const container = document.querySelector('.men-section .products-grid');
        container.innerHTML = '';
        
        products.men.forEach(product => {
            const isLiked = checkIfLiked(product.id);
            const productCard = createProductCard(product, false, isLiked);
            container.appendChild(productCard);
        });
    }

    function loadWomensProducts() {
        const container = document.querySelector('.women-section .products-grid');
        container.innerHTML = '';
        
        products.women.forEach(product => {
            const isLiked = checkIfLiked(product.id);
            const productCard = createProductCard(product, false, isLiked);
            container.appendChild(productCard);
        });
    }

    function loadAccessories(filter = 'all') {
        const container = document.querySelector('.accessories-section .products-grid');
        container.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products.accessories 
            : products.accessories.filter(acc => acc.type === filter);
        
        filteredProducts.forEach(product => {
            const isLiked = checkIfLiked(product.id);
            const productCard = createProductCard(product, false, isLiked);
            container.appendChild(productCard);
        });
    }

    function createProductCard(product, isSale = false, isLiked = false) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let badgeHTML = '';
        if (isSale || product.isSale) {
            badgeHTML = '<span class="product-badge">SALE</span>';
        }
        
        const likeClass = isLiked ? 'fas fa-heart active' : 'far fa-heart';
        
        productCard.innerHTML = `
            <div class="product-image">
                ${badgeHTML}
                <button class="like-btn ${isLiked ? 'active' : ''}" data-id="${product.id}">
                    <i class="${likeClass}"></i>
                </button>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="quick-view" data-id="${product.id}">Quick View</button>
                </div>
            </div>
        `;
        
        return productCard;
    }

    // Check if product is liked
    function checkIfLiked(productId) {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        return wishlist.includes(productId);
    }

    // Initialize like buttons
    function initLikeButtons() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.like-btn')) {
                const likeBtn = e.target.closest('.like-btn');
                const productId = parseInt(likeBtn.getAttribute('data-id'));
                toggleLike(productId, likeBtn);
            }
        });
    }

    // Toggle like status
    function toggleLike(productId, button) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const index = wishlist.indexOf(productId);
        
        if (index === -1) {
            wishlist.push(productId);
            button.innerHTML = '<i class="fas fa-heart"></i>';
            button.classList.add('active');
            showNotification('Added to wishlist');
        } else {
            wishlist.splice(index, 1);
            button.innerHTML = '<i class="far fa-heart"></i>';
            button.classList.remove('active');
            showNotification('Removed from wishlist');
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistButton();
    }

    // Update wishlist button in header
    function updateWishlistButton() {
        const wishlistBtn = document.querySelector('.wishlist-btn');
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        if (wishlist.length > 0) {
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
            wishlistBtn.classList.add('active');
        } else {
            wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
            wishlistBtn.classList.remove('active');
        }
    }

    // Initialize cart functionality
    function initCart() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.add-to-cart')) {
                const addToCartBtn = e.target.closest('.add-to-cart');
                const productId = parseInt(addToCartBtn.getAttribute('data-id'));
                addToCart(productId);
            }
        });
    }

    // Add to cart function
    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const allProducts = [...products.flashSale, ...products.men, ...products.women, ...products.accessories];
        const product = allProducts.find(p => p.id === productId);
        
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`${product.name} added to cart`);
    }

    // Update cart count in header
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        document.querySelector('.cart-count').textContent = totalItems;
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification fade-in';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Initialize filter tabs
    function initFilterTabs() {
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                loadAccessories(filter);
            });
        });
    }

    // Initialize search functionality
    function initSearch() {
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const searchTerm = document.querySelector('.search-input').value.toLowerCase();
        if (!searchTerm.trim()) return;
        
        const allProducts = [...products.flashSale, ...products.men, ...products.women, ...products.accessories];
        const results = allProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.type.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        
        if (results.length > 0) {
            // In a real implementation, you would show search results
            alert(`Found ${results.length} products matching "${searchTerm}"`);
        } else {
            alert(`No products found matching "${searchTerm}"`);
        }
    }

    // Initialize countdown timer
    function initCountdown() {
        let hours = 3;
        let minutes = 45;
        let seconds = 12;
        
        const countdown = setInterval(() => {
            seconds--;
            
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
            
            if (hours < 0) {
                clearInterval(countdown);
                return;
            }
            
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }, 1000);
    }

    // Initialize all functionality
    function init() {
        loadProducts();
        initLikeButtons();
        initCart();
        initFilterTabs();
        initSearch();
        initCountdown();
        updateCartCount();
        updateWishlistButton();
    }

    init();
});