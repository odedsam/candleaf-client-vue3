import { Face } from '@/types/index'
import { getImageUrl } from "@/utils/imageLoader"


export const descriptionSection ='All hand-made with natural soy wax, Candleaf is made for your pleasure moments.'
export const ingredients = {
  wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
  fragrance: 'Premium quality ingredients with natural essential oils',
  burningTime: '70-75 hours',
  dimensions: '10cm x 5cm',
  weight: '400g',
}


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
