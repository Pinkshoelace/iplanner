import {day} from './day.js'
import {period} from './period.js'
import {timetable} from './timetable.js'

let compulsorySubjects = ["subject_tutorial","subject_pe"]

const array1 = Object.keys(timetable[day][period]);
// const array1 = JSON.parse(localStorage.getItem("mySubjectList"));

const array2 = JSON.parse(localStorage.getItem("mySubjectList"))
console.log(array1)
console.log(array2)


const comunes=array1.filter(elem=> array2.filter(elem2=> elem2===elem).length>0 )


const currentSubject = {
    name: timetable[day][period][comunes].name,
    room: timetable[day][period][comunes].room,
    teacher: timetable[day][period][comunes].teacher
    
}

export {
    currentSubject
}
