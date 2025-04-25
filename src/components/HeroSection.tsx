export default function HeroSection() {
    return (
      <section id="home" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ยินดีต้อนรับสู่ <span className="text-yellow-500">หอพักหญิงเหล่าชัย</span></h1>
          <p className="text-xl mb-8">หอพักสะดวกสบายใกล้มหาวิทยาลัย พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
          {/* <div className="flex justify-center">
            <button className="bg-white text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-indigo-100">
              จองเลย
            </button>
          </div> */}
        </div>
      </section>
    );
  }