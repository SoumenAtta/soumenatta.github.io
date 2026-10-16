(function () {
  var storageKey = "site-theme";

  function validPreference(value) {
    return value === "light" || value === "dark" ? value : "system";
  }

  function applyTheme(value) {
    if (value === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", value);
    }
    document.querySelectorAll("[data-theme-picker]").forEach(function (picker) {
      picker.value = value;
    });
  }

  var preference = "system";
  try {
    preference = validPreference(localStorage.getItem(storageKey));
  } catch (error) {
    // The system theme also works when browser storage is unavailable.
  }
  applyTheme(preference);

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-theme-picker]").forEach(function (picker) {
      picker.value = preference;
      picker.disabled = false;
      picker.addEventListener("change", function () {
        preference = validPreference(picker.value);
        applyTheme(preference);
        try {
          if (preference === "system") {
            localStorage.removeItem(storageKey);
          } else {
            localStorage.setItem(storageKey, preference);
          }
        } catch (error) {
          // The selected theme still applies for this page.
        }
      });
    });
  });

  window.addEventListener("storage", function (event) {
    if (event.key === storageKey || event.key === null) {
      preference = validPreference(event.newValue);
      applyTheme(preference);
    }
  });
})();
