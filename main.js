    // Customers data
const customers = [
  {
    "lotteryNumber": "12345",
    "mobileNumber": "9309954123",
    "name": "Ratna Tembhakar",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250",
    "prizeStatus": "Not Claimed"
  },
  {
    "lotteryNumber": "12345",
    "mobileNumber": "7310742716",
    "name": "Pavan",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250",
    "prizeStatus": "Not Claimed"
  },
  {
    "lotteryNumber": "12345",
    "mobileNumber": "9891172567",
    "name": "Prem Chand",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250",
    "prizeStatus": "Not Claimed"
  },
  {
    "lotteryNumber": "12345",
    "mobileNumber": "9690765070",
    "name": "Satyaprakash Rajababu",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250",
    "prizeStatus": "Not Claimed"
  },
  {
    "lotteryNumber": "12345",
    "mobileNumber": "9772407341",
    "name": "Manisha Ramgarh",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250",
    "prizeStatus": "Not Claimed"
  },
  {
    "lotteryNumber": "12345",
    "mobileNumber": "9366240221",
    "name": "Heena Akter",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250",
    "prizeStatus": "Not Claimed"
  },
  {
    "lotteryNumber": "12345",
    "mobileNumber": "9680999062",
    "name": "Niranjan Singh",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250",
    "prizeStatus": "Not Claimed"
  },
  {
    "lotteryNumber": "12345",
    "mobileNumber": "9953774870",
    "name": "Devendra Yadav",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250",
    "prizeStatus": "Not Claimed"
  },
  {
    "lotteryNumber": "12345",
    "mobileNumber": "9372799557",
    "name": "Farhan Khan",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250",
    "prizeStatus": "Not Claimed"
  },
  {
    "lotteryNumber": "12345",
    "mobileNumber": "7210645738",
    "name": "Rajesh Yadav",
    "winningAmount": "Rs. 8,50,000",
    "fees": "1250"
  }
];

const loginForm = document.getElementById('loginForm');
const detailsContainer = document.getElementById('detailsContainer');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const lotteryNumber = document.getElementById('lotteryNumber').value;
  const mobileNumber = document.getElementById('mobileNumber').value;
  
  const customer = customers.find(cust => cust.lotteryNumber === lotteryNumber && cust.mobileNumber === mobileNumber);
  
  if (customer) {
    // Display customer details
    document.getElementById('name').textContent = customer.name;
    document.getElementById('winningAmount').textContent = customer.winningAmount;
    document.getElementById('displayLotteryNumber').textContent = customer.lotteryNumber;
    document.getElementById('displayMobileNumber').textContent = customer.mobileNumber;
    document.getElementById('fees').textContent = customer.fees;
    document.getElementById('prizeStatus').textContent = customer.prizeStatus;
    
    // Show details container
    document.getElementById("detailsContainer").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("heading").innerText = "CONGRATULATIONS";
    document.getElementById("loginMessage").innerText = "Login Successful!";
    document.getElementById("loginMessage").style.backgroundColor = "#00c04b";
    document.getElementById("loginMessage").style.boxShadow = "3px 3px 7px rgba(0, 0, 0, 0.5)";
  
  
  } else {
    // If customer not found, show error message or handle accordingly
    alert('Details not found. Please check your details.');
    document.getElementById("detailsContainer").style.display = "none";
    document.getElementById("loginMessage").innerText = "Invalid Details";
    document.getElementById("loginMessage").style.backgroundColor = "red";
    document.getElementById("loginMessage").style.boxShadow = "3px 3px 7px rgba(0, 0, 0, 0.5)";
  
  }
});
