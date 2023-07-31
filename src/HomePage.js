import "./App.css";
import Home from "./components/LandingPage/Home";
import About from "./components/LandingPage/About";
import Work from "./components/LandingPage/Work";
import Testimonial from "./components/LandingPage/Testimonial";
import Contact from "./components/LandingPage/Contact";
import Footer from "./components/LandingPage/Footer";
import Navbar from "./components/LandingPage/Navbar"; 

function HomePage() {

  const { id } = useParams();
  const [userDetails, updatedUserDetails] = useState({});
  const [isLoading, updateIsLoading] = useState(false);
  const [addNote, updatedAddNote] = useState({ data: "", imgURL: "", isCompleted: false, id: "" });
  const [stateIndex, updatedStateIndex] = useState(0);
  const [uniqueId, updatedUniqueId] = useState(0);
  const [type, updatedType] = useState("");

  const fetchData = () => {
    updateIsLoading(true);
    let url = window.API_URL + `/user/${id}`;
    axios.get(url)
      .then((res) => {
        updateIsLoading(false);
        updatedUserDetails(res.data.data)
      })
      .catch((err) => {
        updateIsLoading(false);
        alert(err?.response?.data?.msg)
      });
  }

  const onChangeAddHandler = (event) => {
    const value = event.target.value;
    const updateAddNote = { data: value, imgURL: "", isCompleted: false, id: Date.now().toString() }
    updatedAddNote(updateAddNote);
  };

  const updateSubmitHandler = (event, key) => {
    event.preventDefault();

    updateIsLoading(true);
    const updatedUserDetails = { ...userDetails };

    if (key === "add") {
      updatedUserDetails.notes.push(addNote);
    }

    else if (key === "delete") {
      updatedUserDetails.notes.splice(stateIndex, 1);
    }

    const url = `${window.API_URL}/user/${id}`;
    axios.patch(url, updatedUserDetails)
      .then((res) => {
        updateIsLoading(false);
        if (res?.status === 200) {
          alert(res?.data?.msg)
          const updateAddNote = { data: "", imgURL: "", isCompleted: false, id: "" }
          updatedAddNote(updateAddNote);
          updatedType("")
          fetchData();
        }
        else {
          alert(res?.data?.msg)
        }
      })
      .catch((err) => {
        updateIsLoading(false);
        alert(err?.response?.data?.msg)
      });
  }

  const indexHandler = (event, id, type) => {
    event.preventDefault()
    const newUserDetails = { ...userDetails };
    const index = newUserDetails?.notes?.findIndex(val => val.id === id);
    updatedStateIndex(index);
    updatedUniqueId(id);
    updatedType(type);
    if (type === "completed") {
      newUserDetails.notes[index].isCompleted = !newUserDetails.notes[index].isCompleted;
      updatedUserDetails(newUserDetails);
      updateSubmitHandler(event, "completed")
    }
  }

  const onChangeEditHandler = (event) => {
    event.preventDefault();
    const newUserDetails = { ...userDetails };
    newUserDetails.notes[stateIndex].data = event.target.value;
    updatedUserDetails(newUserDetails);
  }

  const rerenderComponentOnChange = () => {
    fetchData();
  }


  return (
    <div className="App">
      {sessionStorage.name ? <Navbar2 name={userDetails.name} rerenderComponentOnChange={rerenderComponentOnChange} /> : <Navbar/> };
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
