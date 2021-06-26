import React from 'react';

class Home extends React.Component{
    render(){
        const mystyle = {
            overflow: "hidden"
          };
return(
<div>
   
{/* <div class="loader_bg">
        <div class="loader"><img src="assets/images/loading.gif" alt="#" /></div>
    </div>
 */}    
    <header id="home">
        
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div class="full">
                            <div class="center-desk">
                                <div class="logo"> <a href="index.html"><img src="assets/images/logo.png" alt="#"/></a> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <div class="menu-area">
                            <div class="limit-box">
                                <nav class="main-menu">
                                    <ul class="menu-area-main">
                                        <li class="active"><a href="#home">Home</a></li>
                                        <li><a href="#about">About Us</a></li>
                                        <li><a href="#fruits">Fruits</a></li>
                                        <li><a href="#blog">Blog</a></li>
                                        <li><a href="#contact">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
    


    <section class="slider_section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="full">
                        <h1><strong class="cur">Best</strong><br/>Fresh Red Apple</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                            <div class="button_section"><a class="main_bt" href="#">Buy Now</a></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="full text_align_center">
                        <img class="slide_img" src="assets/images/slider_img.png" alt="#" /> 
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    <div id="about" class="about layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img class="img-responsive" src="assets/images/about_img.png" alt="#" />
                </div>
                <div class="col-md-6">
                    <div class="heading margin_top_30">
                        <h2>About our shop</h2>
                    </div>
                    <div class="full margin_top_20">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="full margin_top_30">
                        <a class="main_bt" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="fruits" class="section dark_bg layout_padding left_white">
        <div class="container">
            <div class="row">
               <div class="col-md-12">
                    <div class="heading full text_align_center">
                        <h2 class="white_font full text_align_center">Our Fruits</h2>
                    </div>
                </div>
            </div>
            <div class="row">
               <div class="col-md-4 margin_top_30">
                    <div class="full fr">
                        <img class="img-responsive" src="assets/images/f1.png" alt="#" />
                    </div>
                    <div class="full text_align_center">
                        <h3 class="white_font">Black Grapes<br/><strong class="theme_blue">Fresh Fruit</strong></h3>
                    </div>   
                </div>
                <div class="col-md-4 margin_top_30">
                    <div class="full fr">
                        <img class="img-responsive" src="assets/images/f2.png" alt="#" />
                    </div>
                    <div class="full text_align_center">
                        <h3 class="white_font">Pineapple<br/><strong class="theme_blue">Fresh Fruit</strong></h3>
                    </div>
                </div>
                <div class="col-md-4 margin_top_30">
                    <div class="full fr">
                        <img class="img-responsive" src="assets/images/f3.png" alt="#" />
                    </div>
                    <div class="full text_align_center">
                        <h3 class="white_font">Bananas<br/><strong class="theme_blue">Fresh Fruit</strong></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="section layout_padding">
        <div class="container">
            <div class="row">
               <div class="col-md-6">
                    <div class="full main_heading_1">
                        <h2>Fresh Lemon</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloreprehenderin </p>
                    </div>   
                    <div class="full margin_top_30">
                        <a class="main_bt" href="#">Read More</a>
                    </div>
                </div>
                <div class="col-md-6 margin_top_30 padding_right_0">
                    <div class="full">
                        <img src="assets/images/green_fr.png" alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div id="blog" class="section dark_bg layout_padding right_white">
        <div class="container">
            <div class="row">
               <div class="col-md-12">
                    <div class="heading full text_align_center">
                        <h2 class="white_font full text_align_center">Our Blog</h2>
                    </div>
                </div>
            </div>
            <div class="row">
               <div class="col-md-4 margin_top_30">
                    <div class="full" style={mystyle} >
                    <div class="full bl">
                        <img class="img-responsive" src="assets/images/blog1.png" alt="#" />
                    </div>
                    <div class="full blog_blue text_align_center">
                        <h5 class="white_font">Post by David Mark 27/07/2019</h5>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor..</p>
                    </div> 
                     </div>  
                </div>
                <div class="col-md-4 margin_top_30">
                    <div class="full" style={mystyle} >
                    <div class="full bl">
                        <img class="img-responsive" src="assets/images/blog2.png" alt="#" />
                    </div> 
                    <div class="full blog_blue text_align_center">
                        <h5 class="white_font">Post by David Mark 27/07/2019</h5>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor..</p>
                    </div>
                     </div>
                </div>
                <div class="col-md-4 margin_top_30">
                    <div class="full" style={mystyle} >
                    <div class="full bl">
                        <img class="img-responsive" src="assets/images/blog3.png" alt="#" />
                    </div> 
                    <div class="full blog_blue text_align_center">
                        <h5 class="white_font">Post by David Mark 27/07/2019</h5>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor..</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <div id="contact" class="section layout_padding">
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-md-6 padding_left_0">
                    <div class="full">
                        <img class="float-left" src="assets/images/fruit_img.png" alt="#" />
                    </div>
                </div>

               <div class="col-md-6">
                <div class="heading">
                        <h2>Request a <strong class="theme_blue">Call Back</strong></h2>
                    </div>
                    <div class="full margin_top_20">
                        <form>
                        <div class="row">
                            <div class="col-sm-12">
                               <input class="form-control" placeholder="Your Name" type="text" required="" />
                            </div>
                            <div class="col-sm-12">
                               <input class="form-control" placeholder="Email" type="Email" required="" />
                            </div>
                            <div class="col-sm-12">
                                <input class="form-control" placeholder="Phone" type="text" required="" />
                            </div>
                            <div class="col-sm-12">
                                <textarea class="form-control textarea" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <button class="main_bt">Send</button>
                    </form>
                    </div>   
                    
                </div>
                
            </div>
        </div>
    </div>
   
    <footer>
        <div class="footer layout_padding">
            <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>Contact Us</h3>
                            <p>Healing Center, 176 W Street name, New York, NY<br/><br/>(+91) 987 654 3210<br/><br/>demo@gmail.com</p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>Pages</h3>
                            <p>
                              <a href="#home">Home</a><br/>
                              <a href="#about">About Us</a><br/>
                              <a href="#fruits">Fruits</a><br/>
                              <a href="#blog">Blog</a><br/>
                              <a href="#contact">Contact Us</a>
                            </p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>Recent Post</h3>
                            <p><span><img src="assets/images/f_b1.png" /></span><span>consectetur adipisc elit,<br/>sed do eiusmod</span></p>
                            <p class="margin_top_20"><span><img src="assets/images/f_b2.png" /></span><span>consectetur adipisc elit,<br/>sed do eiusmod</span></p>
                            <p class="margin_top_20"><span><img src="assets/images/f_b3.png" /></span><span>consectetur adipisc elit,<br/>sed do eiusmod</span></p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>Newsletter</h3>
                            <p>
                                <form>
                                    <input type="text" name="email" placeholder="Enter Your Email" /> 
                                    <button>Subscribe</button>
                                </form>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a></p>
            </div>
        </div>
    </footer>
 
</div>
);
    }
}

export default Home;