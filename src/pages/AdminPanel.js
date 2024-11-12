import React, { useState } from 'react';
import ProductTable from './Productlist';
import Dashboard from './Dashboard';


function AdminPanel() {
  // State to manage the active section
  const [activeSection, setActiveSection] = useState('dashboard'); // Default to dashboard

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`p-2 rounded ${activeSection === 'dashboard' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveSection('productList')}
            className={`p-2 rounded ${activeSection === 'productList' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
          >
            Product List
          </button>
    
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        {/* Conditional rendering based on the active section */}
        {activeSection === 'dashboard' && (
          <section>
            <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
            <Dashboard />
          </section>
        )}

        {activeSection === 'productList' && (
          <section>
            <h2 className="text-3xl font-bold mb-4">Product List</h2>
            <ProductTable />
          </section>
        )}
      </main>
    </div>
  );
}

export default AdminPanel;
