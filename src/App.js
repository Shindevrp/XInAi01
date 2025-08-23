
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Demo from './Demo';
import CourseDashboard from './course_dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/courses" element={<CourseDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;