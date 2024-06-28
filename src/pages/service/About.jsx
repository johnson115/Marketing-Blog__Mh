


import React from 'react';
var about=require("../../media/about-us.png");
const Aboutus = () => {
  return (
    <div className="bg-white relative pt-20 pb-40 lg:pt-20 dark:bg-gray-900">
    <div className="relative xl:container m-auto px-2 md:px-4 lg:px-4">
    <h1 id="about" class="text-amber-600 font-semibold text-5xl">
                  Who We are ?
                </h1>
      <h1 className="sm:mx-auto mt-0 sm:w-10/12 md:w-2/4 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-full lg:text-left xl:text-7xl dark:text-white">
        Real People Delivering  <br className="lg:block hidden" />{" "}
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
          Real result .
        </span>
        
      </h1>
      
      <div className="lg:flex">
        <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
          <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat labore provident quia sapiente pariatur modi cumque dolor officiis iusto quam, aperiam ut dignissimos error harum minima itaque ratione ab.
          </p>
          
          
          <div class="flex w-3/4 flex-col p-4 bg-white shadow-md hover:shodow-lg rounded-2xl">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/digital-marketing-idea-6191220-5096994.png?f=webp"
				class="w-17 h-16 rounded-2xl p-1   text-blue-400 " alt="Marketing agency"
				/>
			<div class="flex flex-col ml-3">
				<div class="font-medium leading-none">Marketing Agency</div>
				<p class="text-sm text-gray-600 leading-none mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui ipsam veritatis accusamus? Corporis praesentium, quas recusandae adipisci eius iusto deleniti labore! Accusantium impedit eius reiciendis recusandae exercitationem cumque dolores.
				</p>
			</div>
		</div>
		
	</div>
</div>
<div class="flex w-3/4 flex-col p-4 bg-white shadow-md hover:shodow-lg rounded-2xl">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<img src="https://cdn-icons-png.flaticon.com/512/5979/5979484.png"
				class="w-17 h-16 rounded-2xl p-1   text-blue-400 " alt="seo"
				/>

			<div class="flex flex-col ml-3">
				<div class="font-medium leading-none ">SEO Service</div>
				<p class="text-sm text-gray-500 leading-none mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique quaerat soluta sed quae qui assumenda magnam aspernatur natus minus? Modi, eum. Odit rem autem et. Quas corporis dolorem sed!
				</p>
			</div>
		</div>
		
	
	</div>
</div>
          
        </div>
        <div className="mt-3 md:mt-0 lg:absolute -right-10 lg:w-7/12">
          <div className="relative w-full">
            <div
              aria-hidden="true"
              className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-72 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
            />
            <img
              src={about} 
              className="relative w-full"
              alt="wath illustration"
              loading="lazy"
              width={320}
              height={280}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Aboutus;
