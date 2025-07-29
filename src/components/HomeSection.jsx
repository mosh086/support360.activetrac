import { useAuth } from '../context/AuthContext'

const HomeSection = () => {
  const { user } = useAuth()

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">
              ¡Bienvenido, {user?.name || 'Usuario'}!
            </h2>
            <p className="text-gray-600">
              Support360 - Activetrac
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection 