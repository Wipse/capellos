import gsap from 'gsap'

/**
 * GSAP intro for the main hero: logo fade-in, pause, logo moves up, nav reveals.
 * Skipped when prefers-reduced-motion is set.
 */
export function runHeroIntro(): Promise<void> {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (reducedMotion.matches) return Promise.resolve()

  const logoWrap = document.getElementById('hero-logo-wrap')
  const nav = document.getElementById('hero-nav')
  const navLinks = document.querySelectorAll<HTMLElement>('[data-hero-nav-item]')

  if (!logoWrap || !nav) return Promise.resolve()

  gsap.set(logoWrap, {autoAlpha: 0, y: 36})
  gsap.set(nav, {autoAlpha: 0, y: -28})
  gsap.set(navLinks, {autoAlpha: 0, y: -22})

  const tl = gsap.timeline({defaults: {ease: 'power2.out'}})

  tl.to(logoWrap, {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
  })

  tl.to(
    logoWrap,
    {
      y: -40,
      duration: 0.95,
      ease: 'power2.inOut',
    },
    '+=0.5',
  )

  tl.to(
    nav,
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    },
    '-=0.04',
  )

  tl.to(
    navLinks,
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
    },
    '<0.08',
  )

  return new Promise((resolve) => {
    tl.eventCallback('onComplete', () => resolve())
  })
}

export function scheduleHeroIntro(): Promise<void> {
  return new Promise((resolve) => {
    const run = () => {
      void runHeroIntro().then(resolve)
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run, {once: true})
    } else {
      run()
    }
  })
}