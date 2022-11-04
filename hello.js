var subjectObject = {
    "six": {
      "science": "models/science_6.pdf",
      "maths": "models/maths_6.pdf",
      "english": "models/english_6.pdf",
      "nepali": "models/nepali_6.pdf",
      "computer": "models/computer_6.pdf",
      "social": "models/social_6.pdf"
    },
    "seven": {
      "science": "models/science_7.pdf",
      "maths": "models/maths_7.pdf",
      "english": "models/english_7.pdf",
      "nepali": "models/nepali_7.pdf",
      "computer": "models/computer_7.pdf",
      "social": "models/social_7.pdf"
    },
    "eight": {
      "science": "models/science_8.pdf",
      "maths": "models/maths_8.pdf",
      "english": "models/english_8.pdf",
      "nepali": "models/nepali_8.pdf",
      "computer": "models/computer_8.pdf",
      "social": "models/social_8.pdf"
    },
    "nine": {
      "science": "models/science_9.pdf",
      "maths": "models/maths_9.pdf",
      "english": "models/english_9.pdf",
      "nepali": "models/nepali_9.pdf",
      "computer": "models/computer_9.pdf",
      "social": "models/social_9.pdf"
    },
    "ten": {
      "science": "models/science_10.pdf",
      "maths": "models/maths_10.pdf",
      "english": "models/english_10.pdf",
      "nepali": "models/nepali_10.pdf",
      "computer": "models/computer_10.pdf",
      "social": "models/social_6.pdf"
    },
  }
  
  function onSubmit(){
   var  _class = document.getElementById("subject").value 
    let subject = document.getElementById("topic").value 
  console.log(subjectObject[_class][subject])
 window.open(subjectObject[_class][subject])
  }