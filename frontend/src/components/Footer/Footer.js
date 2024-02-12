import React from "react";
import classes from "./footer.module.css";
import { toast } from "react-toastify";


const handleNews = () => {
    toast.success('joined successfully with your email', 'Success');
}

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={`${classes.childs} ${classes.firstDiv}`}>
        <div className={`${classes.firstChilds}`}>
          <img src="quality.png" alt="quality assurance"></img>
          <span>best quality</span>
        </div>
        <div className={`${classes.firstChilds}`}>
          <img src="7-24-logo.png" alt="always open"></img>
          <span> always open</span>
        </div>
        <div className={`${classes.firstChilds}`}>
          <img src="fast-delivery.png" alt="fast-delivery"></img>
          <span>fast delivery</span>
        </div>
      </div>
      <div className={`${classes.childs} ${classes.secondDiv}`}>
        <div className={`${classes.secondChilds}`}>
          <div>follow us !</div>
          <a href="#"><div><img src="instagram.png" alt="instagram"/></div></a>
          <a href="#"><div><img src="telegram.png" alt="telegram"/></div></a>
          <a href="#"><div><img src="twitter.png" alt="twitter"/></div></a>
        </div>
        <div className={`${classes.secondChilds}`}>
            <div>contact us !</div>
            <div>support number : 021-12345678</div>
            <div>Comments and criticisms : 021-87654321</div>
        </div>
        <div className={`${classes.secondChilds}`}>
            <div><button className={classes.newsButton} onClick={handleNews}>I'd like to get the latest news</button></div>
        </div>
      </div>
      <div className={`${classes.childs} ${classes.thirdDiv}`}>
        All Rights reserved® / developed by AmirHossein Golrokhi
      </div>
    </div>
  );
}
