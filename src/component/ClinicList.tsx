import { useState } from "react";
import { IClinic } from "./Clinic.type";
import "./ClinicList.style.css";
import ClinicModal from "./ClinicModal";

type Props = {
  list: IClinic[];
  onDeleteClickHnd: (data: IClinic) => void;
  onEdit: (data: IClinic) => void;
};

const ClinicList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IClinic | null);

  const viewClinic = (data: IClinic) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h3 className="list-header">Clinic List</h3>
      </article>
      <table>
        <thead>
          <tr>
            <td>Clinic Name</td>
            <td>Branch</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Website</td>
            <td>Action</td>
          </tr>
        </thead>
        {list.map((clinic) => {
          return (
            <tbody>
              <tr key={clinic.id}>
                <td>{clinic.name}</td>
                <td>{clinic.branch}</td>
                <td>{clinic.address}</td>
                <td>{clinic.contact}</td>
                <td>{clinic.website}</td>
                <td>
                  <div>
                    <input
                      type="button"
                      value="View"
                      onClick={() => viewClinic(clinic)}
                    />
                    <input
                      type="button"
                      value="Edit"
                      onClick={() => onEdit(clinic)}
                    />
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => onDeleteClickHnd(clinic)}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <ClinicModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default ClinicList;
