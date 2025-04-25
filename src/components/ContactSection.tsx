import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ติดต่อเรา</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col space-y-4">
            <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
              <Phone size={24} className="text-indigo-600 mr-4" />
              <div>
                <h3 className="font-bold">โทรศัพท์</h3>
                <p>081-234-5678</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
              <Mail size={24} className="text-indigo-600 mr-4" />
              <div>
                <h3 className="font-bold">อีเมล</h3>
                <p>info@cozydorm.com</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
              <MapPin size={24} className="text-indigo-600 mr-4" />
              <div>
                <h3 className="font-bold">ที่อยู่</h3>
                <p>124 หมู่ที่ 9 ถนนลำปาง-แม่ทะ ตำบลชมพู อำเภอเมือง จังหวัดลำปาง 52100</p>
              </div>
            </div>
          </div>
          {/* <div className="flex-1">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="อีเมล"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <textarea
                  placeholder="ข้อความ"
                  className="w-full p-3 border rounded-lg"
                  rows={4}
                ></textarea>
              </div>
              <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 w-full">
                ส่งข้อความ
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
