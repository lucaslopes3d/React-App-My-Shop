import { FiShoppingCart } from 'react-icons/fi'
import * as S from './styles'

export const ProductCard: React.FC = () => {
  return (
    <S.Card>
      <S.ProductImage src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt='' />

      <S.ProductTitle>Mens Casual Premium Slim Fit T-Shirt</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>4.1</S.Review>

        <S.Price>S$22.3</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCardButtonWrapper>
        <S.AddToCardButton>
          Adicionar ao carrinho
          <FiShoppingCart />
        </S.AddToCardButton>
      </S.AddToCardButtonWrapper>
    </S.Card>
  )
}