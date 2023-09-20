import { useEffect } from 'react';
import addParlx from '../../common/addParlx';

const IntroTxt2 = () => {
  useEffect(() => {
    setTimeout(() => addParlx());
  }, []);

  return (
    <header className="slider simpl fixed-slider bg-img valign" style={{ backgroundImage: "url(/img/slid/a2.jpg)" }} data-overlay-dark="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption center mt-50">
              <h6>Unique Design.</h6>
              <h1>Creative Digital Expert</h1>
              <p>Let me help you stand out through my elegant and thoughtful visual presentations</p>
              <a href="#0" className="btn-curve btn-lit mt-40">
                <span>Get Started Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default IntroTxt2