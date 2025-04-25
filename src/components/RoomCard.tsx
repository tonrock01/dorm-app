import { Star } from 'lucide-react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onDetailsClick: (room: Room) => void;
}

export default function RoomCard({ room, onDetailsClick }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={room.img} alt={room.type} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{room.type}</h3>
          <div className="flex items-center">
            {[...Array(room.stars)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-4">ขนาด: {room.size}</p>
        <div className="flex justify-between items-center">
          <p className="text-indigo-600 font-bold text-xl">{room.price} บาท/เดือน</p>
          <button 
            onClick={() => onDetailsClick(room)} 
            className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-700"
          >
            รายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
}