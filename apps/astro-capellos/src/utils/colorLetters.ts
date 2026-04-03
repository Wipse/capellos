const palette = [
  '#6739CB', // deep purple
  '#B581FF', // indigo
  '#2C7FFB', // blue
  '#009100', // forest green
  '#02C97D', // green
  '#00CFD6', // light-blue
  '#D83A45', // red
  '#FFB300', // deep orange
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
