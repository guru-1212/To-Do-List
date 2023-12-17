import { Alert } from "@mui/material";
const ErrMsg = () =>{

    return(
        <div className="container position-relative">
               <Alert className="text-center" severity="error">Data is empty</Alert>
        </div>
    )
}
export default ErrMsg;