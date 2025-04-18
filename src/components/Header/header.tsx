import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { MdDeliveryDining, MdWallet } from "react-icons/md";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import leaves from "@/assets/leaves.png";
import Button from "@/components/Button/button";
import Cart from "@/components/Cart/cart";
import { useAuth } from "@/context/authContext";
import Wallet from "@/components/Wallet/wallet";
import { ListaReservasAdmin } from "@/components/ListarReservasAdmin/ListarReservasAdmin"

export default function Header() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const [showReservas, setShowReservas] = useState<boolean>(false); // ⬅️ Novo estado
  const navigate = useNavigate();
  const { isAuthenticated, logout, role } = useAuth();

  const handleIconClick = (): void => {
    setShowCart((prevState) => !prevState);
  };

  const handleWalletClick = (): void => {
    if (isAuthenticated) {
      setShowWallet((prevState) => !prevState);
    } else {
      navigate("/login");
    }
  };

  const handleNavigation = (): void => {
    navigate("/tables");
  };

  const handleNavigationHome = (): void => {
    navigate("/");
  };

  const handleNavigationCreate = (): void => {
    navigate("/create");
  };

  const handleScroll = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigationLogin = (): void => {
    navigate("/login");
  };

  const handleLogout = (): void => {
    logout();
    navigate("/");
  };

  const handleReservasClick = (): void => {
    setShowReservas((prev) => !prev);
  };

  return (
    <Container>
      <div className="boxTitle">
        <img src={leaves} alt="leaves" />
        <h1>FLP Foods</h1>
      </div>

      <div className="boxOptions">
        <p onClick={handleNavigationHome}>Home</p>
        <p onClick={() => handleScroll("menu")}>Menu</p>
        <p onClick={() => handleScroll("services")}>Services</p>
        <p onClick={() => handleScroll("review")}>Review</p>
      </div>

      <div className="boxCart">
        <p onClick={handleIconClick} style={{ cursor: "pointer" }}>
          <MdDeliveryDining />
        </p>

        <Button onClick={handleNavigation} title="Reservation" size="large" color="#333" backgroundColor="yellow" />

        {isAuthenticated ? (
          <>
            <p style={{ cursor: "pointer" }} onClick={handleWalletClick}>
              <MdWallet />
            </p>
            <Button onClick={handleLogout} title="Logout" size="small" color="#fff" backgroundColor="red" />
          </>
        ) : (
          <p onClick={handleNavigationLogin} style={{ cursor: "pointer" }}>
            <FaSignInAlt />
          </p>
        )}

        <p onClick={handleNavigationCreate} style={{ cursor: "pointer" }}>
          <FaUserPlus />
        </p>
      </div>

      {/* ✅ Parte adicionada: botão só aparece para admins */}
      {isAuthenticated && role === "admin" && (
        <>
          <Button
            onClick={handleReservasClick}
            title="Ver Reservas"
            size="small"
            color="#fff"
            backgroundColor="green"
          />
          {showReservas && <ListaReservasAdmin />}
        </>
      )}

      {showCart && <Cart />}
      {showWallet && <Wallet />}
    </Container>
  );
}
