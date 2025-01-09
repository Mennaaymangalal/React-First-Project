import React from "react";
import LineBlue from "../LineBlue/LineBlue";
import img1 from "../Assets/images/cabin.4417330275f78faa31c3.png";
import img2 from "../Assets/images/cake.6554473016d32b343f02.png";
import img3 from "../Assets/images/circus.494a4a914b5471b41f3e.png";
import img4 from "../Assets/images/game.a940b57aa7bab2eacc52.png";
import img5 from "../Assets/images/safe.01792c0bdc342bf4bf9c.png";
import img6 from "../Assets/images/submarine.48c9704ca7f8ce901038.png";
import './Portfolio.css'
import { useState } from "react";
import ComponentOverlayed from "../componentOverlay/ComponentOverlayed";


const Portfolio = () => {
  const items = [
    {image: img1 , title:"LOG CABIN", desc:`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.

`},
      {image: img2 , title:"TASTY CAKE", desc:`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.

`},
{image: img3 , title:"CIRCUS TENT", desc:`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.

  `},
  {image: img4 , title:"CONTROLER", desc:`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.

    `},
    {image: img5 , title:"LOCKED SAFE", desc:`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.

      `},
      {image: img6 , title:"SUBMARINE", desc:`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.

        `},
    ];
  console.log(items);

  const [slectedItem, setSlectedItem] = useState(null)

  const imageClicked = (item) =>{
    setSlectedItem(item);
  }
 const close = ()=>{
    setSlectedItem(null)
  }

  return (
    <>
      <div className="container my-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold">PORTFOLIO</h2>
          <LineBlue />
        </div>
        <div className="row my-4 g-5">
          {items.map((item, index) => ( 
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div onClick={() => imageClicked(item)} style={{ cursor: "pointer" }} className=" position-relative imageContainer">
                <img src={item.image} alt={item.title} className="img-fluid rounded" />
                <div className="overLay"><i class="fa-solid fa-plus"></i></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {slectedItem &&
      <ComponentOverlayed image={slectedItem.image} title={slectedItem.title} disc={slectedItem.desc} close={close}/>
      }
      
    </>
  );
};

export default Portfolio;

