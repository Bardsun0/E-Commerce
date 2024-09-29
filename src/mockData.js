export const roles = [
  { id: 1, name: "Customer" },
  { id: 2, name: "Store" },
];

// Sample user data
const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "Password123!",
    role_id: 1,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    password: "Password456!",
    role_id: 2,
    store: {
      name: "Jane's Store",
      phone: "+905551234567",
      tax_no: "T1234V123456",
      bank_account: "TR330006100519786457841326",
    },
  },
];

export const signUp = (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validation
      if (
        !userData.firstName ||
        !userData.lastName ||
        !userData.email ||
        !userData.password ||
        !userData.role_id
      ) {
        reject({ message: "All fields are required" });
        return;
      }

      // Email validation
      if (!/^\S+@\S+$/i.test(userData.email)) {
        reject({ message: "Invalid email format" });
        return;
      }

      // Password validation
      if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
          userData.password
        )
      ) {
        reject({
          message:
            "Password must be at least 8 characters, include numbers, lowercase, uppercase, and special characters",
        });
        return;
      }

      // Check if email already exists
      if (users.some((user) => user.email === userData.email)) {
        reject({ message: "Email already exists" });
        return;
      }

      // Store specific validations
      if (userData.role_id === 2) {
        if (
          !userData.store ||
          !userData.store.name ||
          !userData.store.phone ||
          !userData.store.tax_no ||
          !userData.store.bank_account
        ) {
          reject({ message: "All store fields are required" });
          return;
        }

        // Phone number validation
        if (!/^(\+90|0)?[1-9][0-9]{9}$/.test(userData.store.phone)) {
          reject({ message: "Invalid Turkish phone number" });
          return;
        }

        // Tax ID validation
        if (!/^T\d{4}V\d{6}$/.test(userData.store.tax_no)) {
          reject({ message: "Invalid Tax ID format" });
          return;
        }

        // IBAN validation
        if (
          !/^TR\d{2}[0-9A-Z]{5}[A-Z0-9]{17}$/.test(userData.store.bank_account)
        ) {
          reject({ message: "Invalid IBAN format" });
          return;
        }
      }

      // If all validations pass, create new user
      const newUser = {
        id: Date.now(),
        ...userData,
      };
      users.push(newUser);

      resolve({
        message: "User registered successfully",
        user: newUser,
      });
    }, 1000); // 1 second delay
  });
};
