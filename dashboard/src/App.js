import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import { Fragment } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { DataProvider } from "./Data/DataProvider";

function App() {
  return (
    <DataProvider>
      <div style={{ padding: 0, margin: "auto" }}>
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
