interface LeyOrigenProps {
  onNavigate: (page: string) => void;
}

export default function LeyOrigen({ onNavigate }: LeyOrigenProps) {
  return (
    <div className="min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="h-96 bg-gray-400 relative flex items-center justify-center">
        <div className="absolute top-6 left-6">
          <div className="w-12 h-12 border-2 border-gray-600 rounded-full"></div>
        </div>

        <div className="text-center px-6 max-w-2xl">
          <div className="w-20 h-20 bg-gray-600 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-500 w-32 mx-auto mb-4"></div>
          <div className="h-10 bg-gray-600 w-96 mx-auto mb-4"></div>
          <div className="h-5 bg-gray-500 w-80 mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 -mt-20">
        
        {/* Story Card */}
        <div className="bg-white border-2 border-gray-300 p-10 mb-8">
          
          {/* Story Header */}
          <div className="border-l-4 border-gray-400 pl-6 mb-8">
            <div className="h-3 bg-gray-300 w-24 mb-2"></div>
            <div className="h-8 bg-gray-400 w-72"></div>
          </div>

          {/* Story Text */}
          <div className="space-y-4 mb-8">
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-4/5"></div>
            <div className="h-4 bg-gray-200 w-full"></div>
            <div className="h-4 bg-gray-200 w-full"></div>
            <div className="h-4 bg-gray-200 w-3/5"></div>
          </div>

          {/* Quote */}
          <div className="border-l-4 border-gray-400 pl-8 py-6 bg-gray-50 my-8">
            <div className="space-y-3 mb-3">
              <div className="h-5 bg-gray-400 w-full"></div>
              <div className="h-5 bg-gray-400 w-4/5"></div>
            </div>
            <div className="h-3 bg-gray-400 w-32"></div>
          </div>

          {/* More Text */}
          <div className="space-y-4 mb-8">
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-2/3"></div>
          </div>

          {/* Media Gallery */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="aspect-video bg-gray-400 border-2 border-gray-500"></div>
            <div className="aspect-video bg-gray-400 border-2 border-gray-500"></div>
            <div className="col-span-2 aspect-video bg-gray-400 border-2 border-gray-500"></div>
          </div>

          {/* Audio Section */}
          <div className="bg-gray-100 border-2 border-gray-300 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 border-2 border-gray-400 rounded-full"></div>
              <div>
                <div className="h-5 bg-gray-400 w-48 mb-2"></div>
                <div className="h-3 bg-gray-300 w-40"></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border-2 border-gray-400 rounded-full"></div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 mb-2">
                  <div className="h-full bg-gray-400 w-1/3"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-3 bg-gray-300 w-10"></div>
                  <div className="h-3 bg-gray-300 w-10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="h-4 bg-gray-400 w-32"></div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Pillars Section */}
          <div className="space-y-8">
            <div>
              <div className="h-6 bg-gray-400 w-48 mb-3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 w-full"></div>
                <div className="h-4 bg-gray-300 w-5/6"></div>
              </div>
            </div>
            <div>
              <div className="h-6 bg-gray-400 w-56 mb-3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 w-full"></div>
                <div className="h-4 bg-gray-300 w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Stories */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="h-8 bg-gray-400 w-64 mx-auto mb-8"></div>

        <div className="grid gap-5">
          <div className="bg-white border-2 border-gray-300">
            <div className="h-36 bg-gray-400 border-b-2 border-gray-300"></div>
            <div className="p-5">
              <div className="h-3 bg-gray-400 w-20 mb-2"></div>
              <div className="h-5 bg-gray-400 w-48 mb-2"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 w-full"></div>
                <div className="h-3 bg-gray-300 w-3/4"></div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300">
            <div className="h-36 bg-gray-400 border-b-2 border-gray-300"></div>
            <div className="p-5">
              <div className="h-3 bg-gray-400 w-20 mb-2"></div>
              <div className="h-5 bg-gray-400 w-48 mb-2"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 w-full"></div>
                <div className="h-3 bg-gray-300 w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-24 right-6">
        <div className="w-16 h-16 bg-gray-500 border-2 border-gray-600 rounded-full"></div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 p-3">
        <div className="flex justify-around">
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-gray-300"></div>
            <div className="h-2 bg-gray-300 w-10"></div>
          </div>
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
        </div>
      </div>
    </div>
  );
}
