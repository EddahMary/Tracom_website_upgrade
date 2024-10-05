
function Footer() {
  return (
    <Footer>
      <div
        className="footerContainer"
        style={{
          width: "100%",
          maxHeight: "600px",
          display: "flex",
          alignContent: "flex-end",
          position: "absolute",
          bottom: "0px",
          right: "0px",
        }}
      >
        <div
          style={{
            display: "grid",
            width: "100%",
            backgroundColor: "lightblue",
            borderRadius: "10px",

            gridTemplateColumns: "repeat(4,auto)",
            columnGap: "20px",
            padding: "10px 10px 30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                fontWeight: "600",
                color: "blueviolet",
                fontSize: "20px",
              }}
            >
              Tracom
            </h1>
            <p
              style={{
                width: "200px",
                lineHeight: "20px",
                color: "black",
                fontFamily: "inherit",
              }}
            >
              Study with us and grow your software development career.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // gap: '10px',
              // paddingLeft: '50px',
            }}
          >
            <p>What we offer</p>
            <p>Programmes</p>
            <p>Careers</p>
            <p>Admission</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // gap: '10px',
            }}
          >
            <p>Help/FAQs</p>
            <p>Contact</p>
            <p>Location</p>
            <p>Events</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // gap: '10px',
            }}
          >
            <p>More</p>
            <p>Fees</p>
            <p>Academic calendar</p>
            <p>Extra curriculum</p>
          </div>
          <div
            style={{
              maxWidth: "300px",
              display: "flex",
              fontSize: "15px",
              color: "black",
              fontWeight: "800",
              fontFamily: "poppins",
            }}
          >
            <p>All rights reserved@tracomacademy.co.ke</p>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footer;
