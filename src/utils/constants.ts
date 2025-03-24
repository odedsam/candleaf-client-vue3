import { Face, Features } from '@/types/index'
import { getImageUrl } from '@/utils/formatters'
import blueBerries from '@/assets/catalog/blueberriesCup.svg'
import cherries from '@/assets/catalog/cherriesCup.svg'
import cinnamon from '@/assets/catalog/cinnamonCup.svg'
import lemon from '@/assets/catalog/lemonCup.svg'
import lavender from '@/assets/catalog/lavenderCup.svg'
import orange from '@/assets/catalog/orangeCup.svg'
import spiced from '@/assets/catalog/spicedCup.svg'
import strawberry from '@/assets/catalog/strawberryCup.svg'

export const descriptionSection = 'All hand-made with natural soy wax, Candleaf is made for your pleasure moments.'
export const ingredients = {
  wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
  fragrance: 'Premium quality ingredients with natural essential oils',
  burningTime: '70-75 hours',
  dimensions: '10cm x 5cm',
  weight: '400g',
}

export const features: Features[] = [
  {
    id: 1,
    title: 'Eco-sustainable',
    description: 'All recyclable materials, 0% CO2 emissions',
  },
  {
    id: 2,
    title: 'Hypoallergenic',
    description: '100% natural, human-friendly ingredients',
  },
  {
    id: 3,
    title: 'Handmade',
    description: 'All candles are craftly made with love.',
  },
  {
    id: 4,
    title: 'Long burning',
    description: 'No more waste. Created for last long.',
  },
]



export const faces: Face[] = [
  {
    personFace: getImageUrl('maleImage.svg'),
    reviewText: 'love it! No more air fresheners',
    name: 'Sam',
  },
  {
    personFace: getImageUrl('girlImage.svg'),
    reviewText: 'love it! No more air fresheners',
    name: 'Luisa',
  },

  {
    personFace: getImageUrl('maleImage.svg'),
    reviewText: 'love it! No more air fresheners',
    name: 'Sam',
  },
  {
    personFace: getImageUrl('girlImage.svg'),
    reviewText: 'love it! No more air fresheners',
    name: 'Luisa',
  },
  {
    personFace: getImageUrl('maleImage.svg'),
    reviewText: 'love it! No more air fresheners',
    name: 'Sam',
  },
  {
    personFace: getImageUrl('girlImage.svg'),
    reviewText: 'love it! No more air fresheners',
    name: 'Luisa',
  },
]



/* 1 / 8 products ings in home page */
export const productCatalog = [
  {
    id: 21,
    title: 'Frosted Mint Bliss',
    image: spiced,
    price: 12.49,
    ingredients: {
      Wax: 'Pure Beeswax with a clean and steady burn',
      Fragrance: ' Hand-selected botanical extracts and essential oils',
      BurningTime: ' 65-70 hours',
      Dimension: ' 9cm x 5cm',
      Weight: ' 380g',
    },
  },

  {
    id: 22,
    title: 'Strawberry Dream Glow',
    image: strawberry,
    price: 10.99,
    ingredients: {
      Wax: 'Natural Palm Wax with a crystalline finish',
      Fragrance: 'A mix of fresh florals and warm vanilla',
      BurningTime: '75-80 hours',
      Dimension: '11cm x 5.5cm',
      Weight: '420g',
    },
  },

  {
    id: 23,
    title: 'Blueberry Frost Essence',
    image: blueBerries,
    price: 11.79,
    ingredients: {
      Wax: 'Paraffin-free blend of soy and coconut wax',
      Fragrance: 'Pure lavender with hints of chamomile',
      BurningTime: '60-65 hours',
      Dimension: '8cm x 4cm',
      Weight: '350g',
    },
  },
  {
    id: 24,
    title: 'Zesty Lemon Zing',
    image: lemon,
    price: 11.79,

    ingredients: {
      Wax: ' Eco-friendly Rapeseed wax for a long-lasting burn',
      Fragrance: 'Earthy sandalwood with citrus undertones',
      BurningTime: '70-75 hours',
      Dimension: ' 10cm x 5cm',
      Weight: ' 400g',
    },
  },
  {
    id: 25,
    title: 'Golden Orange Sunset',
    image: orange,
    price: 9.59,

    ingredients: {
      Wax: ' Blended soy and beeswax for a rich aroma',
      Fragrance: ' Spiced cinnamon with warm amber notes',
      BurningTime: '85-90 hours',
      Dimension: '13cm x 7cm',
      Weight: '550g',
    },
  },

  {
    id: 26,
    title: 'Cinnamon Spice Haven',
    image: cinnamon,
    price: 13.29,

    ingredients: {
      Wax: 'Hand-poured Coconut and Apricot wax blend',
      Fragrance: 'Tropical fruits with subtle jasmine accents',
      BurningTime: '72-78 hours',
      Dimension: '11cm x 5cm',
      Weight: ' 430g',
    },
  },

  {
    id: 27,
    title: 'Cherry Blossom Delight',
    image: cherries,
    price: 10.49,
    ingredients: {
      Wax: '100% Soy wax with no added toxins',
      Fragrance: ' Refreshing eucalyptus and peppermint',
      BurningTime: ' 68-73 hours',
      Dimension: '9cm x 4.5cm',
      Weight: '390g',
    },
  },

  {
    id: 28,
    title: 'Lavender Serenity Mist',
    image: lavender,
    price: 11.99,
    ingredients: {
      Wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
      fragrance: 'Premium quality ingredients with natural essential oils',
      burningTime: '70-75 hours',
      dimensions: '10cm x 5cm',
      weight: '400g',
    },
  },
]
