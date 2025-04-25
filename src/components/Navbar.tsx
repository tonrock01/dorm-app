import { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home size={24} />
          <span className="text-xl font-bold">หอพักหญิงเหล่าชัย</span>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-indigo-200">หน้าหลัก</a>
          <a href="#rooms" className="hover:text-indigo-200">ห้องพัก</a>
          <a href="#facilities" className="hover:text-indigo-200">สิ่งอำนวยความสะดวก</a>
          <a href="#location" className="hover:text-indigo-200">ที่ตั้ง</a>
          <a href="#contact" className="hover:text-indigo-200">ติดต่อ</a>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 px-4 py-2">
          <div className="flex flex-col space-y-2">
            <a href="#home" className="py-2 hover:text-indigo-200">หน้าหลัก</a>
            <a href="#rooms" className="py-2 hover:text-indigo-200">ห้องพัก</a>
            <a href="#facilities" className="py-2 hover:text-indigo-200">สิ่งอำนวยความสะดวก</a>
            <a href="#location" className="py-2 hover:text-indigo-200">ที่ตั้ง</a>
            <a href="#contact" className="py-2 hover:text-indigo-200">ติดต่อ</a>
          </div>
        </div>
      )}
    </nav>
  );
}