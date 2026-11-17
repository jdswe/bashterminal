/* ==========================================================================
   bash.terminal — Aplicación de la Guía de Configuración
   Vanilla JavaScript, sin dependencias. Totalmente funcional offline.
   ========================================================================== */

(function () {
  "use strict";

  const GUIDE = window.GUIDE_CONTENT;
  const UI = window.GUIDE_UI;

  if (!GUIDE || !UI) {
    console.error("bash.terminal: Guide content not found.");
    return;
  }

  const SECTIONS = GUIDE.sections;
  const STEPS = SECTIONS.filter(function (s) { return s.isStep !== false; });
  const TOTAL = STEPS.length;
  const STORAGE_KEY = "bashguide.";

  /* ------------------------------------------------------------------------
     Estado de la aplicación
     ------------------------------------------------------------------------ */

  const state = {
    lang: "es",
    completed: new Set(),
    activeSection: "paso-1"
  };

  const codeRegistry = new Map();
  let codeCounter = 0;
  let toastTimer = null;
  let drawerOpen = false;

  /* ------------------------------------------------------------------------
     Elementos del DOM
     ------------------------------------------------------------------------ */

  const guideSectionsEl = document.getElementById("guide-sections");
  const tocNavEl = document.getElementById("toc-nav");
  const tocCountEl = document.getElementById("toc-count");
  const tocTitleEl = document.getElementById("toc-title");
  const tocToggleBtn = document.getElementById("toc-toggle");
  const tocToggleLabel = document.getElementById("toc-toggle-label");
  const sidebarEl = document.getElementById("guide-toc");
  const overlayEl = document.getElementById("drawer-overlay");
  const headerProgressFill = document.getElementById("header-progress-fill");
  const headerProgressText = document.getElementById("header-progress-text");
  const resetProgressBtn = document.getElementById("reset-progress-btn");

  const heroTitleEl = document.getElementById("guide-hero-title");
  const heroLeadEl = document.getElementById("guide-hero-lead");
  const heroCaptionEl = document.getElementById("guide-hero-caption");
  const brandBadgeEl = document.getElementById("brand-badge");

  const footerTaglineEl = document.getElementById("footer-tagline");
  const footerCopyrightEl = document.getElementById("footer-copyright");
  const backToTopLink = document.getElementById("back-to-top");

  const lightboxDialog = document.getElementById("lightbox-dialog");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxClose = document.getElementById("lightbox-close");

  const toastEl = document.getElementById("toast");
  const toastTextEl = document.getElementById("toast-text");

  /* ------------------------------------------------------------------------
     Iconos SVG
     ------------------------------------------------------------------------ */

  const ICONS = {
    check: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3.2L13 4.8"/></svg>',
    copy: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="5.5" width="8" height="8" rx="1.2"/><path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2"/></svg>',
    terminal: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="1.8" y="3" width="12.4" height="10" rx="1.4"/><path d="M4.4 6.5l2 1.7-2 1.7M8.4 10h3"/></svg>',
    external: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h7v7M13 3L7 9M3 6v7h7"/></svg>',
    zoom: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5l3.5 3.5M7 5v4M5 7h4"/></svg>'
  };

  /* ------------------------------------------------------------------------
     Utilidades
     ------------------------------------------------------------------------ */

  const ESCAPE_MAP = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };

  function escapeHtml(val) {
    return String(val).replace(/[&<>"']/g, function (char) {
      return ESCAPE_MAP[char];
    });
  }

  function inline(val) {
    if (!val) return "";
    return escapeHtml(val)
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }

  function isLocalized(val) {
    return (
      val !== null &&
      typeof val === "object" &&
      !Array.isArray(val) &&
      ("es" in val || "en" in val || "pt" in val)
    );
  }

  function t(val) {
    if (isLocalized(val)) {
      return val[state.lang] !== undefined ? val[state.lang] : val.es;
    }
    return val || "";
  }

  function storageGet(key, fallback) {
    try {
      const v = window.localStorage.getItem(STORAGE_KEY + key);
      return v === null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }

  function storageSet(key, value) {
    try {
      window.localStorage.setItem(STORAGE_KEY + key, value);
    } catch (e) {
      /* ignore */
    }
  }

  /* ------------------------------------------------------------------------
     Resaltado de sintaxis básico para Bash
     ------------------------------------------------------------------------ */

  const TOKEN_SOURCE =
    '("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')' +
    '|(\\$\\{?[A-Za-z_][A-Za-z0-9_]*\\}?|\\$\\([^)\\n]*\\))' +
    '|(\\B--?[A-Za-z0-9][A-Za-z0-9=_-]*)' +
    '|(\\b(?:sudo|apt|curl|wget|echo|chmod|chown|mkdir|rm|cp|mv|nano|vim|source|eval|export|alias|if|then|else|fi|for|do|done|command|grep|fc-cache|fc-list|oh-my-posh|eza|fzf|gpg|tee|install|update|upgrade|font|ls|cat|head|tail|git)\\b)';

  function highlightLine(line) {
    if (!line) return "";
    if (/^\s*#/.test(line)) {
      return '<span class="tok-comment">' + escapeHtml(line) + "</span>";
    }

    const tokenPattern = new RegExp(TOKEN_SOURCE, "g");
    let result = "";
    let lastIndex = 0;
    let match;

    while ((match = tokenPattern.exec(line)) !== null) {
      result += escapeHtml(line.slice(lastIndex, match.index));

      let tokenClass = "tok-cmd";
      if (match[1] !== undefined) tokenClass = "tok-string";
      else if (match[2] !== undefined) tokenClass = "tok-var";
      else if (match[3] !== undefined) tokenClass = "tok-flag";

      result += '<span class="' + tokenClass + '">' + escapeHtml(match[0]) + "</span>";
      lastIndex = match.index + match[0].length;
    }

    result += escapeHtml(line.slice(lastIndex));
    return result;
  }

  function renderCodeBlock(code, kind) {
    const id = "code-" + ++codeCounter;
    codeRegistry.set(id, code);
    const language = kind === "powershell" ? "powershell" : "bash";

    const lines = code.split("\n");
    const codeHtml = lines
      .map(function (line) {
        return (
          '<span class="code-line">' +
          '<span class="code-text">' +
          (line ? highlightLine(line) : "&nbsp;") +
          "</span></span>"
        );
      })
      .join("");

    return (
      '<div class="code-panel">' +
      '<div class="code-panel__bar">' +
      '<span class="code-panel__label">' +
      ICONS.terminal +
      "<span>" +
      language +
      "</span></span>" +
      '<button type="button" class="copy-btn" data-copy-id="' +
      id +
      '">' +
      ICONS.copy +
      '<span class="copy-btn__text">' +
      t(UI.code.copy) +
      "</span></button>" +
      "</div>" +
      '<pre class="code-panel__pre"><code>' +
      codeHtml +
      "</code></pre></div>"
    );
  }

  function renderTable(block) {
    const headers = block.headers
      .map(function (h) {
        return '<th scope="col">' + inline(t(h)) + "</th>";
      })
      .join("");

    const rows = block.rows
      .map(function (row) {
        const cells = row
          .map(function (cell) {
            if (cell && typeof cell === "object" && !isLocalized(cell)) {
              if (cell.kind === "kbd") {
                return '<td><kbd class="kbd-badge">' + escapeHtml(cell.value) + "</kbd></td>";
              }
              if (cell.kind === "code") {
                return '<td><code class="inline-code">' + escapeHtml(cell.value) + "</code></td>";
              }
            }
            return "<td>" + inline(t(cell)) + "</td>";
          })
          .join("");
        return "<tr>" + cells + "</tr>";
      })
      .join("");

    return (
      '<div class="table-responsive"><table><thead><tr>' +
      headers +
      "</tr></thead><tbody>" +
      rows +
      "</tbody></table></div>"
    );
  }

  function renderFigure(imageObj) {
    const src = escapeHtml(imageObj.src);
    const alt = escapeHtml(t(imageObj.alt) || "");
    const caption = inline(t(imageObj.caption) || "");

    return (
      '<figure class="guide-figure">' +
      '<div class="terminal-frame">' +
      '<div class="terminal-frame__bar">' +
      '<span class="terminal-frame__dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<span class="terminal-frame__title">' +
      alt +
      "</span>" +
      '<button type="button" class="zoom-icon-btn" data-zoom-src="' +
      src +
      '" data-zoom-alt="' +
      alt +
      '" aria-label="' +
      t(UI.lightbox.zoomPrompt) +
      '">' +
      ICONS.zoom +
      "</button>" +
      "</div>" +
      '<button type="button" class="terminal-frame__btn" data-zoom-src="' +
      src +
      '" data-zoom-alt="' +
      alt +
      '">' +
      '<img src="' +
      src +
      '" alt="' +
      alt +
      '" class="terminal-frame__img" decoding="async">' +
      '<span class="terminal-frame__zoom-overlay">' +
      ICONS.zoom +
      " " +
      t(UI.lightbox.zoomPrompt) +
      "</span>" +
      "</button>" +
      "</div>" +
      (caption ? '<figcaption class="guide-figure__caption">' + caption + "</figcaption>" : "") +
      "</figure>"
    );
  }

  function renderBlock(block) {
    switch (block.type) {
      case "p":
        return '<p class="guide-p">' + inline(t(block.text)) + "</p>";

      case "h3":
        return '<h3 class="guide-h3">' + inline(t(block.text)) + "</h3>";

      case "code":
        return renderCodeBlock(block.code, block.kind);

      case "image":
        return renderFigure(block);

      case "step_item": {
        let imgHtml = block.image ? renderFigure(block.image) : "";
        return (
          '<div class="guide-step-item">' +
          '<div class="guide-step-item__header">' +
          '<span class="guide-step-item__badge">' +
          block.number +
          "</span>" +
          '<div class="guide-step-item__desc">' +
          inline(t(block.text)) +
          "</div>" +
          "</div>" +
          imgHtml +
          "</div>"
        );
      }

      case "steps_list": {
        const lis = block.items
          .map(function (it, idx) {
            return (
              '<li class="guide-steps-list__item">' +
              '<span class="guide-steps-list__num">' +
              (idx + 1) +
              ".</span> " +
              '<span>' +
              inline(t(it)) +
              "</span></li>"
            );
          })
          .join("");
        return '<ol class="guide-steps-list">' + lis + "</ol>";
      }

      case "note":
        return '<p class="guide-note">' + inline(t(block.text)) + "</p>";

      case "callout": {
        const title = t(block.title) || "";
        return (
          '<aside class="guide-callout guide-callout--' +
          (block.tone || "note") +
          '">' +
          (title ? '<p class="guide-callout__title">' + inline(title) + "</p>" : "") +
          '<p class="guide-callout__body">' +
          inline(t(block.text)) +
          "</p>" +
          "</aside>"
        );
      }

      case "link_box": {
        const label = t(block.label) || "Sitio Web Oficial:";
        return (
          '<div class="guide-link-box">' +
          '<span class="guide-link-box__label"><strong>' +
          escapeHtml(label) +
          "</strong></span> " +
          '<a href="' +
          block.url +
          '" target="_blank" rel="noopener noreferrer" class="guide-link-box__link">' +
          escapeHtml(block.url) +
          " " +
          ICONS.external +
          "</a>" +
          "</div>"
        );
      }

      case "table":
        return renderTable(block);

      default:
        return "";
    }
  }

  /* ------------------------------------------------------------------------
     Renderizado de la Guía Completa
     ------------------------------------------------------------------------ */

  function renderGuide() {
    if (!guideSectionsEl) return;

    // Header y Hero
    if (heroTitleEl) heroTitleEl.textContent = t(GUIDE.header.title);
    if (heroLeadEl) heroLeadEl.textContent = t(GUIDE.header.subtitle);
    if (heroCaptionEl) heroCaptionEl.textContent = t(GUIDE.header.heroImage.caption);
    if (brandBadgeEl) brandBadgeEl.textContent = t(UI.brand.badge);

    // Footer
    if (footerTaglineEl) footerTaglineEl.textContent = t(UI.footer.tagline);
    if (footerCopyrightEl) footerCopyrightEl.textContent = t(UI.footer.copyright);
    if (backToTopLink) backToTopLink.textContent = t(UI.footer.backToTop);

    // Sidebar
    if (tocTitleEl) tocTitleEl.textContent = t(UI.toc.title);
    if (tocCountEl) tocCountEl.textContent = TOTAL + " " + (state.lang === "es" ? "pasos" : state.lang === "pt" ? "passos" : "steps");
    if (resetProgressBtn) resetProgressBtn.textContent = t(UI.toc.resetProgress);

    // Sections
    let stepCounter = 0;
    const sectionsHtml = SECTIONS.map(function (section) {
      const isStep = section.isStep !== false;
      const isDone = state.completed.has(section.id);
      const title = t(section.title);
      let stepNum = "";
      if (isStep) {
        stepCounter++;
        stepNum = String(stepCounter).padStart(2, "0");
      }
      const leadHtml = section.lead ? '<p class="guide-p guide-p--lead">' + inline(t(section.lead)) + "</p>" : "";
      const blocksHtml = section.blocks.map(renderBlock).join("");

      const badgeHtml = isStep
        ? '<span class="guide-section__badge">STEP ' + stepNum + "</span>"
        : '<span class="guide-section__badge guide-section__badge--summary">⚡ ' + t(section.badge || UI.summary.badge) + "</span>";

      const actionHtml = isStep
        ? '<button type="button" class="step-toggle-btn' +
          (isDone ? " is-done" : "") +
          '" data-toggle-step="' +
          section.id +
          '" aria-pressed="' +
          String(isDone) +
          '">' +
          ICONS.check +
          "<span>" +
          t(UI.toc.markStep) +
          "</span></button>"
        : '<span class="guide-section__ref-chip">' + t(UI.summary.chip) + "</span>";

      return (
        '<section class="guide-section' +
        (isStep ? "" : " guide-section--summary") +
        (isDone ? " is-completed" : "") +
        '" id="' +
        section.id +
        '" data-section-id="' +
        section.id +
        '">' +
        '<header class="guide-section__header">' +
        '<div class="guide-section__title-wrap">' +
        badgeHtml +
        '<h2 class="guide-section__title">' +
        escapeHtml(title) +
        "</h2>" +
        "</div>" +
        actionHtml +
        "</header>" +
        leadHtml +
        '<div class="guide-section__body">' +
        blocksHtml +
        "</div>" +
        "</section>"
      );
    }).join("");

    guideSectionsEl.innerHTML = sectionsHtml;

    renderToc();
    updateProgress();
  }

  function renderToc() {
    if (!tocNavEl) return;

    let tocStepCounter = 0;
    const tocHtml = SECTIONS.map(function (section) {
      const isStep = section.isStep !== false;
      const isDone = state.completed.has(section.id);
      const isActive = section.id === state.activeSection;
      const title = t(section.title);
      let idxHtml = "";
      if (isStep) {
        tocStepCounter++;
        idxHtml = String(tocStepCounter).padStart(2, "0");
      } else {
        idxHtml = "⚡";
      }

      return (
        '<a href="#' +
        section.id +
        '" class="guide-toc-link' +
        (isActive ? " is-active" : "") +
        (isDone ? " is-done" : "") +
        (!isStep ? " guide-toc-link--summary" : "") +
        '" data-section-link="' +
        section.id +
        '">' +
        '<span class="guide-toc-link__idx' + (!isStep ? " guide-toc-link__idx--summary" : "") + '">' +
        idxHtml +
        "</span>" +
        '<span class="guide-toc-link__text">' +
        escapeHtml(title) +
        "</span>" +
        '<span class="guide-toc-link__status">' +
        (isStep ? (isDone ? ICONS.check : '<span class="guide-toc-link__dot"></span>') : "") +
        "</span>" +
        "</a>"
      );
    }).join("");

    tocNavEl.innerHTML = tocHtml;
  }

  /* ------------------------------------------------------------------------
     Progreso y almacenamiento
     ------------------------------------------------------------------------ */

  function updateProgress() {
    const done = Array.from(state.completed).filter(function (id) {
      return STEPS.some(function (s) { return s.id === id; });
    }).length;
    const pct = TOTAL ? Math.round((done / TOTAL) * 100) : 0;

    if (headerProgressFill) headerProgressFill.style.width = pct + "%";
    if (headerProgressText) {
      const fn = UI.toc.progress;
      headerProgressText.textContent = fn(done, TOTAL)[state.lang] || done + " / " + TOTAL;
    }
  }

  function toggleSectionCompletion(sectionId) {
    if (state.completed.has(sectionId)) {
      state.completed.delete(sectionId);
    } else {
      state.completed.add(sectionId);
      showToast(state.lang === "es" ? "Paso marcado como completado" : state.lang === "pt" ? "Passo marcado como concluído" : "Step marked as done");
    }

    storageSet("completed", JSON.stringify(Array.from(state.completed)));
    renderGuide();
  }

  function resetProgress() {
    state.completed.clear();
    storageSet("completed", "[]");
    renderGuide();
    showToast(state.lang === "es" ? "Progreso reiniciado" : state.lang === "pt" ? "Progresso reiniciado" : "Progress reset");
  }

  /* ------------------------------------------------------------------------
     Copiado al portapapeles
     ------------------------------------------------------------------------ */

  function copyCode(id, button) {
    const code = codeRegistry.get(id);
    if (!code) return;

    function onSuccess() {
      button.classList.add("is-copied");
      const label = button.querySelector(".copy-btn__text");
      if (label) label.textContent = t(UI.code.copied);

      setTimeout(function () {
        button.classList.remove("is-copied");
        if (label) label.textContent = t(UI.code.copy);
      }, 2000);

      showToast(state.lang === "es" ? "Comando copiado al portapapeles" : state.lang === "pt" ? "Comando copiado para a área de transferência" : "Command copied to clipboard");
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(onSuccess).catch(function () {
        fallbackCopy(code, onSuccess);
      });
    } else {
      fallbackCopy(code, onSuccess);
    }
  }

  function fallbackCopy(text, callback) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      if (callback) callback();
    } catch (e) {
      console.warn("Copy fallback failed", e);
    }
    document.body.removeChild(textarea);
  }

  /* ------------------------------------------------------------------------
     Notificación Toast
     ------------------------------------------------------------------------ */

  function showToast(msg) {
    if (!toastEl || !toastTextEl) return;
    toastTextEl.textContent = msg;
    toastEl.classList.add("is-active");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("is-active");
    }, 2400);
  }

  /* ------------------------------------------------------------------------
     Visor Lightbox para imágenes
     ------------------------------------------------------------------------ */

  function openLightbox(src, alt) {
    if (!lightboxDialog || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    if (lightboxTitle) lightboxTitle.textContent = alt || t(UI.lightbox.title);

    if (typeof lightboxDialog.showModal === "function") {
      lightboxDialog.showModal();
    } else {
      lightboxDialog.setAttribute("open", "");
    }
  }

  function closeLightbox() {
    if (!lightboxDialog) return;
    if (typeof lightboxDialog.close === "function") {
      lightboxDialog.close();
    } else {
      lightboxDialog.removeAttribute("open");
    }
  }

  /* ------------------------------------------------------------------------
     Drawer / Menú móvil
     ------------------------------------------------------------------------ */

  function openDrawer() {
    if (!sidebarEl || !overlayEl) return;
    drawerOpen = true;
    sidebarEl.classList.add("is-open");
    overlayEl.hidden = false;
    if (tocToggleBtn) tocToggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (!sidebarEl || !overlayEl) return;
    drawerOpen = false;
    sidebarEl.classList.remove("is-open");
    overlayEl.hidden = true;
    if (tocToggleBtn) tocToggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  /* ------------------------------------------------------------------------
     Selector de Idioma
     ------------------------------------------------------------------------ */

  function setLanguage(lang) {
    if (lang !== "es" && lang !== "en" && lang !== "pt") return;
    state.lang = lang;
    storageSet("lang", lang);

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === lang));
    });

    renderGuide();
  }

  /* ------------------------------------------------------------------------
     ScrollSpy para el índice
     ------------------------------------------------------------------------ */

  function setupScrollSpy() {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            state.activeSection = entry.target.id;
            updateActiveToc();
          }
        });
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );

    SECTIONS.forEach(function (section) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
  }

  function updateActiveToc() {
    document.querySelectorAll("[data-section-link]").forEach(function (link) {
      const id = link.getAttribute("data-section-link");
      link.classList.toggle("is-active", id === state.activeSection);
    });
  }

  /* ------------------------------------------------------------------------
     Manejo de eventos
     ------------------------------------------------------------------------ */

  function bindEvents() {
    // Cambio de idioma
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-set-lang"));
      });
    });

    // Delegación de eventos en el contenido (copiado, zoom, toggle de completado)
    document.addEventListener("click", function (e) {
      const copyBtn = e.target.closest(".copy-btn");
      if (copyBtn) {
        e.preventDefault();
        const id = copyBtn.getAttribute("data-copy-id");
        copyCode(id, copyBtn);
        return;
      }

      const toggleStepBtn = e.target.closest("[data-toggle-step]");
      if (toggleStepBtn) {
        e.preventDefault();
        const secId = toggleStepBtn.getAttribute("data-toggle-step");
        toggleSectionCompletion(secId);
        return;
      }

      const zoomTrigger = e.target.closest("[data-zoom-src]");
      if (zoomTrigger) {
        e.preventDefault();
        openLightbox(zoomTrigger.getAttribute("data-zoom-src"), zoomTrigger.getAttribute("data-zoom-alt"));
        return;
      }
    });

    // Cerrar lightbox
    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightboxDialog) {
      lightboxDialog.addEventListener("click", function (e) {
        if (e.target === lightboxDialog) closeLightbox();
      });
    }

    // Toggle menú móvil
    if (tocToggleBtn) {
      tocToggleBtn.addEventListener("click", function () {
        if (drawerOpen) closeDrawer();
        else openDrawer();
      });
    }
    if (overlayEl) overlayEl.addEventListener("click", closeDrawer);

    // Click en enlaces del TOC
    if (tocNavEl) {
      tocNavEl.addEventListener("click", function (e) {
        const link = e.target.closest("a");
        if (link && drawerOpen) {
          closeDrawer();
        }
      });
    }

    // Reinicio de progreso (sin alertas bloqueantes del navegador)
    if (resetProgressBtn) {
      resetProgressBtn.addEventListener("click", function () {
        resetProgress();
      });
    }

    // Teclado
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (drawerOpen) closeDrawer();
        closeLightbox();
      }
    });
  }

  /* ------------------------------------------------------------------------
     Inicialización
     ------------------------------------------------------------------------ */

  function init() {
    const savedLang = storageGet("lang", "es");
    if (savedLang === "es" || savedLang === "en" || savedLang === "pt") {
      state.lang = savedLang;
    }

    try {
      const savedCompleted = JSON.parse(storageGet("completed", "[]"));
      if (Array.isArray(savedCompleted)) {
        state.completed = new Set(savedCompleted);
      }
    } catch (e) {
      state.completed = new Set();
    }

    document.documentElement.lang = state.lang;
    document.documentElement.setAttribute("data-lang", state.lang);

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === state.lang));
    });

    renderGuide();
    bindEvents();
    setupScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
