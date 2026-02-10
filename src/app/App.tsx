import { useState } from 'react';
import Login from './pages/Login';
import CatalogoTribus from './pages/CatalogoTribus';
import Leccion from './pages/Leccion';
import LeyOrigen from './pages/LeyOrigen';
import Costumbres from './pages/Costumbres';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const pages = {
    login: <Login onNavigate={setCurrentPage} />,
    catalogo: <CatalogoTribus onNavigate={setCurrentPage} />,
    leccion: <Leccion onNavigate={setCurrentPage} />,
    leyorigen: <LeyOrigen onNavigate={setCurrentPage} />,
    costumbres: <Costumbres onNavigate={setCurrentPage} />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar for Mockup Demo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-50 p-4">
        <div className="flex gap-2 justify-center flex-wrap">
          <button 
            onClick={() => setCurrentPage('login')}
            className={`px-4 py-2 border border-gray-400 ${currentPage === 'login' ? 'bg-gray-300' : 'bg-white'}`}
          >
            1. Login
          </button>
          <button 
            onClick={() => setCurrentPage('catalogo')}
            className={`px-4 py-2 border border-gray-400 ${currentPage === 'catalogo' ? 'bg-gray-300' : 'bg-white'}`}
          >
            2. Catálogo
          </button>
          <button 
            onClick={() => setCurrentPage('leccion')}
            className={`px-4 py-2 border border-gray-400 ${currentPage === 'leccion' ? 'bg-gray-300' : 'bg-white'}`}
          >
            3. Lección
          </button>
          <button 
            onClick={() => setCurrentPage('leyorigen')}
            className={`px-4 py-2 border border-gray-400 ${currentPage === 'leyorigen' ? 'bg-gray-300' : 'bg-white'}`}
          >
            4. Ley Origen
          </button>
          <button 
            onClick={() => setCurrentPage('costumbres')}
            className={`px-4 py-2 border border-gray-400 ${currentPage === 'costumbres' ? 'bg-gray-300' : 'bg-white'}`}
          >
            5. Costumbres
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="pt-20">
        {pages[currentPage as keyof typeof pages]}
      </div>
    </div>
  );
}
