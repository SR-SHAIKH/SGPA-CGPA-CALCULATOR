function showSection(sectionId) {
    document.getElementById("home").classList.add("hidden");
    document.querySelectorAll("#sgpaCalc, #cgpaCalc, #sgpaToPercentage, #cgpaToPercentage").forEach(section => {
      section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
  }
  
  function backHome() {
    document.querySelectorAll("#sgpaCalc, #cgpaCalc, #sgpaToPercentage, #cgpaToPercentage").forEach(section => {
      section.classList.add("hidden");
    });
    document.getElementById("home").classList.remove("hidden");
  }
  
  // Grade to Point mapping
  const gradePoints = {
    "A+": 10,
    "A": 9,
    "B+": 8,
    "B": 7,
    "C+": 6,
    "C": 5,
    "D": 4,
    "E": 3,
    "F": 0,
    "I": 0,
    "X": 0
  };
  
  function addSubject() {
    const subjectsDiv = document.getElementById("subjects");
  
    const subjectDiv = document.createElement("div");
    subjectDiv.className = "flex gap-2";
  
    const creditInput = document.createElement("input");
    creditInput.type = "number";
    creditInput.placeholder = "Credits";
    creditInput.className = "border p-2 rounded flex-1";
  
    const gradeSelect = document.createElement("select");
    gradeSelect.className = "border p-2 rounded flex-1";
    for (const grade in gradePoints) {
      const option = document.createElement("option");
      option.value = grade;
      option.textContent = grade;
      gradeSelect.appendChild(option);
    }
  
    subjectDiv.appendChild(creditInput);
    subjectDiv.appendChild(gradeSelect);
  
    subjectsDiv.appendChild(subjectDiv);
  }
  
  function calculateSGPA() {
    const subjectDivs = document.getElementById("subjects").children;
  
    let totalCredits = 0;
    let totalPoints = 0;
  
    for (const div of subjectDivs) {
      const credit = parseFloat(div.children[0].value);
      const grade = div.children[1].value;
  
      if (!isNaN(credit) && gradePoints.hasOwnProperty(grade)) {
        totalCredits += credit;
        totalPoints += credit * gradePoints[grade];
      }
    }
  
    if (totalCredits === 0) {
      document.getElementById("sgpaResult").innerText = "-";
      return;
    }
  
    const sgpa = totalPoints / totalCredits;
    document.getElementById("sgpaResult").innerText = sgpa.toFixed(2);
  }
  
  function calculateCGPA() {
    const totalSgpa = parseFloat(document.getElementById("totalSgpa").value);
    const numSems = parseInt(document.getElementById("numSems").value);
  
    if (isNaN(totalSgpa) || isNaN(numSems) || numSems === 0) {
      document.getElementById("cgpaResult").innerText = "-";
      return;
    }
  
    const cgpa = totalSgpa / numSems;
    document.getElementById("cgpaResult").innerText = cgpa.toFixed(2);
  }
  
  function sgpaToPercent() {
    const sgpa = parseFloat(document.getElementById("sgpaInput").value);
  
    if (isNaN(sgpa)) {
      document.getElementById("sgpaPercentResult").innerText = "-";
      return;
    }
  
    const percentage = (sgpa - 0.75) * 10;
    document.getElementById("sgpaPercentResult").innerText = percentage.toFixed(2) + "%";
  }
  
  function cgpaToPercent() {
    const cgpa = parseFloat(document.getElementById("cgpaInput").value);
  
    if (isNaN(cgpa)) {
      document.getElementById("cgpaPercentResult").innerText = "-";
      return;
    }
  
    const percentage = cgpa * 9.5;
    document.getElementById("cgpaPercentResult").innerText = percentage.toFixed(2) + "%";
  }
  