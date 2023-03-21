import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='bg-slate-400 
      sm:hover:bg-pink-800 
      sm:bg-red-400 
      md:bg-teal-400 
      lg:bg-indigo-400 
      xl:bg-yellow-400 
      py-20 px-20 grid gap-10 min-h-screen'>
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
        <div className="flex h-screen w-full items-center justify-center bg-gray-50">
          <div className="w-full max-w-xs rounded-xl bg-yellow-300 px-5 pb-5">
            <div className="pt-60"></div>
            <div className="mb-5 border-b-2 border-black">
              <span className="text-xs font-semibold">Select Destination</span>
            </div>
            <div className="mb-1 flex items-center hover:text-white">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">V</div>
              <span className="text-3xl font-semibold">Vancouver</span>
            </div>
            <div className="mb-1 flex items-center hover:text-white">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">S</div>
              <span className="text-3xl font-semibold">Seattle</span>
            </div>
            <div className="mb-1 flex items-center hover:text-white">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">P</div>
              <span className="text-3xl font-semibold">Portland</span>
            </div>
            <div className="mb-1 flex items-center hover:text-white">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">S</div>
              <span className="text-3xl font-semibold">San Francisco</span>
            </div>
            <div className="mb-1 flex items-center hover:text-white">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">L</div>
              <span className="text-3xl font-semibold">Los Angeles</span>
            </div>
            <div className="mb-1 flex items-center hover:text-white">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-yellow-300">S</div>
              <span className="text-3xl font-semibold">San Diego</span>
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
        <div className="bg-slate-100 p-6 rounded-3xl shadow-xl">
          <details className='open:bg-slate-500'>
            <summary>hi</summary>
            미야옹~
          </details>
          <span className='text-[123px]'>안녕!!!!!!! 이건 테일윈드에 없는 글자크기다 </span>
          <input type="file" 
          className='file:cursor-wait 
          file:transition-colors 
          file:hover:text-purple-400
          file:hover:bg-white 
          file:hover:border-purple-400 '/>
          <p className='first-letter:text-7xl first-letter:hover:text-purple-400'>Cupidatat magna amet veniam id nisi incididunt. Id exercitation cillum laborum sint consectetur minim minim ex sunt Lorem laborum velit culpa. Proident exercitation nostrud duis culpa culpa labore sit Lorem aliquip adipisicing sint labore in adipisicing. Deserunt anim labore deserunt laboris labore aliqua. Eu id dolor aute ex excepteur dolor. Esse aliquip dolor sit consequat mollit ipsum. Amet officia eu exercitation dolor ea sunt culpa officia exercitation.

          Do enim magna cillum qui enim labore mollit deserunt excepteur. Sunt veniam est enim reprehenderit incididunt ad est sint duis fugiat sunt dolor. Consequat proident minim proident amet qui sunt ea anim incididunt occaecat adipisicing. Est nisi ullamco esse commodo mollit sint aliqua aliqua sunt velit do enim excepteur. Ad duis adipisicing sint sit Lorem esse laborum.</p>
        </div>
      </div>
      <div className="flex w-full h-screen bg-orange-500 p-4">
      <div className="block bg-white w-2/4 m-auto rounded-3xl overflow-hidden p-5">
        <details className="mt-3">
          <summary>March 2021</summary>
        </details>

        <p className="border-t-2 border-gray-400 p-5 text-center font-semibold">
          Hello, Bruno!<br />
          Your medicines for today
        </p>
        <div>
          <ul className="flex justify-between m-2">
            <li className="flex flex-col font-extrabold p-1
            hover:bg-blue-400
            hover:rounded-2xl">
              <span className="text-3xl pb-3">16</span>
              <span className="p-1">Mon</span>
            </li>
            <li className="flex flex-col font-extrabold p-1
          hover:bg-blue-400
            hover:rounded-2xl">
              <span className="text-3xl pb-3">17</span>
              <span className="p-1">Tue</span>
            </li>
            <li className="flex flex-col font-extrabold p-1
          hover:bg-blue-400
            hover:rounded-2xl">
              <span className="text-3xl pb-3">18</span>
              <span className="p-1">Wed</span>
            </li>
            <li className="flex flex-col font-extrabold p-1
          hover:bg-blue-400
            hover:rounded-2xl">
              <span className="text-3xl pb-3">19</span>
              <span className="p-1">Thu</span>
            </li>
            <li className="flex flex-col font-extrabold p-1
          hover:bg-blue-400
            hover:rounded-2xl">
              <span className="text-3xl pb-3">20</span>
              <span className="p-1">Fri</span>
            </li>
            <li className="flex flex-col font-extrabold p-1
          hover:bg-blue-400
            hover:rounded-2xl">
              <span className="text-3xl pb-3">21</span>
              <span className="p-1">Sat</span>
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <div className="bg-blue-500 w-full rounded-2xl relative">
            <span className="absolute bottom-1/2 right-3">✔</span>
            <div className="bg-yellow-300 w-5/6 h-40 rounded-2xl p-3 relative">
              <h3 className="font-bold text-2xl">Nora - BE</h3>
              <span>Norenthindrone - 0.35mg</span>
              <span className="absolute bottom-2 left-3 text-xs">7h30AM</span>
            </div>
          </div>
          <div className="bg-teal-500 w-full rounded-2xl h-40 mt-2 p-3">
            <h3 className="font-bold text-2xl">Feosol</h3>
            <span>Ferrous Sulfate - 600mg</span>

          </div>
        </div>
      </div>
      </div>
    </>
    
  )
}
