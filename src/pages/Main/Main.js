import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  const post = () => {
    fetch("http://localhost:3000/db.json");
  };
  React.useEffect(() => {
    post();
  }, []);
  return (
    <div className="container">
      <h1>ABOUT</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores
        quibusdam laboriosam delectus necessitatibus iusto accusantium, earum
        quaerat! Alias quis minima pariatur quaerat architecto sapiente
        consectetur, praesentium ipsa eius deleniti rem quia non, corrupti
        voluptas modi accusamus totam dolores neque doloribus mollitia veniam
        nesciunt nostrum! Ipsam eligendi, maxime vitae voluptas hic iure
        repellat fugit saepe aliquam unde facilis, cum cupiditate doloremque?
        Accusamus molestias, explicabo voluptas autem sequi possimus veniam
        aperiam quis nostrum minus asperiores. Fugit quisquam ducimus dolore
        quam odio cum, enim vero ad ratione aliquam quod libero impedit optio
        corrupti molestias maxime vel excepturi saepe voluptate sed porro
        quibusdam! Ipsa, non, in cum consectetur mollitia commodi quos
        reiciendis ad unde et sequi, impedit culpa asperiores. Omnis dolorum
        repudiandae voluptates commodi quis saepe quibusdam harum nihil odio ex
        ad at repellendus aperiam tenetur maiores, suscipit molestias esse nam
        velit, non officiis adipisci mollitia tempore vero? Aliquam, voluptatum?
        Voluptatem, non necessitatibus.
      </p>
      <h2>TOTAL ORDERS : 150</h2>
      <h2>TOTAL SUM : 2500</h2>
      <div className="pages">
        <Link to="/page1">
          <div className="pages__card">
            <h2>ALL ORDERS</h2>
            <div style={{ color: "blue", fontSize: "55px", padding: "50px" }}>
            <i class="fa-solid fa-rectangle-list"></i>
                        </div>
          </div>
        </Link>
        <Link to="/page2">
          <div className="pages__card">
            <h2>ADD NEW ORDER</h2>
            <div style={{ color: "blue", fontSize: "55px", padding: "50px" }}>
              <i className="fa-solid fa-clipboard-list"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;