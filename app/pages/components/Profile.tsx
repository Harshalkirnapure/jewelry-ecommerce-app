import React, { useState } from "react";

const Profile: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    prefix: "",
    mobile: "",
    mobile2: "",
    email: "",
    birthday: "",
    anniversary: "",
    gender: "",
    address: "",
    city: "",
    area: "",
    state: "",
    country: "",
    pincode: "",
    education: "",
    income: "",
    occupation: "",
    interest: "",
    category: "",
    reference: "",
    naration: "",
    kyc: "",
    pan: "",
    
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile";
    if (formData.mobile2 && !/^\d{10}$/.test(formData.mobile2)) newErrors.mobile2 = "Enter a valid 10-digit mobile";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Enter a 6-digit pincode";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  const inputClass = "mt-1 block w-full border border-gray-300 rounded-md p-2";

  

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">User Profile</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Details */}
        <div className="md:col-span-2">
  <label className="block mb-1">Name *</label>
  <div className="flex space-x-2">
    <select
      name="prefix"
      value={formData.prefix}
      onChange={handleChange}
      className="border border-gray-300 rounded px-2 py-2"
    >
      <option value="Mr">Mr</option>
      <option value="Mrs">Mrs</option>
      <option value="Other">Other</option>
    </select>
    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
      className={`${inputClass} flex-1`}
    />
  </div>
  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
</div>

        <div>
          <label>Mobile *</label>
          <input name="mobile" value={formData.mobile} onChange={handleChange} type="tel" className={inputClass} />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>

        <div>
          <label>Mobile 2</label>
          <input name="mobile2" value={formData.mobile2} onChange={handleChange} type="tel" className={inputClass} />
          {errors.mobile2 && <p className="text-red-500 text-sm">{errors.mobile2}</p>}
        </div>

        <div>
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} type="email" className={inputClass} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label>Naration</label>
          <input name="naration" value={formData.naration} onChange={handleChange} type="" className={inputClass} />
        </div>

        <div>
          <label>Birthday</label>
          <input name="birthday" value={formData.birthday} onChange={handleChange} type="date" className={inputClass} />
        </div>

        <div>
          <label>Anniversary</label>
          <input name="anniversary" value={formData.anniversary} onChange={handleChange} type="date" className={inputClass} />
        </div>

        <div>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className={inputClass}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Address */}
        <div >
          <label>Address 1</label>
          <input name="address" value={formData.address} onChange={handleChange} className={inputClass} />
        </div>

        <div >
          <label>Address 2</label>
          <input name="address" value={formData.address} onChange={handleChange} className={inputClass} />
        </div>

        <div >
          <label>Address 3</label>
          <input name="address" value={formData.address} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>Locality</label>
          <input name="city" value={formData.area} onChange={handleChange} className={inputClass} />
        </div>

      
        <div>
          <label>Area</label>
          <input name="city" value={formData.area} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>City</label>
          <input name="city" value={formData.city} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>State</label>
          <input name="state" value={formData.state} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>Country</label>
          <input name="country" value={formData.country} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>Pincode</label>
          <input name="pincode" value={formData.pincode} onChange={handleChange} className={inputClass} />
          {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
        </div>

        {/* Other Info */}
        <div>
          <label>Education</label>
          <select name="education" value={formData.education} onChange={handleChange} className={inputClass}>
            <option value="">Select Education</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
          </select>
        </div>

        <div>
          <label>Income</label>
          <select name="income" value={formData.income} onChange={handleChange} className={inputClass}>
            <option value="">Select Income</option>
            <option value="0-3 LPA">0-3 LPA</option>
            <option value="3-6 LPA">3-6 LPA</option>
            <option value="6-10 LPA">6-10 LPA</option>
            <option value="10+ LPA">10+ LPA</option>
          </select>
        </div>

        <div>
          <label>Occupation</label>
          <input name="occupation" value={formData.occupation} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>Interest</label>
          <input name="interest" value={formData.interest} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} className={inputClass}>
            <option value="">Select Category</option>
            <option value="Customer">Customer</option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Retailer">Retailer</option>
          </select>
        </div>

        <div>
          <label>Reference</label>
          <input name="reference" value={formData.reference} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>Ac Goup</label>
          <input name="reference" value={formData.reference} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>How Do You Know About Us ?</label>
          <input name="reference" value={formData.reference} onChange={handleChange} className={inputClass} />
        </div>

        < div>
          <label>Reason For Your Purchace ?</label>
          <input name="reference" value={formData.reference} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label>Why Did Preffer Us  ?</label>
          <input name="reference" value={formData.reference} onChange={handleChange} className={inputClass} />
        </div>
         
        <div>
          <label>Loyaty Code</label>
          <input name="loyalty code" value={formData.reference} onChange={handleChange} className={inputClass} />
        </div>
     
        <div>
          <label>PAN NO</label>
          <input name="pan" value={formData.pan} onChange={handleChange} className={inputClass} />
        </div>
          
        <div>
          <label>KYC NO</label>
          <input name="kyc" value={formData.kyc} onChange={handleChange} className={inputClass} />
        </div>


        {/* Submit */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
