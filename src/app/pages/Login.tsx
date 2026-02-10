interface LoginProps {
  onNavigate: (page: string) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        
        {/* Card Container */}
        <div className="bg-white border-2 border-gray-300 p-12">
          
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 border-2 border-gray-400 mx-auto mb-4"></div>
            <div className="h-8 bg-gray-300 w-48 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 w-32 mx-auto"></div>
          </div>

          {/* Welcome Section */}
          <div className="text-center mb-8">
            <div className="h-6 bg-gray-300 w-40 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 w-48 mx-auto"></div>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <div className="h-4 bg-gray-300 w-24 mb-2"></div>
              <div className="h-12 border-2 border-gray-300 flex items-center px-4">
                <div className="w-5 h-5 bg-gray-300 mr-3"></div>
                <div className="h-4 bg-gray-200 w-32"></div>
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="h-4 bg-gray-300 w-24 mb-2"></div>
              <div className="h-12 border-2 border-gray-300 flex items-center px-4">
                <div className="w-5 h-5 bg-gray-300 mr-3"></div>
                <div className="h-4 bg-gray-200 w-24"></div>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <div className="h-3 bg-gray-300 w-32 ml-auto"></div>
            </div>

            {/* Login Button */}
            <div 
              className="h-14 bg-gray-400 border-2 border-gray-500 cursor-pointer hover:bg-gray-500"
              onClick={() => onNavigate('catalogo')}
            ></div>
          </div>

          {/* Divider */}
          <div className="flex items-center my-7">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="px-4 h-3 bg-gray-200 w-20"></div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="h-12 border-2 border-gray-300"></div>
            <div className="h-12 border-2 border-gray-300"></div>
          </div>

          {/* Signup Link */}
          <div className="text-center">
            <div className="h-4 bg-gray-200 w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
