const categories = [
  {
    imageSrc: "/images/gallary/donut1.jpeg"
  },
  {
    imageSrc: "/images/gallary/shake1.jpeg"
  },
  {
    imageSrc: "/images/gallary/tea1.jpeg"
  },
  {
    imageSrc: "/images/gallary/shake2.jpeg"
  },
  { 
    imageSrc: "/images/gallary/tea2.jpeg"
  },
]
const categories2 = [
  {
    imageSrc: "/images/gallary/shake4.jpeg"
  },
  {
    imageSrc: "/images/gallary/shake3.jpeg"
  },
  {
    imageSrc: "/images/gallary/tea3.jpeg"
  },
  {
    imageSrc: "/images/gallary/tea4.jpeg"
  },
  {
    imageSrc: "/images/gallary/tea5.jpeg"
  }
]

export default function Gallary() {
  return (
    <>
      <div className="dark:bg-black light:bg-white">
        <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <p className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-black light:bg-white">
        <div className="py-16 sm:py-2 xl:mx-auto xl:max-w-7xl xl:px-2">

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories2.map((category) => (
                    <p className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}