import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

const Main = () => {
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
      <h2>Bütün Sifarişlər : ?</h2>
      <h2>Ümumi məbləğ : ?</h2>
      <div className="pages">
        <Link to="/all-orders">
          <div className="pages__card">
            <h3>Bütün Sifarişlər</h3>
            <div className="pages__card__link">
              <i class="fas fa-utensils"></i>
            </div>
          </div>
        </Link>
        <Link to="/create-order">
          <div className="pages__card">
            <h3>Sifariş Yarat</h3>
            <div className="pages__card__link">
              <i className="fa-solid fa-clipboard-list"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
