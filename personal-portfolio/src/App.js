import Homepage from "./components/Homepage";
import SocialMedia from "./components/SocialMedia";
import NavBar from "./components/NavBar";
import About from "./components/About";
import JobExperience from "./components/JobExperience";

function App() {
  return (
    <div>
      <NavBar />
      <Homepage />
      <About />
      <SocialMedia />
      <JobExperience />
    </div>
  );
}

export default App;