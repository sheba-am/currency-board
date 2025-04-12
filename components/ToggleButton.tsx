import styles from "@/styles/ToggleButton.module.css";
import { useTheme } from "@/contexts/ThemeContext";
import lightMode from '@/public/light-mode.png'
import darkMode from '@/public/dark-mode.png'
import Image from "next/image";
export default function ToggleButton() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={styles.toggleWrapper}>
      <div className={styles.iconWrapper}>
        {isDarkMode ? <Image src={darkMode}  alt="dark mode"/> :<Image src={lightMode}  alt="light mode"/>}
      </div>

      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isDarkMode}
        //   onChange={() => toggleDarkMode(!isDarkMode)}
          onChange={toggleDarkMode}

        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
