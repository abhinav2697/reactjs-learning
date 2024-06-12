import { Navigate } from "react-router-dom";
const Stats = ({ user }) => {
    if (!user) {
        return <Navigate to="/login" replace/>
    }
    return (
        <div style={{ padding: 20 }}>
            <h2>Stats View</h2>
            <p>Hello Stats Page...!</p>
        </div>
    )
    
}
export default Stats;