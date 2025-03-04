import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [activeTab, setActiveTab] = useState('details');
  
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/projects/AllProject/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };
    fetchProjectDetails();
  }, [id]);

  
  if (!project) return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl font-bold text-gray-600">تحميل...</div>
    </div>
  );

  // Calculate progress percentage
  const progressPercentage = (project.currentAmount / project.targetAmount) * 100;
  
  // Predefined donation amounts
  const donationAmounts = [50, 100, 300, 500];

  return (
    <div className="container mx-auto px-4 py-8 font-sans bg-gray-50" dir="rtl">
      {/* Project Title and Category */}
      <div className="mb-6 text-center">
        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
          {project.category || "مشروع خيري"}
        </span>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{project.title}</h1>
        <p className="text-lg text-gray-600">المؤسسة المسؤولة: {project.organization}</p>
      </div>
      
      {/* Hero Section with Video */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          {/* YouTube Video Embed */}
          {project.youtubeUrl ? (
            <div className="aspect-w-16 aspect-h-9 mb-6 bg-black rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src={`https://www.youtube.com/embed/${project.youtubeUrl.split('v=')[1] || project.youtubeUrl.split('/').pop()}`}
                className="w-full h-96 rounded-lg"
                allowFullScreen
                title={project.title}
              ></iframe>
            </div>
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
            />
          )}
        </div>
        
        <div className="lg:col-span-1">
          {/* Donation Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-lg mb-2">
                <div className="text-teal-600 font-bold">${project.currentAmount}</div>
                <div className="text-gray-500">من ${project.targetAmount}</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5 mb-2">
                <div 
                  className="bg-teal-600 h-5 rounded-full" 
                  style={{ width: `${progressPercentage > 100 ? 100 : progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <div>{project.donorsCount || 0} متبرع</div>
                <div>{Math.round(progressPercentage)}% من الهدف</div>
              </div>
            </div>

            {/* Country and Total Target */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 mb-1 text-sm">بلد التنفيذ</p>
                <p className="font-bold text-lg">{project.country || "غير محدد"}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 mb-1 text-sm">إجمالي التمويل</p>
                <p className="font-bold text-lg">${project.targetAmount}</p>
              </div>
            </div>

            {/* Donation Form */}
            <div className="mb-4">
              <div className="grid grid-cols-4 gap-2 mb-4">
                {donationAmounts.map(amount => (
                  <button 
                    key={amount}
                    className="bg-white border-2 border-teal-600 text-teal-600 rounded-md py-2 font-bold hover:bg-teal-600 hover:text-white transition-colors"
                    onClick={() => setCustomAmount(amount.toString())}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="flex mb-4">
                <span className="bg-gray-200 px-3 py-2 rounded-r-md flex items-center">$</span>
                <input 
                  type="text" 
                  className="flex-grow border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="مبلغ آخر"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>
              <a href="/payment" > 
              <button className="w-full bg-teal-600 text-white py-4 rounded-md font-bold text-lg hover:bg-teal-800 transition-colors flex justify-center items-center shadow-md">
                <span className="ml-2">❤</span>
                ادعم الآن !
              </button>
              </a>
            </div>

            {/* Share Buttons */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-700 mb-3 font-medium text-center">مشاركة المشروع:</p>
              <div className="flex justify-center gap-3">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-blue-700">
                  <span className="font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-800">
                  <span className="font-bold">𝕏</span>
                </button>
                <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-blue-600">
                  <span className="font-bold">in</span>
                </button>
                <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 font-medium text-lg border-b-2 ${
                activeTab === 'details' 
                  ? 'border-teal-600 text-teal-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('details')}
            >
              تفاصيل المشروع
            </button>
            <button
              className={`py-4 px-6 font-medium text-lg border-b-2 ${
                activeTab === 'photos' 
                  ? 'border-teal-600 text-teal-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('photos')}
            >
              صور المشروع
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'details' && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-r-4 border-teal-600 pr-4">لماذا ادعم هذا المشروع؟</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p>{project.whySupport || "لا يوجد وصف متاح لهذا المشروع."}</p>
              
              {/* This is sample content for when whySupport is not available or short */}
              {(!project.whySupport || project.whySupport.length < 100) && (
                <>
                  <p>
                    يهدف هذا المشروع إلى تقديم المساعدة للمحتاجين وتحسين ظروفهم المعيشية. من خلال دعمك، يمكننا توفير الاحتياجات الأساسية والخدمات الضرورية التي تساهم في تحسين حياة الأشخاص المتضررين.
                  </p>
                  <p>
                    تبرعك سيحدث فرقاً كبيراً في حياة الكثيرين، وسيساعد في تنفيذ البرامج والمبادرات التي تسعى لتحقيق التنمية المستدامة وبناء مستقبل أفضل للمجتمعات المحتاجة.
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-r-4 border-teal-600 pr-4">صور المشروع</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[project.photo1Url, project.photo2Url, project.photo3Url, project.photo4Url, 
                project.photo5Url, project.photo6Url, project.photo7Url, project.photo8Url]
                .filter(url => url)
                .map((url, index) => (
                  <div key={index} className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-md group">
                    <img 
                      src={url} 
                      alt={`صورة ${index + 1}`} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
                
              {/* Placeholder images if not enough photos are provided */}
              {[project.photo1Url, project.photo2Url, project.photo3Url, project.photo4Url, 
                project.photo5Url, project.photo6Url, project.photo7Url, project.photo8Url]
                .filter(url => url).length < 4 && (
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">صورة غير متاحة</span>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>


      {/* Bottom CTA */}
      <div className="bg-green-50 p-8 rounded-lg shadow-md text-center mb-12">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">كن جزءاً من التغيير الإيجابي</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          بتبرعك اليوم، ستساهم في دعم هذا المشروع الحيوي وتحقيق أهدافه النبيلة. كل مساهمة، مهما كانت قيمتها، لها أثر كبير.
        </p>
        <a 
          href="/payment" 
          className="inline-block bg-teal-600 text-white py-3 px-12 rounded-md font-bold text-lg hover:bg-teal-800 transition-colors shadow-md"
        >
          ادعم الآن !
        </a>
        
      </div>
    </div>
  );
};

export default ProjectDetails;