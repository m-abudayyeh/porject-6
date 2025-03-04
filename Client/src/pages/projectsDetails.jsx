import React, { useState } from 'react';
import { FaHeart, FaHandHoldingHeart, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// ملغيييييييييييييييييييييييي
const ProjectSingle = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const youtubeVideoId = "your-youtube-video-idhttps://youtu.be/xHMd2LLNYn8"; // Replace with your actual YouTube video ID

  const handleDonationClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(parseInt(e.target.value) || 0);
  };

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans" dir="rtl">
      {/* Hero Section */}
      <div className="relative w-full h-64 bg-blue-900 rounded-lg overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/70"></div>
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white">
          <h1 className="text-3xl font-bold mb-6">Resin py RANA</h1>
          <p className="text-sm mb-1">تنفيذ: صندوق المرأة للتمويل الأصغر  </p>
        </div>
        
        {/* Video Thumbnail */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <div className="relative w-64 h-36 bg-black rounded-lg overflow-hidden">
            {showVideo ? (
              <iframe 
                className="w-full h-full"
                src={`https://youtube.com/shorts/7SI8KneglJQ?si=WVRZAsVn7efpiMAP${youtubeVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img src="/api/placeholder/256/144" alt="صورة طفل" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={handleVideoClick}>
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 text-white bg-red-600 px-4 py-1 text-sm font-bold">
                  ادعم الآن
                </div>
               
              </>
            )}
          </div>
        </div>
      </div>

      {/* Donation Stats and Form */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Donation Categories */}
        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-4">
          <div className="flex-1 p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center">
            <div className="w-30-white  rounded-full flex items-center justify-center mb-2 overflow-hidden">
              <img src="https://th.bing.com/th/id/OIP.tssxO_1YL7i_1NSuwe1U0wHaFj?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="صورة " className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-gray-500 mb-1">بلد التنفيذ</p>
            <p className="font-bold">الاردن</p>
          </div>
          
          <div className="flex-1 p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 mb-1">تحقيق الهدف</p>
            <p className="font-bold">$ 25,000</p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="w-full md:w-3/4 p-6 border border-gray-200 rounded-lg">
          <div className="flex justify-between mb-6">
            <div className="text-right">
              <p className="text-green-600 font-bold text-xl">$ 2,285</p>
              <p className="text-sm text-gray-500">تم جمعه</p>
            </div>
            <div className="text-left">
              <p className="text-red-600 font-bold text-xl">$ 22,715</p>
              <p className="text-sm text-gray-500">متبقي</p>
            </div>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
            <div className="h-full bg-green-600 rounded-full" style={{ width: '10%' }}></div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <button 
              onClick={() => handleDonationClick(50)}
              className={`px-4 py-2 border ${donationAmount === 50 ? 'border-green-600 text-green-600' : 'border-gray-300'} rounded-md`}
            >
              $50
            </button>
            <button 
              onClick={() => handleDonationClick(100)}
              className={`px-4 py-2 border ${donationAmount === 100 ? 'border-green-600 text-green-600' : 'border-gray-300'} rounded-md`}
            >
              $100
            </button>
            <button 
              onClick={() => handleDonationClick(200)}
              className={`px-4 py-2 border ${donationAmount === 200 ? 'border-green-600 text-green-600' : 'border-gray-300'} rounded-md`}
            >
              $200
            </button>
            <button 
              onClick={() => handleDonationClick(500)}
              className={`px-4 py-2 border ${donationAmount === 500 ? 'border-green-600 text-green-600' : 'border-gray-300'} rounded-md`}
            >
              $500
            </button>
            <div className="flex border border-gray-300 rounded-md">
              <span className="bg-gray-100 px-2 py-2 border-r border-gray-300">$</span>
              <input 
                type="text" 
                placeholder="مبلغ آخر"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="px-2 py-1 w-24 focus:outline-none"
              />
            </div>
          </div>
         
          <a href="/payment">
                            <button className="bg-[#248f83] hover:bg-[#248f83] text-white py-3 px-10 rounded-full text-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                تواصل معنا
                            </button>
                            </a>
          <button className="w-full bg-green-600 text-white py-3 rounded-md font-bold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            تبرع الآن!
          </button>
          
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-right">لماذا تدعم هذا المشروع؟</h2>
        <p className="text-gray-700 text-right mb-4">
          قال رسول الله ﷺ: «أنا وكافل اليتيم في الجنة كهاتين» وأشار بالسبابة والوسطى.
        </p>
        <p className="text-gray-700 text-right mb-4">
          الأطفال هم أكثر فئة متضررة باعتداء عليهم، فقد خلّف العدوان على غزة آلاف اليتامى، وأصبح الكثير منهم بلا مأوى ولا عائل.
        </p>
        <p className="text-gray-700 text-right mb-4">
          بالتعاون مع مهيرة الأمل للأيتام تهدف سلة مشروع المشاريع لجمع "كفالات للأيتام" لتوفير احتياجات 500 يتيم في غزة.
        </p>
        <p className="text-gray-700 text-right">
          تبرع الآن وكن عوناً لهم عن بُعد.
        </p>
      </div>

      {/* Social Share */}
      <div className="flex justify-end gap-2 mb-8">
        <p className="text-gray-600">شارك هذا:</p>
        <a href="#" className="text-blue-600"><FaFacebook /></a>
        <a href="#" className="text-blue-400"><FaTwitter /></a>
        <a href="#" className="text-pink-600"><FaInstagram /></a>
        <a href="#" className="text-red-600"><FaYoutube /></a>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="relative h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img src="/api/placeholder/300/240" alt="صورة مشروع" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img src="/api/placeholder/300/240" alt="صورة مشروع" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img src="/api/placeholder/300/240" alt="صورة مشروع" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img src="/api/placeholder/300/240" alt="صورة مشروع" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img src="/api/placeholder/300/240" alt="صورة مشروع" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img src="/api/placeholder/300/240" alt="صورة مشروع" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Final Donation Button */}
      <div className="flex justify-center mb-8">
        <button className="bg-green-600 text-white py-3 px-16 rounded-md font-bold flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          تبرع الآن!
        </button>
   
      </div>
    </div>
  );
};

export default ProjectSingle;