import Card from "./Card";
import Sdata from "./Sdata";

function Services() {
  return (
    <>
      <div className="text-center ">
        <h1>Our Services</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
            {
              Sdata.map((val,index)=>{
                return <Card key={index} imgsrc={val.imgsrc} title={val.title}/>
              })
            }
              
            </div>
          </div>
        </div>
      </div>
    
       </>
  );
}

export default Services;
