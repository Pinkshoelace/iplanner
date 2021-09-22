import {currentSubject} from './logic-js/lesson.js'
import {navigation} from './browser-js/navigationBar.js'


document.getElementById("lessonDisplay").innerText = currentSubject.name;
document.getElementById("roomDisplay").innerText = currentSubject.room;
document.getElementById("teacherDisplay").innerText = currentSubject.teacher;
