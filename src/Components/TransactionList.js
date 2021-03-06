import React, {useContext} from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../contex/GlobalState'

export const TransactionList = () => {

        const context = useContext(GlobalContext);
        const { transactions } = useContext(GlobalContext);
    return (
        <>
             <h3>History</h3>
                <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                </ul>
        </>
    )
}


