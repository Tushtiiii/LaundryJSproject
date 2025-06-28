You can see the results here->https://laundrywebs.netlify.app/

# 🧺 Laundry Services Web App

## 📌 Project Overview

The **Laundry Services Web App** is a modern, responsive website designed to streamline the user experience for booking laundry services online. It enables users to explore available services, add items to a cart, book appointments, and receive email confirmations. With a clean layout and interactive components, users can easily manage their laundry needs in just a few clicks.

---

## 🚀 Features

* Responsive **Navigation Bar** with essential sections.
* Engaging **Hero Section** with call-to-action and image.
* Informative **Service Overview Section** displaying achievements.
* Interactive **Booking Services Section** for service selection and form submission.
* Real-time **cart update** and **total amount calculation**.
* **Email confirmation** using [Email.js](https://www.emailjs.com/) upon booking.

---

## 🛠️ Pages & Components

### 🔹 Navbar

* Responsive and fixed at the top.
* Contains: `Logo`, `Home`, `Services`, `About Us`, `Contact Us`.
* Displays the logged-in user's name on the right.

### 🔹 Hero Section

* Split into two divs:

  * **Left Div**: Includes a heading, a short description, and a "Book a Service Today" button that scrolls to the booking section.
  * **Right Div**: Displays an image relevant to laundry services.

### 🔹 Service Overview Section

* A full-width section showcasing:

  * 15+ Laundry Services
  * 240+ Happy Customers
  * 2+ Years of Experience

### 🔹 Booking Services Section

#### Left Div:

* Displays a list of services with:

  * Service name
  * Price
  * "Add Items" & "Remove Now" buttons
* Instructional text at the bottom: *"Add items to the cart"*

#### Right Div:

* **Cart Summary** (Top):

  * Dynamically updated list of selected services.
  * Displays total amount.
* **Booking Form** (Bottom):

  * Fields: Full Name, Email, Phone Number
  * "Book Now" button
  * On submission, sends order details to the app owner's email using Email.js

---

## 📧 Email Integration

* Utilizes [Email.js](https://www.emailjs.com/) to send booking confirmation emails.
* Once the user clicks **"Book Now"**, the form data and cart summary are emailed to the registered address.

---

## 📌 Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **Email.js** for email functionality
* **Netlify** for deployment

---

## 🧪 Future Improvements

* Backend integration for persistent order history.
* User authentication & dashboard.
* Payment gateway integration.
* Enhanced service filtering.

---

> Made with ❤️ for easy, online laundry bookings.
