import gsap from 'gsap'

/**
 * GSAP intro for the main hero: logo fades in from below.
 * Skipped when prefers-reduced-motion is set.
 */
export function runHeroIntro(): Promise<void> {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (reducedMotion.matches) return Promise.resolve()

  const logoWrap = document.getElementById('hero-logo-wrap')
  if (!logoWrap) return Promise.resolve()

  gsap.set(logoWrap, {autoAlpha: 0, y: 36})

  const tl = gsap.timeline()

  tl.to(logoWrap, {
    autoAlpha: 1,
    y: 0,
    duration: 0.9,
    ease: 'power2.out',
  })

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
