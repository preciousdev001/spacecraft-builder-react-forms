import { useState } from "react";

import styles from "./ItemForm.module.css";

function ItemForm({ onItemSubmit }) {
  const INITIAL_DATA = {
    name: "",
    quantity: "",
    purpose: "",
    agreeToTerms: false,
  };

  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;

    setData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validateForm() {
    let newFormErrors = {};

    if (!data.name) {
      newFormErrors.name = true;
    }
    if (!data.quantity) {
      newFormErrors.quantity = true;
    }
    if (!data.purpose) {
      newFormErrors.purpose = true;
    }
    if (!data.agreeToTerms) {
      newFormErrors.agreeToTerms = true;
    }
    setErrors(newFormErrors);

    return Object.keys(newFormErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      const newItem = {
        ...data,
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      };
    }
  }
}
