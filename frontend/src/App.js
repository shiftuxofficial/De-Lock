// import './App.css';
// import CertificateVerification from './components/CertificateVerification';
// import HowItWorks from './components/Howitworks';
// import bottomwave from './bottomWaveEduchain.png';
// import topwave from './topWaveEduchain.png';
// import profile from './profile.png';

// function App() {
//   return (
//     <div className="App min-h-screen relative bg-[#f5f5f5]">
//       <nav className='relative'>
//         <img src={profile} className='fixed top-5 right-5 z-10' alt="Profile"/>
//       </nav>
//       <img src={topwave} className='absolute top-0 left-0 w-full h-[200px] object-cover' alt="Top Wave"/>
      
//       <div className='relative top-[180px] text-center px-4'>
//         <p className='text-3xl text-[#A9A9A9] mb-8'>You can either.....</p>
//         <div className='flex justify-center gap-16'>
//           <p className='relative right-[120px] top-[100px] text-2xl text-[#A9A9A9]'>Search and select <br/> your certificate to <br/> verify</p>
//           <div className='relative left-[150px] top-[100px] text-2xl text-[#A9A9A9]'>
//             Upload your<br/> certificate to verify<br/>
//             <button className='text-xl text-[#6A73D4] border border-[#6A73D4] rounded-full py-2 px-5'>Upload</button>
//           </div>
//         </div>
//       </div>
      
//       <div className='relative top-[700px] right-[450px] text-center mt-4 text-2xl text-[#A9A9A9]'>
//         Select and upload
//       </div>
//       <div className='relative top-[650px] text-center mt-4 text-2xl text-[#A9A9A9]'>
//         Pay and <br/> request verificaton
//       </div>
//       <div className='relative left-[150px] top-[650px] text-2xl text-[#A9A9A9]'>
//         Receive <br/> verified certificate
//       </div>
      
      
//       <img src={bottomwave} className='absolute bottom-0 left-0 w-full h-[200px] object-cover' alt="Bottom Wave"/>
      
//     </div>
//   );
// }

// export default App;



import './App.css';
import CertificateVerification from './components/CertificateVerification';
import HowItWorks from './components/Howitworks';
import bottomwave from './bottomWaveEduchain.png';
import topwave from './topWaveEduchain.png';
import profile from './profile.png';

function App() {
  return (
    <div className="App min-h-screen relative bg-[#f5f5f5]">
      <nav className='relative'>
        <img src={profile} className='fixed top-5 right-5 w-12 h-12 z-10' alt="Profile"/>
      </nav>
      <img src={topwave} className='absolute top-0 left-0 w-full h-[200px] object-cover' alt="Top Wave"/>
      
      <div className='relative top-[180px] text-center px-4'>
        <p className='text-3xl text-[#A9A9A9] mb-8'>You can either.....</p>
        <div className='flex justify-center gap-16'>
          <p className='relative text-2xl top-[110px] right-[100px] text-[#A9A9A9]'>Search and select <br/> your certificate to <br/> verify</p>
          <div className='relative text-2xl text-[#A9A9A9] top-[120px] left-[150px]'>
            Upload your<br/> certificate to verify<br/>
            <button className='text-xl text-[#6A73D4] border border-[#6A73D4] rounded-full py-2 px-5'>Upload</button>
          </div>
        </div>
      </div>
      
      <div className='absolute top-[700px] left-1/2 transform -translate-x-1/2 text-center text-2xl text-[#A9A9A9]'>
        <div className='mb-4 relative right-[440px] top-[200px]'>Select and upload</div>
        <div className='mb-4 relative top-[150px]'>Pay and <br/> request verification</div>
        <div className='relative left-[440px] top-[80px]'>Receive <br/> verified certificate</div>
      </div>
      
      <img src={bottomwave} className='absolute bottom-0 left-0 w-full h-[200px] object-cover' alt="Bottom Wave"/>
    </div>
  );
}

export default App;



