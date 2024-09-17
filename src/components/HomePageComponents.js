
import './styles/HomePageComponents.css'
import { Parallax } from "react-parallax";
// import parallax from 'https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726561915/Untitled-1_jhidos.png'
import { Divider, Spin,Card, Button } from "antd";
import SearchBar from './SearchBar';
import { API_SEARCH_FACULTY } from '../apis';

const LANDING_IMAGE_URL = 'https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726561915/Untitled-1_jhidos.png';

export const LANDING_IMAGE_COMPONENT = ({navigate}) => (
  <Parallax blur={2} bgImage={LANDING_IMAGE_URL} strength={300}>
    <div className="row parallax-component" data-aos="fade-up">
      <div className="col-11 home-main-img align-self-end mb-5">
        <h2>Rate your Professors, <br />Share your Experience</h2>
        <SearchBar
              placeholder="Enter Faculty Name"
              apiCall={API_SEARCH_FACULTY}
              onResultClick={(faculty)=>navigate(`/faculty/${faculty.id}`, { state: { data: faculty } })}
              style={{ marginRight: '20px'  }}
            />
      </div>
    </div>
  </Parallax>
);

export const FACULTY_CARDS =({navigate})=>(
    <>
    
    <Divider orientation="center"><h2 >Departments</h2></Divider>
    
    <div className="row m-0 px-4" id='faculty-cards' name='faculty-cards' >
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/foit")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://thumbs.dreamstime.com/b/consultant-presenting-tag-cloud-information-technology-213591032.jpg'} className="faculty-image" /> }>
                <p className='department-card-name'>Faculty of Information and Technology</p>
                <Button className='department-card-btn'>View Faculty</Button>
            </Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/foe")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11433_2.jpg'} className="faculty-image" /> }>
                <p className='department-card-name'>Faculty of Engineering</p>
                <Button className='department-card-btn'>View Faculty</Button>
            </Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fohs")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://i.dawn.com/primary/2018/11/5bdca85499445.jpg'} className="faculty-image" /> }>
                <p className='department-card-name'>Faculty of Humanities and Social Sciences</p>
                <Button className='department-card-btn'>View Faculty</Button>
            </Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/foll")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://kinnaird.edu.pk/wp-content/uploads/2024/03/which_is_better_literature_or_linguistics.png'} className="faculty-image" /> }>
                <p className='department-card-name'>Faculty of Languages and Literature</p>
                <Button className='department-card-btn'>View Faculty</Button>
            </Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fol")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://www.pakistantoday.com.pk/wp-content/uploads/2023/03/Alpha-5.jpg'} className="faculty-image" /> }>
                <p className='department-card-name'>Faculty of Law</p>
                <Button className='department-card-btn'>View Faculty</Button>
            </Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fomm")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/03/14165058/BA-Journalism-and-Mass-Communication.jpg'} className="faculty-image" /> }>
                <p className='department-card-name'>Faculty of Media and Mass Communication</p>
                <Button className='department-card-btn'>View Faculty</Button>
            </Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/foms")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://www.cleverism.com/wp-content/uploads/2017/12/shutterstock_667848580.jpg'} className="faculty-image" /> }>
                <p className='department-card-name'>Faculty of Management Sciences</p>
                <Button className='department-card-btn'>View Faculty</Button>
            </Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fop")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://chughtailab.com/wp-content/uploads/2020/11/Pharmacy-2-1.jpg'} className="faculty-image" /> }>
                <p className='department-card-name'>Faculty of Pharmacy</p>
                <Button className='department-card-btn'>View Faculty</Button>
            </Card>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4" onClick={()=>navigate("/department/fost")}  data-aos="fade-up">
            <Card hoverable cover={<img  src={'https://research.sociology.cam.ac.uk/sites/research.sociology.cam.ac.uk/files/humanbrainshutterstock_719504626_1.jpg'} className="faculty-image" /> }>
                <p className='department-card-name'>Faculty of Science and Technology</p>
                <Button className='department-card-btn'>View Faculty</Button>
            </Card>
        </div>

    </div>
    </>
)



