import { BsCart } from "react-icons/bs";
import style from './CountPeoples.module.css'
const CountShowAddedPeople = ({stdData}) =>{
    return(
        <>
           <div className="position-relative">
                <BsCart className={style.cartIcon} />
                <span className={style.number_count}>{stdData.length}</span>
           </div>
        </>
    )
}
export default CountShowAddedPeople