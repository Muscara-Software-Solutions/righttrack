function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Testimony() {
  const featuredTestimonial = {
    body: `Seriously an amazing little gem! The lady (whom I assumed the owner) was super friendly, made great suggestions, and my Banana Nut Muffin shake tasted like I was drinking a dessert! Not to mention, she gave me a free sample of the Skittles tea. I was convinced it was packed with sugar, because it was DELICIOUS but not one single gram! Can't wait to go back. You WANT to go check this place out!`,
    author: {
      name: 'Judy Noel',
      handle: 'Facebook',
      imageUrl: "/images/reviews/7.png"
    },
  }

  const testimonials = [
    [
      [
        // Left side
        {
          body: `Right Tracks is Awesome! They have Protein Milkshakes if you want a Healthy Protein Shakes! Healthy Energy Drinks plus Protein Doughnuts! Everything is really Amazing, Delicious!!!`,
          author: {
            name: 'Amy Sams',
            handle: '',
            imageUrl: "/images/reviews/5.png"
          },
        },
        {
          body: `This place is DELICIOUS! so many different flavors to choose from, nice and clean inside and friendly owner. Great place and highly recommend`,
          author: {
            name: 'Janelle Foltz',
            handle: '',
            imageUrl: "/images/reviews/6.png"
          }
        }
      ],
      [
        // Middle Left
        {
          body: `I LOVE this place! Perfect for my family & kids. Healthy shakes and clean energy! 10/10😊`,
          author: {
            name: 'Makena Martinez',
            handle: '',
            imageUrl: "/images/reviews/1.jpeg"
          },
        },
      ],
    ],
    [
      [
        // Middle right
        {
          body: `I just had the chocolate latte, loaded with protein and nutrition. I highly recommend this locally owned and operated shop. I’d give it 5 stars!`,
          author: {
            name: 'Joyce Fallen',
            handle: '',
            imageUrl: "/images/reviews/3.jpeg"
          },
        },
      ],
      [
        // Right side
        {
          body: `The shakes we received tasted amazing, the store was spotless, and the people working there were super nice! It's nice having healthy options that look & taste delicious! Would highly recommend to anyone in the Nicholasville area 😍`,
          author: {
            name: 'Angelica L Hernandez Jacobo',
            handle: '',
            imageUrl: "/images/reviews/2.jpeg"
          },
        },
        {
          body: `Awesome shakes, friendly service.`,
          author: {
            name: 'Daniel Weinert',
            handle: '',
            imageUrl: "/images/reviews/4.jpeg"
          }
        }
      ],
    ],
  ]

  return (
    <div className="relative isolate bg-black">
      <div className="relative">
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl sm:text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-pink-500">Reviews</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              See what the community thinks about us
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="col-span-2 hidden sm:block sm:rounded-2xl bg-slate-800 sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-white">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                <img
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={featuredTestimonial.author.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <div className="text-white font-semibold text-xl">{featuredTestimonial.author.name}</div>
                </div>
                <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-slate-800 p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-white">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <img
                            className="h-10 w-10 rounded-full bg-gray-50"
                            src={testimonial.author.imageUrl}
                            alt=""
                          />
                          <div>
                            <div className="text-white font-semibold text-xl">{testimonial.author.name}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}