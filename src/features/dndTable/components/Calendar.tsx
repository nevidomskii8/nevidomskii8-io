import React from 'react';

import CalendarCell from './CalendarCell';

const daysInMonth = 31; // You'll need to calculate this based on the current month and year

const Calendar = () => {
    const days = [...Array(daysInMonth).keys()].map((day) => day + 1);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '5px',
            }}
        >
            {days.map((day) => (
                <CalendarCell
                    day={day}
                    onMoveCell={(id: number, day: number) => undefined}
                />
            ))}
        </div>
    );
};

export default Calendar;
