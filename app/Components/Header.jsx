export default function Header(){
     return(
          <>
                <header className='flex top-0 text-black items-center gap-10 py-2 px-3'>
        <h1 className="text-3xl text-pink-950 font-bold">$hoe $tore</h1><br /><br /><br /><br />
         <a href={"/page.tsx"}>Home</a>
         <a href={"/"}>About</a>
         <a href={"/"}>Testimonials</a>
         <button className='bg-blue-100 hover:bg-blue-300
          text-pink-300 font-bold py-2 px-3 rounded-full'>
               Create account
               </button>
         </header>
          </>
     )
}