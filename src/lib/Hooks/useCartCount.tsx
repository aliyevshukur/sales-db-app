import { useState } from 'react';

const useCartCount = () => {
    const [cartCount, setCartCount] = useState(0);

    return { cartCount, setCartCount };

}

export default useCartCount;