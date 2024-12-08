import { useState } from 'react';

// Reusable Input Component
const FormInput = ({
    label,
    id,
    type = 'text',
    placeholder,
    required = false,
    className = '',
    ...props
}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className={`font-semibold text-sm ${required ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}`}>
                {label}
            </label>
            <div className="w-full bg-gray-100 py-3 px-4 rounded-md mt-2 focus-within:bg-white focus-within:border-blue-500 focus-within:border focus-within:ring-2 focus-within:ring-blue-200 border border-transparent transition-all duration-300">
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={`outline-none w-full bg-transparent ${className}`}
                    {...props}
                />
            </div>
        </div>
    );
};


// Reusable Radio Input Component
const RadioInput = ({ label, name, options, className = '' }) => {
    return (
        <div className="flex flex-col">
            <label className={`font-semibold text-sm ${label.includes('*') ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}`}>
                {label}
            </label>
            <div className={`flex space-x-4 mt-6 ${className}`}>
                {options.map((option) => (
                    <label key={option.value} className="flex items-center">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            className="mr-2"
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
};



const ParentsDetails = () => {
    const [isSameAddress, setIsSameAddress] = useState(false);

    return (
        <div className='container mx-auto px-4 mb-4'>
            <p className='mb-5 text-gray-400 font-semibold text-xl'>Parent 1</p>

            {/* Personal Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mb-4">
                <FormInput
                    label="First Name"
                    id="firstname"
                    placeholder="Enter first name"
                />
                <FormInput
                    label="Last Name"
                    id="lastname"
                    placeholder="Enter last name"
                    required
                />
                <FormInput
                    label="Id No."
                    id="idNumber"
                    type="number"
                    placeholder="Enter parent's Id no."
                    required
                />
                <FormInput
                    label="Date of Birth"
                    id="dateOfBirth"
                    type="date"
                    placeholder="DD-MM-YYYY"
                />
            </div>

            {/* Contact and Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mb-4">
                <FormInput
                    label="Email id"
                    id="email"
                    type="email"
                    placeholder="Enter email id"
                    required
                />
                <FormInput
                    label="Occupation"
                    id="occupation"
                    placeholder="Enter their occupation"
                    required
                />
                <FormInput
                    label="Relation"
                    id="relation"
                    placeholder="What is relation with student"
                    required
                />
                <FormInput
                    label="Blood Group"
                    id="bloodgroup"
                    placeholder="Please select blood group"
                    required
                />
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mb-4">
                <FormInput
                    label="Nationality"
                    id="nationality"
                    placeholder="Please select nationality"
                    required
                />
                <FormInput
                    label="Caste Category"
                    id="caste"
                    placeholder="Please select caste category"
                />
                <FormInput
                    label="Martial Status"
                    id="martialStatus"
                    placeholder="Please select martial status"
                />
                <FormInput
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    placeholder="9369******"
                    required
                />
            </div>

            {/* Address Section */}
            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={isSameAddress}
                        onChange={() => setIsSameAddress(!isSameAddress)}
                    />
                    Same as student address
                </label>
            </div>

            {/* Address Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mb-4">
                <FormInput
                    label="Address"
                    id="addressLine1"
                    placeholder="Address line 1"
                />
                <FormInput
                    label={"Address 2"}
                    id="addressLine2"
                    placeholder="Address line 2"
                />
                <FormInput
                    label="City / District"
                    id="city"
                    placeholder="Enter City / District"
                />
                <FormInput
                    label="State / Provinces"
                    id="state"
                    placeholder="Enter state name"
                />
            </div>

            {/* Final Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mb-4">
                <FormInput
                    label="Profile photo"
                    id="photo"
                    type="file"
                    placeholder="Please upload image"
                    required
                />
                <RadioInput
                    label="Gender*"
                    name="gender"
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' }
                    ]}
                />
                
                <div className="flex flex-col">
                    <label htmlFor="shortBio" className='font-semibold text-sm'>Short Bio</label>
                    <div className="w-full bg-gray-100 py-3 px-0 rounded-md mt-4 focus-within:bg-white focus-within:border-blue-500 focus-within:border focus-within:ring-2 focus-within:ring-blue-200 border border-transparent transition-all duration-300">
                        <textarea
                            id="shortBio"
                            placeholder="Enter remark or note"
                            className="outline-none w-full focus-within:bg-white bg-gray-100"
                        />
                    </div>
                </div>
            </div>


            
        </div>
    );
}

export default ParentsDetails;