import axios from "axios";
import { useState } from "react";
import { IClinic } from "./Clinic.type";
import "./ClinicForm.style.css";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IClinic) => void;
};

const AddClinic = (props: Props) => {
  const [name, setClinicName] = useState("");
  const [address, setAddress] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onClinicNameChangeHnd = (e: any) => {
    setClinicName(e.target.value);
  };

  const onAddressChangeHnd = (e: any) => {
    setAddress(e.target.value);
  };

  const onSubmitBtnClickHnd = async (e: any) => {
    e.preventDefault();
    console.log(name);
    await axios.post("localhost:/clinics", {
      name,
      address,
    });
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Clinic Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>Clinic Name : </label>
          <input type="text" value={name} onChange={onClinicNameChangeHnd} />
        </div>
        <div>
          <label>Address : </label>
          <input type="text" value={address} onChange={onAddressChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Add Clinic" />
        </div>
      </form>
    </div>
  );
};

export default AddClinic;
