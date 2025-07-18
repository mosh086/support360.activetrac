import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'
import HomeSection from '../components/HomeSection'
import ConfigSection from '../components/ConfigSection'

const Home = () => {
  const { user, logout } = useAuth()
  const [activeSection, setActiveSection] = useState('home')

  const handleLogout = () => {
    logout()
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />
      case 'config':
        return <ConfigSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">Activetrac</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.name || 'Usuario'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user?.email || 'usuario@example.com'}
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="text-sm"
                >
                  Cerrar Sesión
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default Home 