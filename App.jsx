import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MyLibraryEmptyScreen from "./components/MyLibraryEmptyScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|my-library-empty-screen)">
          <MyLibraryEmptyScreen {...myLibraryEmptyScreenData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const sideNavDropDown1Data = {
    spanText: "Programs",
};

const sideNavDropDown2Data = {
    spanText: "Workouts",
    className: "side-nav-drop-down-2",
};

const myLibraryEmptyScreenData = {
    group40: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/image-22-1@2x.png",
    spanText1: "Dashboard",
    spanText2: "Message",
    spanText3: "Report",
    spanText4: "Library",
    spanText5: "RP",
    spanText6: <React.Fragment>Richard<br />Patterson</React.Fragment>,
    group4: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/group-4-1@2x.png",
    spanText7: "Log out",
    vuesax1: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/vuesax-1@2x.png",
    spanText8: "Video",
    spanText9: "Title",
    spanText10: "Instructions",
    spanText11: "Equipment",
    spanText12: "Skills",
    spanText13: "Modality",
    spanText14: "Sub Modality(Optional)",
    spanText15: "Body Parts",
    spanText16: "Sub Body Parts",
    spanText17: "Library",
    vuesaxLinearCalendarTick: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/vuesax-linear-calendar-tick-3@2x.png",
    spanText18: "Exercises",
    vuesax2: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/vuesax-4@2x.png",
    spanText19: "Spur.fit Library",
    spanText20: "My Library",
    frame1: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/frame-1@2x.png",
    spanText21: "Search title, body parts,....",
    vuesaxLinearAdd: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/vuesax-linear-add-1@2x.png",
    spanText22: "Add new row",
    microsoft_Office_Excel_2019Present11: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/microsoft-office-excel--2019-present--1-1@2x.png",
    spanText23: "Import from Excel",
    frame2: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/frame-2@2x.png",
    spanText24: "Filter",
    frame3: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/frame-3@2x.png",
    spanText25: "Column Manager",
    spanText26: "My Library",
    spanText27: "Let’s start adding exercises!",
    personalizedWorkoutsBro1: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/personalized-workouts-bro-1-1@2x.png",
    spanText28: "Paste your URL",
    spanText29: "Upload",
    spanText30: "To add new exercise",
    spanText31: " - Drag and drop videos anywhere here",
    spanText32: "Or",
    spanText33: "Add Videos",
    microsoft_Office_Excel_2019Present12: "https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/microsoft-office-excel--2019-present--1-1@2x.png",
    spanText34: "Import from Excel",
    sideNavDropDown1Props: sideNavDropDown1Data,
    sideNavDropDown2Props: sideNavDropDown2Data,
};

