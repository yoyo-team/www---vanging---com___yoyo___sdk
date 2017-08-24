// import './util.test';
import './module/addNote.test';
import './module/deleteNote.test';
import './module/getClass.test';
import './module/getLocation.test';
import './module/getNotes.test';
import './module/getStatistics.test';
import './module/queryClass.test';
import './module/setLocation.test';


import releaseClass from '../main/module/releaseClass';
function release()
{
    releaseClass(document.getElementById('form'))
        .then(function(result)
        {
            console.log(result);
            alert('success');
        }, function(err)
        {
            console.log(err);
            alert('fail');
        })
}

window.release = release;