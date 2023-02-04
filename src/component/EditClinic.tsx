import { useState } from "react";
import { IClinic } from "./Clinic.type";
import "./ClinicForm.style.css";

type Props = {
  data: IClinic;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IClinic) => void;
};

const EditClinic = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [name, setClinicName] = useState(data.name);
  const [address, setAddress] = useState(data.address);
  const [contact, setContact] = useState(data.contact);
  const [branch, setBranch] = useState(data.branch);
  const [website, setWebsite] = useState(data.website);

  const onClinicNameChangeHnd = (e: any) => {
    setClinicName(e.target.value);
  };

  const onAddressChangeHnd = (e: any) => {
    setAddress(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IClinic = {
      id: data.id,
      name: name,
      address: address,
      contact: contact,
      branch: branch,
      website: website,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
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
          <input type="submit" value="Update Clinic" />
        </div>
      </form>
    </div>
  );
};

export default EditClinic;
