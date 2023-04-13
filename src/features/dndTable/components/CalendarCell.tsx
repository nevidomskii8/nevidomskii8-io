import React, {FC, useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';

export type PropsCalendarCell = {
    day: number;
    onMoveCell: (id: number, day: number) => void;
};

const CalendarCell: FC<PropsCalendarCell> = ({day, onMoveCell}) => {
    const ref = useRef(null);
    const [{isDragging}, drag] = useDrag({
        type: 'Cell',
        item: day,
        collect: (monitor) => {
            return {
                handlerId: monitor.getHandlerId(),
                isDragging: monitor.isDragging(),
            };
        },
    });

    const [, drop] = useDrop(
        {
            accept: 'Cell',
            drop: (item, monitor) => undefined,
            hover(draggedId, rest) {
                // if (draggedId !== day) {
                //   onMoveCell(draggedId, day);
                // }
            },
            collect: (monitor) => {
                return {
                    canDrop: monitor.canDrop(),
                    isOver: monitor.isOver(),
                };
            },
        },
        [],
    );

    drop(ref);
    drop(ref);
    const opacity = isDragging ? 0 : 1;
    return (
        <div
            ref={(node) => drag(drop(node))}
            style={{
                opacity,
                // backgroundColor: isActive ? 'gray' : 'white',
            }}
        >
            {day}
        </div>
    );
};

export default CalendarCell;
