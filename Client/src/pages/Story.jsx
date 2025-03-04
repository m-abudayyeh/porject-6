import React from 'react';
import { Clock } from 'lucide-react';

const Story = () => {
  return (
    <div className="w-full">
      {/* Hero Banner with Background Image */}
      <div className="relative w-full h-96">
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0  bg-opacity-80 z-10"
        ></div>
        
        {/* Background Image */}
        <img 
          src="https://images-ext-1.discordapp.net/external/oU9K1dPL6kxxhsOWz_0s92FZU_ntBjZnLcflw4K0X1I/https/images.pexels.com/photos/7173554/pexels-photo-7173554.jpeg?format=webp&width=894&height=670"
          alt="Ramadan campaign children" 
          className="w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-[#248f83] ">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-7">
نجاح مشروع تصنيع الصابون الطبيعي          </h1>
          <div className="flex items-center gap-2 text-sm">
            <span>2024-07-03 11:53:06</span>
            <span>|</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>5 دقائق قراءة</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Title Section */}
      <div className="max-w-6xl mx-auto py-12 px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 mt-15 text-[#248f83] ">
        نجاح مشروع تصنيع الصابون الطبيعي: قصة إبداع واستدامة       </h2>

          {/* Placeholder for article content */}
          <div className="  text-right  items-end  justify-end" dir="rtl">
      {/* العنوان الرئيسي */}
      <h1 className="text-3xl md:text-4xl font-bold text-right mb-8 text-gray-700">
      البداية: فكرة بسيطة تتحول إلى مشروع ناجح
      </h1>
      
      {/* مقدمة */}
      <p className="text-lg mb-10 leading-relaxed text-right text-gray-700">
       

      بدأ المشروع كفكرة بسيطة لدى صاحبته، التي كانت تبحث عن حلول طبيعية لعناية بشرتها. بعد تجربة عدة وصفات منزلية، قررت تحويل شغفها إلى مشروع تجاري. بدأت بتصنيع الصابون الطبيعي باستخدام مكونات عضوية مثل زيت الزيتون، زيت جوز الهند، والعسل، مع إضافة زيوت عطرية طبيعية لتعزيز فوائد المنتج.
      </p>
      
      {/* قسم التوعية والمشاركة */}
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
      التحديات: من التصنيع إلى التسويق
      </h2>
      
      <p className="text-lg mb-10 leading-relaxed text-right text-gray-700">

      واجهت صاحبة المشروع عدة تحديات في البداية، بدءًا من إتقان عملية التصنيع إلى كيفية تسويق المنتج بشكل فعال. ومع ذلك، استطاعت التغلب على هذه التحديات من خلال التعلم المستمر والاستفادة من تجارب الآخرين في هذا المجال. كما ساعدها التواصل مع مجتمع ريادي داعم في الحصول على التوجيه والإرشاد اللازمين.
      </p>
      
      {/* قسم التفاعل الضخم */}
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
      النجاح: توسيع نطاق المشروع
      </h2>
      
      <p className="text-lg mb-10 leading-relaxed text-right text-gray-700">
        
      بفضل الجودة العالية للمنتج والاهتمام بتفاصيل التغليف والتسويق، بدأ المشروع في جذب العملاء الذين يقدرون المنتجات الطبيعية. تم توسيع نطاق المشروع ليشمل مجموعة متنوعة من منتجات العناية بالبشرة، مثل الكريمات والزيوت الطبيعية، مما ساهم في زيادة الإيرادات وتعزيز مكانة العلامة التجارية.  </p>

       {/* قسم التفاعل الضخم */}
       <h2 className="text-2xl font-bold mb-6 text-gray-700">
       الاستدامة: الالتزام بالبيئة      </h2>
      
      <p className="text-lg mb-10 leading-relaxed text-right text-gray-700">
        
      يتميز المشروع بتركيزه على الاستدامة، حيث يتم استخدام مواد قابلة للتحلل وتغليف صديق للبيئة. هذا الالتزام بالبيئة جذب عملاء يهتمون بالحفاظ على البيئة، مما عزز من ولائهم للعلامة التجارية.

      </p>

       {/* قسم التفاعل الضخم */}
       <h2 className="text-2xl font-bold mb-6 text-gray-700">
       المستقبل: طموحات وتطلعات
      </h2>
      
      <p className="text-lg mb-10 leading-relaxed text-right text-gray-700">
       
      تتطلع صاحبة المشروع إلى توسيع نطاق عملها لتشمل أسواقًا جديدة، سواء محليًا أو دوليًا. كما تخطط لإطلاق خط إنتاج جديد من المنتجات الطبيعية التي تلبي احتياجات متنوعة، مع الحفاظ على جودة المنتج وقيمته المضافة.</p>
    </div>
        </div>
      </div>
   
  );
};

export default Story;






