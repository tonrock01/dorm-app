import { Star, X } from 'lucide-react';
import { Room } from '../types';

interface RoomModalProps {
  room: Room;
  onClose: () => void;
}

export default function RoomModal({ room, onClose }: RoomModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-full overflow-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold">{room.type}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <img src={room.img} alt={room.type} className="w-full h-64 object-cover rounded-lg mb-6" />
          <div className="flex items-center mb-4">
            <p className="text-2xl font-bold text-indigo-600 mr-4">{room.price} บาท/เดือน</p>
            <div className="flex">
              {[...Array(room.stars)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-gray-700 mb-4">ขนาด: {room.size}</p>
          <h4 className="text-xl font-bold mb-2">รายละเอียดห้องพัก</h4>
          <p className="text-gray-700 mb-6">{room.details}</p>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 flex-1">
              จองห้องนี้
            </button>
            <button 
              onClick={onClose} 
              className="border border-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-100"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}