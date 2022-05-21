import React, {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import chris from "../images/chris.jpg";

//import apple123 from "../images/apple123.jpg";
import apple123 from "../images/Student.png";


import apple1234 from "../images/123.jpg";

import strawberry from "../images/strawberry1.webp";

import onejpg from "../images/1.jpg";
import twojpg from "../images/2.jpg";
import threejpg from "../images/3.jpg";


import first from "../images/first.jpg";
import sec from "../images/sec.jpg";
import third from "../images/third.jpg";






import about from "../images/about.webp";
import berries from "../images/berries.jpg";
import breakfast from "../images/breakfast.webp";
import cake from "../images/cake1.jpg";

import christmascookies from "../images/christmascookies.webp";
import chocolate from "../images/chocolate.webp";
import coffeeice from "../images/coffeeice.webp";
import cupcakes from "../images/cupcakes.webp";
import straberry1 from "../images/strawberry1.webp";



//import strawberrycupcakessnack from "../images/strawberrycupcakessnack.webp";

import strawberrycupcakessnack from "../images/img1.jpg";

import strawberrycupcakessnack1 from "../images/signpic.jpg";











const Home = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
           {/* <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{userName}</h1>
                    <h2> { show ? 'Happy, to see you back' :  'We Are The MERN Developer' }</h2>
                </div>
            </div>*/}





            <header style={{backgroundColor:"#8e44ad ", height:"350vh"}}>
  
           
  <div  style={{backgroundColor:"red"}}> 
  <figure>
  <img src={apple123} className="img-fluid w-100" alt="atj"/>
  </figure>  

</div>


{/*

<section className="products"  >
    <div className="our_products">
        <h5 className="text-center " style={{color:"#f6b93b",
fontfamily: "'Courgette', cursive"}}>Order Now</h5>
        <h2 className="text-center " style={{color:"#f6b93b",
fontfamily: "'Courgette', cursive"}}  >Our Menu</h2>
        <hr className="mx-auto border-dashed w-25 text-light" />

    </div>


    <div class="container" style={{backgroundColor:"#192a56"}}>


    <div class="row">


   





    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={strawberrycupcakessnack} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class=" rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>



    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={straberry1} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class=" rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>
    </div>










    <div class="row">


    
    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={cupcakes} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class=" rounded-pill  btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>





    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={coffeeice} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class="   rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>



    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={chocolate} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class=" rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>
    </div>



    <div class="row">


    
    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={christmascookies} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class=" rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>





    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={apple123} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class=" rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>



    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={breakfast} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class=" rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>
    </div>



    <div class="row">


    
    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={cake} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class="rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>





    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={berries} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class="rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>



    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
    <div class="card mb-lg-5" style={{width: "18rem", height: "auto"}}>
                    <figure><img src={about} class="img-fluid" alt="figure" /></figure>
                    <div class="card-body"        >
                      <p class="card-text text-info" > <button type="button" class="rounded-pill   btn btn-outline-success">Order now</button>
                    
                      <small class="ml-5 " style={{fontSize: "25px"}}>$21</small>
                    
                    
                    </p>
                    </div>
                  </div>
    
    </div>
    </div>

    </div>







    
</section>





<section class="testinomials">
    <div class="our_testinomila">
        <h5 class="text-center"  style={{color:"#f6b93b",
fontfamily: "'Courgette', cursive"}}>Testinomials</h5>
        <h2 class="text-center "  style={{color:"#f6b93b",
fontfamily: "'Courgette', cursive"}}>Some Feedbacks</h2>
        <hr class="mx-auto border-dashed w-25" />

    </div>


    <div class="container"   style={{backgroundColor:"#192a56"}}>
        <div class="row"  data-aos="zoom-in-up" data-aos-duration="1200">

            <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
                <div class="d-flex justify-content-between">
                    <div>
                        <h5 class="text-light"> RAJ </h5>
                        <small class="testsmall text-muted">Food Specialist</small>

                    </div>
                    <div class="circle_img">
                        <figure><img src={first}  style={{ minWidth:"50%",
maxHeight: "35px",
borderRadius:" 60%"}}   class="img-fluid" alt="figure" /></figure>

                    </div>


                </div>
                <p class="testp text-light">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptas commodi distinctio porro tenetu
                    r temporibus maiores nemo alias! Esse, consectetu
                    r commodi?</p>

            </div>



            <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
                <div class="d-flex justify-content-between">
                    <div>
                        <h5  class="text-light"> RAJ </h5>
                        <small class="testsmall text-muted">Food Specialist</small>

                    </div>
                    <div class="circle_img">
                        <figure><img src={sec} 
                        
                        style={{ minWidth:"50%",
maxHeight: "35px",
borderRadius:" 60%"}} 
                        
                        
                        class="img-fluid" alt="figure" /></figure>

                    </div>


                </div>
                <p class="testp text-light">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptas commodi distinctio porro tenetu
                    r temporibus maiores nemo alias! Esse, consectetu
                    r commodi?</p>

            </div>




            <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
                <div class="d-flex justify-content-between">
                    <div>
                        <h5  class="text-light"> RAJ </h5>
                        <small class="testsmall text-muted">Food Specialist</small>

                    </div>
                    <div class="circle_img">
                        <figure><img src={third}
                        
                        style={{ minWidth:"50%",
maxHeight: "35px",
borderRadius:" 60%"}} 
                        
                        
                        
                         class="img-fluid" alt="figure" /></figure>

                    </div>


                </div>
                <p class="testp text-light"> Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptas commodi distinctio porro tenetu
                    r temporibus maiores nemo alias! Esse, consectetu
                    r commodi?</p>

            </div>


        </div>

    </div>

</section>






<section class="py-5 ourchefs">
    <div class="our_chefs">
        <h5 class="text-center"  style={{color:"#f6b93b",
fontfamily: "'Courgette', cursive"}}>Team</h5>
        <h2 class="text-center"  style={{color:"#f6b93b",
fontfamily: "'Courgette', cursive"}}>Our Chefs</h2>
        <hr class="mx-auto border-dashed w-25" />

    </div>


    <div class="container "   style={{backgroundColor:"#192a56"}}>
        <div class="row " >


            <div class=" col-md-4 col-xl-4 col-xxl-6 col-10"
            
            data-aos="flip-left" data-aos-duration="1200"
            >


                <figure>
                    <img src={onejpg} class="img-thumbnail"   alt="test" />
                </figure>


            </div>

            <div class=" col-md-4 col-xl-4 col-xxl-6 col-10"
            data-aos="flip-left" data-aos-duration="1200"
            
            >
                <figure><img src={twojpg} class="img-thumbnail" alt="test" /></figure>
            </div>

            <div class=" col-md-4 col-xl-4 col-xxl-6 col-10"
            data-aos="flip-right" data-aos-duration="1200"
            >
                <figure><img src={threejpg} class="img-thumbnail" alt="test" /></figure>
            </div>


        </div>


    </div>






</section>

<footer class="footer">



<div class="container"  style={{backgroundColor:"#192a56"}}>
<div class="pl-5 pt-9 row aign-items-center">

    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">

        <br /> <br /> <br />
        

        <h5 style={{color:"#f6b93b",
fontfamily: "'Courgette', cursive"}}>Our Loction</h5>
        <small className="text-light ">xyz Street, Sector-12</small><br />
        <small className="text-light">New Delhi-000***</small>

    </div>
    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">
        <br /> <br /> <br />
        <h5  style={{color:"#f6b93b",
fontfamily: "'Courgette', cursive"}}>Opening Hours</h5>
        <small className="text-light">Monday to Sunday</small><br />
        <small className="text-light">9:00AM-10:00PM</small>

    </div>

    <div class="mx-auto col-md-4 col-xl-4 col-xxl-6 col-10">

        <br /> <br /> <br />
        <h5 style={{color:"#f6b93b",
fontfamily: "'Courgette', cursive"}}> Contact Us</h5>
        <small className="text-light">646757***</small><br />
        <small className="text-light">contact@gmail.com</small>



    </div>






</div>
</div>

<br/>

<hr  class="footercopy"/>
<h5 class="pb-2 align-items-md-baseline text-md-center text-light">&copy; design by Aryan</h5>
</footer>

*/}







<br/>
<br/>
<br/>


          
<div  style={{backgroundColor:"red"}}> 
  <figure>
  <img src={apple1234} className="img-fluid w-100" alt="atj"/>
  </figure>  

</div>





<footer class="footer">



<h5 class="pb-2 align-items-md-baseline text-md-center text-light fs-2">&copy; design by pankaj raj</h5>
</footer>




 


</header>



            
        </>
    )
}

export default Home
