export default function Gallary1() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">        
      <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="/images/shake2.jpeg" alt="" />
        </div>

        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="/images/tea2.jpeg" alt="" />
        </div>

        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="/images/tea3.jpeg"  alt=""/>
        </div>
        
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img class="rounded-xl" src="/images/tea4.jpeg"  alt=""/>
        </div>
      </div>
      
    </div>

  )
}