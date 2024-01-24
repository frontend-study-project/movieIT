const RatingItem = ({
  rating,
  ratingDesc
}) => {
  return <span className={['img_rating', `img_rating${rating}`].join(' ')}>{ratingDesc}</span>
}
export default RatingItem;