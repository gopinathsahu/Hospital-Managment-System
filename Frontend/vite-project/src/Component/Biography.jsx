const Biography = ({ imageUrl}) => {
  return (
    <div>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="image is not found" />
        </div>
        <div className="banner">
          <h4>Biography</h4>
          <h6>who we are</h6>
          <p>
            ➤ Mission and Vision Our mission is to revolutionize healthcare
            management by providing a cutting-edge, user-friendly, and
            integrated system that enhances patient outcomes and empowers
            healthcare providers.
          </p>
          <p>
            ➤ Seamless Integration We offer seamless integration with existing
            healthcare infrastructure, electronic medical record (EMR) systems,
            and laboratory information management systems (LIMS).
          </p>
          <p>
            ➤ Empowering Healthcare Providers Ultimately, our Hospital
            Management System aims to empower healthcare providers to focus on
            what they do best—caring for patients
          </p>
        </div>
      </div>
      
    </div>
  );
};
export default Biography;
