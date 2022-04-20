/** @format */
import { useQuery } from "@apollo/client";
import { FIRST_AND_LAST_NAMES } from "./GraphQL/Query";
import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // const { error, loading, data } = useQuery(FIRST_AND_LAST_NAMES);

  // if (loading) return <div>Loading...</div>;

  // if (error) return { error };

  // console.log(data.list_UserInfoItems._UserInfoItems);

  return (
    <main className={classes.main}>
      <div className={classes.mainText}>
        <h1>Welcome to your Dashboard John!</h1>
        <Link to="/Signature">
          <h2>Signatures required:</h2>
        </Link>
        <Link to="">
          <h2>Document History</h2>
        </Link>
        <Link to="">
          <h2>Upload Docs</h2>
        </Link>
        {/* {data
          ? data.list_UserInfoItems._UserInfoItems.map((user) => {
			  return(
              <>
                <div>First name: {user.userFirstName}</div>
                <div>Last name: {user.userLastName}</div>
				<hr/>
              </>
			  );
            })
          : null} */}
      </div>
    </main>
  );
};

export default Dashboard;