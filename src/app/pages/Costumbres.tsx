interface CostumbresProps {
  onNavigate: (page: string) => void;
}

export default function Costumbres({ onNavigate }: CostumbresProps) {
  return (
    <div className="min-h-screen">
      
      {/* Header */}
      <div className="bg-gray-400 p-8 pb-10">
        <div className="relative">
          <div className="absolute top-0 left-0">
            <div className="w-10 h-10 border-2 border-gray-600 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="h-3 bg-gray-500 w-32 mb-3"></div>
            <div className="h-10 bg-gray-600 w-96 mb-4"></div>
            <div className="h-5 bg-gray-500 w-80"></div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b-2 border-gray-300 sticky top-20 z-10">
        <div className="flex overflow-x-auto px-6">
          <div className="px-6 py-4 border-b-4 border-gray-500 whitespace-nowrap">
            <div className="h-4 bg-gray-400 w-20"></div>
          </div>
          <div className="px-6 py-4 border-b-4 border-transparent whitespace-nowrap">
            <div className="h-4 bg-gray-300 w-24"></div>
          </div>
          <div className="px-6 py-4 border-b-4 border-transparent whitespace-nowrap">
            <div className="h-4 bg-gray-300 w-28"></div>
          </div>
          <div className="px-6 py-4 border-b-4 border-transparent whitespace-nowrap">
            <div className="h-4 bg-gray-300 w-32"></div>
          </div>
          <div className="px-6 py-4 border-b-4 border-transparent whitespace-nowrap">
            <div className="h-4 bg-gray-300 w-20"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto p-6 pb-20">
        
        {/* Category Card 1 */}
        <div className="bg-white border-2 border-gray-300 p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gray-400 border-2 border-gray-500"></div>
            <div>
              <div className="h-6 bg-gray-400 w-40 mb-2"></div>
              <div className="h-3 bg-gray-300 w-32"></div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-4/5"></div>
            <div className="h-4 bg-gray-200 w-full"></div>
            <div className="h-4 bg-gray-200 w-3/4"></div>
          </div>
        </div>

        {/* Timeline Card */}
        <div className="bg-white border-2 border-gray-300 p-8 mb-6">
          <div className="h-6 bg-gray-400 w-48 mb-6"></div>

          <div className="space-y-6 pl-10 border-l-2 border-gray-300">
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-12 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-5">
                <div className="h-3 bg-gray-400 w-24 mb-2"></div>
                <div className="h-5 bg-gray-400 w-40 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 w-full"></div>
                  <div className="h-3 bg-gray-300 w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-12 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-5">
                <div className="h-3 bg-gray-400 w-28 mb-2"></div>
                <div className="h-5 bg-gray-400 w-48 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 w-full"></div>
                  <div className="h-3 bg-gray-300 w-4/5"></div>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute -left-12 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-5">
                <div className="h-3 bg-gray-400 w-32 mb-2"></div>
                <div className="h-5 bg-gray-400 w-44 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 w-full"></div>
                  <div className="h-3 bg-gray-300 w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roles Card */}
        <div className="bg-white border-2 border-gray-300 p-8 mb-6">
          <div className="h-6 bg-gray-400 w-52 mb-6"></div>

          <div className="space-y-4">
            {/* Role Item 1 */}
            <div className="flex gap-4 pb-4 border-b-2 border-gray-200">
              <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-400 w-32 mb-2"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 w-full"></div>
                  <div className="h-3 bg-gray-300 w-4/5"></div>
                </div>
              </div>
            </div>

            {/* Role Item 2 */}
            <div className="flex gap-4 pb-4 border-b-2 border-gray-200">
              <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-400 w-28 mb-2"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 w-full"></div>
                  <div className="h-3 bg-gray-300 w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Role Item 3 */}
            <div className="flex gap-4 pb-4 border-b-2 border-gray-200">
              <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-400 w-36 mb-2"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 w-full"></div>
                  <div className="h-3 bg-gray-300 w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vivienda Card */}
        <div className="bg-white border-2 border-gray-300 p-8 mb-6">
          <div className="h-6 bg-gray-400 w-44 mb-4"></div>
          
          <div className="aspect-video bg-gray-400 border-2 border-gray-500 mb-6"></div>

          <div className="space-y-3">
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-3/5"></div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-gray-100 border-2 border-gray-400 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gray-400"></div>
            <div className="h-5 bg-gray-400 w-28"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-4/5"></div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 p-3">
        <div className="flex justify-around">
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
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-gray-300"></div>
            <div className="h-2 bg-gray-300 w-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
