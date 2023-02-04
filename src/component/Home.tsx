import { useEffect, useState } from "react";
import AddClinic from "./AddClinic";
import EditClinic from "./EditClinic";
import { IClinic, PageEnum } from "./Clinic.type";
import ClinicList from "./ClinicList";
import "./Home.style.css";

const Home = () => {
  const [clinicList, setClinicList] = useState([] as IClinic[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IClinic);

  useEffect(() => {
    const listInString = window.localStorage.getItem("ClinicList");
    if (listInString) {
      _setClinicList(JSON.parse(listInString));
    }
  }, []);

  const onAddClinicClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setClinicList = (list: IClinic[]) => {
    setClinicList(list);
    window.localStorage.setItem("ClinicList", JSON.stringify(list));
  };

  const addClinic = (data: IClinic) => {
    _setClinicList([...clinicList, data]);
  };

  const deleteClinic = (data: IClinic) => {
    const indexToDelete = clinicList.indexOf(data);
    const tempList = [...clinicList];

    tempList.splice(indexToDelete, 1);
    _setClinicList(tempList);
  };

  const editClinicData = (data: IClinic) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IClinic) => {
    const filteredData = clinicList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = clinicList.indexOf(filteredData);
    const tempData = [...clinicList];
    tempData[indexOfRecord] = data;
    _setClinicList(tempData);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>Affiliated Clinics</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Clinic"
              onClick={onAddClinicClickHnd}
              className="add-clinic-btn"
            />
            <ClinicList
              list={clinicList}
              onDeleteClickHnd={deleteClinic}
              onEdit={editClinicData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddClinic
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addClinic}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditClinic
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
