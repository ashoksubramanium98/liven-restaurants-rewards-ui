import Header from '../../components/Header';
import RewardCard from '../../components/RewardCard';
import Footer from '../../components/Footer';
import data from '../../data';
import './index.scss';

const RewardsListing = () => {
  return (
    <div className='rewardListing'>
      <Header />
      <div className='rewardListing__content'>
        <div className='rewardListing__content__title'> San Dollars </div>
        <div className='rewardListing__content__description'> Pay now, eat more later! Earn a bonus when you buy a food upfront. Tap now to purchase. </div>
      </div>
      <div className="rewardListing__listing-container">
        {data.rewardListing.map(({ buyPrice, bonusAmount, isAppExclusive }) => 
          <RewardCard buyPrice={buyPrice} bonusAmount={bonusAmount} isAppExclusive={isAppExclusive} />)}
      </div>
      <Footer />
    </div>
  )
};

export default RewardsListing;
