function calculateBMI() {
    var weight = parseFloat(prompt('Enter Weight (kg):'));
    var height = parseFloat(prompt('Enter Height (m):'));
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter valid weight and height.');
      return;
    }
  
    var bmi = weight / (height * height);
  
    alert('Your BMI is: ' + bmi.toFixed(2));
  }
  
  calculateBMI();
  