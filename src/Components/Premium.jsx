
import { BASE_URL } from '../utils/constants';
import useCheckUser from '../utils/customhooks/useCheckUser';
import axios from 'axios';

const Premium = () => {
    
    useCheckUser();

    const silverFeatures = [
        "Live Chat",
        "Connections suport for 50 people"
    ];

    const goldFeatures = [
        "Live Chat",
        "Unlimited Connections"
    ];

    const handleMembershipClick = async (type) => {
        // Add your membership logic here
        console.log(`${type} membership selected`);
        const order = await axios.post(BASE_URL + "/payment/create",{membershipType:type},{
          withCredentials:true
        })
        console.log(order);

      // razorpay dialogue box will appear brother
    
      const {keyId,currency,amount,orderId,notes}=order.data;


       var options = {
    "key": keyId,
    "amount":amount,
    "currency": currency,
    "name": "DevConnect", 
    "description": "Connect to other devlopers",
    "image": "https://example.com/your_logo",
    "order_id": orderId, 
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": { 
        "name": notes.firstName+" "+notes.lastName,
        "email": notes.emailId,
        "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new window.Razorpay(options);
    rzp1.open();
    
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Premium Plan</h1>
          <p className="text-lg text-gray-600">Unlock amazing features and find your perfect match</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Silver Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-300 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Silver</h2>
                <div className="text-4xl font-bold text-gray-700 mb-2">₹999<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600">Perfect for serious devlopers</p>
              </div>

              <ul className="space-y-4 mb-8">
                {silverFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleMembershipClick('Silver')}
                className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Gold Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
            <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-300 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Gold</h2>
                <div className="text-4xl font-bold text-gray-700 mb-2">₹1999<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600">Ultimate  experience</p>
              </div>

              <ul className="space-y-4 mb-8">
                {goldFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleMembershipClick('Gold')}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">Cancel anytime • No hidden fees</p>
        </div>
      </div>
    </div>
  )
}

export default Premium;

