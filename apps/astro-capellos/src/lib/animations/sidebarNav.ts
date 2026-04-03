import gsap from 'gsap'

// Houd een cleanup-functie bij zodat we bij elke re-init de oude listeners verwijderen
let _cleanup: (() => void) | null = null

export function initSidebarNav() {
  // Ruim vorige instantie op
  if (_cleanup) {
    _cleanup()
    _cleanup = null
  }

  const trigger = document.getElementById('nav-trigger')
  const sidebar = document.getElementById('nav-sidebar')
  const overlay = document.getElementById('nav-overlay')
  const links = document.querySelectorAll<HTMLElement>('.nav-sidebar-link')
  const lines = trigger?.querySelectorAll<HTMLElement>('.nav-line')
  const shopToggle = document.getElementById('shop-toggle') as HTMLElement | null
  const shopSubmenu = document.getElementById('shop-submenu')
  const shopChevron = document.getElementById('shop-chevron')
  const shopSubLinks = document.querySelectorAll<HTMLElement>('.shop-submenu-link')

  let shopOpen = false

  // Sidebar open/close
  if (trigger && sidebar && overlay && lines) {
    let isOpen = false

    gsap.set(links, {x: 32, opacity: 0})

    const openTl = gsap.timeline({paused: true})
    openTl.to(sidebar, {x: 0, duration: 0.6, ease: 'expo.inOut'})
    openTl.to(overlay, {opacity: 0.25, duration: 0.4, ease: 'power2.out'}, '<')
    openTl.to(lines[0], {y: 5.5, rotation: 45, duration: 0.35, ease: 'power2.inOut'}, '<0.1')
    openTl.to(lines[1], {opacity: 0, scaleX: 0, duration: 0.2, ease: 'power2.in'}, '<')
    openTl.to(lines[2], {y: -5.5, rotation: -45, duration: 0.35, ease: 'power2.inOut'}, '<')
    openTl.to(links, {x: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power3.out'}, '-=0.3')

    const open = () => {
      isOpen = true
      sidebar.setAttribute('aria-hidden', 'false')
      overlay.classList.remove('pointer-events-none')
      sidebar.classList.remove('pointer-events-none')
      trigger.setAttribute('aria-expanded', 'true')
      trigger.setAttribute('aria-label', 'Menu sluiten')
      document.body.style.overflow = 'hidden'
      openTl.play()
    }

    const runSidebarClose = () => {
      const closeTl = gsap.timeline({
        onComplete: () => {
          sidebar.setAttribute('aria-hidden', 'true')
          overlay.classList.add('pointer-events-none')
          sidebar.classList.add('pointer-events-none')
          openTl.pause(0)
        },
      })
      closeTl.to(links, {
        x: 20,
        opacity: 0,
        duration: 0.2,
        stagger: {each: 0.04, from: 'end'},
        ease: 'power2.in',
      })
      closeTl.to(lines[0], {y: 0, rotation: 0, duration: 0.3, ease: 'power2.inOut'}, '<0.1')
      closeTl.to(lines[1], {opacity: 1, scaleX: 1, duration: 0.2, ease: 'power2.out'}, '<')
      closeTl.to(lines[2], {y: 0, rotation: 0, duration: 0.3, ease: 'power2.inOut'}, '<')
      closeTl.to(sidebar, {x: '100%', duration: 0.5, ease: 'expo.inOut'}, '-=0.1')
      closeTl.to(overlay, {opacity: 0, duration: 0.35, ease: 'power2.out'}, '<')
    }

    const close = () => {
      isOpen = false
      trigger.setAttribute('aria-expanded', 'false')
      trigger.setAttribute('aria-label', 'Menu openen')
      document.body.style.overflow = ''

      if (shopOpen && shopSubmenu && shopChevron && shopToggle) {
        shopOpen = false
        shopToggle.setAttribute('aria-expanded', 'false')
        shopToggle.classList.add('hover:pl-3')
        const shopCloseTl = gsap.timeline()
        shopCloseTl.to(shopSubLinks, {
          opacity: 0,
          y: -8,
          duration: 0.12,
          stagger: {each: 0.04, from: 'end'},
          ease: 'power2.in',
        })
        shopCloseTl.to(shopChevron, {rotation: 0, duration: 0.35, ease: 'power2.out'}, '<')
        shopCloseTl.to(shopSubmenu, {height: 0, duration: 0.35, ease: 'power3.in'}, '<0.02')
        runSidebarClose()
      } else {
        runSidebarClose()
      }
    }

    const onTriggerClick = () => (isOpen ? close() : open())
    const onBeforeSwap = () => close()

    trigger.addEventListener('click', onTriggerClick)
    overlay.addEventListener('click', close)
    document.addEventListener('astro:before-swap', onBeforeSwap)

    _cleanup = () => {
      trigger.removeEventListener('click', onTriggerClick)
      overlay.removeEventListener('click', close)
      document.removeEventListener('astro:before-swap', onBeforeSwap)
    }
  }

  // Shop submenu toggle
  if (shopToggle && shopSubmenu && shopChevron && shopSubLinks.length) {
    shopToggle.addEventListener('click', () => {
      if (!shopOpen) {
        shopOpen = true
        shopToggle.setAttribute('aria-expanded', 'true')
        shopToggle.classList.remove('hover:pl-3')
        const tl = gsap.timeline()
        gsap.set(shopSubLinks, {opacity: 0, y: -8})
        tl.to(shopSubmenu, {height: 'auto', duration: 0.45, ease: 'expo.out'})
        tl.to(shopChevron, {rotation: 180, duration: 0.45, ease: 'expo.out'}, '<')
        tl.to(
          shopSubLinks,
          {opacity: 1, y: 0, duration: 0.2, stagger: 0.05, ease: 'power2.out'},
          '-=0.5',
        )
      } else {
        shopOpen = false
        shopToggle.setAttribute('aria-expanded', 'false')
        shopToggle.classList.add('hover:pl-3')
        const tl = gsap.timeline()
        tl.to(shopSubLinks, {
          opacity: 0,
          y: -8,
          duration: 0.12,
          stagger: {each: 0.04, from: 'end'},
          ease: 'power2.in',
        })
        tl.to(shopChevron, {rotation: 0, duration: 0.35, ease: 'expo.out'}, '<')
        tl.to(shopSubmenu, {height: 0, duration: 0.35, ease: 'power3.in'}, '<0.05')
      }
    })
  }
}
