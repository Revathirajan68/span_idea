import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// style
import './style.scss';

const data = [
    {
        name: 'MON',
        uv: 9000,
        pv: 9500,
        amt: 2400,
    },
    {
        name: 'TUE',
        uv: 7000,
        pv: 7000,
        amt: 2210,
    },
    {
        name: 'WED',
        uv: 9000,
        pv: 10000,
        amt: 2290,
    },
    {
        name: 'THU',
        uv: 9000,
        pv: 10000,
        amt: 2000,
    },
    {
        name: 'FRI',
        uv: 13000,
        pv: 17000,
        amt: 2181,
    },
];

export default function StackedBarChart() {

    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[10000, 20000, 30000]}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#82ca9d" barSize={30}/>
            <Bar dataKey="uv" stackId="a" fill="#d2f0dd" barSize={30}/>
        </BarChart>
    );
}

