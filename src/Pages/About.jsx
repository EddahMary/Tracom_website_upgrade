import Dev from "../assets/engineer-4904884_640.jpg";

function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: "50px",
        height: '40%',
        backgroundColor: 'whitesmoke',
      }}
    >
      <div>      
        <img
          src={Dev}
          alt="display"
          style={{
            width: "800px",
            height: '700px',
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "600px",
          padding: "40px",
          lineHeight: "20px",
          columnGap: '60px',
          gap: "30px",
          fontSize: '20px',
        }}
      >
        <h3 style={
          {
            color: 'blue',
            fontWeight: '700',
            fontSize: '25px',
          }
        }>About the Academy</h3>
        <p>
          At Tracom Academy, we believe that education is the key to unlocking
          your potential in the dynamic field of software development. Our
          mission is to equip aspiring developers with the knowledge and skills
          necessary to thrive in todays technology-driven world.
          With a curriculum designed by industry experts, Elimu offers
          comprehensive courses in software development that cover the latest
          programming languages, frameworks, and tools. 
        </p>
        <div style={
          {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',

          }
        }>

        <h3 style={
          {
            color: 'blue',
            fontWeight: '700',
            fontSize: '25px',
          }
        }>Our Mission</h3>
        <p style={
          {
            fontSize: '20px',
          }
        }>
          To build talent and opportunities through transformative tech-based
          learning experiences Moringa School is a multi-disciplinary
          learning-accelerator committed to closing the skills-gap in Africa’s
          job markets by delivering transformative tech-based learning to
          high-potential jobseekers; and on graduation connecting them to local
          and international employers who desire high-quality tech talent
        </p>
        <h3 style={
          {
            color: 'blue',
            fontWeight: '700',
            fontSize: '25px',
          }
        }>Our Vision</h3>
        <p style={
          {
            fontSize: '20px'
          }
        }>
          To create world in which anyone can create their future Our vision is
          one that strives to connect our African people to the future they
          envision for themselves. This is the goal in-front of us and it keeps
          us striving for more. 
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
