export interface CartItem {
  id: string
  slug: string
  title: string
  price: number
  imageUrl: string
  categorySlug: string
  size: string
}

const CART_KEY = 'capellos-cart'

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) ?? '[]')
  } catch {
    return []
  }
}

export function isInCart(id: string): boolean {
  return getCart().some((i) => i.id === id)
}

export function addToCart(item: CartItem): void {
  if (isInCart(item.id)) return
  const cart = getCart()
  cart.push(item)
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent('cart:updated', {detail: {cart}}))
}

export function removeFromCart(id: string): void {
  const cart = getCart().filter((i) => i.id !== id)
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent('cart:updated', {detail: {cart}}))
}

export function getCartCount(): number {
  return getCart().length
}

export function getCartTotal(): number {
  return getCart().reduce((sum, i) => sum + i.price, 0)
}
