
//Reusable input component
const FormInput = ({ 
    label, 
    id, 
    type = 'text', 
    placeholder, 
    className = '',
    ...props 
}) => {
    

    return (
        <div className="flex flex-col w-full">
            <label htmlFor={id} className='font-semibold text-sm mb-2'>{label}</label>
            <div className="w-full focus-within:bg-white bg-gray-100 py-3 px-4 rounded-md focus-within:border-blue-500 focus-within:border focus-within:ring-2 focus-within:ring-blue-200 border border-transparent transition-all duration-300">
                <input 
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={`outline-none w-full bg-transparent focus-within:bg-white ${className}`}
                    {...props}
                />
            </div>
        </div>
    );
};


const ChildrensDetails = ({ Student }) => {
    return (
        <div className='container mx-auto px-4 mb-4'>
            <p className='mb-5 text-gray-400 font-semibold text-xl'>{Student}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                <FormInput 
                    label="Student Name"
                    id="name"
                    placeholder="Enter student full name"
                />
                
                <FormInput 
                    label="Student Admission No."
                    id="admissionNumber"
                    type="number"
                    placeholder="Enter admission No."
                />
                
                <FormInput 
                    label="Date of Birth"
                    id="dateOfBirth"
                    type="date"
                    placeholder="DD-MM-YYYY"
                />
            </div>
        </div>
    );
};

export default ChildrensDetails;