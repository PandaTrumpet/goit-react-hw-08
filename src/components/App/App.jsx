import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";

const HomePage = lazy(() => import("../../page/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../../page/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../../page/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../../page/RegistrationPage/RegistrationPage")
);
function App() {
    const dispatch = useDispatch()
  const userRefresh = useSelector(selectIsRefreshing)
  useEffect(() => {
    // Dispatch the refreshUser action directly
    dispatch(refreshUser())
  }, [dispatch])
  
  
  return (
    <div>
      { userRefresh ? <p>Is refreshing</p> :  <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </Suspense>
      </Layout>}
     
    </div>
  );
}

export default App;
