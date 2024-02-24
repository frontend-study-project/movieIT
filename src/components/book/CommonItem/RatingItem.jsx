import styledCommon from '../../../pages/Book/book.module.css';

const RatingItem = ({
  rating,
  ratingDesc
}) => {
  return <span className={`${styledCommon.img_rating} ${styledCommon['img_rating' + rating]}`}>{ratingDesc}</span>
}
export default RatingItem;