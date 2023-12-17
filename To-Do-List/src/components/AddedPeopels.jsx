import CountShowAddedPeople from "./CountPeoples"

const AddedPeopeles = ({stdData}) =>{
    return(
        <>
            <div className="container">
               <div className="d-flex justify-content-center m-4"> <h4 className="text-center">Added Peoples</h4>
                <CountShowAddedPeople stdData={stdData}/></div>
            </div>
        </>
    )
}
export default AddedPeopeles