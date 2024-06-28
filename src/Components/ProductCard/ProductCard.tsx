import { FiShoppingCart } from "react-icons/fi";
import { Products } from "../../Data/Products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";

import * as S from "./styles";

interface ProductCardProps {
  product: Products;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  const isProductOnCart = cart.find(
    (productOnCart) => product.id === productOnCart.id
  );

  function handleAddProductToCart() {
    //despachar a action de adiconar produto ao carrinho
    dispatch({
      type: "cart/add-product",
      payload: product,
    });
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({` ${product.rating.rate}`})
        </S.Review>

        <S.Price>{product.price}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCardButtonWrapper>
        <S.AddToCardButton onClick={handleAddProductToCart}>
          Adicionar ao carrinho
          <FiShoppingCart />
        </S.AddToCardButton>

        <S.RemoveFromCardButton>
          Remover do carrinho
          <FiShoppingCart />
        </S.RemoveFromCardButton>
      </S.AddToCardButtonWrapper>
    </S.Card>
  );
};
