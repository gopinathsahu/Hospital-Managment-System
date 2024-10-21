//mport 'bootstrap/dist/css/bootstrap.min.css';
//import "bootstrap/dist/js/bootstrap.bundle.min";

export const Services = ({ imageUrl, imageUrl2,imageUrl3,imageUrl4,imageUrl5 }) => {
  return (
    <>
      <div className="container">

      <div className="row ">
          <div className="col-lg-12 pt-4 pt-lg-0 services">
          <h2 className="header2">
              Safest Treatment for Heart Diseases by Best <br />
               Cardiologists in India
              </h2>
            <img
              src={imageUrl}
              alt="image is noot found"
              className="float-end imgshadow image"
            />
            <div className="aaaa">
             
              <p className="para">
              Worldwide, cardiac or heart diseases are listed as the top health conditions affecting many individuals regardless of their gender. Many clinical studies have reported that people with heart diseases are prone to develop other health concerns affecting overall bodily function.
              </p>

              <strong className="strong">
              In case you doubt having any of the following or other cardiac conditions, we are here to help you. 
               <ul className="">
                <li className="list"> Atherosclerosis</li>
                <li className="list">Heart stroke</li>
                <li className="list">Irregular heartbeats</li>
                <li className="list">Coronary artery disease</li>
               </ul>
              </strong>
              <p>Fill out our form, and you will receive a call back from us at the earliest possible. We help you in selecting the best available cardiologists in India.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 pt-4 pt-lg-0 services">

          <h2 className="header2">
                Best Nephrologists Near You <br />
                for Kidney Problem Treatment
              </h2>
            <img
              src={imageUrl2}
              alt="image is noot found"
              className="float-start imgshadow image"
            />
            <div className="aaaa">
             
              <p className="para">
                Nephrology is a medical field that focuses on diagnosing,
                treating, preventing, and curing medical conditions affecting
                kidneys. We house many expert nephrologists in India..
              </p>
              <strong className="strong">
                Some of the conditions treated by our nephrologists are: <br />
                
                <ul>
                  <li>Kidney stones</li>
                  <li>Electrolyte</li>
                  <li>Disturbance nephropathy</li>
                  <li>Diabetic</li>
                  <li>Bardet-biedl syndrome</li>
                </ul>
                <br />
              </strong>
              <p className="para">
                By any chance, if you or your family members are suffering from
                any of the above or other kidney problems, do call us at{" "}
                <b>+91 8045305263 </b> or fill our form.
              </p>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12 pt-4 pt-lg-0 services">
          <h2 className="header2">
                Expert Urologists in India to Treat <br />
                Your Urologic Diseases
              </h2>
            <img
              src={imageUrl3}
              alt="image is noot found"
              className="float-end imgshadow image"
            />
            <div className="aaaa">
              
              <p className="para">
                You know how important reproductive organs and the urinary tract
                are. Problems with any of these can impact the way we live our
                daily life. So, in case you or your family members are suffering
                from conditions affecting reproductive organs or the urinary
                tract, consult an expert urologist.
              </p>

              <strong className="strong">
                Here are some of the urologic health concerns that our doctors
                can treat. Urinary tract infections [UTIs] <br />
                Pelvic floor dysfunction <br />
                Pelvic organ prolapse <br />
                Prostate cancer <br />
                Sexually transmitted diseases [STDs] <br />
              </strong>
                <p>
                It can be hard for you to select the right urologist among many. Thats where we come. You can call us or fill out our form.
                  </p>       
               </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-12 pt-4 pt-lg-0 services">
          <h2 className="header2">Orthopaedic Doctors <br />
Near You in India</h2>
            <img
              src={imageUrl4}
              alt="image is noot found"
              className="float-start imgshadow image"
            />
            <div className="aaaa">
              
              <p className="para">
              Orthopedic is the branch of the medical field concerned with the diagnosis, treatment, prevention, and correction of deformities, injuries, disorders of the skeleton, and associated structures such as tendons and ligaments.
              </p>

              <strong className="strong">
              Some of the orthopaedic problems that our orthopaedics treat with the latest medical technology are <ul>
                <li>Knee injury</li>
                <li>Hip injury</li>
                <li>Hip fracture</li>
                <li>Arthritis</li>
               </ul>
              </strong>
                <p>
                Fill out the form and have a consultation with the best orthopaedic doctor near you.  </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 pt-4 pt-lg-0 services">
          <h2 className="header2">Best Neurologists in India</h2>
            <img
              src={imageUrl5}
              alt="image is noot found"
              className="float-end imgshadow  image"
            />
            <div className="aaaa">
              
              <p className="para">
              In India, most people suffer from neurological diseases and are restricted from consulting the neurologist near them. Because of this restriction, the disease condition keeps progressing from day to day.
              In India, most people suffer from neurological diseases and are restricted from consulting the neurologist near them. Because of this restriction, the disease condition keeps progressing from day to day.
              </p>

              <strong className="strong">
                <ul>
              Some of the most common neurologic diseases many individuals suffer from are listed below. 
               <li>Knee injury</li>
                <li>Parkinson’s disease</li>
                <li>Brain tumours</li>
                <li>Alzheimers disease</li>
                <li>Acute spinal cord injury</li>
               
               </ul>
              </strong>
                <p>
                We value our patients safety and so we follow high standards of medical and surgical protocols. Just give us a call and consult the best neurologist in India.     
               </p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};
