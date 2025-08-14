function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./jonas.jpeg" alt="Jonas" />;
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" icon="💪" color="blue" />
      <Skill name="JavaScript" icon="💪" color="yellow" />
      <Skill name="Web Design" icon="💪" color="green" />
      <Skill name="Git and GitHub" icon="👍" color="orangered" />

      <Skill name="React" icon="💪" color="cyan" />
      <Skill name="Svelte" icon="👶" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <li class="skill" style={{ background: props.color }}>
      {props.name} {props.icon}
    </li>
  );
}

export default App;
