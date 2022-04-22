const HeroContainer = () => {
  return (
    <section className="hero-section moving section-padding" id="home">
      <div className="moving-bg"></div>
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-md-12">
              <div className="welcome-content">
                <div className="promo-section">
                  <h3 className="special-head gradient-text">
                    Wax Pro Collectors League
                  </h3>
                </div>
                <h1>
                  Troll and Toad enters the NFT world{" "}
                  <span className="gradient-text">ON WAX</span>{" "}
                </h1>
                <p className="w-text">$$ PLACEHOLDER</p>
                <div className="dream-btn-group">
                  <button className="btn btn-explore more-btn mr-3">
                    View Collections
                  </button>
                  <button className="btn btn-Collect more-btn">
                    Leaderboards
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
