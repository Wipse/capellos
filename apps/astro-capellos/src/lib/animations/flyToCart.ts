import gsap from 'gsap'

export function flyToCart(sourceEl: HTMLElement, onComplete: () => void): void {
  const cartBtn = document.getElementById('cart-trigger')
  if (!cartBtn) {
    onComplete()
    return
  }

  const rectEl = sourceEl instanceof HTMLImageElement
    ? sourceEl
    : (sourceEl.querySelector('img') ?? sourceEl)
  const sourceRect = rectEl.getBoundingClientRect()
  const targetRect = cartBtn.getBoundingClientRect()

  // Clone the source element as a fixed overlay
  const clone = document.createElement('div')
  clone.style.cssText = `
    position: fixed;
    top: ${sourceRect.top}px;
    left: ${sourceRect.left}px;
    width: ${sourceRect.width}px;
    height: ${sourceRect.height}px;
    border-radius: 12px;
    overflow: hidden;
    z-index: 9999;
    pointer-events: none;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  `
  const imgEl = sourceEl instanceof HTMLImageElement ? sourceEl : sourceEl.querySelector('img')
  if (imgEl) {
    const cloneImg = imgEl.cloneNode() as HTMLImageElement
    cloneImg.style.cssText = 'width: 100%; height: 100%; object-fit: cover; display: block;'
    clone.appendChild(cloneImg)
  }
  document.body.appendChild(clone)

  // Target center relative to clone starting position
  const targetX = targetRect.left + targetRect.width / 2 - sourceRect.left - sourceRect.width / 2
  const targetY = targetRect.top + targetRect.height / 2 - sourceRect.top - sourceRect.height / 2

  // Arc midpoint: pull upward and toward the right
  const midX = targetX * 0.4
  const midY = Math.min(targetY, -80)

  gsap.timeline({
    onComplete: () => {
      clone.remove()
      onComplete()
    },
  })
    .to(clone, {
      x: midX,
      y: midY,
      scale: 0.45,
      duration: 0.38,
      ease: 'power2.out',
    })
    .to(clone, {
      x: targetX,
      y: targetY,
      scale: 0.05,
      opacity: 0.4,
      duration: 0.32,
      ease: 'power3.in',
    })
}
