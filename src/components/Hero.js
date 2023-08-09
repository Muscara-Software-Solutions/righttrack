import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Hero() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate -mt-18 px-6 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D42A24] to-[#E9BBBA] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="-mt-20 mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight">Right Track Nutrition</h1>
              <p className="mt-4 text-xl text-gray-500">
                Keep yourself on track.
              </p>

              <p className="mt-4 text-xl tracking-wide leading-8 text-gray-500">
                <span className="text-pink-400 font-bold">Proudly</span> serving<br />
                <span className="text-green-400 font-bold">🥛 Healthy Shakes</span> <br />
                <span className="text-yellow-500 font-bold">🥤 Energizing Teas</span> <br />
                <span className="text-yellow-800 font-bold">☕️ Iced Coffees</span> <br />
                <span className="text-blue-400 font-bold">🧁 Healthy Snacks</span>
              </p>
              
              <a href="https://www.google.com/maps/place/105+Quinn+Dr,+Nicholasville,+KY+40356/data=!4m2!3m1!1s0x88425fe6222c95d7:0x59f8a60801000b7e?sa=X&ved=2ahUKEwiE-LP4w9CAAxUVlIkEHdpBAhUQ8gF6BAgVEAA&ved=2ahUKEwiE-LP4w9CAAxUVlIkEHdpBAhUQ8gF6BAgWEAI">
                <span className="pt-4 inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  105 Quinn Dr Nicholasville, KY 40356
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="/images/donut1.jpeg"
                alt=""
                className="rounded-lg bg-gray-100"
              />
              <img
                src="/images/shake1.jpeg"
                alt=""
                className="rounded-lg bg-gray-100"
              />
              <img
                src="/images/tea1.jpeg"
                alt=""
                className="rounded-lg bg-gray-100"
              />
              <img
                src="/images/shakeandtea.jpeg"
                alt=""
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#D42A24] to-[#E9BBBA] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}