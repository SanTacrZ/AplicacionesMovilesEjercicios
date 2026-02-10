interface CatalogoTribusProps {
  onNavigate: (page: string) => void;
}

export default function CatalogoTribus({ onNavigate }: CatalogoTribusProps) {
  return (
    <div className="min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-gray-400 p-6 pb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="h-8 bg-gray-600 w-48 mb-2"></div>
            <div className="h-4 bg-gray-500 w-32"></div>
          </div>
          <div className="w-12 h-12 border-2 border-gray-500"></div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="h-14 bg-white border-2 border-gray-300 flex items-center px-4">
            <div className="w-5 h-5 bg-gray-300 mr-3"></div>
            <div className="flex-1 h-4 bg-gray-200"></div>
            <div className="w-10 h-10 bg-gray-400 border border-gray-500 ml-2"></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-6 overflow-x-auto">
        <div className="px-6 py-3 border-2 border-gray-400 whitespace-nowrap bg-gray-300"></div>
        <div className="px-6 py-3 border-2 border-gray-300 whitespace-nowrap"></div>
        <div className="px-6 py-3 border-2 border-gray-300 whitespace-nowrap"></div>
        <div className="px-6 py-3 border-2 border-gray-300 whitespace-nowrap"></div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 px-6 mb-6">
        <div className="bg-white border-2 border-gray-300 p-4">
          <div className="h-3 bg-gray-300 w-20 mb-2"></div>
          <div className="h-8 bg-gray-400 w-16"></div>
        </div>
        <div className="bg-white border-2 border-gray-300 p-4">
          <div className="h-3 bg-gray-300 w-20 mb-2"></div>
          <div className="h-8 bg-gray-400 w-16"></div>
        </div>
      </div>

      {/* Tribes Grid */}
      <div className="px-6 grid gap-5">
        {/* Tribe Card 1 */}
        <div className="bg-white border-2 border-gray-300" onClick={() => onNavigate('leccion')}>
          <div className="h-44 bg-gray-400 border-b-2 border-gray-300 relative">
            <div className="absolute top-3 right-3 px-3 py-1 bg-gray-600 border border-gray-700"></div>
          </div>
          <div className="p-5">
            <div className="h-6 bg-gray-400 w-32 mb-2"></div>
            <div className="h-4 bg-gray-300 w-48 mb-4"></div>
            
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300"></div>
                <div className="h-3 bg-gray-300 w-16"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300"></div>
                <div className="h-3 bg-gray-300 w-12"></div>
              </div>
            </div>

            <div className="h-2 bg-gray-200 mb-3">
              <div className="h-full bg-gray-400 w-3/5"></div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-gray-400 border-2 border-gray-500"></div>
              <div className="w-12 h-12 border-2 border-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Tribe Card 2 */}
        <div className="bg-white border-2 border-gray-300">
          <div className="h-44 bg-gray-400 border-b-2 border-gray-300 relative">
            <div className="absolute top-3 right-3 px-3 py-1 bg-gray-600 border border-gray-700"></div>
          </div>
          <div className="p-5">
            <div className="h-6 bg-gray-400 w-32 mb-2"></div>
            <div className="h-4 bg-gray-300 w-48 mb-4"></div>
            
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300"></div>
                <div className="h-3 bg-gray-300 w-16"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300"></div>
                <div className="h-3 bg-gray-300 w-12"></div>
              </div>
            </div>

            <div className="h-2 bg-gray-200 mb-3">
              <div className="h-full bg-gray-400 w-1/3"></div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-gray-400 border-2 border-gray-500"></div>
              <div className="w-12 h-12 border-2 border-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Tribe Card 3 */}
        <div className="bg-white border-2 border-gray-300">
          <div className="h-44 bg-gray-400 border-b-2 border-gray-300 relative">
            <div className="absolute top-3 right-3 px-3 py-1 bg-gray-600 border border-gray-700"></div>
          </div>
          <div className="p-5">
            <div className="h-6 bg-gray-400 w-32 mb-2"></div>
            <div className="h-4 bg-gray-300 w-48 mb-4"></div>
            
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300"></div>
                <div className="h-3 bg-gray-300 w-16"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300"></div>
                <div className="h-3 bg-gray-300 w-12"></div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-gray-400 border-2 border-gray-500"></div>
              <div className="w-12 h-12 border-2 border-gray-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 p-3">
        <div className="flex justify-around">
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-gray-400"></div>
            <div className="h-2 bg-gray-400 w-10"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-gray-300"></div>
            <div className="h-2 bg-gray-300 w-10"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-gray-300"></div>
            <div className="h-2 bg-gray-300 w-10"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-gray-300"></div>
            <div className="h-2 bg-gray-300 w-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
