interface LeccionProps {
  onNavigate: (page: string) => void;
}

export default function Leccion({ onNavigate }: LeccionProps) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header with Progress */}
      <div className="bg-white border-b-2 border-gray-300 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-gray-400"></div>
          
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <div className="h-3 bg-gray-300 w-16"></div>
              <div className="h-3 bg-gray-300 w-12"></div>
            </div>
            <div className="h-3 bg-gray-200">
              <div className="h-full bg-gray-400 w-1/4"></div>
            </div>
          </div>

          <div className="flex gap-1">
            <div className="w-5 h-5 bg-gray-400"></div>
            <div className="w-5 h-5 bg-gray-400"></div>
            <div className="w-5 h-5 bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Exercise Container */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        
        {/* Exercise Type */}
        <div className="h-4 bg-gray-400 w-32 mb-6"></div>

        {/* Question */}
        <div className="h-8 bg-gray-400 w-80 mb-8"></div>

        {/* Audio Button */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 border-2 border-gray-400 rounded-full"></div>
          <div className="h-4 bg-gray-300 w-40"></div>
        </div>

        {/* Options */}
        <div className="w-full max-w-2xl space-y-3 mb-8">
          <div className="h-16 bg-white border-2 border-gray-300 px-6 flex items-center">
            <div className="flex-1 h-5 bg-gray-300 w-24"></div>
            <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
          </div>
          <div className="h-16 bg-white border-2 border-gray-400 px-6 flex items-center">
            <div className="flex-1 h-5 bg-gray-300 w-24"></div>
            <div className="w-6 h-6 border-2 border-gray-400 rounded-full bg-gray-400"></div>
          </div>
          <div className="h-16 bg-white border-2 border-gray-300 px-6 flex items-center">
            <div className="flex-1 h-5 bg-gray-300 w-24"></div>
            <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
          </div>
          <div className="h-16 bg-white border-2 border-gray-300 px-6 flex items-center">
            <div className="flex-1 h-5 bg-gray-300 w-24"></div>
            <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Feedback (hidden by default) */}
        {/* <div className="w-full max-w-2xl bg-gray-100 border-2 border-gray-400 p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gray-400"></div>
            <div className="h-6 bg-gray-400 w-24"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-4/5"></div>
          </div>
        </div> */}

        {/* Action Buttons */}
        <div className="w-full max-w-2xl flex gap-3">
          <div 
            className="flex-1 h-16 bg-gray-400 border-2 border-gray-500 cursor-pointer"
            onClick={() => onNavigate('catalogo')}
          ></div>
        </div>
      </div>
    </div>
  );
}
