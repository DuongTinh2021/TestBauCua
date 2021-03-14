// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
// import Content from "./components/Content";

import Baitap1 from "./Baitap1";
import Baitap2 from "./Baitap2";
import ConditionClass from "./Condition";
import DataBindingClass from "./DataBinding/DataBindingClass";
import DataBindingFunction from "./DataBinding/DataBindingFunction";
import EventClass from "./HandleEvent";
import ListsClass from "./Lists";
import StateClass from "./State";
// JSX - Javascript XML => Kết hợp javascript với HTML lại với nhau

// Component App
function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <div className="d-flex">
    //     <div className="w-25">
    //       <Sidebar />
    //     </div>
    //     <div className="w-75">
    //       <Content />
    //     </div>
    //   </div>
    //   <Footer />
    // </div>

    <>
      {/* <Baitap1 /> */}
      {/* <DataBindingClass /> */}
      {/* <DataBindingFunction /> */}
      <EventClass />
      {/* <ConditionClass /> */}
      {/* <ListsClass /> */}
      {/* <StateClass /> */}
      {/* <Baitap2 /> */}
    </>
  );
}

export default App;
