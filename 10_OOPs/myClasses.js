//  Actually creating classes and consctructors
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.companyEmail = `${username.toLowerCase()}@company.com`;
    this.role = "employee";
    this.isActive = true;
    this.userId = Math.floor(Math.random() * 1000000);
    this.createdAt = new Date().toLocaleString();
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  editUsername(newUsername) {
    if (!newUsername) throw new Error("Username cannot be empty");
    this.username = newUsername.trim();
    // Automatically update derived property if needed
    this.companyEmail = `${this.username.toLowerCase()}@company.com`;
  }

  editEmail(newEmail) {
    if (!newEmail.includes("@")) throw new Error("Invalid email");
    this.email = newEmail;
  }

  editPassword(newPassword) {
    if (newPassword.length < 4) throw new Error("Password too short");
    this.password = newPassword;
  }

  deactivate() {
    this.isActive = false;
  }

  activate() {
    this.isActive = true;
  }
}


const user1 = new User("Riken", "RP@yahoo.com", ".fjgn4943ne|");
console.log(user1)
