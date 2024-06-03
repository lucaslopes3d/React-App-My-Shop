import * as S from "./styles"

export const Header: React.FC = () => {
  return(
    <S.StyledHeader>
      <S.HeaderTitle>MyShop.</S.HeaderTitle>
      
      <S.AuthButton>
        Login
      </S.AuthButton>

      <S.CartButton>
        Carrinho
      </S.CartButton>
    </S.StyledHeader>
  );
}