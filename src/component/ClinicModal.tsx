import { IClinic } from "./Clinic.type";
import "./ClinicModal.style.css";

type Props = {
  onClose: () => void;
  data: IClinic;
};

const ClinicModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Clinic Data</h3>
        <div>
          <div>
            <label>Clinic Name : {data.name}</label>
          </div>
          <div>
            <label>Address : {data.address}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicModal;
