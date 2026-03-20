import gsap from 'gsap'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const PARALLAX_COMMIT_THRESHOLD = 0.42
const PROGRESS_EPSILON = 0.02
const SCROLL_SETTLE_MS = 140

export function initMainHeroScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const spacer = document.getElementById('hero-scroll-spacer')
  const hero = document.getElementById('main-hero')
  const bgLayer = document.getElementById('hero-bg-layer')
  const inner = document.getElementById('hero-inner')

  if (!spacer || !hero || !bgLayer || !inner) return

  const setHeroPointer = (interactive: boolean) => {
    hero.style.pointerEvents = interactive ? 'auto' : 'none'
  }

  let programmaticScroll = false
  let settleTimer: number | undefined

  gsap.context(() => {
    const scrollTriggerConfig: ScrollTrigger.Vars = {
      trigger: spacer,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.65,
      onLeave: () => setHeroPointer(false),
      onEnterBack: () => setHeroPointer(true),
    }

    const tl = gsap.timeline({scrollTrigger: scrollTriggerConfig})
    tl.to(hero, {yPercent: -20, opacity: 0, ease: 'none'}, 0)
      .to(bgLayer, {yPercent: 24, scale: 1.14, ease: 'none'}, 0)
      .to(inner, {yPercent: -38, scale: 0.93, ease: 'none'}, 0)

    const st = tl.scrollTrigger
    if (!st) return

    const scrollToY = (y: number) => {
      programmaticScroll = true
      gsap.to(window, {
        scrollTo: {y, autoKill: true},
        duration: 0.48,
        ease: 'power2.inOut',
        onComplete: () => {
          programmaticScroll = false
        },
        onInterrupt: () => {
          programmaticScroll = false
        },
      })
    }

    const settleSnap = () => {
      if (programmaticScroll) return

      const p = st.progress
      if (p <= PROGRESS_EPSILON || p >= 1 - PROGRESS_EPSILON) return

      const targetY = p >= PARALLAX_COMMIT_THRESHOLD ? st.end : st.start
      const currentY = window.scrollY

      if (Math.abs(currentY - targetY) < 8) return

      scrollToY(targetY)
    }

    const onScrollMaybeSettle = () => {
      if (programmaticScroll) return
      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(settleSnap, SCROLL_SETTLE_MS)
    }

    window.addEventListener('scrollend', settleSnap, {passive: true})
    window.addEventListener('scroll', onScrollMaybeSettle, {passive: true})
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
