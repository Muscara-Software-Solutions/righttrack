const posts = [
  {
    id: 1,
    title: 'Woodford Nutrition',
    href: 'https://woodfordnutrition.com',
    imageUrl: 'https://woodfordnutrition.com/favicon.jpeg',
  },
  {
    id: 2,
    title: 'Right Track Nutrition',
    href: '#',
    imageUrl: '/images/logo.jpeg'
  },
  {
    id: 3,
    title: 'Wilmore Well Nutrition',
    href: '#',
    imageUrl: '/images/wilmore.jpeg'
  }
]

export default function Location() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Locations</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Are we not near you? Check out our other locations.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 opacity-50" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <h1 className="mt-3 text-3xl font-semibold leading-8 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h1>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
