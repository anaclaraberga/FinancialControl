import { useUser } from "@clerk/clerk-react"
import { FinancialForm } from "./financial-form";
import { FinancialList } from "./financial-list";

export const Dashboard = () => {

    const { user } = useUser();

    return <div className="dashboard-container">
        <h1>
            Welcome { user?.firstName }! Here are your finances:
        </h1>

        <FinancialForm></FinancialForm>

        <FinancialList></FinancialList>
    </div>;
}