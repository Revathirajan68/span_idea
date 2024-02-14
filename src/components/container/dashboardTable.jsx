// style
import './style.scss';

const DashboardTable = ({data}) =>{
return(
    <div className="dashboard-table">
        <table>
            <thead>
                <tr>
                {Object.keys(data[0]).map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.values(row).map((value, columnIndex) => (
                            <td key={columnIndex}>{value}</td>
                        ))}
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
)
}
export default DashboardTable;