
import { BASE_URL } from '../utils/constants';
import useCheckUser from '../utils/customhooks/useCheckUser';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Premium = () => {

    
   
    const user = useSelector((store) => store?.user);

    useEffect(()=>{
       verifyPremiumUser()
    },[]);



  const [isUserPremium,setIsUserPremium] = useState(false);

  const verifyPremiumUser = async()=>{

  try {
    const res = await axios.get(BASE_URL + "/premium/verify",{withCredentials:true});
    if(res.data.isPremium) setIsUserPremium(true);
  } catch(err) {
    console.error("Error verifying premium user:", err);
  }

  }



    const silverFeatures = [
        "Live Chat",
        "Connections support for 50 people"
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
    },
    handler : verifyPremiumUser
};
var rzp1 = new window.Razorpay(options);
    rzp1.open();
    
    };

  return   isUserPremium ? (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Premium Badge Section */}
        <div className="text-center mb-10">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 p-1 shadow-2xl shadow-amber-500/30">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                <img
                  src={user?.photoUrl || "https://api.dicebear.com/7.x/avataaars/svg?seed=premium"}
                  alt="Premium User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Crown Icon */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <svg className="w-12 h-12 text-amber-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 2h14v2H5v-2z"/>
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome, {user?.firstName}!
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-full text-sm shadow-lg">
              ⭐ PREMIUM MEMBER
            </span>
          </div>
          <p className="text-gray-400 text-lg">
            You have access to all exclusive features
          </p>
        </div>

        {/* Premium Card */}
        <div className="bg-gray-900 rounded-2xl border border-amber-500/30 overflow-hidden shadow-xl shadow-amber-500/10">
          {/* Header Banner */}
          <div className="h-32 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="0,100 100,0 100,100"/>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">👑</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Premium Benefits</h2>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Unlimited Chat</h3>
                  <p className="text-gray-400 text-sm">Message anyone, anytime</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Unlimited Connections</h3>
                  <p className="text-gray-400 text-sm">Connect with everyone</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Verified Badge</h3>
                  <p className="text-gray-400 text-sm">Stand out from the crowd</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Priority Support</h3>
                  <p className="text-gray-400 text-sm">Get help faster</p>
                </div>
              </div>
            </div>

            {/* Thank You Message */}
            <div className="text-center p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/20">
              <p className="text-amber-300 font-medium">
                🎉 Thank you for being a premium member! Enjoy all the exclusive features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) :(
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

