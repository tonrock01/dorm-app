import { useState } from 'react';
import RoomCard from './RoomCard';
import RoomModal from './RoomModal';
import { Room, roomData } from '../types';

export default function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  
  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ห้องพักของเรา</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomData.map(room => (
            <RoomCard 
              key={room.id} 
              room={room} 
              onDetailsClick={(room) => setSelectedRoom(room)} 
            />
          ))}
        </div>
      </div>
      
      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </section>
  );
}