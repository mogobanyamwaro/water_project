import './FeaturedDeviceInfo.css';

import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TapAndPlayIcon from '@material-ui/icons/TapAndPlay';
import { blue, deepOrange, green } from '@material-ui/core/colors';

export default function FeaturedDeviceInfo({
  totalAmount,
  totalLitres,
  loading,
}) {
  if (loading) {
    return <h1>Please wait...</h1>;
  }
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitleContainer">
          <span className="featuredTitle">Devices ID</span>
        </div>
        <div>
          <TapAndPlayIcon
            className="featuredIcon"
            style={{ fontSize: 75, color: green[500] }}
          />
          <span className="featuredMoney">233421</span>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredTitleContainer">
          <span className="featuredTitle">Daily Amount</span>
        </div>
        <div>
          <AttachMoneyIcon
            className="featuredIcon"
            style={{ fontSize: 75, color: deepOrange[500] }}
          />
          <span className="featuredMoney">Ksh {totalAmount}</span>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredTitleContainer">
          <span className="featuredTitle">Daily Water Dispensed</span>
        </div>
        <div>
          <LocalDrinkIcon
            className="featuredIcon"
            style={{ fontSize: 75, color: blue[500] }}
          />
          <span className="featuredMoney">{totalLitres} Litres</span>
        </div>
      </div>
    </div>
  );
}
