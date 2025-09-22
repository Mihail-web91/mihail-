
const translations = {
  de: {
    nav_home: "Startseite",
    nav_about: "Über uns",
    nav_services: "Leistungen",
    nav_projects: "Projekte",
    nav_careers: "Karriere",
    nav_contact: "Kontakt",
    nav_impressum: "Impressum",
    nav_privacy: "Datenschutz",
    welcome: "Willkommen bei Mihail Iordachescu Bauunternehmen",
    description: "Wir bieten hochwertige Bauleistungen in Berlin: Fliesenarbeiten, Trockenbau, Malerarbeiten und mehr.",
    contact_btn: "Kontakt aufnehmen",
    about_title: "Über uns",
    about_text: "Unsere Firma bietet seit Jahren Bauleistungen in Berlin. Qualität, Zuverlässigkeit und faire Preise sind unsere Stärken.",
    services_title: "Unsere Leistungen",
    services_list: "Fliesenarbeiten, Trockenbau, Malerarbeiten, Renovierung, Sanierung",
    projects_title: "Unsere Projekte",
    projects_text: "Hier finden Sie eine Auswahl unserer bisherigen Bauprojekte in Berlin.",
    careers_title: "Karriere",
    careers_text: "Werden Sie Teil unseres Teams! Wir suchen Fachkräfte im Bauwesen.",
    contact_title: "Kontakt",
    form_name: "Ihr Name",
    form_email: "Ihre Email / Telefon",
    form_message: "Ihre Nachricht",
    form_send: "Senden",
    impressum_title: "Impressum",
    impressum_text: "Mihail Iordachescu, Albert-Kuntz-Str. 54, 12627 Berlin. Tel: +49 1578 6433305, Email: mi.fliesenleger@gmail.com",
    privacy_title: "Datenschutzerklärung",
    privacy_text: "Wir behandeln Ihre Daten vertraulich und geben sie nicht an Dritte weiter."
  },
  en: {
    nav_home: "Home",
    nav_about: "About us",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_careers: "Careers",
    nav_contact: "Contact",
    nav_impressum: "Imprint",
    nav_privacy: "Privacy Policy",
    welcome: "Welcome to Mihail Iordachescu Construction",
    description: "We provide high-quality construction services in Berlin: tiling, drywall, painting, and more.",
    contact_btn: "Get in touch",
    about_title: "About us",
    about_text: "Our company has been providing construction services in Berlin for years. Quality, reliability, and fair prices are our strengths.",
    services_title: "Our Services",
    services_list: "Tiling, Drywall, Painting, Renovation, Restoration",
    projects_title: "Our Projects",
    projects_text: "Here you can find a selection of our construction projects in Berlin.",
    careers_title: "Careers",
    careers_text: "Join our team! We are looking for skilled workers in construction.",
    contact_title: "Contact",
    form_name: "Your Name",
    form_email: "Your Email / Phone",
    form_message: "Your Message",
    form_send: "Send",
    impressum_title: "Imprint",
    impressum_text: "Mihail Iordachescu, Albert-Kuntz-Str. 54, 12627 Berlin. Tel: +49 1578 6433305, Email: mi.fliesenleger@gmail.com",
    privacy_title: "Privacy Policy",
    privacy_text: "We treat your data confidentially and do not share it with third parties."
  },
  ru: {
    nav_home: "Главная",
    nav_about: "О нас",
    nav_services: "Услуги",
    nav_projects: "Проекты",
    nav_careers: "Карьера",
    nav_contact: "Контакты",
    nav_impressum: "Импрессум",
    nav_privacy: "Политика конфиденциальности",
    welcome: "Добро пожаловать в строительную компанию Mihail Iordachescu",
    description: "Мы предоставляем качественные строительные услуги в Берлине: плиточные работы, гипсокартон, малярные работы и многое другое.",
    contact_btn: "Связаться с нами",
    about_title: "О нас",
    about_text: "Наша компания много лет предоставляет строительные услуги в Берлине. Качество, надёжность и честные цены — наши сильные стороны.",
    services_title: "Наши услуги",
    services_list: "Плиточные работы, Гипсокартон, Малярные работы, Ремонт, Реконструкция",
    projects_title: "Наши проекты",
    projects_text: "Здесь представлены некоторые из наших строительных проектов в Берлине.",
    careers_title: "Карьера",
    careers_text: "Станьте частью нашей команды! Мы ищем специалистов в строительной сфере.",
    contact_title: "Контакты",
    form_name: "Ваше имя",
    form_email: "Ваш Email / Телефон",
    form_message: "Ваше сообщение",
    form_send: "Отправить",
    impressum_title: "Импрессум",
    impressum_text: "Mihail Iordachescu, Albert-Kuntz-Str. 54, 12627 Berlin. Тел: +49 1578 6433305, Email: mi.fliesenleger@gmail.com",
    privacy_title: "Политика конфиденциальности",
    privacy_text: "Мы относимся к вашим данным конфиденциально и не передаём их третьим лицам."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    let key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key];
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  let lang = localStorage.getItem("lang") || "de";
  setLanguage(lang);
  document.querySelectorAll(".lang-switch a").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      setLanguage(el.getAttribute("data-lang"));
    });
  });
});
