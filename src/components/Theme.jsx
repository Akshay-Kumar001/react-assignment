import { useEffect, useState } from "react";

function Theme() {
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center w-full ">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only peer"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div
          className="block relative bg-[#00000026] w-[132px] h-[72px] p-1 rounded-full border border-[#5b4b8973]
        before:absolute before:bg-[url(assets/light-toggle.svg)] before:w-14 before:h-14 before:rounded-full
        before:transition-all before:duration-500 before:left-2 before:top-2
        peer-checked:before:left-[68px] peer-checked:before:bg-[url(assets/dark-toggle.svg)]"
        ></div>
      </label>
    </div>
  );
}

export default Theme;
