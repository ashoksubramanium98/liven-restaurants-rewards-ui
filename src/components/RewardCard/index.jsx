import bonusIcon from '../../assets/bonus.png';
import livenLogoWhite from '../../assets/livenLogoWhite.jpeg'
import './index.scss';

const RewardCard = ({ buyPrice, bonusAmount, isAppExclusive }) => {
  return (
    <div className="rewardCard">
      {isAppExclusive && <div className="rewardCard__appExclusive">
        <div className="rewardCard__appExclusive__img__container">
          <img className="rewardCard__appExclusive__img" src={livenLogoWhite} alt="App Exclusive" />
        </div>
        <div> App exclusive </div>
      </div>}
      <div className="rewardCard__price">
        <div className="rewardCard__price__label"> Buy </div>
        <div className="rewardCard__price__value"> {buyPrice} </div>
      </div>
      <div>
        <img src={bonusIcon} alt="Bonus" />
      </div>
      <div className="rewardCard__price">
        <div className="rewardCard__price__label"> Bonus </div>
        <div className="rewardCard__price__value"> {bonusAmount} </div>
      </div>
    </div>
  );
};

export default RewardCard;
