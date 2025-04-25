import { MapPin } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ที่ตั้งของเรา</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="bg-white rounded-lg w-full h-64 overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.369134717705!2d99.49111459999999!3d18.238892099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96a52cb4dc2c7%3A0xae393c335f79afbb!2z4Lir4Lit4Lie4Lix4LiB4Lir4LiN4Li04LiH4LmA4Lir4Lil4LmI4Liy4LiK4Lix4Lii!5e0!3m2!1sth!2sth!4v1745569935226!5m2!1sth!2sth"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">ใกล้สถานที่สำคัญ</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={20} className="text-indigo-600 mr-2" />
                <span>ห่างจากมหาวิทยาลัย 400 เมตร (เดิน 5 นาที)</span>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="text-indigo-600 mr-2" />
                <span>ใกล้ห้างสรรพสินค้า 1 กิโลเมตร</span>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="text-indigo-600 mr-2" />
                <span>ใกล้ป้ายรถเมล์ 200 เมตร</span>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="text-indigo-600 mr-2" />
                <span>มีร้านสะดวกซื้อในระยะ 100 เมตร</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}