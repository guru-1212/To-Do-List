import React from 'react';
import GettingData from "./GettingData"
import HeadingText from "./Heading"
import ErrMsg from "./ErrMsg"
import TableShowData from './TableShowData';
const HomeToDo = () =>{
    const [stdData, setStdData] = React.useState([]);
    const [course, setCourse] = React.useState([]);
    const [workedCompany, setWorkedCompany] = React.useState([]);
    const [Name, setName] = React.useState([]);
    const handleCourse = (e) =>{
        setCourse(e)
    }
    const handleName = (e) =>{
        setName(e)
    }
    const handleCompanyName = (e) =>{
        setWorkedCompany(e)
    }
    const  addClick = () => {
        var allData = {
          id: Math.random(123123),
          name: Name,
          course: course,
          workedCompany: workedCompany,
        };
        if (Name === "" || course === "" || workedCompany === "") {
            alert("plz fill all the Data");
        } else {
            setStdData((prev) => [...prev, allData]);
        }
        
    }
    function handleDataDelete(e) {
        setStdData((prevData) =>
          prevData.filter((items) => items.id != e)
        );
        // console.log(e)
      }
    return(
        <>
        <HeadingText/>
        <GettingData addClick={addClick} Name={Name} course={course} handleCourse={handleCourse} handleName={handleName} workedCompany={workedCompany} handleCompanyName={handleCompanyName}/>
        {stdData.length === 0 ? <ErrMsg></ErrMsg> : null}
        <TableShowData stdData={stdData} handleDataDelete={handleDataDelete} />
        </>
    )
}
export default HomeToDo