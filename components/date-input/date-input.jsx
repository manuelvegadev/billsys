import { DatePicker, DatePickerInput } from "@carbon/react";

/** @type {DateInputType} */
export const DateInput = ({ id, label, value, onChange, disabled = false }) => {
  return (
    <DatePicker
      datePickerType={"single"}
      value={value}
      dateFormat={"Y-m-d"}
      onClose={(date, value) => {
        if (onChange) onChange(value);
      }}
      allowInput={false}
    >
      <DatePickerInput id={id} labelText={label} required disabled={disabled} />
    </DatePicker>
  );
};

export default DateInput;
