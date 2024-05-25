import Logo from '../assets/logo.png'


const SignUp = () => {
    return (
    	<div class = "h-screen flex items-center mx-auto" style={{background: 'linear-gradient(155deg, #61918e 20%, #dbe8e4 80%)'  }}>
        <div class = "w-1/4 h-screen"></div>
        <div class = "w-3/6">
        <img src = {Logo} class = "w-2/6 center block m-auto"  alt="..." />
       <div className="flex items-center gap-x-8 m-auto " > 

<div class="w-1/2" >
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="text" id="Id"  placeholder="ID"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="text" id="Name"  placeholder="First Name"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']"type="text" id="Speciality"  placeholder="Speciality / Field"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="password" id="Password" placeholder="Password" />
        
</div >  
<div class="w-1/2">

        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="tel" id="Tel" placeholder="Telephone Number" />
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" type="text" id="Last"  placeholder="Last Name"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#FFFFFF] text-[#A7A3FF] text-xl block w-full p-4 font-['poppins']" list="wilaya"  placeholder="Wilaya"/>
        <datalist id="wilaya">
         <option value="01. Adrar " />
            <option value="02. Chlef " />
            <option value="03. Laghouat " />
            <option value="04. Oum El Bouaghi " />
            <option value="05. Batna " />
            <option value="06. Bejaïa " />
            <option value="07. Biskra " />
            <option value="08. Béchar " />
            <option value="09. Blida " />
            <option value="10. Bouira " />
            <option value="11. Tamanrasset " />
            <option value="12. Tebessa   "  />
            <option value="13. Tlemcen " />
            <option value="14. Tiaret " />
            <option value="15. Tizi Ouzou " />
            <option value="16. Alger " />
            <option value="17. Djelfa " />
            <option value="18. Djijel " />
            <option value="19. Sétif " />
            <option value="20. Saïda " />
            <option value="21. Skikda " />
            <option value="22. Sidi Bel Abbès  " />
            <option value="23. Annaba    " />
            <option value="24. Guelma        " />
            <option value="25. Constantine     " />
            <option value="26. Médéa      " />
            <option value="27. Mostaganem       " />
            <option value="28. M'Sila       " />
            <option value="29. Mascara      " />
            <option value="30. Ouargla     " />
            <option value="31. Oran    " />
            <option value="32. El Bayadh      " />
            <option value="33. Illizi  " />
            <option value="34. Bordj Bou Arreridj " />
            <option value="35. Boumerdès  " />
            <option value="36. El Tarf  " />
            <option value="37. Tindouf  " />
            <option value="38. Tissemsilt " />
            <option value="39. El Oued " />
            <option value="40. Khenchela " />
            <option value="41. Souk Ahras " />  
            <option value="42. Tipaza " />
            <option value="43. Mila " />
            <option value="44. Aïn Defla  " />
            <option value="45. Naâma  " />  
            <option value="46. Aïn Témouchent " />  
            <option value="47. Ghardaia " />  
            <option value="48. Relizane  " />
            <option value="49.Timimoun   " />
            <option value="50.Bordj Badji Mokhtar " />
            <option value="51.Ouled Djellal   " />
            <option value="52.Béni Abbès     " />
            <option value="53.ain Salah     " />
            <option value="54.ain Guezzam     " />
            <option value="55.Touggourt     " />
            <option value="56.Djanet      " />
            <option value="57.El MGhair  " />
            <option value="58.El Meniaa" />
  </datalist>
     

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