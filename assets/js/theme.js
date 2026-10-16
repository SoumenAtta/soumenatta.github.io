(function () {
  var storageKey = "site-theme";
  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  var preference = "system";

  function validPreference(value) {
    return value === "light" || value === "dark" ? value : "system";
  }

  function applyTheme(value) {
    preference = value;
    if (value === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", value);
    }
    var dark = value === "dark" || (value === "system" && systemTheme.matches);
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      var label = dark ? "Switch to light theme" : "Switch to dark theme";
      button.setAttribute("data-current-theme", dark ? "dark" : "light");
      button.setAttribute("aria-label", label);
      button.title = label;
    });
  }

  try {
    preference = validPreference(localStorage.getItem(storageKey));
  } catch (error) {
    // The system theme also works when browser storage is unavailable.
  }
  applyTheme(preference);

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(preference);
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.disabled = false;
      button.addEventListener("click", function () {
        var dark = preference === "dark" || (preference === "system" && systemTheme.matches);
        applyTheme(dark ? "light" : "dark");
        try {
          localStorage.setItem(storageKey, preference);
        } catch (error) {
          // The selected theme still applies for this page.
        }
      });
    });
  });

  function followSystemTheme() {
    if (preference === "system") applyTheme("system");
  }
  if (systemTheme.addEventListener) {
    systemTheme.addEventListener("change", followSystemTheme);
  } else {
    systemTheme.addListener(followSystemTheme);
  }

  window.addEventListener("storage", function (event) {
    if (event.key === storageKey || event.key === null) {
      preference = validPreference(event.newValue);
      applyTheme(preference);
    }
  });
})();
