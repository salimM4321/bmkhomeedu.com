import React from 'react'
import './Home.css'
import Slider from './Slider'
// import img1 from './Images/Nitin Pant.jpg'
import img1 from './Images/NiramalPant.jpg'
import img2 from './Images/NitinPant2.jpg'
import img3 from './Images/NitinPant3.jpg'
// import img4 from './Images/Nitin Pant4.jpg'
import Image from './Images/Bulbimage.jpg'
import { FaChalkboardTeacher } from "react-icons/fa";



const Home = () => {


    return (
        <div>
            <div class="maincontainer">

        
                <div class="MainContainer2">
                    <div className="TitleClass"> <h1 class='Title'>Microsoft <b class="ai">Power BI</b> Internship - 6 Weeks</h1></div>


                    <Slider />



                    <div class="HomeBContainer">
                        <p>400+ Students Successfully Selected, <br />

                            From Pacematic Corporate Traning Center

                        </p>
                    </div>

                    <div class="Masterclassdata">
                        <h1 class='Masterclass'>Become a master in Power BI within 6 Weeks</h1>
                        <div class="hm-btn">

                            <button class="Homebtn">Entroll Now at &nbsp;<strike> Rs 2000 </strike>&nbsp; Free</button>
                        </div>

                    </div>


                    <div class="MainContainer2">
                        <span>
                            <h1 class="Risk rs1">Learn From Our Expert</h1>
                        </span>

                        <div class="BusnessExamples">
                            <img src={img1} alt="img3" class="Imgsrc1" />
                            <img src={img2} alt="img1" class="Imgsrc1" />
                            <img src={img3} alt="img2" class="Imgsrc1" />
                            {/* <img src={img4} alt="img4" class="Imgsrc1"/> */}
                        </div>

                        {/* <h2 class="Opportunity">Seize the Opportunity Before It's Too Late!</h2> */}

                        <div class="Income">
                            <p>This specialized internship is designed for individuals aiming to achieve expertise in self-service business intelligence using Power BI Desktop & Service. By pursuing these 6 weeks Power BI Internship, you'll gain proficiency in building Advanced DAX (Data Analysis Expressions) skills, and ultimately, excel in the Microsoft PL-300 exam.</p>
                        </div>

                        <div class="ActionNow">You’ll be jobless by 2025 if you don’t master in Power BI. Take Action Now!！ </div>
                        <div class="hm-btn">

                            <button class="Homebtn">Entroll Now at &nbsp;<strike> Rs 2000 </strike>&nbsp; Free</button>
                        </div>


                    </div>


                    <div className="LearnMasterClass">

                        <h1>Here What You Can Except To Learn From This Course</h1>


                        <div className="DetailsContainer">

                            <div className="Details">
                                <div className="one">✅ Power Query</div>
                                <div className="one">✅ Data Modelling</div>
                                <div className="one">✅ Working with DAX</div>
                            </div>

                            <img src={Image} alt="" className="HandsImg" />

                            <div className="Details dtl2">
                                <div className="one">✅ Visualizing Data</div>
                                <div className="one">✅ Power BI Desktop</div>
                                <div className="one">✅ Power BI Services</div>
                            </div>

                        </div>




                    </div>



                    <div className="InternshipHigh">
                        <h2>Internship Heighlight</h2>
                        <div className="SubInternship">

                        <div className="FeatureDat">
                            <div className="Feature1">🟢 Live Online Classes</div>
                            <div className="Feature1">🟢 Access Anywhere</div>
                            <div className="Feature1">🟢 2 Industry Level Projects</div>
                            <div className="Feature1">🟢 Industry Relevant Curriculum</div>

                        </div>

                        <div className="FeatureDat">
                           <div className="Feature1">🟢 Live Online Classes</div>
                            <div className="Feature1">🟢 Access Anywhere</div>
                            <div className="Feature1">🟢 2 Industry Level Projects</div>
                            <div className="Feature1">🟢 Industry Relevant Curriculum</div>

                        </div>
                        </div>

                    </div>

                 <div className="Faq">
                    
                 </div>


                </div>

            </div>
        </div>

    );
}
export default Home;