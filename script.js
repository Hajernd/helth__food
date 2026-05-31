
// ===== Dark Mode =====
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        darkModeBtn.textContent = "☀️";
    }

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkModeBtn.textContent = "🌙";
        }
    });
}

// ===== فلترة المنتجات حسب السعر =====
function filterProducts(category) {
    const products = document.querySelectorAll(".product-item");

    products.forEach(function (product) {
        if (category === "all" || product.classList.contains(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// ===== البحث عن المنتج بالاسم =====
const searchInput = document.getElementById("searchProduct");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const searchValue = searchInput.value.toLowerCase();
        const products = document.querySelectorAll(".product-item");

        products.forEach(function (product) {
            const productName = product.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(searchValue)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

// ===== زر الرجوع للأعلى =====
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ===== رسالة عند إرسال نموذج التواصل =====
const contactForm = document.querySelector(".contact-form");
const successMessage = document.getElementById("successMessage");

if (contactForm && successMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        successMessage.style.display = "block";
        successMessage.textContent = "تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا.";
        contactForm.reset();
    });
}

// ===== زر المفضلة =====
const favoriteButtons = document.querySelectorAll(".add-to-favorites, .fav-btn");

favoriteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.classList.toggle("active");
        if (button.classList.contains("active")) {
            button.textContent = "♥ تمت الإضافة للمفضلة";
        } else {
            button.textContent = "♥ إضافة إلى المفضلة";
        }
    });
});

// ===== زر العربة =====
const cartButtons = document.querySelectorAll(".add-to-cart, .cart-btn");

cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("تمت إضافة المنتج إلى العربة بنجاح");
    });
});
