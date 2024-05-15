import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
const HomePage = lazy(() => import("../../page/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../../page/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../../page/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../../page/RegistrationPage/RegistrationPage")
);
function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
