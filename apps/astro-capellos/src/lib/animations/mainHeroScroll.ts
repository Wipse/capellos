import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initMainHeroScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const hero = document.getElementById('main-hero')
  const logoWrap = document.getElementById('hero-logo-wrap')
  const nav = document.getElementById('hero-nav')

  if (!hero || !logoWrap || !nav) return

  gsap.context(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    })
      .to(logoWrap, {yPercent: -55, opacity: 0, ease: 'none'}, 0)
      .to(nav, {yPercent: -12, opacity: 0, ease: 'none'}, 0)
      .to(hero, {opacity: 0, ease: 'none'}, 0.55)
  }, hero)

  requestAnimationFrame(() => ScrollTrigger.refresh())
}

const SCROLL_HINT_DISMISS_PX = 16

export function initHeroScrollHint() {
  const hint = document.getElementById('hero-scroll-hint')
  if (!hint) return

  const dismiss = () => {
    hint.classList.add('scroll-hint--dismissed')
    window.removeEventListener('scroll', onScroll)
  }

  const onScroll = () => {
    if (window.scrollY >= SCROLL_HINT_DISMISS_PX) dismiss()
  }

  window.addEventListener('scroll', onScroll, {passive: true})
}
