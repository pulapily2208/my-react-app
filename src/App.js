
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux-setup/store";
import store from "./redux-setup/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./shared/components/Layouut/Footer";
import Header from "./shared/components/Layouut/Header";
import Menu from "./shared/components/Layouut/Menu";
import Sidebar from "./shared/components/Layouut/Sidebar";
import Slider from "./shared/components/Layouut/Slider";
import Routers from "./Routers";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <div>
              <Header />
              {/*	Body	*/}
              <div id="body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <Menu />
                    </div>
                  </div>
                  <div className="row">
                    <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                      <Slider />

                      <Routes>
                        {Routers.map((item, index) => (
                          <Route
                            key={index}
                            path={item.path}
                            element={<item.element />}
                          />
                        ))}
                      </Routes>
                    </div>
                    <Sidebar />
                  </div>
                </div>
              </div>
              {/*	End Body	*/}
              <Footer />
            </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};
export default App;
