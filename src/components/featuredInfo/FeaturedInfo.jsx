import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Devices</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">23</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Amount</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Ksh 3,400</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Litres</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">3,250</span>
        </div>
      </div>
    </div>
  );
}
