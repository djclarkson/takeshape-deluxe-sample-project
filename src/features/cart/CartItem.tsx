import ProductImage from 'features/products/ProductImage';
import ProductPrice from 'features/products/ProductPrice';
import ProductQuantity from 'features/products/ProductQuantity';
import type { ChangeEventHandler } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Box, Flex, IconButton } from 'theme-ui';
import type { Stripe_Product } from 'types/takeshape';

export interface CartItemProps {
  product: Stripe_Product;
  onChangeQuantity: ChangeEventHandler;
  onClickRemove: ChangeEventHandler;
}

const CartItem = ({ product, onChangeQuantity, onClickRemove }) => {
  return (
    <Box variant="styles.cart.item" sx={{ width: '100%', padding: '0 1rem' }}>
      <Flex variant="styles.cart.itemGrid" sx={{ width: '100%', gap: '1rem', alignItems: 'flex-start' }}>
        <Box sx={{ flex: '0 1 6rem' }}>
          <ProductImage maxHeight="6rem" images={product.images} />
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <div>
            <strong>{product.name}</strong>
          </div>
          <Flex sx={{ gap: '1rem', alignItems: 'flex-end', margin: '1rem 0' }}>
            <ProductQuantity id={product.id} value={product.quantity} onChange={onChangeQuantity} />
            <Box sx={{ fontSize: '.8em' }}>
              <ProductPrice price={product.price} quantity={product.quantity} />
            </Box>
          </Flex>
        </Box>
        <IconButton sx={{ flex: '0 1 28px', ':hover': { color: 'primary' } }} onClick={onClickRemove}>
          <FiTrash2 size={28} />
        </IconButton>
      </Flex>
    </Box>
  );
};

export default CartItem;
