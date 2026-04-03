import type {Product} from '../../queries/products'

// Staggered grid — mobile: 10-col, col-span-5 (2 per rij); tablet: 10-col, col-span-5 (2 per rij, ruimer); desktop: 12-col, col-span-3 (3 per rij)
export const gridPositions = [
  // group 1
  'col-span-5 col-start-2 row-start-1  row-span-4   md:col-span-5 md:col-start-1 md:row-start-1   lg:col-span-3 lg:col-start-5  lg:row-start-1',
  'col-span-5 col-start-5 row-start-5  row-span-4   md:col-span-5 md:col-start-7 md:row-start-4   lg:col-span-3 lg:col-start-1  lg:row-start-5',
  'col-span-5 col-start-1 row-start-9  row-span-4   md:col-span-5 md:col-start-2 md:row-start-9   lg:col-span-3 lg:col-start-9  lg:row-start-3',
  // group 2
  'col-span-5 col-start-6 row-start-10 row-span-4   md:col-span-5 md:col-start-8 md:row-start-14   lg:col-span-3 lg:col-start-2  lg:row-start-11',
  'col-span-5 col-start-3 row-start-14 row-span-4   md:col-span-5 md:col-start-1 md:row-start-18  lg:col-span-3 lg:col-start-6  lg:row-start-9',
  'col-span-5 col-start-4 row-start-18 row-span-4   md:col-span-5 md:col-start-7 md:row-start-23  lg:col-span-3 lg:col-start-10 lg:row-start-13',
  // group 3
  'col-span-5 col-start-1 row-start-22 row-span-4   md:col-span-5 md:col-start-8 md:row-start-28  lg:col-span-3 lg:col-start-1  lg:row-start-19',
  'col-span-5 col-start-6 row-start-24 row-span-4   md:col-span-5 md:col-start-1 md:row-start-32  lg:col-span-3 lg:col-start-5  lg:row-start-17',
  'col-span-5 col-start-2 row-start-28 row-span-4   md:col-span-5 md:col-start-5 md:row-start-37  lg:col-span-3 lg:col-start-9  lg:row-start-21',
]

// Chunk products into groups of 9 so the pattern repeats infinitely
export function chunkProducts(products: Product[]): Product[][] {
  const size = gridPositions.length
  const chunks: Product[][] = []
  for (let i = 0; i < products.length; i += size) {
    chunks.push(products.slice(i, i + size))
  }
  return chunks
}

// Background ghost positions (left/right/width per breakpoint, top is distributed evenly)
const bgSides = [
  {mobile: 'left: 5%;',   tablet: 'left: 60%;',  desktop: 'left: 1%;',  width: '40%', tabletW: '30%', desktopW: '20%'},
  {mobile: 'right: -5%;', tablet: 'left: 18%;',  desktop: 'left: 46%;', width: '40%', tabletW: '30%', desktopW: '20%'},
  {mobile: 'left: -5%;',  tablet: 'left: 60%;',  desktop: 'left: 75%;', width: '40%', tabletW: '30%', desktopW: '20%'},
  {mobile: 'right: -5%;', tablet: 'right: 50%;', desktop: 'left: 2%;',  width: '40%', tabletW: '30%', desktopW: '20%'},
  {mobile: 'left: -5%;',  tablet: 'left: 30%;',  desktop: 'left: 40%;', width: '40%', tabletW: '30%', desktopW: '20%'},
  {mobile: 'right: 5%;',  tablet: 'right: 40%;', desktop: 'left: 5%;',  width: '40%', tabletW: '30%', desktopW: '20%'},
  {mobile: 'left: 30%;',  tablet: 'left: 10%;',  desktop: 'left: 70%;', width: '40%', tabletW: '30%', desktopW: '20%'},
  {mobile: 'right: 10%;', tablet: 'right: 8%;',  desktop: 'left: 20%;', width: '40%', tabletW: '30%', desktopW: '20%'},
]

export interface BgItem {
  mobile: string
  tablet: string
  desktop: string
  imageUrl: string
  index: number
}

// Distribute bg items evenly across the full section height (5% – 95%)
export function buildBgItems(products: Product[]): BgItem[] {
  return products.map((product, i) => {
    const side = bgSides[i % bgSides.length]
    const topPercent = products.length > 1
      ? (5 + (i / (products.length - 1)) * 90).toFixed(1)
      : '50'
    return {
      mobile:  `top: ${topPercent}%; ${side.mobile}  width: ${side.width};`,
      tablet:  `top: ${topPercent}%; ${side.tablet}  width: ${side.tabletW};`,
      desktop: `top: ${topPercent}%; ${side.desktop} width: ${side.desktopW};`,
      imageUrl: product.mainImageUrl ?? 'https://placehold.co/300x400',
      index: i,
    }
  })
}
