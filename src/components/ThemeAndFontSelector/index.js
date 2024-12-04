import React, { useState } from "react";
import "./ThemeAndFontSelector.css";
import "../header/UpperContainerHeader/accessibility.css"

const ThemeAndFontSelector = () => {
  const [theme, setTheme] = useState("light"); // light or dark
  const [fontSize, setFontSize] = useState("medium"); // small, medium, large

  // Обновляем тему
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.dataset.theme = newTheme; // Меняем атрибут на body
  };

  // Обновляем размер шрифта
  const handleFontSizeChange = (size) => {
    setFontSize(size);
    document.body.dataset.fontSize = size; // Меняем атрибут на body
  };

  return (
    <div className="theme-selector">
      <div className="theme-options">
        <h4>Выбор темы:</h4>
        <button
          className={theme === "light" ? "active" : ""}
          onClick={() => handleThemeChange("light")}
        >
          Светлая
        </button>
        <button
          className={theme === "dark" ? "active" : ""}
          onClick={() => handleThemeChange("dark")}
        >
          Темная
        </button>
      </div>

      <div className="font-options">
        <h4>Размер шрифта:</h4>
        <button
          className={fontSize === "small" ? "active" : ""}
          onClick={() => handleFontSizeChange("small")}
        >
          Маленький
        </button>
        <button
          className={fontSize === "medium" ? "active" : ""}
          onClick={() => handleFontSizeChange("medium")}
        >
          Средний
        </button>
        <button
          className={fontSize === "large" ? "active" : ""}
          onClick={() => handleFontSizeChange("large")}
        >
          Большой
        </button>
      </div>
    </div>
  );
};

export default ThemeAndFontSelector;