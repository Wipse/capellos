/**
 * Strips alle niet-cijfer tekens zodat een telefoonnummer als tel:-link werkt.
 * "06 12 34 56 78" → "0612345678"
 * "+31 6 12345678" → "+31612345678"
 */
export function toPhoneHref(phone: string): string {
  return phone.replace(/[^\d+]/g, '')
}
