import welcomeImage from '../assets/Welcome.webp'
import Logo from '../assets/logo.png'

const LogIn = () => {


 

    return (
        <div class="flex m-auto">   
        <div class= " w-1/4 m-auto  bg-white">
            <div class = "flex w-full h-full bg-black items-center justify-center">
                <img src = {Logo} class = "w-full center block"  style = {{ width: '150px', height: 'auto', }} alt="..." />
            </div>
            
            <form>
            <input type ="text" class = "rounded-2xl  bg-[#FFFFFF] focus:text-[#000000]  text-[#A7A3FF] text-xl block w-full p-5 font-['poppins'] " id = "username" placeholder = "Username" required/>
             <input type ="password" class = " rounded-2xl bg-[#FFFFFF] focus:text-[#000000] text-[#A7A3FF] text-xl block w-full p-5 font-['poppins'] mt-6 mb-3" id="password" placeholder = "Password" required/>
            </form >
             <a class = "pt-10 pb-10 textsm text-[#008080] w-full font-['poppins']" href =  '#'>Forgot Password?</a>
             <a href = {`/`}><button  class = " rounded-full font-['poppins'] bg-[#008080] text-[#FFFFFF] text-xl block  w-full mt-3 p-5 center hover:bg-[#006060]"> Log in</button></a>
             <p class = "textsm font-['poppins'] mt-6 w-full text-center">Don't have anaccount yet ? <a href = {`/SignUp/`} class = "text-x font-['poppins'] text-[#008080] text-sm font-bold">Register Here!</a></p>
        </div>
        </div>

        );
};

export default LogIn;