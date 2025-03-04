import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const RTLCreditCardForm = () => {
  // State variables
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async () => {
    if (!cardholderName || !cardNumber || !expDate || !cvv) {
      Swal.fire({
        icon: "warning",
        title: "خطأ!",
        text: "يرجى ملء جميع الحقول!",
        confirmButtonColor: "#2DAA9E",
      });
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/credit-cards/add",
        {
          cardholder_name: cardholderName,
          card_number: cardNumber,
          expiration_date: expDate,
          cvv: cvv,
        }
      );

      // إظهار تنبيه النجاح
      Swal.fire({
        icon: "success",
        title: "نجاح!",
        text: "تمت إضافة البطاقة بنجاح!",
        confirmButtonColor: "#2DAA9E",
      });

      setIsOpen(false);
      setCardholderName("");
      setCardNumber("");
      setExpDate("");
      setCvv("");
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال البيانات:", error);

      // Handle errors
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "حدث خطأ في الخادم، حاول لاحقًا."
        );
      } else if (error.request) {
        setErrorMessage("لا يمكن الاتصال بالخادم، تحقق من اتصال الإنترنت.");
      } else {
        setErrorMessage("حدث خطأ غير متوقع، حاول مرة أخرى.");
      }

      // إظهار تنبيه الخطأ
      Swal.fire({
        icon: "error",
        title: "خطأ!",
        text: errorMessage || "حدث خطأ أثناء معالجة الطلب.",
        confirmButtonColor: "#D33",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Button to open the payment modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-teal-600 text-white px-4 py-2 rounded"
      >
        ساهم الآن
      </button>

      {/* Payment modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[600px] p-8 rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Modal content */}
            <div className="flex h-full">
              {/* Credit card preview */}
              <div className="w-1/2 flex items-center justify-center p-4 rounded-lg">
                <div className="w-64 h-40 relative">
                  <div className="absolute w-full h-full rounded-xl bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-400 p-4 shadow-lg">
                    {/* Card icons */}
                    <div className="flex justify-between">
                      <div className="w-10 h-10 rounded-full bg-white opacity-90"></div>
                      <div className="w-6 h-6 rounded-full border-2 border-white opacity-70"></div>
                    </div>

                    {/* Card number */}
                    <div className="mt-6 text-white text-lg tracking-widest">
                      {cardNumber ? cardNumber : "0000 0000 0000 0000"}
                    </div>

                    {/* Cardholder name and expiration date */}
                    <div className="mt-6 flex justify-between text-white">
                      <div className="text-xs">
                        {cardholderName ? cardholderName : "اسم حامل البطاقة"}
                      </div>
                      <div className="text-xs">
                        {expDate ? expDate : "الشهر/السنة"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment form */}
              <div className="w-1/2 flex items-center justify-center p-4">
                <div className="w-64 space-y-4 text-right" dir="rtl">
                  {/* Error message */}
                  {errorMessage && (
                    <div className="text-red-500 text-sm">{errorMessage}</div>
                  )}

                  {/* Cardholder name input */}
                  <div>
                    <label className="block text-xs text-gray-700 mb-1">
                      اسم حامل البطاقة
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-2 text-right"
                      placeholder="أدخل اسم حامل البطاقة"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                    />
                  </div>

                  {/* Card number input */}
                  <div>
                    <label className="block text-xs text-gray-700 mb-1">
                      رقم البطاقة
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-2 text-right"
                      placeholder="أدخل رقم البطاقة"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>

                  {/* Expiration date and CVV inputs */}
                  <div className="flex space-x-4 space-x-reverse">
                    <div className="w-1/2">
                      <label className="block text-xs text-gray-700 mb-1">
                        تاريخ الانتهاء
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2 text-right"
                        placeholder="MM/YY"
                        value={expDate}
                        onChange={(e) => setExpDate(e.target.value)}
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-xs text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2 text-right"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full text-white py-2 rounded"
                    style={{ backgroundColor: "#2DAA9E" }}
                    disabled={loading}
                  >
                    {loading ? "جاري الإرسال..." : "تأكيد"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RTLCreditCardForm;
