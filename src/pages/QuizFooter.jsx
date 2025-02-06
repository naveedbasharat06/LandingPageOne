import React from "react";
import { Link } from "react-router-dom";
import "./QuizFooter.css";
function QuizFooter() {
  return (
    <div className="QuizCard-main mx-auto ">
      <div className="QuizFooter-Content">
        <div className="QuizCard-NavLinks">
          <div className="footerLeft-content">
            © 2024 Cool Company, All Rights Reserved
          </div>
          <div className="footerRight-content">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Services</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="QuizFooter-paragraph">
          <p>
            Content, images, and assets on this site may not be reproduced,
            transmitted, cached, distributed, or used in any way without prior
            written consent. This site does not offer professional medical
            advice or services. The ideas, procedures, and suggestions provided
            here are not a substitute for consulting your physician and should
            be used only as part of planning your overall health and fitness
            plan with medical supervision. Our Terms of Service limit liability,
            and you must read and agree to them before using this site. This
            information is not intended to diagnose, treat, cure, or prevent any
            disease. Your results may differ from any claims or testimonials.
            Typical results are not guaranteed; most people do not achieve
            results because they do not take consistent action. The examples
            shown are of individuals who made lifestyle changes and are not
            typical. Achieving results requires commitment and adherence to a
            plan
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizFooter;
