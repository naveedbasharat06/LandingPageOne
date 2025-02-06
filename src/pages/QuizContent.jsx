import React from "react";
import "./QuizContent.css";
function QuizContent() {
  return (
    <div className="QuizContent-main flex items-center justify-center">
      <div className="QuizContent-card bg-white shadow-lg my-0 p-3">
        <div className="QuizContent">
          <h4>Achieve Your Dream Figure with Quick and Effective Workouts.</h4>
          <div className="InnerContent">
            <h2>Great News</h2>
            <div className="QuizParagraph">
              <p>Your ideal fat burning routine has been calculated!</p>
              <p>
                Based on your answers, we’ve identified one simple method that
                you can start doing TODAY to help maximize results, in mini-mal
                time
              </p>
              <p>
                Don’t worry... it doesn’t require long hours in the gym, running
                miles on a treadmill, or some super intense cardio workout.
              </p>
              <p>
                Instead, this little-known “S.I.T. routine” can be done from the
                convenience of home, using your body’s own resistance, in just
                7-minutes a day.
              </p>
              <p>
                But here’s the kicker: The special, hyper-focused movements have
                the potential to burn fat hours later, even while you sleep!
              </p>
              <p>
                In the free presentation below, world renowned nutrition,
                fitness and weight loss expert, Meredith Shirk, explains it all.
              </p>
              <p>
                Discover the virtually foolproof way to finally melt off
                stubborn fat, regardless of your age or activity level,
                revealing a thinner, leaner, more toned body that you’ll
                absolutely LOVE!
              </p>
              <p>
                (This major metabolic breakthrough has already helped thousands
                of women get the body of thei dreams... and you could be next.)
              </p>
            </div>
          </div>
          <button className="QuizContent-Btn bg-purple-500  bg-[linear-gradient(90deg,_rgba(233,99,159,1)_0%,_rgba(129,67,226,1)_73%)]">
            Watch Presentation Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizContent;
