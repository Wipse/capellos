const palette = [
  '#E91E63', // pink
  '#9C27B0', // purple
  '#673AB7', // deep purple
  '#3F51B5', // indigo
  '#2196F3', // blue
  '#009688', // teal
  '#F44336', // red
  '#FF5722', // deep orange
]

export type ColoredChar = {char: string; color: string | null}

/**
 * Splits tekst op in letters, elk met een kleur uit de palette.
 * Spaties krijgen geen kleur. Gebruik op witte achtergrond.
 *
 * @example
 * const chars = colorLetters('Capellos')
 * // In Astro template:
 * // {chars.map(({char, color}) => color
 * //   ? <span style={`color: ${color};`}>{char}</span>
 * //   : ' '
 * // )}
 */
export function colorLetters(text: string): ColoredChar[] {
  // Shuffle a copy of the palette so elke aanroep een andere volgorde heeft,
  // maar binnen één woord nooit twee keer dezelfde kleur op rij.
  const shuffled = [...palette].sort(() => Math.random() - 0.5)
  let colorIdx = 0
  return text.split('').map((char) => {
    if (char === ' ') return {char, color: null}
    const color = shuffled[colorIdx % shuffled.length]
    colorIdx++
    return {char, color}
  })
}
