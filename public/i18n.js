window.__translations = {
  en: {
    nav_experience:   "Experience",
    nav_projects:     "Projects",
    nav_about:        "About",
    nav_contact:      "Contact",
    hero_role:        "Frontend Developer",
    hero_location:    "Buenos Aires, AR",
    hero_available:   "Available",
    hero_tagline:     "I build efficient,",
    hero_tagline_em:  "memorable interfaces.",
    hero_index_1:     "01 / Experience",
    hero_index_2:     "02 / Projects",
    hero_index_3:     "03 / About",
    hero_index_4:     "04 / Certificates",
    sec_experience:   "Experience",
    sec_projects:     "Projects",
    sec_about:        "About",
    sec_certificates: "Certificates",
    exp_visit:        "Visit site →",
    proj_visit:       "Visit →",
    proj_code:        "Code →",
    about_p1:         "Frontend Developer with a background in technical support at <strong>Microsoft</strong> and <strong>Atos</strong>.",
    about_p2:         "I specialize in creating <strong>efficient and attractive user interfaces</strong> — translating ideas into clean, working web experiences.",
    about_p3:         "Based in Buenos Aires, Argentina. Currently open to freelance and full-time opportunities.",
    about_stack:      "Stack",
    cert_view:        "View certificate →",
    footer_rights:    "All rights reserved.",
  },
  es: {
    nav_experience:   "Experiencia",
    nav_projects:     "Proyectos",
    nav_about:        "Sobre mí",
    nav_contact:      "Contacto",
    hero_role:        "Desarrollador Frontend",
    hero_location:    "Buenos Aires, AR",
    hero_available:   "Disponible",
    hero_tagline:     "Construyo interfaces eficientes,",
    hero_tagline_em:  "y memorables.",
    hero_index_1:     "01 / Experiencia",
    hero_index_2:     "02 / Proyectos",
    hero_index_3:     "03 / Sobre mí",
    hero_index_4:     "04 / Certificados",
    sec_experience:   "Experiencia",
    sec_projects:     "Proyectos",
    sec_about:        "Sobre mí",
    sec_certificates: "Certificados",
    exp_visit:        "Ver sitio →",
    proj_visit:       "Ver →",
    proj_code:        "Código →",
    about_p1:         "Desarrollador Frontend con experiencia en soporte técnico en <strong>Microsoft</strong> y <strong>Atos</strong>.",
    about_p2:         "Me especializo en crear <strong>interfaces eficientes y atractivas</strong> — transformando ideas en experiencias web limpias y funcionales.",
    about_p3:         "Basado en Buenos Aires, Argentina. Abierto a oportunidades freelance y de tiempo completo.",
    about_stack:      "Stack",
    cert_view:        "Ver certificado →",
    footer_rights:    "Todos los derechos reservados.",
  }
};

function applyLang(lang) {
  var t = window.__translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.documentElement.setAttribute('lang', lang);
}

// Expose globally so Header script can trigger it directly
window.__applyLang = applyLang;

// Apply saved language once DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  var lang = localStorage.getItem('lang') || 'en';
  applyLang(lang);
});

// Also listen for runtime toggle events
document.addEventListener('lang-change', function(e) {
  applyLang(e.detail);
});
