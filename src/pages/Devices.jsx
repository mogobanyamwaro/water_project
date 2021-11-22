import React from 'react';
import FeaturedDeviceInfo from '../components/featuredDeviceInfo/FeaturedDeviceInfo';
import CustomerList from '../components/customerList/CustomerList';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../config';
function Devices() {
  const [wateDetails, setWaterDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWateDetails = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/water');
        setWaterDetails(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchWateDetails();
  }, []);
  const newDetails = wateDetails.map((item) => {
    return {
      id: item._id,
      Phone_Number: item.mpesaMessage,
      Paid_Ksh: Number(item.amount),
      Amount_Litres: Number(item.totalLitres),
      TimeStamp: item.updatedAt,
    };
  });
  const { Paid_Ksh, Amount_Litres } = newDetails.reduce(
    (totalAmount, item) => {
      const { Paid_Ksh, Amount_Litres } = item;

      totalAmount.Paid_Ksh += Number(Paid_Ksh);
      totalAmount.Amount_Litres += Number(Amount_Litres);
      return totalAmount;
    },
    {
      Paid_Ksh: 0,
      Amount_Litres: 0,
    }
  );
  console.log(Paid_Ksh, Amount_Litres);
  return (
    <div>
      <FeaturedDeviceInfo
        totalAmount={Paid_Ksh}
        totalLitres={Amount_Litres}
        loading={loading}
      />
      <CustomerList loading={loading} newDetails={newDetails} />
    </div>
  );
}

export default Devices;
