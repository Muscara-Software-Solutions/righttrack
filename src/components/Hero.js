import Header from "./Header";

export default function Hero() {
  return (
    <div className="relative isolate -mt-18 px-6 lg:px-8">
      <div className="absolute lg:ml-80 inset-x-0 -top-40 -z-40 transform-gpu overflow-hidden blur-2xl sm:-top-60" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D73833] to-[#E6B4B2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <Header />
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div class="lg:col-span-7">
            <div class="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div class="col-span-4">
                <img class="rounded-xl" src="/images/donut1.jpeg"  alt=""/>
              </div>
      
              <div class="col-span-5">
                <img class="rounded-xl" src="/images/tea1.jpeg"  alt=""/>
              </div>
      
              <div class="col-span-6">
                <img class="rounded-xl" src="/images/shake1.jpeg"  alt=""/>
              </div>

              <div class="col-span-5">
                <img class="rounded-xl" src="/images/shakeandtea.jpeg"  alt=""/>
              </div>    
            </div>
          </div>
          
      
          <div class="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div class="space-y-6 sm:space-y-8">
              
              <div class="space-y-2 md:space-y-4">
                <h1 class="font-bold text-5xl text-gray-800">
                  Right Track Nutrition
                </h1>
                <p class="text-2xl text-gray-500">
                  Keep yourself on track.
                </p>
              </div>
              
      
              
              <ul class="space-y-2 sm:space-y-4">
                <li class="flex space-x-3">
                  <p class="flex-shrink-0 h-6 w-6 text-green-600">
                    🥛
                  </p>

                  <span class="text-xl text-green-500">
                    <span class="font-bold">Meal Replacement Shakes</span>
                  </span>
                </li>
      
                <li class="flex space-x-3">
                  <p class="flex-shrink-0 h-6 w-6 text-yellow-500">
                    🥤
                  </p>
      
                  <span class="text-xl text-yellow-500">
                    <span class="font-bold">Energy & Boba Teas</span>
                  </span>
                </li>
      
                <li class="flex space-x-3">
                  <p class="flex-shrink-0 h-6 w-6 text-blue-600">
                    🍩
                  </p>
                  
      
                  <span class="text-xl text-yellow-700">
                    <span class="font-bold">Iced Coffee & Donuts</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#D73833] to-[#E6B4B2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}