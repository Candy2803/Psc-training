import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useModal } from "../context/ModalContext";

interface FormData {
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  parentPhone: string;
  relationship: string;
  teenFirstName: string;
  teenLastName: string;
  teenAge: string;
  teenGrade: string;
  school: string;
  interests: string;
  experience: string;
  expectations: string;
  specialNeeds: string;
  paymentMethod: string;
  transactionCode: string;
}

const RegistrationModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState<FormData>({
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    relationship: "",
    teenFirstName: "",
    teenLastName: "",
    teenAge: "",
    teenGrade: "",
    school: "",
    interests: "",
    experience: "",
    expectations: "",
    specialNeeds: "",
    paymentMethod: "",
    transactionCode: "",
  });
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isModalOpen, closeModal]);

  const resetForm = () => {
    setFormData({
      parentFirstName: "",
      parentLastName: "",
      parentEmail: "",
      parentPhone: "",
      relationship: "",
      teenFirstName: "",
      teenLastName: "",
      teenAge: "",
      teenGrade: "",
      school: "",
      interests: "",
      experience: "",
      expectations: "",
      specialNeeds: "",
      paymentMethod: "",
      transactionCode: "",
    });
    setMessage(null);
  };

  const handleClose = () => {
    resetForm();
    closeModal();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (message) setMessage(null);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const requiredFields = [
      "parentFirstName",
      "parentLastName",
      "parentEmail",
      "parentPhone",
      "relationship",
      "teenFirstName",
      "teenLastName",
      "teenAge",
      "teenGrade",
      "school",
      "paymentMethod",
      "transactionCode",
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        setMessage({ type: "error", text: "Please fill in all required fields." });
        setIsSubmitting(false);
        return;
      }
    }

    if (!validateEmail(formData.parentEmail)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      setIsSubmitting(false);
      return;
    }

    const emailBody = `
TEENS PUBLIC SPEAKING & CAREER MENTORSHIP BOOTCAMP
REGISTRATION FORM

=== PARENT/GUARDIAN INFORMATION ===
Name: ${formData.parentFirstName} ${formData.parentLastName}
Email: ${formData.parentEmail}
Phone: ${formData.parentPhone}
Relationship to Teen: ${formData.relationship}

=== TEEN INFORMATION ===
Teen Name: ${formData.teenFirstName} ${formData.teenLastName}
Age: ${formData.teenAge}
Current Grade/Level: ${formData.teenGrade}
School: ${formData.school}
Interests/Hobbies: ${formData.interests || "Not specified"}

=== ADDITIONAL INFORMATION ===
Previous Speaking Experience: ${formData.experience || "Not specified"}
Expectations: ${formData.expectations || "Not specified"}
Special Needs/Considerations: ${formData.specialNeeds || "Not specified"}

=== PAYMENT INFORMATION ===
Payment Method: ${formData.paymentMethod}
Transaction Code: ${formData.transactionCode}

Submitted on: ${new Date().toLocaleString()}
    `.trim();

    try {
      const mailtoLink = `mailto:ggmalungu@gmail.com?cc=info@psctraining.co.ke&subject=Bootcamp Registration - ${formData.teenFirstName} ${formData.teenLastName}&body=${encodeURIComponent(
        emailBody
      )}`;

      window.location.href = mailtoLink;

      setMessage({
        type: "success",
        text: "Registration form opened in your email client! Please send the email to complete your registration. We'll contact you within 24 hours.",
      });

      setTimeout(() => {
        resetForm();
        setTimeout(handleClose, 2000);
      }, 3000);
    } catch (error) {
      setMessage({
        type: "error",
        text: "There was an error processing your registration. Please try again or contact us directly at +254-728-023465.",
      });
    }

    setIsSubmitting(false);
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-indigo-900/80 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl my-8 animate-in slide-in-from-top-4 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold">🎓 Register Your Teen Today!</h2>
          <p className="mt-2 opacity-90">Secure their spot in this life-changing bootcamp</p>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {message && (
            <div
              className={`p-4 rounded-xl mb-6 text-center ${
                message.type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  : "bg-gradient-to-r from-red-500 to-red-600 text-white"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Parent Information */}
            <div>
              <h3 className="text-indigo-900 text-lg font-bold mb-4 pb-2 border-b-2 border-purple-500">
                👨‍👩‍👦 Parent/Guardian Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="parentFirstName"
                  placeholder="First Name *"
                  value={formData.parentFirstName}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="parentLastName"
                  placeholder="Last Name *"
                  value={formData.parentLastName}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="parentEmail"
                  placeholder="Email *"
                  value={formData.parentEmail}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                />
                <input
                  type="tel"
                  name="parentPhone"
                  placeholder="Phone *"
                  value={formData.parentPhone}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                />
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                >
                  <option value="">Relationship to Teen *</option>
                  <option value="Parent">Parent</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Teen Information */}
            <div>
              <h3 className="text-indigo-900 text-lg font-bold mb-4 pb-2 border-b-2 border-purple-500">
                🧑 Teen Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="teenFirstName"
                  placeholder="First Name *"
                  value={formData.teenFirstName}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="teenLastName"
                  placeholder="Last Name *"
                  value={formData.teenLastName}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                />
                <input
                  type="number"
                  name="teenAge"
                  placeholder="Age *"
                  value={formData.teenAge}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="teenGrade"
                  placeholder="Current Grade/Level *"
                  value={formData.teenGrade}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="school"
                  placeholder="School *"
                  value={formData.school}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-gray-200 rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-indigo-900 text-lg font-bold mb-4 pb-2 border-b-2 border-purple-500">
                ✨ Additional Information
              </h3>
              <textarea
                name="interests"
                placeholder="Interests/Hobbies"
                value={formData.interests}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
              />
              <textarea
                name="experience"
                placeholder="Previous Speaking Experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg mt-4"
              />
              <textarea
                name="expectations"
                placeholder="Expectations from Bootcamp"
                value={formData.expectations}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg mt-4"
              />
              <textarea
                name="specialNeeds"
                placeholder="Special Needs/Considerations"
                value={formData.specialNeeds}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg mt-4"
              />
            </div>

            {/* Payment Section */}
            <div>
              <h3 className="text-indigo-900 text-lg font-bold mb-4 pb-2 border-b-2 border-purple-500">
                💳 Payment Information
              </h3>

              <div className="mb-4">
                <label className="block text-indigo-900 font-bold mb-2">
                  Mode of Payment <span className="text-red-500">*</span>
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                >
                  <option value="">Select Payment Method</option>
                  <option value="M-PESA">M-PESA</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Paybill">Paybill</option>
                </select>
              </div>

              {formData.paymentMethod === "M-PESA" && (
                <div className="p-4 bg-gray-100 rounded-lg text-sm text-gray-800 mb-4">
                  <p><strong>Payable To:</strong> PERMANENT SUCCESS CONSULTANCY</p>
                  <p><strong>M-PESA NO:</strong> 0728023465</p>
                  <p><strong>Amount:</strong> Ksh 33,500</p>
                </div>
              )}

              {formData.paymentMethod === "Bank Transfer" && (
                <div className="p-4 bg-gray-100 rounded-lg text-sm text-gray-800 mb-4">
                  <p><strong>Bank Name:</strong> DTB KENYA</p>
                  <p><strong>Branch:</strong> TRM (Code: 046)</p>
                  <p><strong>Bank Code:</strong> 063</p>
                  <p><strong>Account Number:</strong> 0891033001</p>
                  <p><strong>Account Name:</strong> PERMANENT SUCCESS CONSULTANCY</p>
                  <p><strong>SWIFT Code:</strong> DTKEKENA</p>
                  <p><strong>Amount:</strong> Ksh 33,500</p>
                </div>
              )}

              {formData.paymentMethod === "Paybill" && (
                <div className="p-4 bg-gray-100 rounded-lg text-sm text-gray-800 mb-4">
                  <p><strong>Paybill:</strong> 516600</p>
                  <p><strong>Account Number:</strong> 0891033001</p>
                  <p><strong>Account Name:</strong> PERMANENT SUCCESS CONSULTANCY</p>
                  <p><strong>Amount:</strong> Ksh 33,500</p>
                </div>
              )}

              <div>
                <label className="block text-indigo-900 font-bold mb-2">
                  Transaction Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="transactionCode"
                  value={formData.transactionCode}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter transaction code"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-4 px-6 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Processing..." : "🚀 Register My Teen Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
