import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
const HomePage = lazy(() => import("../../page/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../../page/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../../page/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../../page/RegistrationPage/RegistrationPage")
);
import PrivateRoute from "../PrivateRoute";
function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      {isRefreshing ? (
        <p>Is refreshing</p>
      ) : (
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<RegistrationPage />}
                    redirectTo="/"
                  />
                }
              />
            </Routes>
          </Suspense>
        </Layout>
      )}
    </div>
  );
}

export default App;
