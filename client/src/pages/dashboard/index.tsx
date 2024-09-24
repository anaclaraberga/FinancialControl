import { useUser } from "@clerk/clerk-react"
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";

export const Dashboard = () => {

    const { user } = useUser();
    const { records } = useFinancialRecords();

    const totalMonthly = useMemo(() => {
        let totalAmount = 0;
        records.forEach((record) => {
          totalAmount += record.amount;
        });
    
        return totalAmount;
      }, [records]);

    return <div className="dashboard-container">

        <div className="totalMonthly">Seu saldo: <a className="marked">R${totalMonthly}</a></div>

        <div className="insert-finances">
          <h1>
              Seja bem-vindo <a className="marked">{ user?.firstName }</a>! Suas finanças estão aqui:
          </h1>

          <FinancialRecordForm></FinancialRecordForm>
        </div>
    
        <FinancialRecordList></FinancialRecordList>
    </div>;
}