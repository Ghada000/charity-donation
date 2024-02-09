import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/progressBar.css'; // Import the CSS file for ProgressBar styling

const ProgressBar = () => {
  const [totalDonation, setTotalDonation] = useState(0);
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const goal = 1000000; // $1 million

  const fetchTotalDonation = async () => {
    try {
      const response = await axios.get('http://localhost:5000/donation/gett'); // Adjust the endpoint based on your backend route
      const { totalDonation } = response.data;
      setTotalDonation(totalDonation);
    } catch (error) {
      console.error('Error fetching total donation:', error);
    }
  };

  useEffect(() => {
    fetchTotalDonation();
  }, []);

  // Calculate progress percentage
  const progressPercentage = Math.min((totalDonation / goal) * 100, 100);

  const handleDonationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/donation/donate', { amount: donationAmount, donorName });
      console.log(response.data); // You can handle the response as needed
      // Refetch total donation after successful donation
      fetchTotalDonation();
      // Clear input fields after donation
      setDonationAmount('');
      setDonorName('');
    } catch (error) {
      console.error('Error donating:', error);
    }
  };

  return (
    <div>
      <h2>Donation Progress</h2>
      <div className="progressBarContainer">
        <div className="progressBar" style={{ width: `${progressPercentage}%` }}>
          <span className="progressBarText">{progressPercentage.toFixed(2)}%</span>
        </div>
      </div>
      <p>Total Donation: ${totalDonation}</p>

      {/* Donation Form */}
      <form onSubmit={handleDonationSubmit}>
        <div className="formGroup">
          <label htmlFor="donationAmount" className="formLabel">Donation Amount</label>
          <input type="number" className="form-control" id="donationAmount" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} required />
        </div>
        <div className="formGroup">
          <label htmlFor="donorName" className="formLabel">Your Name</label>
          <input type="text" className="form-control" id="donorName" value={donorName} onChange={(e) => setDonorName(e.target.value)} required />
        </div>
        <button type="submit" className="donateButton">Donate</button>
      </form>
    </div>
  );
};

export default ProgressBar;
