import React from 'react'

const Home = () => {
  return (
    <>{ /*
      This example requires some changes to your config:
      
      ```
      // tailwind.config.js
      module.exports = {
        // ...
        plugins: [
          // ...
          require('@tailwindcss/forms'),
        ],
      }
      ```
    */ }
 { /*
    This example requires updating your template:
  
    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  */ }
<div className='flex items-center justify-center h-screen'>

  <div className='w-50 h-46 px-2 mt-8 mb-4 overflow-hidden rounded-3xl bg-red text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 mx-auto'>
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     <img className="mx-auto h-40 w-auto" src="/assets/img/ProCasa-Logo.png"  />
     <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
   </div>
 
   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <form className="space-y-6" action="#" method="POST">
       <div>
         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
         <div className="mt-2">
           <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
         </div>
       </div>
 
       <div>
         <div className="flex items-center justify-between">
           <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
           <div className="text-sm">
             <a href="#" className="font-semibold text-red-400 hover:text-red-400">Forgot password?</a>
           </div>
         </div>
         <div className="mt-2">
           <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
         </div>
       </div>
 
       <div>
         <button type="submit" className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-text-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
       </div>
     </form>
 
     <p className="mt-10 text-center text-sm text-gray-500">
      <a href="/signup" className="text-red-400 hover:text-red-400" >Not a member?</a> 
     </p>
   </div>
 </div>
 </div> </div>
 </>
 
  );
}

export default Home
