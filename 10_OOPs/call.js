// Making function talk to each other after 'call'
// We use 'call' if we want to use whole logic of other function
function setUserProperties(userName, userEmail, userPassword) {
  // User-provided properties
  this.username = userName.trim();
  this.email = userEmail;
  this.password = userPassword;

  // Automatically generated properties
  this.companyEmail = `${this.username.toLowerCase()}@company.com`;
  this.role = "employee";
  this.isActive = false;
  this.userId = Math.floor(Math.random() * 1000000);
  this.createdAt = new Date().toLocaleString();
}

function createUser(userName, userEmail, userPassword) {
  // Apply all the logic of helper function to this object
  setUserProperties.call(this, userName, userEmail, userPassword);
}

const user1 = new createUser("RikenPatel", "riken@example.com", "1234");

console.log(user1);

/* Example Output:
createUser {
  username: 'RikenPatel',
  email: 'riken@example.com',
  password: '1234',
  companyEmail: 'rikenpatel@company.com',
  role: 'employee',
  isActive: false,
  userId: 974177,
  createdAt: '1/19/2026, 9:27:34 PM'
}
*/
