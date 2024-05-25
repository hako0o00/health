import Logo from '../assets/logo.png'


const SignUp = () => {
    return (
    	<div class = "h-screen flex items-center mx-auto" style={{background: 'linear-gradient(155deg, #61918e 20%, #dbe8e4 80%)'  }}>
        <div class = "w-1/4 h-screen"></div>
        <div class = "w-3/6">
        <img src = {Logo} class = "w-2/6 center block m-auto"  alt="..." />
        <div className="flex items-center gap-x-8 m-auto"> 

<div class="w-1/2" >
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="text" id="Id"  placeholder="ID"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="text" id="Name"  placeholder="First Name"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']"type="text" id="Age"  placeholder="Age / Field"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="password" id="Password" placeholder="Password" />
        
</div >  
<div class="w-1/2">

        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="tel" id="Tel" placeholder="Telephone Number" />
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="text" id="Last"  placeholder="Last Name"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="text" id="Weight"  placeholder="Weight"/>

     

        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="password" id="ConfirmPassword"  placeholder="Confirm Password "  />
        
        
  </div>      

  
          
        </div>             
        <a href = {`/`}><button href = {`/`} class = " rounded-full font-['poppins'] bg-[#008080] text-[#FFFFFF] text-xl block  w-1/2 m-auto p-5 hover:bg-[#006060]">Sign up</button></a>
    	 <p class = "text-sm font-['poppins'] mt-6 w-full text-center">Already have an account? <a href = {`/LogIn/`} class = "text-sm font-['poppins'] text-[#008080] text-xl font-bold">Login Here!</a></p>
       
        </div>

        </div>

    	);
};

export default SignUp;