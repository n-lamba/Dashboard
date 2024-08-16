
"use client";
import { useState } from 'react';

export default function HomePage() {
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-overlay') {
      setShowEditPopup(false);
    }
  };
  const paymentMethods = [
    {
      type: 'Credit Card',
      icon: './visa.png', // replace with your actual icon paths
      last4: '1234',
      expiry: 'October 2026',
      preferred: true,
    },
  ];

  return (
    <div className="text-black p-4">
      <h2 className="text-xl font-semibold mb-4">Billing</h2>
      <p className="text-m mb-2">Billing Type</p>
      <p className="text-gray-600 mb-6 text-s">Pay per Trip</p>

      <p className="text-lg mb-4">Payment Method(s)</p>
      <ul>
        {paymentMethods.map((method, index) => (
          <li key={index} className="flex items-center justify-between p-4 mb-4">
            <div className="flex items-center">
              <img src={method.icon} alt={`${method.type} Icon`} className="w-10 h-10 mr-4" />
              <div>
                <p className="font-semibold">{method.type} ****{method.last4}</p>
                <p className="text-sm text-gray-500">{method.expiry}</p>
              </div>
            </div>
            <div className="flex items-center">
              {method.preferred && (
                <span className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-1 mr-2">Preferred</span>
              )}
<div className="p-2 rounded-full bg-gray-100">
<img src={'./edit.png'} className="w-3 h-3 "
                onClick={() => setShowEditPopup(true)} 
              />
</div>
            </div>
          </li>
        ))}
      </ul>

      {/* Light grey thin line */}
      <hr className="border-t border-gray-300 mb-6" />

      <button className="p-3 bg-gray-100 text-black rounded-full hover:bg-gray-400">
        + Add Payment Method
      </button>

      {/* Edit Popup */}
      {showEditPopup && (
  <div 
    id="popup-overlay" 
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    onClick={handleOutsideClick} // Closes popup when clicking outside
  >
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
      {/* Top Section with Card Details */}
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        Visa••••7019
        <img src="/visa.png"   className="w-8 h-8 ml-2 flex items-center space-x-4" /> 
      </h3>

      {/* Expiry Date */}
      <div className="mb-4">
        <h5>Expiry Date</h5>
        <p className="text-gray-600">12/24</p>
      </div>

      {/* Country */}
      <div className="mb-4">
        <h5>Country</h5>
        <p className="text-gray-600">United States</p>
      </div>

      {/* Edit and Delete Buttons */}
       
{/* Edit Button */}
<button className="flex   text-grey-600 hover:text-blue-800 md-8 items-center justify-between p-2 mb-2">
  <img src={'./edit.png'} alt="Edit Icon" className="w-3 h-3 mr-2" />
  Edit
</button>

{/* Remove Payment Method Button */}
<div className="flex items-center justify-between">
  <div>
<button className="flex items-center text-red-600 hover:text-red-800">
  <img src={'./delete.png'} alt="Delete Icon" className="w-8 h-5 mr-12 " />
</button>
</div>
<div className="">
    <p>Remove payment method</p>
      <p className="text-gray-600 text-xs ">
        You cannot delete your default payment method. Choose another payment method as default to delete this one.
      </p>
</div>
</div>
      {/* Additional Information */}
      <p className="text-gray-600 text-xs mt-10">
        This payment method will be charged when users order rides, meals, or other Uber products on your Uber for Business account.
      </p>
    </div>
  </div>
)}

      <p className="mt-8 font-semibold" >Statements and Invoices</p>
      <p className="text-xs  mt-6 mb-2">Monthly statements received by users.</p>

      <hr className="border-t border-gray-300 mb-6" />

      <div className="flex flex-col items-center justify-center text-center p-4">
      {/* Centered Image */}
      <img 
        src="/Statement.png" 
        className="mb-6 w-10 h-12" // Adjust margin as needed
      />

      {/* "No statements available" Text */}
      <p className="text-m  mb-4">No statements available</p>

      {/* "A summary statement..." Text */}
      <div className=" flex items-center justify-center w-half max-w-lg">
        <p className=" bg-white px-4 text-gray-600">A summary statement will be generated at the end of each month</p>
      </div>
    </div>
    <hr className="border-t border-gray-300 mb-6 mt-8" />

    <p className="mt-16 mb-2 font-semibold" >Service fees</p>
 
      <hr className="border-t border-gray-300 mb-6" />

      <div className="flex flex-col items-center justify-center text-center p-4">
      {/* Centered Image */}
      <img 
        src="/Statement.png" 
        className="mb-6 w-10 h-12" // Adjust margin as needed
      />

      {/* "No statements available" Text */}
      <p className="text-m  mb-4">No service fee charged</p>

      {/* "A summary statement..." Text */}
      <div className=" flex items-center justify-center w-half  max-w-lg">
        <p className=" bg-white px-4 text-gray-600">No service fees have been charged yet. </p>
      </div>
    </div>

    <hr className="border-t border-gray-300 " />


    </div>
  );
}