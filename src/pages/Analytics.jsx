// AnalysisComponent.js

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

// Your Redux action creators
import { fetchData } from "../Redux/reducers/userSlice";

const AnalysisComponent = ({ data, fetchData }) => {
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, [fetchData]);

  // Render the chart with the data
  return (
    <div>
      <h2>Analysis Component</h2>
      <Line
        data={{
          labels: data.labels,
          datasets: [
            {
              label: "Data",
              data: data.values,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  data: state.data, // Assuming your Redux state has a 'data' slice
});

// Map Redux action creators to component props
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()), // Assuming you have a fetchData action creator
});

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AnalysisComponent);
