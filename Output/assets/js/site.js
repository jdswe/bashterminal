"use strict";

const themeButton = document.querySelector("#theme-toggle");
const soundButton = document.querySelector("#sound-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (error) {
    return fallback;
  }
}

function writePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`Could not save ${key} preference.`, error);
  }
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  document.querySelectorAll("img[data-theme-light-src][data-theme-dark-src]").forEach((image) => {
    image.src = image.dataset[isDark ? "themeDarkSrc" : "themeLightSrc"];
  });
  const favicon = document.querySelector('link[rel="icon"][data-theme-light-href][data-theme-dark-href]');
  if (favicon) favicon.href = favicon.dataset[isDark ? "themeDarkHref" : "themeLightHref"];
  if (themeButton) {
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute("aria-label", isDark ? "Cambiar al modo claro" : "Cambiar al modo oscuro");
    themeButton.title = isDark ? "Cambiar al modo claro" : "Cambiar al modo oscuro";
  }
  if (themeMeta) themeMeta.content = isDark ? "#17161c" : "#f1efe9";
}

let currentTheme = readPreference("coding-games-theme", "light");
if (currentTheme !== "dark" && currentTheme !== "light") currentTheme = "light";
setTheme(currentTheme);

let soundEnabled = readPreference("coding-games-sound", "off") === "on";
let audioContext;

function syncSoundControl() {
  if (!soundButton) return;
  soundButton.setAttribute("aria-pressed", String(soundEnabled));
  soundButton.setAttribute("aria-label", soundEnabled ? "Desactivar sonidos" : "Activar sonidos");
  soundButton.title = soundEnabled ? "Sonidos activados" : "Sonidos desactivados";
}

syncSoundControl();

function playUiSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!soundEnabled || !AudioContextClass) return;
  if (!audioContext) audioContext = new AudioContextClass();
  if (audioContext.state === "suspended") void audioContext.resume();

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(660, now);
  oscillator.frequency.exponentialRampToValueAtTime(440, now + 0.045);
  gain.gain.setValueAtTime(0.018, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.06);
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    writePreference("coding-games-theme", currentTheme);
    playUiSound();
  });
}

if (soundButton) {
  soundButton.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    syncSoundControl();
    writePreference("coding-games-sound", soundEnabled ? "on" : "off");
    playUiSound();
  });
}

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
    playUiSound();
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      menuButton.focus();
    }
  });
}

document.addEventListener("click", (event) => {
  if (event.target.closest(".step-toggle-btn, .toc-toggle-btn")) playUiSound();
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
