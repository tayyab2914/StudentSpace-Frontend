import './styles/HomePageComponents.css'
import { Parallax } from "react-parallax";
import { Divider, Card, Button } from "antd";
import SearchBar from './SearchBar';
import { API_SEARCH_FACULTY } from '../apis';

const LANDING_IMAGE_URL = 'https://i.postimg.cc/T1xq94bL/Untitled-Project-2.webp';

export const LANDING_IMAGE_COMPONENT = ({ navigate }) => (
  <Parallax
    blur={2}
    bgImage={LANDING_IMAGE_URL}
    strength={300}
    bgImageStyle={{ width: '100%', objectFit: 'cover' }}
    // style={{ height: '100vh' }} // Set height as needed
  >
    <div className="row parallax-component" data-aos="fade-up">
      <div className="col-12 home-main-img align-self-end mb-5">
        <h2>Rate your Professors, <br />Share your Experience</h2>
        <SearchBar
          placeholder="Enter Faculty Name"
          apiCall={API_SEARCH_FACULTY}
          onResultClick={(faculty) => navigate(`/faculty/${faculty.id}`, { state: { data: faculty } })}
          style={{ marginRight: '20px' }}
          id={2}
        />
      </div>
    </div>
  </Parallax>
);

export const FACULTY_CARDS =({navigate})=>(
    <>
    
    <Divider orientation="center"><h2 >Departments</h2></Divider>
    
    <div className="container-xxl">
    <div className="row m-0 px-4" >
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/foit")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://thumbs.dreamstime.com/b/consultant-presenting-tag-cloud-information-technology-213591032.jpg'} className="faculty-image" /> }>
            
                <div className="row m-0">
                    <div className="col-12 p-0 d-flex flex-column" style={{height:"120px"}}>
                <p className='department-card-name'>Faculty of Information and Technology</p>
                <button class="button text-center mt-auto w-100"> <p class="text m-0">View Faculty</p> </button>
            </div></div></Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/foe")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11433_2.jpg'} className="faculty-image" /> }>
            
                <div className="row m-0">
                    <div className="col-12 p-0 d-flex flex-column" style={{height:"120px"}}>
                <p className='department-card-name'>Faculty of Engineering</p>
                <button class="button text-center mt-auto w-100"> <p class="text m-0">View Faculty</p> </button>
            </div></div></Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fohs")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://i.dawn.com/primary/2018/11/5bdca85499445.jpg'} className="faculty-image" /> }>
            
                <div className="row m-0">
                    <div className="col-12 p-0 d-flex flex-column" style={{height:"120px"}}>
                <p className='department-card-name'>Faculty of Humanities and Social Sciences</p>
                <button class="button text-center mt-auto w-100"> <p class="text m-0">View Faculty</p> </button>
            </div></div></Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/foll")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://kinnaird.edu.pk/wp-content/uploads/2024/03/which_is_better_literature_or_linguistics.png'} className="faculty-image" /> }>
            
                <div className="row m-0">
                    <div className="col-12 p-0 d-flex flex-column" style={{height:"120px"}}>
                <p className='department-card-name'>Faculty of Languages and Literature</p>
                <button class="button text-center mt-auto w-100"> <p class="text m-0">View Faculty</p> </button>
            </div></div></Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fol")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://www.pakistantoday.com.pk/wp-content/uploads/2023/03/Alpha-5.jpg'} className="faculty-image" /> }>
            
                <div className="row m-0">
                    <div className="col-12 p-0 d-flex flex-column" style={{height:"120px"}}>
                <p className='department-card-name'>Faculty of Law</p>
                
                <button class="button text-center mt-auto w-100"> <p class="text m-0">View Faculty</p> </button>
                </div></div>
            </Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fomm")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/03/14165058/BA-Journalism-and-Mass-Communication.jpg'} className="faculty-image" /> }>
            
                <div className="row m-0">
                    <div className="col-12 p-0 d-flex flex-column" style={{height:"120px"}}>
                <p className='department-card-name'>Faculty of Media and Mass Communication</p>
                <button class="button text-center mt-auto w-100"> <p class="text m-0">View Faculty</p> </button>
            </div></div></Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/foms")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://www.cleverism.com/wp-content/uploads/2017/12/shutterstock_667848580.jpg'} className="faculty-image" /> }>
            
                <div className="row m-0">
                    <div className="col-12 p-0 d-flex flex-column" style={{height:"120px"}}>
                <p className='department-card-name'>Faculty of Management Sciences</p>
                <button class="button text-center mt-auto w-100"> <p class="text m-0">View Faculty</p> </button>
            </div></div></Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fop")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://chughtailab.com/wp-content/uploads/2020/11/Pharmacy-2-1.jpg'} className="faculty-image" /> }>
            
                <div className="row m-0">
                    <div className="col-12 p-0 d-flex flex-column" style={{height:"120px"}}>
                <p className='department-card-name'>Faculty of Pharmacy</p>
                <button class="button text-center mt-auto w-100"> <p class="text m-0">View Faculty</p> </button>
            </div></div></Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fost")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://research.sociology.cam.ac.uk/sites/research.sociology.cam.ac.uk/files/humanbrainshutterstock_719504626_1.jpg'} className="faculty-image" /> }>
    
                <div className="row m-0">
                    <div className="col-12 p-0 d-flex flex-column" style={{height:"120px"}}>
                    <p className='department-card-name'>Faculty of Science and Technology</p>
                    <button class="button text-center mt-auto w-100"> <p class="text m-0">View Faculty</p> </button>
                    </div>
                </div>
            </Card>
        </div>

    </div>
    </div>
    </>
)



