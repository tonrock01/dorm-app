import { Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Home size={24} />
              <span className="text-xl font-bold">หอพักหญิงเหล่าชัย</span>
            </div>
            <p className="max-w-md">
              หอพักคุณภาพใกล้มหาวิทยาลัย พร้อมสิ่งอำนวยความสะดวกครบครัน
              เพื่อชีวิตการเรียนที่สมบูรณ์แบบของคุณ
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ลิงก์</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home">หน้าหลัก</a>
                </li>
                <li>
                  <a href="#rooms">ห้องพัก</a>
                </li>
                <li>
                  <a href="#facilities">สิ่งอำนวยความสะดวก</a>
                </li>
                <li>
                  <a href="#location">ที่ตั้ง</a>
                </li>
                <li>
                  <a href="#contact">ติดต่อ</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">เวลาทำการ</h3>
              <p className="mb-2">จันทร์ - อาทิตย์: 8:00 - 22:00</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} หอพักหญิงเหล่าชัย. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  );
}
