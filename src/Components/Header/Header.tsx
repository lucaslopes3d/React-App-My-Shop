import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { Cart } from "../Cart/Cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (reootReducer: RootReducer) => reootReducer.userReducer
  );
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    //Usuário não está logado
    if (user === null) {
      //despachar a action de login
      dispatch({
        type: "user/login",
        payload: {
          name: "Lucas Lopes",
          email: "Lucaslopes@email.com",
        },
      });
    } else {
      dispatch({
        type: "user/logout",
      });
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
