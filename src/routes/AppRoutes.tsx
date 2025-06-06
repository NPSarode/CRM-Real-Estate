import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Layout from '../components/Layout';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Leads from '../pages/Leads';
import LeadDetail from '../pages/LeadDetail';
import Properties from '../pages/Properties';
import PropertyDetail from '../pages/PropertyDetail';
import Settings from '../pages/Settings';
import TodaySchedule from '../pages/TodaySchedule';
import AppointmentDetail from '../pages/AppointmentDetail';

export default function AppRoutes() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Routes>
      <Route path="/" element={!isAuthenticated ? <Welcome /> : <Navigate to="/dashboard" replace />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />}
      />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/leads/:id" element={<LeadDetail />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/appointments" element={<TodaySchedule />} />
        <Route path="/appointments/:id" element={<AppointmentDetail />} />
        <Route path="/settings" element={<Settings/>} />
      </Route>
    </Routes>
  );
}