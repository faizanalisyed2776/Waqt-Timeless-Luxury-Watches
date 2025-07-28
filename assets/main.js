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

    // Initialize watch data
    const watches = [
        {
            id: 1,
            name: "Neutra Chrono Silver",
            price: 349.99,
            image: "assets/images/neutra-silver.jpg",
            gender: "men",
            strap: "metal",
            color: "silver",
            type: "chronograph",
            rating: 4,
            featured: true
        },
        {
            id: 2,
            name: "Townsman Automatic Black",
            price: 499.99,
            image: "assets/images/townsman-black.jpg",
            gender: "men",
            strap: "leather",
            color: "black",
            type: "automatic",
            rating: 5,
            featured: true
        },
        {
            id: 3,
            name: "Raquel Rose Gold",
            price: 429.99,
            image: "assets/images/raquel-rose.jpg",
            gender: "women",
            strap: "metal",
            color: "rose-gold",
            type: "chronograph",
            rating: 4,
            featured: true
        },
        {
            id: 4,
            name: "Fossil Gen 6 Black",
            price: 299.99,
            image: "assets/images/fossil-gen6-black.jpg",
            gender: "unisex",
            strap: "silicone",
            color: "black",
            type: "smartwatch",
            rating: 4,
            featured: true
        },
        {
            id: 5,
            name: "Heritage Automatic",
            price: 599.99,
            image: "assets/images/heritage-auto.jpg",
            gender: "men",
            strap: "leather",
            color: "brown",
            type: "automatic",
            rating: 5,
            featured: false
        },
        {
            id: 6,
            name: "Minimalist Slim",
            price: 249.99,
            image: "assets/images/minimalist-slim.jpg",
            gender: "women",
            strap: "metal",
            color: "silver",
            type: "quartz",
            rating: 4,
            featured: false
        },
        {
            id: 7,
            name: "Diver Pro 300m",
            price: 799.99,
            image: "assets/images/diver-pro.jpg",
            gender: "men",
            strap: "metal",
            color: "black",
            type: "diver",
            rating: 5,
            featured: false
        },
        {
            id: 8,
            name: "Elegance Pearl",
            price: 379.99,
            image: "assets/images/elegance-pearl.jpg",
            gender: "women",
            strap: "leather",
            color: "white",
            type: "quartz",
            rating: 4,
            featured: false
        }
    ];

    // Initialize accessories data
    const accessories = [
        {
            id: 101,
            name: "Leather Strap - Brown",
            price: 49.99,
            image: "assets/images/leather-strap-brown.jpg",
            type: "leather"
        },
        {
            id: 102,
            name: "Metal Bracelet - Silver",
            price: 59.99,
            image: "assets/images/metal-bracelet-silver.jpg",
            type: "metal"
        },
        {
            id: 103,
            name: "Silicone Band - Black",
            price: 29.99,
            image: "assets/images/silicone-band-black.jpg",
            type: "silicone"
        },
        {
            id: 104,
            name: "Quick Release Charger",
            price: 39.99,
            image: "assets/images/quick-charger.jpg",
            type: "chargers"
        },
        {
            id: 105,
            name: "Leather Strap - Black",
            price: 49.99,
            image: "assets/images/leather-strap-black.jpg",
            type: "leather"
        },
        {
            id: 106,
            name: "Metal Bracelet - Gold",
            price: 59.99,
            image: "assets/images/metal-bracelet-gold.jpg",
            type: "metal"
        }
    ];

    // Initialize Instagram posts
    const instagramPosts = [
        "assets/images/instagram-1.jpg",
        "assets/images/instagram-2.jpg",
        "assets/images/instagram-3.jpg",
        "assets/images/instagram-4.jpg",
        "assets/images/instagram-5.jpg",
        "assets/images/instagram-6.jpg"
    ];

    // Load watches into the finder section
    function loadWatches(filters = {}) {
        const watchesContainer = document.getElementById('watches-container');
        watchesContainer.innerHTML = '';
        
        let filteredWatches = [...watches];
        
        // Apply filters
        if (filters.gender && filters.gender !== 'all') {
            filteredWatches = filteredWatches.filter(watch => watch.gender === filters.gender);
        }
        
        if (filters.strap && filters.strap !== 'all') {
            filteredWatches = filteredWatches.filter(watch => watch.strap === filters.strap);
        }
        
        if (filters.color && filters.color !== 'all') {
            filteredWatches = filteredWatches.filter(watch => watch.color === filters.color);
        }
        
        if (filters.type && filters.type !== 'all') {
            filteredWatches = filteredWatches.filter(watch => watch.type === filters.type);
        }
        
        // Display watches
        filteredWatches.forEach(watch => {
            const watchCard = document.createElement('div');
            watchCard.className = 'watch-card';
            watchCard.innerHTML = `
                <div class="watch-image">
                    <img src="${watch.image}" alt="${watch.name}">
                    ${watch.featured ? '<span class="watch-badge">Featured</span>' : ''}
                    <div class="watch-actions">
                        <button class="quick-view" data-id="${watch.id}"><i class="fas fa-eye"></i></button>
                        <button class="add-to-wishlist" data-id="${watch.id}"><i class="far fa-heart"></i></button>
                    </div>
                </div>
                <div class="watch-details">
                    <h3>${watch.name}</h3>
                    <div class="watch-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(watch.rating)}${'<i class="far fa-star"></i>'.repeat(5 - watch.rating)}
                    </div>
                    <div class="watch-price">$${watch.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${watch.id}">Add to Cart</button>
                </div>
            `;
            watchesContainer.appendChild(watchCard);
        });
        
        // Add event listeners to the new buttons
        addQuickViewListeners();
        addWishlistListeners();
        addToCartListeners();
    }

    // Load best sellers
    function loadBestSellers() {
        const carouselTrack = document.querySelector('.carousel-track');
        const bestSellers = watches.filter(watch => watch.rating >= 4).slice(0, 6);
        
        carouselTrack.innerHTML = '';
        
        bestSellers.forEach(watch => {
            const watchItem = document.createElement('div');
            watchItem.className = 'watch-card';
            watchItem.style.minWidth = '280px';
            watchItem.innerHTML = `
                <div class="watch-image">
                    <img src="${watch.image}" alt="${watch.name}">
                    <div class="watch-actions">
                        <button class="quick-view" data-id="${watch.id}"><i class="fas fa-eye"></i></button>
                        <button class="add-to-wishlist" data-id="${watch.id}"><i class="far fa-heart"></i></button>
                    </div>
                </div>
                <div class="watch-details">
                    <h3>${watch.name}</h3>
                    <div class="watch-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(watch.rating)}${'<i class="far fa-star"></i>'.repeat(5 - watch.rating)}
                    </div>
                    <div class="watch-price">$${watch.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${watch.id}">Add to Cart</button>
                </div>
            `;
            carouselTrack.appendChild(watchItem);
        });
        
        // Add event listeners to the new buttons
        addQuickViewListeners();
        addWishlistListeners();
        addToCartListeners();
        
        // Initialize carousel navigation
        initCarousel();
    }

    // Load accessories
    function loadAccessories(filter = 'all') {
        const accessoriesGrid = document.querySelector('.accessories-grid');
        accessoriesGrid.innerHTML = '';
        
        const filteredAccessories = filter === 'all' 
            ? accessories 
            : accessories.filter(acc => acc.type === filter);
        
        filteredAccessories.forEach(acc => {
            const accCard = document.createElement('div');
            accCard.className = 'accessory-card';
            accCard.innerHTML = `
                <div class="accessory-image">
                    <img src="${acc.image}" alt="${acc.name}">
                </div>
                <div class="accessory-details">
                    <h3>${acc.name}</h3>
                    <div class="accessory-price">$${acc.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${acc.id}">Add to Cart</button>
                </div>
            `;
            accessoriesGrid.appendChild(accCard);
        });
        
        // Add event listeners to the new buttons
        addToCartListeners();
    }

    // Load Instagram posts
    function loadInstagramPosts() {
        const instagramGrid = document.querySelector('.instagram-grid');
        instagramGrid.innerHTML = '';
        
        instagramPosts.forEach(post => {
            const instaItem = document.createElement('div');
            instaItem.className = 'instagram-item';
            instaItem.innerHTML = `<img src="${post}" alt="Instagram post">`;
            instagramGrid.appendChild(instaItem);
        });
    }

    // Initialize carousel navigation
    function initCarousel() {
        const track = document.querySelector('.carousel-track');
        const prevBtn = document.querySelector('.carousel-btn.prev');
        const nextBtn = document.querySelector('.carousel-btn.next');
        const cardWidth = 300; // Approximate width of each card including margin
        
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });
    }

    // Add quick view event listeners
    function addQuickViewListeners() {
        document.querySelectorAll('.quick-view').forEach(btn => {
            btn.addEventListener('click', function() {
                const watchId = parseInt(this.getAttribute('data-id'));
                openQuickView(watchId);
            });
        });
    }

    // Add wishlist event listeners
    function addWishlistListeners() {
        document.querySelectorAll('.add-to-wishlist').forEach(btn => {
            btn.addEventListener('click', function() {
                const watchId = parseInt(this.getAttribute('data-id'));
                toggleWishlist(watchId, this);
            });
        });
    }

    // Add to cart event listeners
    function addToCartListeners() {
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }

    // Open quick view modal
    function openQuickView(watchId) {
        const watch = watches.find(w => w.id === watchId) || accessories.find(a => a.id === watchId);
        if (!watch) return;
        
        const quickViewContent = document.querySelector('.quickview-product');
        quickViewContent.innerHTML = `
            <div class="quickview-image">
                <img src="${watch.image}" alt="${watch.name}">
            </div>
            <div class="quickview-details">
                <h2>${watch.name}</h2>
                <div class="quickview-price">$${watch.price.toFixed(2)}</div>
                ${watch.rating ? `
                <div class="quickview-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(watch.rating)}${'<i class="far fa-star"></i>'.repeat(5 - watch.rating)}
                </div>
                ` : ''}
                <p class="quickview-description">${watch.description || 'A premium timepiece combining elegant design with precision engineering.'}</p>
                
                ${watch.type === 'smartwatch' ? `
                <div class="quickview-options">
                    <div class="option-group">
                        <label for="quickview-size">Size</label>
                        <select id="quickview-size">
                            <option>Small (38mm)</option>
                            <option selected>Medium (42mm)</option>
                            <option>Large (46mm)</option>
                        </select>
                    </div>
                    <div class="option-group">
                        <label for="quickview-color">Color</label>
                        <select id="quickview-color">
                            <option>Black</option>
                            <option>Silver</option>
                            <option>Rose Gold</option>
                        </select>
                    </div>
                </div>
                ` : ''}
                
                <div class="quickview-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${watch.id}">Add to Cart</button>
                    <button class="btn btn-outline add-to-wishlist" data-id="${watch.id}">
                        <i class="far fa-heart"></i> Wishlist
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners to the modal buttons
        document.querySelector('.quickview-product .add-to-cart').addEventListener('click', function() {
            addToCart(watchId);
            closeQuickView();
        });
        
        document.querySelector('.quickview-product .add-to-wishlist').addEventListener('click', function() {
            toggleWishlist(watchId);
            closeQuickView();
        });
        
        // Show the modal
        document.querySelector('.quickview-modal').classList.add('active');
        document.querySelector('.quickview-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close quick view modal
    function closeQuickView() {
        document.querySelector('.quickview-modal').classList.remove('active');
        document.querySelector('.quickview-overlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    // Toggle wishlist item
    function toggleWishlist(watchId, button = null) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const index = wishlist.indexOf(watchId);
        
        if (index === -1) {
            wishlist.push(watchId);
            if (button) {
                button.innerHTML = '<i class="fas fa-heart"></i>';
                button.classList.add('active');
            }
            showNotification('Added to wishlist');
        } else {
            wishlist.splice(index, 1);
            if (button) {
                button.innerHTML = '<i class="far fa-heart"></i>';
                button.classList.remove('active');
            }
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

    // Add to cart function
    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = watches.find(w => w.id === productId) || accessories.find(a => a.id === productId);
        
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

    // Initialize filter functionality
    function initFilters() {
        const filterBtn = document.querySelector('.filter-btn');
        
        filterBtn.addEventListener('click', function() {
            const filters = {
                gender: document.getElementById('gender').value,
                strap: document.getElementById('strap').value,
                color: document.getElementById('color').value,
                type: document.getElementById('type').value
            };
            
            loadWatches(filters);
        });
    }

    // Initialize accessory filter tabs
    function initAccessoryFilters() {
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                loadAccessories(filter);
            });
        });
    }

    // Initialize cart sidebar
    function initCartSidebar() {
        const cartBtn = document.querySelector('.cart-btn');
        const closeCartBtn = document.querySelector('.close-cart');
        const cartOverlay = document.querySelector('.cart-overlay');
        const continueShoppingBtn = document.querySelector('.continue-shopping');
        
        cartBtn.addEventListener('click', openCart);
        closeCartBtn.addEventListener('click', closeCart);
        cartOverlay.addEventListener('click', closeCart);
        continueShoppingBtn.addEventListener('click', closeCart);
    }

    // Open cart sidebar
    function openCart() {
        updateCartDisplay();
        document.querySelector('.cart-sidebar').classList.add('active');
        document.querySelector('.cart-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close cart sidebar
    function closeCart() {
        document.querySelector('.cart-sidebar').classList.remove('active');
        document.querySelector('.cart-overlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    // Update cart display
    function updateCartDisplay() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartTotal = document.querySelector('.total-amount');
        
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '$0.00';
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            total += item.price * item.quantity;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="decrease-qty" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase-qty" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        cartTotal.textContent = `$${total.toFixed(2)}`;
        
        // Add event listeners to quantity controls
        document.querySelectorAll('.increase-qty').forEach(btn => {
            btn.addEventListener('click', function() {
                updateCartItemQuantity(parseInt(this.getAttribute('data-id')), 1);
            });
        });
        
        document.querySelectorAll('.decrease-qty').forEach(btn => {
            btn.addEventListener('click', function() {
                updateCartItemQuantity(parseInt(this.getAttribute('data-id')), -1);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                removeCartItem(parseInt(this.getAttribute('data-id')));
            });
        });
        
        // Add checkout button event
        document.querySelector('.checkout-btn').addEventListener('click', function() {
            alert('Proceeding to checkout! This would redirect to a checkout page in a real implementation.');
            closeCart();
        });
    }

    // Update cart item quantity
    function updateCartItemQuantity(productId, change) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = cart.findIndex(item => item.id === productId);
        
        if (itemIndex === -1) return;
        
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
            showNotification('Item removed from cart');
        } else {
            showNotification('Cart updated');
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
    }

    // Remove cart item
    function removeCartItem(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
        showNotification('Item removed from cart');
    }

    // Initialize quick view modal
    function initQuickViewModal() {
        const closeQuickViewBtn = document.querySelector('.close-quickview');
        const quickViewOverlay = document.querySelector('.quickview-overlay');
        
        closeQuickViewBtn.addEventListener('click', closeQuickView);
        quickViewOverlay.addEventListener('click', closeQuickView);
    }

    // Initialize all functionality
    function init() {
        loadWatches();
        loadBestSellers();
        loadAccessories();
        loadInstagramPosts();
        initFilters();
        initAccessoryFilters();
        initCartSidebar();
        initQuickViewModal();
        updateCartCount();
        updateWishlistButton();
    }

    init();
});