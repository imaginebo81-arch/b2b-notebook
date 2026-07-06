import { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Package,
  Award,
  Truck,
  CheckCircle2,
  Users,
  PhoneCall,
  MessageCircle,
  School,
  BookOpen,
  Store,
  Building2,
  Landmark,
  Facebook,
  Instagram,
  Share2
} from 'lucide-react';

export interface Product {
  name: string;
  desc: string;
  img: string;
}

export const PRODUCTS: Product[] = [
  { name: 'NoteBook', desc: 'High quality pages for all your needs.', img: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1782621425/notebooks_cweykh.webp' },
  { name: 'Black Pen', desc: 'Smooth writing black ink pen.', img: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1782621425/black_pens_wnrntf.webp' },
  { name: 'Blue Pen', desc: 'Smooth writing blue ink pen.', img: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1782621425/blue_pens_ipiynv.webp' },
  { name: 'Pencils', desc: 'Premium quality wooden pencils.', img: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1782621544/WhatsApp_Image_2026-06-27_at_9.31.21_AM_1_p0lhnb.jpg' },
];

const SHARE_URL = "https://manjushreenotebooks.com";
const SHARE_TEXT = "Check out Manjushree Notebook Manufactures!";

export const handleShare = (platform: string) => {
  const encodedUrl = encodeURIComponent(SHARE_URL);
  const encodedText = encodeURIComponent(SHARE_TEXT + " " + SHARE_URL);
  
  if (platform === 'whatsapp') {
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
  } else if (platform === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
  } else if (platform === 'instagram') {
    navigator.clipboard.writeText(SHARE_URL).then(() => {
      alert('Website link copied to clipboard! You can now paste it on Instagram.');
    });
  }
};

const TopBar = () => (
  <div className="bg-[#051e42] text-white text-xs sm:text-sm py-2 px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-2">
    <div className="flex items-center gap-2 text-gray-200">
      <MapPin size={16} />
      <span>Morisuti, Rangachakua, Sonitpur (Assam) - 784182</span>
    </div>
    <div className="flex items-center gap-2 text-gray-200">
      <Phone size={16} />
      <span>+91 7086754384</span>
    </div>
  </div>
);

const Navbar = ({ onSelectProduct }: { onSelectProduct: (p: Product) => void }) => (
  <nav className="bg-white py-3 md:py-4 px-4 md:px-12 flex justify-between items-center shadow-sm sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2 mr-2">
        <div className="w-3 md:w-4 h-8 md:h-10 bg-orange-500 rounded-sm transform -rotate-12 translate-y-1 shadow-sm"></div>
        <div className="w-3 md:w-4 h-8 md:h-10 bg-blue-500 rounded-sm transform -rotate-6 shadow-sm relative z-10"></div>
        <div className="w-3 md:w-4 h-8 md:h-10 bg-red-500 rounded-sm shadow-sm relative z-20"></div>
      </div>
      <div className="leading-tight">
        <div className="font-heading font-bold text-xl md:text-2xl text-[#051e42] tracking-tight">MANJUSHREE</div>
        <div className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] text-gray-800">NOTEBOOK MANUFACTURES</div>
      </div>
    </div>
    
    <div className="hidden lg:flex items-center gap-8 font-semibold text-sm text-[#051e42]">
      <a href="#" className="text-[#034b9e] border-b-2 border-[#034b9e] pb-1">Home</a>
      <a href="#" className="hover:text-[#034b9e] transition-colors">About Us</a>
      <div className="relative group">
        <a href="#" className="hover:text-[#034b9e] transition-colors flex items-center gap-1 cursor-pointer">Products <ChevronDown size={16} strokeWidth={3} className="pt-0.5" /></a>
        <div className="absolute top-full left-0 mt-4 w-48 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-2">
            {PRODUCTS.map((p, i) => (
              <button 
                key={i} 
                onClick={() => onSelectProduct(p)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#034b9e] transition-colors"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <a href="#" className="hover:text-[#034b9e] transition-colors">Bulk Order</a>
      <a href="#" className="hover:text-[#034b9e] transition-colors">Why Us?</a>
      <a href="#" className="hover:text-[#034b9e] transition-colors">Contact Us</a>
    </div>

    <div className="hidden md:flex items-center gap-6">
      <div className="relative group">
        <button className="flex items-center gap-1.5 text-[#053d87] hover:text-[#042e66] font-semibold text-sm transition-colors cursor-pointer">
          <Share2 size={18} /> Share <ChevronDown size={14} strokeWidth={3} className="pt-0.5" />
        </button>
        <div className="absolute top-full right-0 mt-4 w-40 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-2">
            <button onClick={() => handleShare('whatsapp')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#034b9e] transition-colors flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </button>
            <button onClick={() => handleShare('facebook')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#034b9e] transition-colors flex items-center gap-2">
              <Facebook size={16} /> Facebook
            </button>
            <button onClick={() => handleShare('instagram')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#034b9e] transition-colors flex items-center gap-2">
              <Instagram size={16} /> Instagram
            </button>
          </div>
        </div>
      </div>
      <button className="bg-[#053d87] hover:bg-[#042e66] text-white px-6 py-2.5 rounded font-semibold text-sm transition-colors">
        Get A Quote
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative bg-[#f4f7fa] pt-8 md:pt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center relative z-10 pb-16 md:pb-40">
      <div className="flex-1 space-y-4 md:space-y-5 w-full">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-[4rem] font-extrabold text-[#051e42] leading-[1.1]">
          Quality Note Book <br /> Creator's
        </h1>
        <h2 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#051e42] mt-2">
          Wholesale Stationery and Not Book's
        </h2>
        <p className="text-gray-600 max-w-lg text-sm md:text-base leading-relaxed pt-2">
          We are a trusted manufacturer of high-quality notebooks available for bulk orders at the best prices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="p-2 md:p-2.5 bg-white rounded-full text-[#034b9e] shadow-sm">
              <MapPin size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <p className="text-xs md:text-sm text-gray-700 font-medium leading-snug">Morisuti, Rangachakua,<br />Sonitpur (Assam) - 784182</p>
          </div>
          <div className="flex items-start gap-3 md:gap-4">
            <div className="p-2 md:p-2.5 bg-white rounded-full text-[#034b9e] shadow-sm">
              <Phone size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <p className="text-base md:text-lg text-[#051e42] font-bold leading-snug">
              +91 7086754384
            </p>
          </div>
        </div>

        <button className="mt-6 md:mt-8 bg-[#053d87] hover:bg-[#042e66] text-white px-6 py-3 md:px-8 md:py-3.5 rounded flex items-center gap-2 font-semibold text-sm transition-colors shadow-lg">
          Request Bulk Quote <ArrowRight size={18} />
        </button>
      </div>

      <div className="flex-1 mt-12 md:mt-0 relative z-10 w-full flex justify-center md:justify-end">
        <img 
          src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1782621425/notebooks_cweykh.webp" 
          alt="Stack of Notebooks" 
          className="w-full max-w-[500px] object-cover rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
        />
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 w-full leading-none z-0">
      <svg className="w-full h-auto block" viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,150 C400,300 1000,0 1440,150 L1440,250 L0,250 Z" fill="#053d87" />
      </svg>
    </div>
  </div>
);

const Features = () => {
  const features = [
    { icon: <ShieldCheck size={42} strokeWidth={1.5} />, title: "Trusted Manufacturer", desc: "Years of experience in notebook production" },
    { icon: <Package size={42} strokeWidth={1.5} />, title: "Bulk Order Specialists", desc: "Best prices for wholesalers, dealers & resellers" },
    { icon: <Award size={42} strokeWidth={1.5} />, title: "Premium Quality", desc: "High quality paper & durable binding" },
    { icon: <Truck size={42} strokeWidth={1.5} />, title: "Timely Delivery", desc: "Commitment to on-time dispatch & delivery" },
  ];

  return (
    <div className="bg-[#053d87] py-8 md:py-12 relative z-20 -mt-1">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-12 lg:divide-x lg:divide-blue-400/20">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center text-white px-6">
              <div className="mb-5 text-white/90">
                {f.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Products = ({ onSelectProduct }: { onSelectProduct: (p: Product) => void }) => {
  return (
    <div className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <p className="font-heading text-[#034b9e] font-bold text-xs tracking-[0.2em] uppercase mb-2 md:mb-3">OUR PRODUCTS</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-[#051e42] mb-3 md:mb-5 tracking-tight">Our Notebook Range</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 md:mb-16 text-sm md:text-lg">
          High quality notebooks for every need. Perfect for schools, colleges, offices & businesses.
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <div 
              key={i} 
              onClick={() => onSelectProduct(p)}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="h-40 md:h-56 overflow-hidden bg-gray-50 flex items-center justify-center p-4 md:p-6 relative">
                <div className="absolute inset-0 bg-[#053d87]/0 group-hover:bg-[#053d87]/5 transition-colors z-10"></div>
                <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center">
                <h3 className="font-heading font-bold text-[#051e42] text-lg mb-2">{p.name}</h3>
                <p className="text-sm text-gray-500 flex-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const WhyChooseUs = () => {
  const points = [
    "Bulk order discounts",
    "Custom branding & packaging",
    "Consistent quality assurance",
    "Wide range of notebook varieties",
    "Customer satisfaction guaranteed"
  ];

  return (
    <div className="bg-[#f8f9fa] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
        
        <div className="flex-1 space-y-4 md:space-y-6">
          <p className="font-heading text-[#034b9e] font-bold text-xs tracking-[0.2em] uppercase">WHY CHOOSE US</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-[#051e42] leading-[1.2] tracking-tight">
            Your Trusted B2B <br className="hidden md:block"/> Notebook Partner
          </h2>
          <p className="text-gray-600 max-w-md text-sm md:text-lg pt-1 md:pt-2">
            We focus on quality, affordability, and reliability to help your business grow with confidence.
          </p>
          
          <ul className="space-y-3 md:space-y-4 mt-6 md:mt-8 pt-2">
            {points.map((pt, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="md:w-[22px] md:h-[22px] text-[#034b9e] flex-shrink-0" />
                <span className="text-gray-800 text-sm md:text-base font-medium">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full">
          <div className="bg-[#053d87] text-white p-6 md:p-8 rounded-xl flex flex-col items-center text-center shadow-lg">
            <Users className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-blue-200" strokeWidth={1.5} />
            <div className="font-heading text-2xl md:text-4xl font-extrabold mb-1 tracking-tight">500+</div>
            <div className="text-blue-100 text-xs md:text-sm font-medium mt-1">Happy Clients</div>
          </div>
          <div className="bg-[#053d87] text-white p-6 md:p-8 rounded-xl flex flex-col items-center text-center shadow-lg">
            <Package className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-blue-200" strokeWidth={1.5} />
            <div className="font-heading text-2xl md:text-4xl font-extrabold mb-1 tracking-tight">1000+</div>
            <div className="text-blue-100 text-sm font-medium mt-1">Bulk Orders Completed</div>
          </div>
          <div className="bg-[#053d87] text-white p-8 rounded-xl flex flex-col items-center text-center shadow-lg">
            <Award size={48} strokeWidth={1.5} className="mb-4 text-blue-200" />
            <div className="font-heading text-4xl font-extrabold mb-1 tracking-tight">15+</div>
            <div className="text-blue-100 text-sm font-medium mt-1">Years of Experience</div>
          </div>
          <div className="bg-[#053d87] text-white p-8 rounded-xl flex flex-col items-center text-center shadow-lg">
            <Truck size={48} strokeWidth={1.5} className="mb-4 text-blue-200" />
            <div className="font-heading text-4xl font-extrabold mb-1 tracking-tight">100%</div>
            <div className="text-blue-100 text-sm font-medium mt-1">On-Time Delivery</div>
          </div>
        </div>

      </div>
    </div>
  );
}

const CTA = () => (
  <div className="bg-[#052b66] relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
      <div className="flex-1 space-y-4 md:space-y-6 text-white mb-10 md:mb-0 text-center md:text-left">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold tracking-tight">Ready to Place a Bulk Order?</h2>
        <p className="text-blue-100 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
          Get the best quality notebooks at wholesale prices. Contact us today for bulk orders and custom requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6 justify-center md:justify-start">
          <button onClick={() => window.open('tel:+917086754384')} className="bg-white text-[#052b66] hover:bg-gray-100 px-6 py-3 md:px-8 md:py-3.5 rounded font-bold flex items-center justify-center gap-2 transition-colors">
            Call Now <PhoneCall size={18} />
          </button>
          <button onClick={() => window.open('https://wa.me/917086754384', '_blank')} className="bg-[#05408f] hover:bg-[#043373] text-white px-6 py-3 md:px-8 md:py-3.5 rounded font-bold flex items-center justify-center gap-2 transition-colors border border-blue-400/20">
            WhatsApp Us <MessageCircle size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <img 
          src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1782621425/notebooks_cweykh.webp" 
          alt="Stack of Notebooks" 
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform -rotate-3 hover:rotate-0 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
);

const Clients = () => {
  const clients = [
    { icon: <School className="w-8 h-8 md:w-12 md:h-12 text-[#034b9e] mb-3 md:mb-4" strokeWidth={1} />, name: "Schools & Colleges" },
    { icon: <BookOpen className="w-8 h-8 md:w-12 md:h-12 text-[#034b9e] mb-3 md:mb-4" strokeWidth={1} />, name: "Book Distributors" },
    { icon: <Store className="w-8 h-8 md:w-12 md:h-12 text-[#034b9e] mb-3 md:mb-4" strokeWidth={1} />, name: "Retailers & Wholesalers" },
    { icon: <Building2 className="w-8 h-8 md:w-12 md:h-12 text-[#034b9e] mb-3 md:mb-4" strokeWidth={1} />, name: "Corporate Buyers" },
    { icon: <Landmark className="w-8 h-8 md:w-12 md:h-12 text-[#034b9e] mb-3 md:mb-4" strokeWidth={1} />, name: "Government Institutions" },
  ];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <p className="font-heading text-[#034b9e] font-bold text-xs tracking-[0.2em] uppercase mb-2 md:mb-3">WHO WE SERVE</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-[#051e42] mb-10 md:mb-16 tracking-tight">Our Esteemed B2B Clients</h2>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-24">
          {clients.map((c, i) => (
            <div key={i} className="flex flex-col items-center max-w-[100px] md:max-w-[140px] text-center group cursor-pointer">
              <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                {c.icon}
              </div>
              <span className="font-heading text-[#051e42] font-bold text-sm leading-snug">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Footer = () => (
  <footer className="bg-[#051e42] text-white pt-12 md:pt-20 pb-6 md:pb-8 border-t border-blue-900">
    <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-16">
      
      <div className="space-y-5 md:space-y-6">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-4 h-9 bg-orange-500 rounded-sm transform -rotate-12 translate-y-1"></div>
            <div className="w-4 h-9 bg-blue-500 rounded-sm transform -rotate-6 relative z-10"></div>
            <div className="w-4 h-9 bg-red-500 rounded-sm relative z-20"></div>
          </div>
          <div className="leading-tight">
            <div className="font-heading font-bold text-xl tracking-tight">MANJUSHREE</div>
            <div className="text-[9px] font-bold tracking-[0.2em] text-blue-200">NOTEBOOK MANUFACTURES</div>
          </div>
        </div>
        <p className="text-blue-100/80 text-sm leading-relaxed max-w-xs">
          Quality Note Book Creator's Wholesale Stationery and Not Book's. Your trusted partner for bulk notebook supply.
        </p>
        <div className="flex gap-5 pt-2">
          <button onClick={() => handleShare('facebook')} className="text-blue-100 hover:text-white transition-colors transform hover:scale-110"><Facebook size={22} strokeWidth={1.5} /></button>
          <button onClick={() => handleShare('instagram')} className="text-blue-100 hover:text-white transition-colors transform hover:scale-110"><Instagram size={22} strokeWidth={1.5} /></button>
          <button onClick={() => handleShare('whatsapp')} className="text-blue-100 hover:text-white transition-colors transform hover:scale-110"><MessageCircle size={22} strokeWidth={1.5} /></button>
        </div>
      </div>

      <div>
        <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-blue-300 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-100/90 leading-relaxed">Morisuti, Rangachakua,<br />Sonitpur (Assam) - 784182</p>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={20} className="text-blue-300 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-100/90 leading-relaxed">+91 7086754384</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
        <ul className="space-y-4">
          <li><a href="#" className="text-blue-100/90 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span> Home</a></li>
          <li><a href="#" className="text-blue-100/90 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span> About Us</a></li>
          <li><a href="#" className="text-blue-100/90 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span> Products</a></li>
          <li><a href="#" className="text-blue-100/90 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span> Bulk Order</a></li>
          <li><a href="#" className="text-blue-100/90 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span> Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">Connect With Us</h4>
        <p className="text-blue-100/90 text-sm mb-6 leading-relaxed">
          For bulk orders and inquiries, reach out to us anytime.
        </p>
        <button className="bg-transparent border border-blue-400 hover:bg-blue-400 hover:text-[#051e42] text-white px-8 py-3 rounded font-bold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(96,165,250,0.1)] hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]">
          Get A Quote
        </button>
      </div>

    </div>
    
    <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200/60">
      <p>&copy; 2025 Manjushree Notebook Manufactures. All Rights Reserved.</p>
      <p>Quality You Can Trust. Business You Can Grow.</p>
    </div>
  </footer>
);

const ProductDetails = ({ product, onBack, onRequestBulkOrder }: { product: Product, onBack: () => void, onRequestBulkOrder: () => void }) => {
  return (
    <div className="bg-white py-8 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#034b9e] font-semibold hover:text-[#051e42] transition-colors text-sm md:text-base"
          >
            <ArrowRight className="rotate-180" size={18} /> Back to Products
          </button>
          
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-[#053d87] hover:text-[#042e66] font-semibold text-sm transition-colors cursor-pointer bg-blue-50 px-3 py-1.5 rounded-md">
              <Share2 size={18} /> Share <ChevronDown size={14} strokeWidth={3} className="pt-0.5" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <button onClick={() => handleShare('whatsapp')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#034b9e] transition-colors flex items-center gap-2">
                  <MessageCircle size={16} /> WhatsApp
                </button>
                <button onClick={() => handleShare('facebook')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#034b9e] transition-colors flex items-center gap-2">
                  <Facebook size={16} /> Facebook
                </button>
                <button onClick={() => handleShare('instagram')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#034b9e] transition-colors flex items-center gap-2">
                  <Instagram size={16} /> Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 w-full flex justify-center bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <img src={product.img} alt={product.name} className="max-w-full max-h-[250px] md:max-h-[400px] object-contain mix-blend-multiply" />
          </div>
          <div className="flex-1 space-y-4 md:space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#051e42] tracking-tight">{product.name}</h2>
            <p className="text-base md:text-xl text-gray-600">{product.desc}</p>
            
            <div className="pt-5 md:pt-6 border-t border-gray-100">
              <h3 className="font-bold text-base md:text-lg text-[#051e42] mb-3 md:mb-4">Why choose this product?</h3>
              <ul className="space-y-2.5 md:space-y-3">
                <li className="flex items-center gap-3 text-sm md:text-base text-gray-700"><CheckCircle2 className="text-[#034b9e] md:w-5 md:h-5 w-4 h-4 flex-shrink-0" /> Premium Quality Materials</li>
                <li className="flex items-center gap-3 text-sm md:text-base text-gray-700"><CheckCircle2 className="text-[#034b9e] md:w-5 md:h-5 w-4 h-4 flex-shrink-0" /> Best Wholesale Pricing</li>
                <li className="flex items-center gap-3 text-sm md:text-base text-gray-700"><CheckCircle2 className="text-[#034b9e] md:w-5 md:h-5 w-4 h-4 flex-shrink-0" /> Timely Delivery Commitment</li>
              </ul>
            </div>

            <button 
              onClick={onRequestBulkOrder}
              className="mt-6 md:mt-8 bg-[#053d87] hover:bg-[#042e66] text-white px-6 py-3 md:px-8 md:py-4 rounded font-bold text-base md:text-lg w-full md:w-auto shadow-lg transition-colors"
            >
              Request Bulk Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BulkOrderModal = ({ 
  isOpen, 
  onClose, 
  productName 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  productName?: string;
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hi, I want to request a bulk order.\n\n`;
    if (productName) text += `Product: ${productName}\n`;
    text += `Name: ${formData.name}\n`;
    text += `Phone: ${formData.phone}\n`;
    text += `Quantity: ${formData.quantity}\n`;
    if (formData.message) text += `Message: ${formData.message}\n`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917086754384?text=${encodedText}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="bg-[#051e42] p-6 text-white flex justify-between items-center">
          <h3 className="font-heading font-bold text-xl">Bulk Order Request</h3>
          <button onClick={onClose} className="text-blue-200 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {productName && (
            <div className="bg-blue-50 text-[#034b9e] p-3 rounded-lg font-medium text-sm mb-4">
              Requesting for: {productName}
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
            <input 
              required 
              type="text" 
              className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-[#034b9e] focus:ring-1 focus:ring-[#034b9e]"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
            <input 
              required 
              type="tel" 
              className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-[#034b9e] focus:ring-1 focus:ring-[#034b9e]"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Approximate Quantity *</label>
            <input 
              required 
              type="text" 
              placeholder="e.g. 500 pieces"
              className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-[#034b9e] focus:ring-1 focus:ring-[#034b9e]"
              value={formData.quantity}
              onChange={e => setFormData({...formData, quantity: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Requirements (Optional)</label>
            <textarea 
              rows={3}
              className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-[#034b9e] focus:ring-1 focus:ring-[#034b9e]"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <div className="pt-4">
            <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors">
              <MessageCircle size={20} /> Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeProduct]);

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-gray-50 flex flex-col selection:bg-blue-200 selection:text-blue-900">
      <TopBar />
      <Navbar onSelectProduct={setActiveProduct} />
      <main className="flex-1">
        {activeProduct ? (
          <ProductDetails 
            product={activeProduct} 
            onBack={() => setActiveProduct(null)} 
            onRequestBulkOrder={() => setIsModalOpen(true)}
          />
        ) : (
          <>
            <Hero />
            <Features />
            <Products onSelectProduct={setActiveProduct} />
            <WhyChooseUs />
            <CTA />
            <Clients />
          </>
        )}
      </main>
      <Footer />
      <BulkOrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={activeProduct?.name} 
      />
    </div>
  );
}
