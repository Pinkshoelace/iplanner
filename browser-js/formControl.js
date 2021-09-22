const formControll = (j) => {
    let total = 0;
    let elem = document.getElementsByName("subject");
    for (let i = 0; i < elem.length; i++) {
      if (elem[i].checked == true) {
        total = total + 1;
      }
      if (total > document.getElementById("subjectNum").value) {
        alert(`Please select only ${document.getElementById("subjectNum").value} subjects!`);
        elem[j].checked = false;
        return false;
      };
    };
}
