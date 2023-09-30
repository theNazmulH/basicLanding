async function getData(){
  const res=await fetch(process.env.BASE_URL+"api/TestimonialList");
  if(!res.ok){
    throw new Error("Testimonial List Calling Fail");
  }
  return res.json();
}

const Testimonial = async () => {
  const data = await getData();
  return (
    <>
      <section className="  pt-20 pb-12">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">
              Our Customers Very Happy With Our Services
            </h2>
            <p className="text-blueGray-400 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div className="flex flex-wrap">
            {
              data.map((item,i)=>{
                return(
                    <div key={i} className="mb-4 w-full lg:w-1/3 px-3">
                      <div className="p-8 bg-white rounded shadow text-center">
                        <div className="bg-no-repeat bg-left-top"
                             style={{backgroundImage: 'url("atis-assets/elements/quote-grey.svg")'}}>
                          <p className="mb-8 text-gray-500 leading-loose">
                            {item['msg']}
                          </p>
                          <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                               src={item['image']}
                               alt=""/>
                          <h4 className="mb-1 text-2xl font-bold font-heading">
                            {item['name']}
                          </h4>
                          <p className="text-gray-500">{item['designation']}</p>
                        </div>
                      </div>
                    </div>
                )
              })
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
