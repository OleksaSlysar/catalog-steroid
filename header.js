document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header").innerHTML = `
        <div class="header-container">
            <div class="logo-title">
                <img src="images/ElMuchacho.jpg" alt="Логотип" class="logo">
                <span class="site-title">Стероїдний каталог</span>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html">Головна</a></li>
                    <li><a href="about.html">Про мене</a></li>
                    <li><a href="portfolio.html">Портфоліо</a></li>
                    <li><a href="services.html">Послуги</a></li>
                    <li><a href="contacts.html">Контакти</a></li>
                </ul>
            </nav>
            <div class="burger">☰</div>
        </div>
    `;

    document.querySelector(".burger").addEventListener("click", function() {
        document.querySelector(".nav-links").classList.toggle("show");
    });
});
