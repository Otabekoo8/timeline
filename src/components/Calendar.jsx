import React, { useState } from 'react';
import DailySchedule from './DailySchedule';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const renderDays = () => {
        const days = [];
        for (let i = 1; i <= 31; i++) {
            days.push(
                <div 
                    key={i} 
                    className="border p-4 cursor-pointer hover:bg-gray-200" 
                    onClick={() => setSelectedDate(i)}
                >
                    {i}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Har Kunlik Kalendar</h1>
            <div className="grid grid-cols-7 gap-4">
                {renderDays()}
            </div>
            {selectedDate && <DailySchedule date={selectedDate} />}
        </div>
    );
};

export default Calendar;
