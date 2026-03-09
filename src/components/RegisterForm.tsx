import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Mail, Phone, School, MapPin, Users } from 'lucide-react';

interface RegisterFormProps {
  eventTitle: string;
  onSuccess: () => void;
}

const RegisterForm = ({ eventTitle, onSuccess }: RegisterFormProps) => {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    email: '',
    phone: '',
    member2: '',
    member3: '',
    collegeName: '',
    department: '',
    year: '',
    city: '',
    confirm: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.teamName) newErrors.teamName = 'Team name is required';
    if (!formData.leaderName) newErrors.leaderName = 'Leader name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.collegeName) newErrors.collegeName = 'College name is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.confirm) newErrors.confirm = 'Please confirm the details';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        onSuccess();
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const InputField = ({ label, name, type = "text", placeholder, icon: Icon }: any) => (
    <div className="space-y-1.5 w-full">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-neonPurple transition-colors">
          <Icon size={18} />
        </div>
        <input
          type={type}
          name={name}
          value={type === 'checkbox' ? undefined : (formData as any)[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full bg-lightGray/50 border-2 rounded-2xl py-3.5 pl-12 pr-4 outline-none transition-all duration-300 font-inter text-darkAccent ${
            errors[name] ? 'border-red-400' : 'border-transparent focus:border-neonPurple focus:bg-white focus:shadow-[0_0_15px_rgba(122,0,255,0.1)]'
          }`}
        />
      </div>
      {errors[name] && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider ml-1">{errors[name]}</p>}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 md:p-12 w-full max-w-[700px] border-2 border-lightGray shadow-xl"
    >
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-3xl font-black font-orbitron uppercase italic tracking-tight">Register <span className="neon-text">Team</span></h2>
        <p className="text-gray-500 text-sm font-medium">{eventTitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Team Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-neonPurple font-bold uppercase tracking-[0.2em] text-xs">
            <Users size={16} /> Team Details
          </div>
          <InputField label="Team Name" name="teamName" placeholder="Enter team name" icon={Users} />
        </div>

        {/* Leader Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-neonPurple font-bold uppercase tracking-[0.2em] text-xs">
            <User size={16} /> Team Leader Info
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <InputField label="Leader Name" name="leaderName" placeholder="Full name" icon={User} />
            <InputField label="Phone Number" name="phone" placeholder="10-digit number" icon={Phone} />
          </div>
          <InputField label="Email Address" name="email" type="email" placeholder="example@gmail.com" icon={Mail} />
        </div>

        {/* Members Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-neonPurple font-bold uppercase tracking-[0.2em] text-xs">
            <Users size={16} /> Team Members (Optional)
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <InputField label="Member 2 Name" name="member2" placeholder="Full name" icon={User} />
            <InputField label="Member 3 Name" name="member3" placeholder="Full name" icon={User} />
          </div>
        </div>

        {/* College Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-neonPurple font-bold uppercase tracking-[0.2em] text-xs">
            <School size={16} /> Institution Info
          </div>
          <InputField label="College Name" name="collegeName" placeholder="Sairam Institutions" icon={School} />
          <div className="grid md:grid-cols-2 gap-4">
            <InputField label="Department" name="department" placeholder="e.g. CSE" icon={School} />
            <InputField label="Year" name="year" placeholder="e.g. 3rd Year" icon={GraduationCap} />
          </div>
          <InputField label="City" name="city" placeholder="e.g. Chennai" icon={MapPin} />
        </div>

        {/* Confirmation */}
        <div className="pt-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
              formData.confirm ? 'bg-neonPurple border-neonPurple' : 'border-lightGray group-hover:border-neonPurple'
            }`}>
              {formData.confirm && <CheckCircle2 size={16} className="text-white" />}
            </div>
            <input
              type="checkbox"
              name="confirm"
              checked={formData.confirm}
              onChange={handleChange}
              className="hidden"
            />
            <span className="text-sm text-gray-500 font-medium select-none group-hover:text-darkAccent transition-colors">
              I confirm the details provided are correct.
            </span>
          </label>
          {errors.confirm && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider mt-2">{errors.confirm}</p>}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-neon !py-4 text-sm tracking-[0.2em]"
        >
          Register Team
        </motion.button>
      </form>
    </motion.div>
  );
};

const GraduationCap = ({ size, className }: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

export default RegisterForm;
