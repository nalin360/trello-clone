import React from 'react'
import LineCharts from '../components/Analytics/LineCharts'
import { useDispatch, useSelector } from 'react-redux';

function Analytics() {

    // const dispatch = useDispatch();
    // const chartData = useSelector(state => state.user.chartData); // Adjust the path according to your Redux store structure

    // useEffect(() => {
    //     dispatch(fetchInitialData());
    // }, [dispatch]);
    return (
        <div>
            <LineCharts />
        </div>
    )
}

export default Analytics