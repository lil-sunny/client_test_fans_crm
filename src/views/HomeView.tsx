import React from 'react';
import DashboardComponent from '../components/DashboardComponent';
import SidebarComponent from '../components/SidebarComponent';

const HomeView: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <SidebarComponent/>
            <DashboardComponent/>
        </div>
    )
}

export default HomeView;