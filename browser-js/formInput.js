let subjects = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addSubject = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            subjects = [];
            var elem = document.getElementsByName("subject");
            for (var i = 0; i < elem.length; i++) {
                if (elem[i].checked == true) {
                    subjects.push(elem[i].id );
                }
              };
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            // console.warn('added' , {subjects} );
            // let pre = document.querySelector('#msg pre');
            // pre.textContent = '\n' + JSON.stringify(subjects, '\t', 2);

            //saving to localStorage
            localStorage.setItem('mySubjectList', JSON.stringify(subjects) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('submit_btn').addEventListener('click', addSubject);
        });