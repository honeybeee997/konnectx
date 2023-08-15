import React from 'react'
import Faq from 'react-faq-component';

const Faqs = () => {
    const data = {
        // title: "FAQ (How it works)",
        rows: [
            {
                title: "Who are Top Internet Services Providers in USA?",
                content: "We are one of the top internet and cable services providers in your area. We provide a variety of internet services, including high-speed internet, broadband, and fiber-optic internet. Our internet services are available for residential clients. We understand that internet connectivity is essential in this digital age. Our cable internet services are available in most areas. You can check internet availability at your address on our website. "
            },
            {
                title: "Which areas does KonnectX provides Internet services?",
                content: "Our services are available in most areas. You can check internet availability at your address on our website. All you need to do is enter your address, and our system will check if our services are available in your area."
            },
            {
                title: "Do your services include internet bundles?",
                content: "We offer internet bundles that include internet and cable TV services. Our internet bundles are designed to provide you with the best value for your money."
            },
            {
                title: "Do you offer cable services?",
                content: "We offer cable services that are designed to provide you with the best entertainment experience. Our cable services include a variety of channels that are available in HD quality."
            },
            {
                title: "Does KonnectX provides auto bill payment service?",
                content: "We offer auto pay services that allow you to pay your bill automatically. Auto pay ensures that your bill is paid on time every month."
            },
        ]
    }

    const styles = {
        titleTextColor: '#000034',
        rowTitleColor: '#1F7DFB',
        textText: 'center',
        rowContentPaddingBottom: '20px',
        
    }

    return (
        <div className='container pt-3 pb-5 mob-padding'>
            <h2 className='faq-title-custom font-weight-bold' >FAQ (How it works)</h2>
            <p style={{textAlign: 'left', marginBottom: '30px', fontWeight: '400'}}>Welcome to KonnectX, where we provide you with the best internet and cable TV services in your area. We understand that staying connected with your family, friends, and work is essential, and that's why we offer fast, reliable, and affordable internet and cable TV services. Our services are designed to meet your needs and ensure you stay connected all the time.</p>
            <Faq data={data} styles={styles} />
        </div>
    )
}

export default Faqs;
