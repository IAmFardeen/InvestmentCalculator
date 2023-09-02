import styles from "./Table.module.css"


const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const TableBody =(props)=>{
    console.log(props.data);
return(
    <tbody className={styles['result-tbody']}>
        {props.data.map((yearData)=>{
            return(
                <tr>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                <td>{formatter.format(yearData.yearlyInterest)}</td>
                <td>{formatter.format(yearData.savingsEndOfYear-props.initalInvestment-yearData.yearlyContribution*yearData.year)}</td>
                <td>{formatter.format(props.initalInvestment + yearData.yearlyContribution*yearData.year)}</td>
              </tr>
            )
        })}

  </tbody>
)
}

export default TableBody;