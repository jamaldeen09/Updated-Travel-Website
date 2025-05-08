import React, { Component } from "react";
import "./App.css"; // Optional: Your styling here

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "I love coding and coffee.",
        imgSrc:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
        profession: "Software Engineer",
      },
      shows: false,
      timeSinceMount: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    // Start counting seconds since component was mounted
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up interval
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="flex justify-center items-center flex-col min-h-screen gap-20">
        <h1>React Class Component</h1>
        <p className="text-4xl">Component mounted {timeSinceMount} second(s) ago.</p>
        <button onClick={this.toggleShow} className="px-5 py-3 rounded-xl btnHover">
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="h-[40vh] w-[20vw] flex-col flex justify-center gap-5 items-center py-10 rounded-xl shadow-xl btnHover">
            <img
              src={person.imgSrc}
              alt="Profile"
              className="rounded-xl shadow-xl w-1/2"
            />
            <div className="flex justify-center items-center flex-col">
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <p>
                <strong>{person.profession}</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
