export default function FacilitiesSection() {
    return (
      <section id="facilities" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">สิ่งอำนวยความสะดวก</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-indigo-50 rounded-lg">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Wi-Fi ความเร็วสูง</h3>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">เครื่องปรับอากาศ</h3>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">ห้องฟิตเนส</h3>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">ระบบรักษาความปลอดภัย 24 ชม.</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }