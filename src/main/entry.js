import addNote from './module/addNote';
import deleteNote from './module/deleteNote';
import getClass from './module/getClass';
import getClassContent from './module/getClassContent';
import getLocation from './module/getLocation';
import getNotes from './module/getNotes';
import getStatistics from './module/getStatistics';
import queryClass from './module/queryClass';
import releaseClass from './module/releaseClass';
import setLocation from './module/setLocation';

const yoyo =
    {
        addNote,
        deleteNote,
        getClass,
        getClassContent,
        getLocation,
        getNotes,
        getStatistics,
        queryClass,
        releaseClass,
        setLocation,
    };

export default yoyo;

window['www---vanging---com___yoyo___sdk'] = yoyo;