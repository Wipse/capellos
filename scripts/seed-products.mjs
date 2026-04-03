/**
 * Bulk product + categorie import script voor Sanity
 *
 * Gebruik:
 *   1. Maak een write token aan op https://sanity.io/manage → project → API → Tokens (rol: Editor)
 *   2. Zet in apps/astro-capellos/.env:  SANITY_STUDIO_WRITER_TOKEN=sk...
 *   3. Draai: node scripts/seed-products.mjs
 *
 * Categorieën worden aangemaakt als ze nog niet bestaan.
 * Producten die al bestaan (zelfde slug) worden overgeslagen.
 */

import {createClient} from '@sanity/client'
import {readFileSync} from 'fs'
import {resolve} from 'path'

// Laad .env
try {
  const env = readFileSync(resolve(process.cwd(), 'apps/astro-capellos/.env'), 'utf-8')
  for (const line of env.split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key && rest.length && !key.startsWith('#')) {
      process.env[key.trim()] = rest.join('=').trim()
    }
  }
} catch {}

const client = createClient({
  projectId: '26834z8k',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_STUDIO_WRITER_TOKEN,
  useCdn: false,
})

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function key() {
  return Math.random().toString(36).slice(2, 10)
}

// ─── Categorieën ──────────────────────────────────────────────────────────────

const categories = [
  {
    title: 'Prints',
    slug: 'prints',
    colorHex: '#4BAF6E',
    textColorHex: '#FFFFFF',
    description: 'Handgemaakte prints op hoogwaardig papier en canvas.',
    defaultShipping: 'Gratis verzending binnen Nederland, geleverd binnen 3-5 werkdagen.',
  },
  {
    title: 'Kleding',
    slug: 'kleding',
    colorHex: '#D83A45',
    textColorHex: '#FFFFFF',
    description: 'Unieke kleding met originele illustraties.',
    defaultShipping: 'Verzending binnen Nederland €4,95, gratis boven €75.',
  },
  {
    title: 'Schoenen',
    slug: 'schoenen',
    colorHex: '#5B6FE6',
    textColorHex: '#FFFFFF',
    description: 'Handbeschilderde en custom schoenen.',
    defaultShipping: 'Verzending binnen Nederland €4,95, gratis boven €75.',
  },
  {
    title: 'Accessoires',
    slug: 'accessoires',
    colorHex: '#9C27B0',
    textColorHex: '#FFFFFF',
    description: 'Tote bags, telefoonhoesjes en andere accessoires met een eigen karakter.',
    defaultShipping: 'Gratis verzending binnen Nederland, geleverd binnen 3–5 werkdagen.',
  },
]

// ─── Producten ────────────────────────────────────────────────────────────────

const products = [
  // ── Prints ──────────────────────────────────────────────────────────────────
  {
    name: 'Caecilia Draaiavond 2024',
    category: 'Prints',
    price: 29.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Formaat', options: ['A4', 'A3', 'A2']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Hoogwaardig fotopapier 200g/m²'},
      {_type: 'specBoolean', _key: key(), label: 'Gesigneerd', value: true},
      {_type: 'specNumber', _key: key(), label: 'Gewicht', value: 180, unit: 'gram'},
    ],
  },
  {
    name: 'Zomernacht',
    category: 'Prints',
    price: 34.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Formaat', options: ['A4', 'A3', 'A2', '50×70 cm']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Canvas 300g/m²'},
      {_type: 'specBoolean', _key: key(), label: 'Gesigneerd', value: false},
      {_type: 'specNumber', _key: key(), label: 'Gewicht', value: 220, unit: 'gram'},
    ],
  },
  {
    name: 'Ochtendgloren',
    category: 'Prints',
    price: 24.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Formaat', options: ['A5', 'A4', 'A3']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Hoogwaardig fotopapier 200g/m²'},
      {_type: 'specBoolean', _key: key(), label: 'Gesigneerd', value: true},
      {_type: 'specNumber', _key: key(), label: 'Gewicht', value: 160, unit: 'gram'},
    ],
  },
  {
    name: 'Botanische Studie I',
    category: 'Prints',
    price: 39.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Formaat', options: ['A3', 'A2', '50×70 cm']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Museumkwaliteit papier 250g/m²'},
      {_type: 'specBoolean', _key: key(), label: 'Gesigneerd', value: true},
      {_type: 'specNumber', _key: key(), label: 'Gewicht', value: 210, unit: 'gram'},
    ],
  },
  {
    name: 'Stadsgezicht Delft',
    category: 'Prints',
    price: 44.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Formaat', options: ['A3', 'A2', '70×100 cm']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Fine-art papier 300g/m²'},
      {_type: 'specBoolean', _key: key(), label: 'Gesigneerd', value: true},
      {_type: 'specNumber', _key: key(), label: 'Gewicht', value: 240, unit: 'gram'},
    ],
  },
  {
    name: 'Abstract Rood',
    category: 'Prints',
    price: 19.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Formaat', options: ['A5', 'A4']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Hoogwaardig fotopapier 200g/m²'},
      {_type: 'specBoolean', _key: key(), label: 'Gesigneerd', value: false},
      {_type: 'specNumber', _key: key(), label: 'Gewicht', value: 140, unit: 'gram'},
    ],
  },

  // ── Kleding ─────────────────────────────────────────────────────────────────
  {
    name: 'Geborduurd Sweatshirt — Botanisch',
    category: 'Kleding',
    price: 69.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: '80% katoen, 20% polyester'},
      {_type: 'specText', _key: key(), label: 'Pasvorm', value: 'Oversized'},
      {_type: 'specBoolean', _key: key(), label: 'Handgemaakt', value: true},
    ],
  },
  {
    name: 'Tie-dye T-shirt — Zomer',
    category: 'Kleding',
    price: 34.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['XS', 'S', 'M', 'L', 'XL']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: '100% biologisch katoen'},
      {_type: 'specText', _key: key(), label: 'Pasvorm', value: 'Regular fit'},
      {_type: 'specBoolean', _key: key(), label: 'Handgemaakt', value: true},
    ],
  },
  {
    name: 'Geschilderde Denim Jas',
    category: 'Kleding',
    price: 129.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['S', 'M', 'L', 'XL']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: '100% denim'},
      {_type: 'specText', _key: key(), label: 'Pasvorm', value: 'Oversized'},
      {_type: 'specBoolean', _key: key(), label: 'Handgemaakt', value: true},
    ],
  },
  {
    name: 'Geborduurde Hoodie — Bloemen',
    category: 'Kleding',
    price: 79.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: '80% katoen, 20% polyester'},
      {_type: 'specText', _key: key(), label: 'Pasvorm', value: 'Oversized'},
      {_type: 'specBoolean', _key: key(), label: 'Handgemaakt', value: true},
    ],
  },
  {
    name: 'Hand-painted Crop Top',
    category: 'Kleding',
    price: 44.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['XS', 'S', 'M', 'L']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: '100% biologisch katoen'},
      {_type: 'specText', _key: key(), label: 'Pasvorm', value: 'Cropped fit'},
      {_type: 'specBoolean', _key: key(), label: 'Handgemaakt', value: true},
    ],
  },
  {
    name: 'Custom Varsity Jacket',
    category: 'Kleding',
    price: 159.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['S', 'M', 'L', 'XL', 'XXL']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Wol en leer'},
      {_type: 'specText', _key: key(), label: 'Pasvorm', value: 'Regular fit'},
      {_type: 'specBoolean', _key: key(), label: 'Handgemaakt', value: true},
    ],
  },

  // ── Schoenen ────────────────────────────────────────────────────────────────
  {
    name: 'Hand-painted Sneakers — Botanisch',
    category: 'Schoenen',
    price: 119.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['36', '37', '38', '39', '40', '41', '42', '43', '44']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Canvas met acrylverf'},
      {_type: 'specBoolean', _key: key(), label: 'Handgeschilderd', value: true},
      {_type: 'specText', _key: key(), label: 'Basis schoen', value: 'Converse Chuck Taylor'},
    ],
  },
  {
    name: 'Custom Vans — Abstract',
    category: 'Schoenen',
    price: 109.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['36', '37', '38', '39', '40', '41', '42', '43']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Canvas met acrylverf'},
      {_type: 'specBoolean', _key: key(), label: 'Handgeschilderd', value: true},
      {_type: 'specText', _key: key(), label: 'Basis schoen', value: 'Vans Old Skool'},
    ],
  },
  {
    name: 'Geschilderde Instappers — Bloemen',
    category: 'Schoenen',
    price: 89.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['36', '37', '38', '39', '40', '41']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Leer met acrylverf'},
      {_type: 'specBoolean', _key: key(), label: 'Handgeschilderd', value: true},
      {_type: 'specText', _key: key(), label: 'Basis schoen', value: 'Leren instappers'},
    ],
  },
  {
    name: 'Custom Air Force 1 — Grafisch',
    category: 'Schoenen',
    price: 149.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['38', '39', '40', '41', '42', '43', '44', '45']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Leer met acrylverf'},
      {_type: 'specBoolean', _key: key(), label: 'Handgeschilderd', value: true},
      {_type: 'specText', _key: key(), label: 'Basis schoen', value: 'Nike Air Force 1'},
    ],
  },
  {
    name: 'Hand-painted Laarzjes',
    category: 'Schoenen',
    price: 134.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Maat', options: ['36', '37', '38', '39', '40', '41']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Synthetisch leer met acrylverf'},
      {_type: 'specBoolean', _key: key(), label: 'Handgeschilderd', value: true},
      {_type: 'specText', _key: key(), label: 'Basis schoen', value: 'Chelsea boots'},
    ],
  },

  // ── Accessoires ─────────────────────────────────────────────────────────────
  {
    name: 'Tote Bag — Botanisch',
    category: 'Accessoires',
    price: 24.95,
    specifications: [
      {_type: 'specText', _key: key(), label: 'Materiaal', value: '100% biologisch katoen canvas'},
      {_type: 'specText', _key: key(), label: 'Afmetingen', value: '38 × 42 cm'},
      {_type: 'specNumber', _key: key(), label: 'Draagvermogen', value: 10, unit: 'kg'},
      {_type: 'specBoolean', _key: key(), label: 'Handbeschilderd', value: true},
    ],
  },
  {
    name: 'Tote Bag — Abstract',
    category: 'Accessoires',
    price: 24.95,
    specifications: [
      {_type: 'specText', _key: key(), label: 'Materiaal', value: '100% biologisch katoen canvas'},
      {_type: 'specText', _key: key(), label: 'Afmetingen', value: '38 × 42 cm'},
      {_type: 'specNumber', _key: key(), label: 'Draagvermogen', value: 10, unit: 'kg'},
      {_type: 'specBoolean', _key: key(), label: 'Handbeschilderd', value: true},
    ],
  },
  {
    name: 'Telefoonhoesje — Bloemen (iPhone)',
    category: 'Accessoires',
    price: 34.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Model', options: ['iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 15 Pro', 'iPhone 16']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Hard plastic met UV-print'},
      {_type: 'specBoolean', _key: key(), label: 'MagSafe compatible', value: true},
    ],
  },
  {
    name: 'Telefoonhoesje — Abstract (Samsung)',
    category: 'Accessoires',
    price: 34.95,
    specifications: [
      {_type: 'specChoice', _key: key(), label: 'Model', options: ['Samsung S23', 'Samsung S24', 'Samsung S24+', 'Samsung S24 Ultra']},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Hard plastic met UV-print'},
      {_type: 'specBoolean', _key: key(), label: 'MagSafe compatible', value: false},
    ],
  },
  {
    name: 'Emaille Mok — Botanisch',
    category: 'Accessoires',
    price: 19.95,
    specifications: [
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Emaille'},
      {_type: 'specNumber', _key: key(), label: 'Inhoud', value: 350, unit: 'ml'},
      {_type: 'specBoolean', _key: key(), label: 'Vaatwasserbestendig', value: false},
    ],
  },
  {
    name: 'Stickerset — Illustraties',
    category: 'Accessoires',
    price: 9.95,
    specifications: [
      {_type: 'specNumber', _key: key(), label: 'Aantal stickers', value: 12, unit: 'stuks'},
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Vinyl, waterproof'},
      {_type: 'specText', _key: key(), label: 'Formaat', value: 'Variërend, 3–8 cm'},
    ],
  },
  {
    name: 'Canvas Rugzak — Custom',
    category: 'Accessoires',
    price: 59.95,
    specifications: [
      {_type: 'specText', _key: key(), label: 'Materiaal', value: '100% katoen canvas'},
      {_type: 'specText', _key: key(), label: 'Afmetingen', value: '30 × 40 × 12 cm'},
      {_type: 'specNumber', _key: key(), label: 'Inhoud', value: 15, unit: 'liter'},
      {_type: 'specBoolean', _key: key(), label: 'Handbeschilderd', value: true},
    ],
  },
  {
    name: 'Poster Tube — Beschermd transport',
    category: 'Accessoires',
    price: 7.95,
    specifications: [
      {_type: 'specText', _key: key(), label: 'Materiaal', value: 'Stevig karton'},
      {_type: 'specText', _key: key(), label: 'Geschikt voor', value: 'Tot A1 formaat'},
      {_type: 'specNumber', _key: key(), label: 'Diameter', value: 8, unit: 'cm'},
    ],
  },
]

// ─── Script ───────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.SANITY_STUDIO_WRITER_TOKEN) {
    console.error('❌  Zet SANITY_STUDIO_WRITER_TOKEN in apps/astro-capellos/.env')
    process.exit(1)
  }

  // ── Stap 1: categorieën aanmaken als ze niet bestaan ──
  console.log('\n📂  Categorieën controleren...')
  const existingCats = await client.fetch(`*[_type == "category"]{ _id, title, "slug": slug.current }`)
  const categoryMap = Object.fromEntries(existingCats.map((c) => [c.title, c._id]))

  for (const cat of categories) {
    if (categoryMap[cat.title]) {
      console.log(`⏭️  Categorie "${cat.title}" bestaat al.`)
      continue
    }

    const doc = await client.create({
      _type: 'category',
      title: cat.title,
      slug: {_type: 'slug', current: cat.slug},
      color: {hex: cat.colorHex},
      textColor: {hex: cat.textColorHex},
      description: cat.description,
      defaultShipping: cat.defaultShipping,
    })

    categoryMap[cat.title] = doc._id
    console.log(`✅  Categorie "${cat.title}" aangemaakt.`)
  }

  // ── Stap 2: producten aanmaken ──
  console.log('\n📦  Producten aanmaken...')
  let created = 0
  let skipped = 0

  for (const product of products) {
    const categoryId = categoryMap[product.category]

    if (!categoryId) {
      console.warn(`⚠️  Categorie "${product.category}" niet gevonden — "${product.name}" overgeslagen.`)
      skipped++
      continue
    }

    const slug = slugify(product.name)
    const existing = await client.fetch(
      `*[_type == "product" && slug.current == $slug][0]._id`,
      {slug},
    )

    if (existing) {
      console.log(`⏭️  "${product.name}" bestaat al.`)
      skipped++
      continue
    }

    await client.create({
      _type: 'product',
      name: product.name,
      slug: {_type: 'slug', current: slug},
      category: {_type: 'reference', _ref: categoryId},
      price: product.price,
      publishedAt: new Date().toISOString(),
      ...(product.specifications?.length ? {specifications: product.specifications} : {}),
    })

    console.log(`✅  "${product.name}"`)
    created++
  }

  console.log(`\n🏁  Klaar — ${created} producten aangemaakt, ${skipped} overgeslagen.`)
}

main().catch((err) => {
  console.error('❌  Fout:', err.message)
  process.exit(1)
})
