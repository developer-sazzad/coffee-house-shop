import Hero from "../components/Hero";
import HeroFooter from "../components/HeroFooter";
import Products from "../components/Products";

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <HeroFooter></HeroFooter>
            <div className="product-bg">
                <Products></Products>
            </div>
            {/* <p className="bg-gray-900 p-10 text-center">
                
                <svg width="102" height="64" fill="none" viewBox="0 0 102 64" xmlns="http://www.w3.org/2000/svg" class="level-2-logo"><rect width="100.666" height="62.857" x="0.667" y="0.571" stroke="url(#paint0_linear_1_121)" stroke-width="1.143" rx="8.571"></rect><g filter="url(#filter0_d_1_121)"><path fill="url(#paint1_linear_1_121)" d="M44.63 19.81h-2.294c-.847 0-1.634.44-2.077 1.162l-14.26 23.216h3.202a.811.811 0 00.692-.388L44.63 19.81z"></path><path fill="url(#paint2_linear_1_121)" d="M38.535 19.81h-2.293c-.847 0-1.634.44-2.077 1.162l-14.26 23.216h3.202a.812.812 0 00.692-.388l14.736-23.99z"></path><path fill="url(#paint3_linear_1_121)" d="M71.367 25.875c-.636.17-1.57.485-2.615 1.107l-3.96 6.463c-.765 1.247-2.556 1.299-3.399.1l-8.629-12.349A3.255 3.255 0 0050.1 19.81h-1.254c-1.13 0-2.179.586-2.769 1.551l-14.024 22.83h4.312a.805.805 0 00.539-.206.824.824 0 00.156-.181l.367-.595.011-.02 6.756-11c1.025-1.667 3.415-1.758 4.563-.17l7.005 9.688a6.005 6.005 0 004.861 2.482h2.427a7.316 7.316 0 006.232-3.489l8.767-14.854c-2.892-1.512-6.682.027-6.682.027v.002z"></path><path fill="url(#paint4_linear_1_121)" d="M77.395 19.81a7.559 7.559 0 00-2.353.374c-.376.12-.738.27-1.088.45a7.96 7.96 0 00-.81.476 7.237 7.237 0 00-1.093.895c-.392.39-.745.825-1.05 1.302l-1.863 2.826c.535-.479 1.272-.87 2.089-1.305.069-.038.975-.519 2.011-.82 2.585-.753 4.87-.366 6.264.048l2.226-3.63a.233.233 0 00.033-.07l.005-.006.329-.538-.001-.002h-4.698z"></path></g><defs><filter id="filter0_d_1_121" width="69.809" height="34.286" x="16.096" y="19.81" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="6.095"></feOffset><feGaussianBlur stdDeviation="1.905"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_121"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_1_121" result="shape"></feBlend></filter><linearGradient id="paint0_linear_1_121" x1="-10" x2="51.003" y1="-10" y2="31.996" gradientUnits="userSpaceOnUse"><stop stop-color="#E855DE"></stop><stop offset="1" stop-color="#EEE0FF" stop-opacity="0"></stop><animate attributeName="x1" values="-10;112;112;-10" dur="3s" repeatCount="indefinite"></animate><animate attributeName="y1" values="-10;-10;74;74" dur="3s" repeatCount="indefinite"></animate></linearGradient><linearGradient id="paint1_linear_1_121" x1="19.905" x2="82.095" y1="32" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E855DE"></stop><stop offset="1" stop-color="#5400EE"></stop></linearGradient><linearGradient id="paint2_linear_1_121" x1="19.905" x2="82.095" y1="32" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E855DE"></stop><stop offset="1" stop-color="#5400EE"></stop></linearGradient><linearGradient id="paint3_linear_1_121" x1="19.905" x2="82.095" y1="32" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E855DE"></stop><stop offset="1" stop-color="#5400EE"></stop></linearGradient><linearGradient id="paint4_linear_1_121" x1="19.905" x2="82.095" y1="32" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E855DE"></stop><stop offset="1" stop-color="#5400EE"></stop></linearGradient></defs></svg>

            </p> */}

        </div>
    );
};

export default HomeLayout;