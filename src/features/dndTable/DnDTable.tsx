import * as React from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {Link} from 'react-router-dom';

import Calendar from './components/Calendar';

const DnDTable = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{}}>
                <h1>My Calendar App</h1>
                <Link to={'/'}> Back To Home</Link>
                <Calendar />
            </div>
        </DndProvider>
    );
};

export default DnDTable;
