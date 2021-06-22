import { useState } from "react";

export const AddressBook = () => {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [contactData, setContactData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setContactData((prevContact) => [...prevContact, inputData]);
  };

  const contact = contactData.map((item) => (
    <h3 key={item.firstName}>
      {item.firstName} {item.lastName}
    </h3>
  ));

  console.log(contactData);
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <h1>Contact Book</h1>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={inputData.firstName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={inputData.lastName}
            onChange={handleChange}
          />
        </div>
        <button>Add Contact</button>
      </form>
      <div>
        <h2>Contact List</h2>
        {contact}
      </div>
    </>
  );
};
