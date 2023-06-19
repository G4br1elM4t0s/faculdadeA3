import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import hamburgue from "../../assets/hamburgue.svg";
import hamburgueopen from "../../assets/menuFechado.svg";

export function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentUrl = location.pathname;

  const userId = localStorage.getItem("userId");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    localStorage.removeItem("userId");
  }

  return (
    <div className={styles.dropdownMenu}>
      {isOpen ? (
        <img src={hamburgue} onClick={handleToggle} alt="Menu" />
      ) : (
        <img src={hamburgueopen} onClick={handleToggle} alt="Menu" />
      )}

      {isOpen && (
        <ul className={styles.dropdownItems}>
          <li>
            <Link
              to="/movies"
              className={currentUrl === "/movies" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/historico"
              className={currentUrl === "/historico" ? styles.active : ""}
            >
              Histórico
            </Link>
          </li>
          <li>
            <Link
              to={`/mymovies/${userId}`}
              className={currentUrl === "/minha-colecao" ? styles.active : ""}
            >
              Minha Coleção
            </Link>
      
          </li>
          <li>
          <Link
                to={`/`}
                onClick={handleClose}
              >
                Sair
              </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
