import { useState, ChangeEvent, FormEvent } from "react";

interface FormProps {
  // Any props can be added here if needed in the future
}

function Form(props: FormProps) {
  const [location, setLocation] = useState<string>('');

  // Handle form submission
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (location.trim() === '') {
      alert("Location cannot be empty.");
      return;
    }
    alert(`Location submitted: ${location}`);
    setLocation("");
  }

  // Handle input change
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="location-input" className="label__lg">
          Enter your location:
        </label>
      </h2>

      <input
        type="text"
        id="location-input"
        className="input input__lg"
        name="location"
        autoComplete="off"
        value={location}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Enter
      </button>
    </form>
  );
}

export default Form;
