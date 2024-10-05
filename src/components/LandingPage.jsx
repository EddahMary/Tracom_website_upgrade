import bgImg from "../assets/ai-generated-8846759_1280.jpg"
function LandingPage() {
  return (
    <div
      style={
        {
        width: "100%",
        height: "650px",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        background: "linear-gradient(rgba(8,0,50,0.8))",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // color: 'whitesmoke',
        display: "flex",
        flexDirection: "column",
      }}
      >

      <div
        style={{
        //  textAlign: 'center',
          display: "flex",
          margin: '150px',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
        
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontFamily: "poppins, sans-serif",
            color: "white",
          }}
        >
          Welcome to Tracom Academy <br />
        </h1>
        <h2
          style={{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            color: "white",
            fontSize: "15px",
          }}
        >
          Join us and take your first steps towards <br /> 
          building your career in software development.
        </h2>
        <button
          style={{
            backgroundColor: "lightblue",
            border: "none",
            margin: '20px',
            borderRadius: "20px",
            width: "80px",
            height: "30px",
            cursor: 'pointer',
          }}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
