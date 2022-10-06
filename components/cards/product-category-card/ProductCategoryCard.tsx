import Image from 'next/image';
import useWindowWidth from '../../../utils/useWindowWidth';
import SecondaryButton from '../../buttons/secondary-button/SecondaryButton';

export interface IProductCategoryCard {
  category: 'headphones' | 'earphones' | 'speakers';
}

const ProductCategoryCard: React.FC<IProductCategoryCard> = ({ category }) => {
  const { screenWidth } = useWindowWidth();
  return (
    <div className="relative flex flex-col items-center w-full category-bg z-10">
      <Image
        src={`/shared/desktop/image-category-thumbnail-${category}.png`}
        alt="author"
        width={screenWidth < 600 ? 178 : 228}
        height={screenWidth < 600 ? 162 : 212}
      />
      <h2 className="font-h6 text-[15px] lg:text-[18px]">{category}</h2>
      <SecondaryButton label="shop" className="pb-5" path={category} />
    </div>
  );
};

export default ProductCategoryCard;