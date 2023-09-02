import TableBody from "./TableBody";
import TableHead from "./TableHead";

import styles from "./Table.module.css"


const Table = (props)=>{

    return(
    <table className={styles.result}>
      <TableHead></TableHead>
      <TableBody data ={props.Data} initalInvestment= {props.initalInvestment}></TableBody>
     
      </table>
    )

}
export  default Table;