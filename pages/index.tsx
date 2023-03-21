import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-slate-400 py-20 px-20 grid gap-10 min-h-screen'>
      <div className='bg-white p-6 rounded-3xl shadow-xl'>
        <h2 className='font-semibold text-3xl'>Select Item</h2>
        <ul>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex justify-between my-2 
            odd:bg-blue-50
            even:bg-yellow-50 
            first-of-type:bg-teal-50
            last-of-type:bg-slate-50">
              <span className='text-gray-500'>Grey Chair</span>
              <span className='font-semibold'>$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className='bg-red-500 py-2 
            empty:hidden'>{c}</li>
          ))}
        </ul>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>$220</span>
        </div>
        <button className='mt-5 block bg-blue-600 p-3 rounded-2xl text-white text-center shadow-xl mx-auto w-3/4 
        hover:bg-teal-500 hover:text-black 
        active:bg-yellow-200
        focus:bg-red-500'>Checkout</button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-yellow-200 rounded-full
            group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className='bg-white p-6 rounded-3xl shadow-xl'>
        <div className='flex justify-between items-center mb-5'>
          <span>⬅</span>
          <div className='space-x-3'>
            <span>⭐4.9</span>
            <span className='shadow-xl p-2 rounded-md'>❤</span>
          </div>
        </div>
        <div className='bg-zinc-400 h-72' />
        <div className='flex flex-col'>
          <span className='font-medium mb-1.5 text-xl'>Swoon Lounge</span>
          <span className='text-xs text-gray-500'>Chair</span>
          <div className='mt-3 mb-5 flex items-center justify-between'>
            <div className='space-x-2'>
              <button className='w-5 h-5 rounded-full bg-yellow-500 
              focus:ring-2 ring-offset-2 ring-yellow-500 transition' />
              <button className='w-5 h-5 rounded-full bg-indigo-500
              focus:ring-2 ring-offset-2 ring-indigo-500 transition' />
              <button className='w-5 h-5 rounded-full bg-teal-500
              focus:ring-2 ring-offset-2 ring-teal-500 transition' />
            </div>
            <div className='flex items-center space-x-5'>
              <button className='bg-blue-300 p-2 rounded-lg flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>-</button>
              <span>1</span>
              <button className='bg-blue-300 p-2 rounded-lg flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>+</button>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-medium text-2xl'>$450</span>
            <button className='bg-blue-500 text-white py-2 px-8 rounded-xl text-xl text-center'>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 h-screen">
        <div className="bg-yellow-300 rounded-3xl w-2/4 mx-auto my-auto px-5 pt-80 shadow-2xl">
          <div className="border-b-2 border-black">
            <span className="font-semibold">Select Destination</span>
          </div>
          <div className="font-extrabold text-3xl mt-4 pb-4">
            <ul>
              <li className="mb-4 hover:text-white flex text-center">
                <span className="text-sm bg-black text-yellow-300 p-2 rounded-full mr-3
                hover:bg-white w-8">V</span>
                <span>Vancouver</span>
              </li>
              <li className="mb-4 hover:text-white flex text-center">
                <span className="text-sm bg-black text-yellow-300 p-2 rounded-full mr-3
                hover:bg-white w-8">S</span>
                <span>Seattle</span>
              </li>
              <li className="mb-4 hover:text-white flex text-center">
                <span className="text-sm bg-black text-yellow-300 p-2 rounded-full mr-3
                hover:bg-white w-8">P</span>
                <span>Portland</span>
              </li>
              <li className="mb-4 hover:text-white flex text-center">
                <span className="text-sm bg-black text-yellow-300 p-2 rounded-full mr-3
                hover:bg-white w-8">S</span>
                <span>Seattle</span>
              </li>
              <li className="mb-4 hover:text-white flex text-center">
                <span className="text-sm bg-black text-yellow-300 p-2 rounded-full mr-3
                hover:bg-white w-8">S</span>
                <span>San Francisco</span>
              </li>
              <li className="mb-4 hover:text-white flex text-center">
                <span className="text-sm bg-black text-yellow-300 p-2 rounded-full mr-3
                hover:bg-white w-8">L</span>
                <span>Los Angeles</span>
              </li>
              <li className="mb-2 hover:text-white flex text-center">
                <span className="text-sm bg-black text-yellow-300 p-2 rounded-full mr-3
                hover:bg-white w-8">S</span>
                <span>San Diego</span>
              </li>
            </ul>
          </div>
      </div>
      </div>
      <div className="bg-slate-100 p-6 rounded-3xl shadow-xl">
        <h3>💥 peer와 form</h3>
        <form>
          <input type="text" required placeholder="username" className='border p-1 peer border-gray-400 rounded-md' />
          <span className='hidden peer-invalid:block peer-invalid:text-red-500'>This input is invalid</span>
          <span className='hidden peer-valid:block peer-valid:text-teal-500'>Awesome username</span>
          <span className='hidden peer-hover:block peer-hover:text-amber-500'>Hovered</span>
          <input type="submit" value="Login" className='bg-white' />
        </form>
      </div>
    </div>
  )
}
