import Icon1 from '../assets/icons/1.png'
import Icon2 from '../assets/icons/2.png'
import Icon3 from '../assets/icons/3.png'
import Icon4 from '../assets/icons/4.png'
const HeroFooter = () => {
    const titleStyle = {
        fontSize: 20,
        fontWeight: 700,

    }
    return (
        <div className="bg-[#ECEAE3]">
            <div className="container md:w-[90%] mx-auto p-10 lg:p-0 grid grid-cols-2 lg:grid-cols-4  gap-5">
                <div className="py-10 space-y-3">
                    <img src={Icon1} alt="" />
                    <h4 style={titleStyle}>Awesome Aroma</h4>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="py-10 space-y-3">
                    <img src={Icon2} alt="" />
                    <h4 style={titleStyle}>High Quality</h4>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className="py-10 space-y-3">
                    <img src={Icon3} alt="" />
                    <h4 style={titleStyle}>Pure Grades</h4>
                    <p>The coffee is made of the green coffee beans which you will love.</p>
                </div>
                <div className="py-10 space-y-3">
                    <img src={Icon4} alt="" />
                    <h4 style={titleStyle}>Proper Roasting</h4>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default HeroFooter;