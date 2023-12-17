import { Trash, PencilSquare } from "react-bootstrap-icons";
const TableShowData = ({stdData,handleDataDelete}) => {
   const handleChildDelete = (e) =>{
    handleDataDelete(e.target.id)
   }
  return (
    <>
      <div className="container">
        <h4 className="text-center">Added Peoples</h4>
        <table className="table">
          <thead>
            <tr>
              <th>SR. No</th>
              <th>Name</th>
              <th>Course</th>
              <th>Companies</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {stdData.map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.course}</td>
                  <td>{data.workedCompany}</td>
                  <td  id={data.id}>
                    <Trash
                      onClick={handleChildDelete}
                      id={data.id}
                      style={{ cursor: "pointer" }}
                      size={24}
                      color="red"
                    />
                  </td>
                  <td>
                    <PencilSquare
                      id={data.id}
                      title="Edit"
                      style={{ cursor: "pointer" }}
                      size={24}
                      color="blue"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableShowData;
