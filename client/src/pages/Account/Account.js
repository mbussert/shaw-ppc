import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import API from "../../utils/API";

import ProjectList from "../../components/ProjectList";
import ProjectDetails from "../../components/ProjectDetails";
import { Grid, Paper } from "@material-ui/core";

function Account() {

  const [orders, setOrders] = useState([]);

  useEffect(() => { loadOrders() }, []);

  function loadOrders() {

    // 1 is the first ID locally created in the database (i.e. the first account)
    // 1 is currently hardcoded for testing; need to use React to get the user's ID that is logged in

    API.getOrdersById(1)
      .then(res => {
        if (res.data.length === 0) {
          console.log("No orders found.");
        }
        if (res.data.status === "error") {
          throw console.log(res.data.message);
        }
        setOrders(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Header />
      <h1>Account</h1>

      {!orders.length ? (
         <h1 className="text-center">No Orders to Display</h1>
       ) : (
         <div>
           <h2>Orders by this user are mapped in the console!</h2>
           {orders.map(order => {
             return (
               console.log(order)

              //   Props to pass an Order component to be rendered on the page

              //  <Order
              //    key={order.id}
              //    id={order.id}
              //    email={order.email}
              //    firstName={order.firstName}
              //    height={order.height}
              //    lastName={order.lastName}
              //    linearFeet={order.linearFeet}
              //    material={order.material}
              //    phone={order.phone}
              //    projectTitle={order.projectTitle}
              //  />
             );
           })}
         </div>
       )}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <ProjectList />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <ProjectDetails />
        </Grid>
      </Grid>
    </div>
  )

}

export default Account;
