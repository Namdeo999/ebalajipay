import React, { useContext, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import AppConfig from '../layout/AppConfig';
import { LayoutContext } from '../layout/context/layoutcontext';
import { Card } from 'primereact/card';

const LandingPage = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const { layoutConfig } = useContext(LayoutContext);
    const menuRef = useRef();
     const router = useRouter();

     

    return (
        <React.Fragment>
        <Head>
            <link rel="icon" href={`${contextPath}/ebalaji-logo-favicon.jpg`} type="image/x-icon"></link>
        </Head>
        
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden">
                <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
                    <Link href="/">
                        <a className="flex align-items-center">
                            {/* <img src={`${contextPath}/layout/images/${layoutConfig.colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`} alt="Sakai Logo" height="50" className="mr-0 lg:mr-2" /> */}
                            <img src={`${contextPath}/assets/logos/ebalaji-logo-84-62.jpg`} alt="Image" height="50" className="mb-3" />
                            <img src={`${contextPath}/assets/logos/ebalaji.jpg`} alt="Image" width="141" height="30" className="mb-3 mt-3" />
                            {/* <span className="text-900 font-medium text-2xl line-height-3 mr-8">EBalaji</span> */}
                        </a>
                    </Link>
                    <StyleClass nodeRef={menuRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick="true">
                        <i ref={menuRef} className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"></i>
                    </StyleClass>
                    <div className="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-8 px-6 lg:px-0 z-2" style={{ top: '100%' }}>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                            <li>
                                <a href="#home" className="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Home</span>
                                </a>
                                <Ripple />
                            </li>
                            <li>
                                <a href="#aboutus" className="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>About Us</span>
                                </a>
                                <Ripple />
                            </li>
                            <li>
                                <a href="#services" className="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Services</span>
                                </a>
                                <Ripple />
                            </li>
                            <li>
                                <a href="#pricing" className="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Pricing</span>
                                </a>
                                <Ripple />
                            </li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                            <Button label="Login" className="p-button-text p-button-rounded border-none font-light line-height-2 text-blue-500" onClick={() => router.push('/login')}></Button>
                            <Button label="Register" className="p-button-rounded border-none ml-5 font-light line-height-2 bg-blue-500 text-white" onClick={() => router.push('/register')}></Button>
                        </div>
                    </div>
                </div>

                <div
                    id="hero"
                    className="flex flex-column pb-8 pt-4 px-4 lg:px-8 overflow-hidden"
                    style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)', clipPath: 'ellipse(150% 87% at 93% 13%)' }}
                >
                    <div className="mx-4 md:mx-8 mt-0 md:mt-4">
                        <br/>
                        <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            <span className="font-light block mb-3">Welcome to...</span>
                            {/* EBalaji Online Pay Services */}
                            EBalaji Pay Online Services
                        </h1>
                        <br/>
                        <b>
                            <p className="font-normal line-height-3 md:mt-3 ">Best B2B Portal Provider Company in India, We at Ebalaji Services provide AEPS, BBPS, DMT, Recharge, Bill Payments, NSDL / UTI Pan Card, Income Tax Return, GST Registration, GST Filling, Shop Act (MH Only), Digital Signature, Food Licence, MSME Certificate…and Much More.</p>
                            {/* <p className="font-normal line-height-3 md:mt-3 "> PAN card service is most demanding service in the industry, so we have developed software for PAN card service, using PAN card software or application, admin can create PAN card agents in all over india, and enable UTI/NSDL PAN card service for all registered PAN card agents to your business PAN card panel. Vaishnavi Digipayments is one of the best PAN cards service and API solution provider in India, offering PAN card service extremely economical. And all PAN card application can be processed using eKYC..</p> */}
                        </b>
                        {/* <Button type="button" label="Get Started" className="p-button-rounded text-xl border-none mt-3 bg-blue-500 font-normal line-height-3 px-3 text-white"></Button> */}
                    </div>
                    <div className="flex justify-content-center md:justify-content-end">
                        <img src={`${contextPath}/assets/images/bharat-bill-payment-system.png`}  alt="Hero Image" className="w-9 md:w-auto" />
                    </div>
                </div>

                <div className="grid grid-nogutter surface-0 text-800">
                    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                        <section>
                            {/* <span className="block text-6xl font-bold mb-1">Create the screens your</span> */}
                            <div className="text-6xl text-primary font-bold mb-3">EBalaji Pay Online PAN Card Services</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">PAN card service is most demanding service in the industry, so we have developed software for PAN card service, using PAN card software or application, admin can create PAN card agents in all over india, and enable UTI/NSDL PAN card service for all registered PAN card agents to your business PAN card panel. <br></br><br></br>Ebalaji pay is one of the best PAN cards service and API solution provider in India, offering PAN card service extremely economical. And all PAN card application can be processed using eKYC..</p>
                        </section>
                    </div>
                    <div className="col-12 md:col-6 overflow-hidden">
                        <img src={`${contextPath}/assets/images/Online-Pan-Card-Application.webp`} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                    </div>
                </div>


                <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                    <div className="mb-8 font-bold text-2xl">
                        {/* <span className="text-900">Our Best Features, </span> */}
                        <h2 className="text-6xl text-primary font-bold mb-3">Our Best Features</h2>
                        {/* <span className="text-blue-600">Many Solutions</span> */}
                    </div>
                    {/* <div className="text-700 text-sm mb-6">OUR FEATURES</div> */}
                    <div className="grid">

                    

                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 mb-3 font-medium">Easy to Use</div>
                            {/* <span className="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span> */}
                        </div>

                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                                <i className="pi pi-globe text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 mb-3 font-medium">Fast & Global Support</div>
                            {/* <span className="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span> */}
                        </div>

                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                                <i className="pi pi-users text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 mb-3 font-medium">100% Client Satisfied</div>
                            {/* <span className="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span> */}
                        </div>

                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                                <i className="pi pi-lock text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 mb-3 font-medium">End-to-End Encryption</div>
                            {/* <span className="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span> */}
                        </div>
                    
                        
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                                <i className="pi pi-money-bill text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 mb-3 font-medium">High Margin</div>
                            {/* <span className="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span> */}
                        </div>
                        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                                <i className="pi pi-shield text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 mb-3 font-medium">Trusted Securitty</div>
                            {/* <span className="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span> */}
                        </div>
                    </div>
                </div>

                <div id="aboutus" className=' mt-0 mx-0 '>
                    {/* <div className="col-12 mt-4 mb-4 p-2 md:p-8" style={{ borderRadius: '20px', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)' }}> */}
                    <div className="col-12 mt-4 mb-4 p-2 md:p-8" style={{  background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)' }}>
                        <div className="flex flex-column justify-content-center align-items-center text-center mb-4 px-4 py-4 md:py-0">
                            {/* <h3 className="text-gray-900 mb-2">About EbalaJi</h3> */}
                            <div className="text-900 font-bold text-6xl mb-4 mt-4 text-center">About EbalaJi</div>
                            {/* <span className="text-gray-600 text-2xl">Peak Interactive</span> */}
                            <p className="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4" style={{ maxWidth: '1000px' }}>
                                “In this digital age, where everything in business has gone digital, we at Ebalaji Pay provide an easy, efficient, and long term solution to all your multi utility payment, and other document needs. We abide by the digital India norms in the best possible way. Our main aim is to channelize the payments to the unified digital platforms where you get all the security and convenience. Our services range widely.”
                            </p>
                            {/* <img src={`${contextPath}/demo/images/landing/peak-logo.svg`} className="mt-4" alt="Company logo" /> */}
                            </div>
                        </div>
                </div>
    

                <div id="services" className="py-4 px-4 lg:px-8 mt- mx-0 lg:mx-8 mb-6">
                    <div className="grid justify-content-center">
                        <div className="col-12 text-center mt-7 mb-4">
                        <div className="text-900 font-bold text-6xl mb-4 text-center">We Provide Truly Business Solutions</div>
                    <div className="text-700 text-xl mb-6 text-center line-height-3">Our Best Services</div>
                            {/* <h2 className="text-900 font-normal mb-2">We Provide Truly Business Solutions</h2>
                            <span className="text-600 text-2xl">Our Best Services</span> */}
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    {/* <div className="flex align-items-center justify-content-center bg-yellow-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                                    </div> */}
                                    <h5 className="mb-3 text-900 text-center">AEPS / BBPS / UPI</h5>
                                    <span className="text-600">We are started to providing aadhaar enabled payment system services and providing bharat bill payment or Unique UPI QR Code Accept Payment from your Customer.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    {/* <div className="flex align-items-center justify-content-center bg-cyan-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                                    </div> */}
                                    <h5 className="mb-3 text-900 text-center">Bill & Recharge</h5>
                                    <span className="text-600">At Ebalaji you can pay your electricity, landline, insurance, Loan EMI bills with convenience and on time. you can recharge your mobile online.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    {/* <div className="flex align-items-center justify-content-center bg-orange-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-star text-2xl text-orange-700"></i>
                                    </div> */}
                                    <h5 className="mb-3 text-900 text-center">Banking Services</h5>
                                    <span className="text-600">Money transfer has become very important to many people around the world.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    {/* <div className="flex align-items-center justify-content-center bg-bluegray-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
                                    </div> */}
                                    <h5 className="mb-3 text-900 text-center">MSME Certificate</h5>
                                    <span className="text-600">At Ebalaji you can start MSME Certificate center at your shop/office with high margin.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    {/* <div className="flex align-items-center justify-content-center bg-orange-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-star text-2xl text-orange-700"></i>
                                    </div> */}
                                    <h5 className="mb-3 text-900 text-center">Travel & E-Governance Services</h5>
                                    <span className="text-600"> You can start Income Tax Filing and Project File Filing center at your shop/office with high margin.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    {/* <div className="flex align-items-center justify-content-center bg-orange-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-star text-2xl text-orange-700"></i>
                                    </div> */}
                                    <h5 className="mb-3 text-900 text-center">Income Tax & GST Registration</h5>
                                    <span className="text-600">You can start  Income Tax Filing, GST Registration and GST Filing Digital Signature center at your shop/office with high margin.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="pricing" className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
                    <div className="text-700 text-xl mb-6 text-center line-height-3">Choose the plan according to your need.</div>

                    <div className="grid">
                        <div className="col-12 lg:col-4">
                            <div className="p-3 h-full">
                                <div className="shadow-2 p-3 h-full flex flex-column surface-card" style={{ borderRadius: '6px' }}>
                                    <div className="text-900 font-bold text-xl mb-2">Retailer</div>
                                    {/* <div className="text-600">Plan description</div> */}
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">100</span>
                                        <span className="ml-2 font-medium text-600">/-</span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Single Wallet Multi Services</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Attractive Commission</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Real Time Commission</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>One time investment for a life time earning</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>All services training</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>24*7 Support Whatsapp & Call</span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                                    <Button label="Choose Plan" className="p-2 w-full mt-auto"></Button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4">
                            <div className="p-3 h-full">
                                <div className="shadow-2 p-3 h-full flex flex-column surface-card" style={{ borderRadius: '6px' }}>
                                    <div className="text-900 font-bold text-xl mb-2">Distributor</div>
                                    {/* <div className="text-600">Plan description</div> */}
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">501</span>
                                        <span className="ml-2 font-medium text-600">/-</span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Unlimited Retailer creation</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> Every Retailer Gets Attractive Commission </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Commissions received on every transaction Of your retailer</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>One time investment life time earning</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>All services training</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>24*7 Support Whatsapp & Call</span>
                                        </li>
                                        
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                                    <Button label="Choose Plan" className="p-2 w-full"></Button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4">
                            <div className="p-3 h-full">
                                <div className="shadow-2 p-3 flex flex-column surface-card" style={{ borderRadius: '6px' }}>
                                    <div className="text-900 font-bold text-xl mb-2">Super Distributor</div>
                                    {/* <div className="text-600">Plan description</div> */}
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">999</span>
                                        <span className="ml-2 font-medium text-600">/-</span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Unlimited Retailer, Distributor Creation</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Every Distributor Gets Attractive Commission on Every Referral</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Commissions received on every transaction Of your Distributor & Retailer</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Attractive Commission</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Real Time Commission</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> One time investment for a life time earning</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> All services training</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> 24*7 Support Whatsapp & Call</span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                                    <Button label="Choose Plan" className="p-2 w-full"></Button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 lg:col-6">
                            <div className="p-3 h-full">
                                <div className="shadow-2 p-3 flex flex-column surface-card" style={{ borderRadius: '6px' }}>
                                    <div className="text-900 font-bold text-xl mb-2">White Level</div>
                                    {/* <div className="text-600">Plan description</div> */}
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">999</span>
                                        <span className="ml-2 font-medium text-600">/-</span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Unlimited Distributor and Super Distributor Creation</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Every Distributor Gets Attractive Commission on Every Referral</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Commissions received on every transaction Of your Distributor & Retailer</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Attractive Commission</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Real Time Commission</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> One time investment for a life time earning</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> All services training</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> 24*7 Support Whatsapp & Call</span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                                    <Button label="Choose Plan" className="p-2 w-full "></Button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 lg:col-6">
                            <div className="p-3 h-full">
                                <div className="shadow-2 p-3 flex flex-column surface-card" style={{ borderRadius: '6px' }}>
                                    <div className="text-900 font-bold text-xl mb-2">Admin</div>
                                    {/* <div className="text-600">Plan description</div> */}
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">9999</span>
                                        <span className="ml-2 font-medium text-600">/-</span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Unlimited Super Distributor, White Level Creation</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Every Distributor Gets Attractive Commission on Every Referral</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Commissions received on every transaction Of your Distributor & Retailer</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Attractive Commission</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Real Time Commission</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> One time investment for a life time earning</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> All services training</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span> 24*7 Support Whatsapp & Call</span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                                    <Button label="Choose Plan" className="p-2 w-full "></Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    

                {/* <div  className="py-4 px-4 lg:px-8 my-2 md:my-4">
                    <div className="text-center">
                        <h2 className="text-900 font-normal mb-2">Matchless Pricing</h2>
                        <span className="text-600 text-2xl">Amet consectetur adipiscing elit...</span>
                    </div>

                    <div className="grid justify-content-between mt-8 md:mt-0">
                        <div className="col-12 lg:col-4 p-0 md:p-3">
                            <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                <h3 className="text-900 text-center my-5">Free</h3>
                                <img src={`${contextPath}/demo/images/landing/free.svg`} className="w-10 h-10 mx-auto" alt="free" />
                                <div className="my-5 text-center">
                                    <span className="text-5xl font-bold mr-2 text-900">$0</span>
                                    <span className="text-600">per month</span>
                                    <Button label="Get Started" className="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                                </div>
                                <Divider className="w-full bg-surface-200"></Divider>
                                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Responsive Layout</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">50 Support Ticket</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Free Shipping</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                            <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                <h3 className="text-900 text-center my-5">Startup</h3>
                                <img src={`${contextPath}/demo/images/landing/startup.svg`} className="w-10 h-10 mx-auto" alt="startup" />
                                <div className="my-5 text-center">
                                    <span className="text-5xl font-bold mr-2 text-900">$1</span>
                                    <span className="text-600">per month</span>
                                    <Button label="Try Free" className="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                                </div>
                                <Divider className="w-full bg-surface-200"></Divider>
                                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Responsive Layout</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">50 Support Ticket</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Free Shipping</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                            <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                <h3 className="text-900 text-center my-5">Enterprise</h3>
                                <img src={`${contextPath}/demo/images/landing/enterprise.svg`} className="w-10 h-10 mx-auto" alt="enterprise" />
                                <div className="my-5 text-center">
                                    <span className="text-5xl font-bold mr-2 text-900">$999</span>
                                    <span className="text-600">per month</span>
                                    <Button label="Get a Quote" className="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                                </div>
                                <Divider className="w-full bg-surface-200"></Divider>
                                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Responsive Layout</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">50 Support Ticket</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Free Shipping</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
                    <div className="grid justify-content-between">
                        <div className="col-12 md:col-2" style={{ marginTop: '-1.5rem' }}>
                            <Link href="/">
                                <a className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                                    {/* <img src={`${contextPath}/layout/images/${layoutConfig.colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`} alt="footer sections" width="50" height="50" className="mr-2" /> */}
                                    <img src={`${contextPath}/assets/logos/ebalaji-sewa-pvt-ltd.jpg`} alt="footer sections" width="200" height="100" className="mr-2" />
                                    {/* <span className="font-medium text-3xl text-900">EBalaji</span> */}
                                </a>
                            </Link>
                        </div>

                        <div className="col-12 md:col-10 lg:col-7">
                            <div className="grid text-center md:text-left">

                                <div className="col-12 md:col-6">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Services</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Bill Payments</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Banking Services</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Pan, Aadhar, GST</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Licence</a>
                                </div>

                                <div className="col-12 md:col-6 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Important Links</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Privacy Policy</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Disclaimer</a>
                                    <a className="line-height-3 text-xl block cursor-pointer text-700">Terms And Conditions</a>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </React.Fragment>
    );
};

LandingPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            
            {page}
            <AppConfig simple />
        </React.Fragment>
    );
};

export default LandingPage;

// import getConfig from 'next/config';
// import { Button } from 'primereact/button';
// import { Chart } from 'primereact/chart';
// import { Column } from 'primereact/column';
// import { DataTable } from 'primereact/datatable';
// import { Menu } from 'primereact/menu';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { ProductService } from '../demo/service/ProductService';
// import { LayoutContext } from '../layout/context/layoutcontext';
// import Link from 'next/link';
// const lineData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'First Dataset',
//             data: [65, 59, 80, 81, 56, 55, 40],
//             fill: false,
//             backgroundColor: '#2f4860',
//             borderColor: '#2f4860',
//             tension: 0.4
//         },
//         {
//             label: 'Second Dataset',
//             data: [28, 48, 40, 19, 86, 27, 90],
//             fill: false,
//             backgroundColor: '#00bb7e',
//             borderColor: '#00bb7e',
//             tension: 0.4
//         }
//     ]
// };

// const Dashboard = () => {
//     const [products, setProducts] = useState(null);
//     const menu1 = useRef(null);
//     const menu2 = useRef(null);
//     const [lineOptions, setLineOptions] = useState(null);
//     const { layoutConfig } = useContext(LayoutContext);
//     const contextPath = getConfig().publicRuntimeConfig.contextPath;

//     const applyLightTheme = () => {
//         const lineOptions = {
//             plugins: {
//                 legend: {
//                     labels: {
//                         color: '#495057'
//                     }
//                 }
//             },
//             scales: {
//                 x: {
//                     ticks: {
//                         color: '#495057'
//                     },
//                     grid: {
//                         color: '#ebedef'
//                     }
//                 },
//                 y: {
//                     ticks: {
//                         color: '#495057'
//                     },
//                     grid: {
//                         color: '#ebedef'
//                     }
//                 }
//             }
//         };

//         setLineOptions(lineOptions);
//     };

//     const applyDarkTheme = () => {
//         const lineOptions = {
//             plugins: {
//                 legend: {
//                     labels: {
//                         color: '#ebedef'
//                     }
//                 }
//             },
//             scales: {
//                 x: {
//                     ticks: {
//                         color: '#ebedef'
//                     },
//                     grid: {
//                         color: 'rgba(160, 167, 181, .3)'
//                     }
//                 },
//                 y: {
//                     ticks: {
//                         color: '#ebedef'
//                     },
//                     grid: {
//                         color: 'rgba(160, 167, 181, .3)'
//                     }
//                 }
//             }
//         };

//         setLineOptions(lineOptions);
//     };

//     useEffect(() => {
//         const productService = new ProductService();
//         productService.getProductsSmall().then((data) => setProducts(data));
//     }, []);

//     useEffect(() => {
//         if (layoutConfig.colorScheme === 'light') {
//             applyLightTheme();
//         } else {
//             applyDarkTheme();
//         }
//     }, [layoutConfig.colorScheme]);

//     const formatCurrency = (value) => {
//         return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//     };

//     return (
//         <div className="grid">
//             <div className="col-12 lg:col-6 xl:col-3">
//                 <div className="card mb-0">
//                     <div className="flex justify-content-between mb-3">
//                         <div>
//                             <span className="block text-500 font-medium mb-3">Orders {process.env.NEXT_PUBLIC_API_URL}</span>
//                             <div className="text-900 font-medium text-xl">152</div>
//                         </div>
//                         <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
//                             <i className="pi pi-shopping-cart text-blue-500 text-xl" />
//                         </div>
//                     </div>
//                     <span className="text-green-500 font-medium">24 new </span>
//                     <span className="text-500">since last visit</span>
//                 </div>
//             </div>
//             <div className="col-12 lg:col-6 xl:col-3">
//                 <div className="card mb-0">
//                     <div className="flex justify-content-between mb-3">
//                         <div>
//                             <span className="block text-500 font-medium mb-3">Revenue</span>
//                             <div className="text-900 font-medium text-xl">$2.100</div>
//                         </div>
//                         <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
//                             <i className="pi pi-map-marker text-orange-500 text-xl" />
//                         </div>
//                     </div>
//                     <span className="text-green-500 font-medium">%52+ </span>
//                     <span className="text-500">since last week</span>
//                 </div>
//             </div>
//             <div className="col-12 lg:col-6 xl:col-3">
//                 <div className="card mb-0">
//                     <div className="flex justify-content-between mb-3">
//                         <div>
//                             <span className="block text-500 font-medium mb-3">Customers</span>
//                             <div className="text-900 font-medium text-xl">28441</div>
//                         </div>
//                         <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
//                             <i className="pi pi-inbox text-cyan-500 text-xl" />
//                         </div>
//                     </div>
//                     <span className="text-green-500 font-medium">520 </span>
//                     <span className="text-500">newly registered</span>
//                 </div>
//             </div>
//             <div className="col-12 lg:col-6 xl:col-3">
//                 <div className="card mb-0">
//                     <div className="flex justify-content-between mb-3">
//                         <div>
//                             <span className="block text-500 font-medium mb-3">Comments</span>
//                             <div className="text-900 font-medium text-xl">152 Unread</div>
//                         </div>
//                         <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
//                             <i className="pi pi-comment text-purple-500 text-xl" />
//                         </div>
//                     </div>
//                     <span className="text-green-500 font-medium">85 </span>
//                     <span className="text-500">responded</span>
//                 </div>
//             </div>

//             <div className="col-12 xl:col-6">
//                 <div className="card">
//                     <h5>Recent Sales</h5>
//                     <DataTable value={products} rows={5} paginator responsiveLayout="scroll">
//                         <Column header="Image" body={(data) => <img className="shadow-2" src={`${contextPath}/demo/images/product/${data.image}`} alt={data.image} width="50" />} />
//                         <Column field="name" header="Name" sortable style={{ width: '35%' }} />
//                         <Column field="price" header="Price" sortable style={{ width: '35%' }} body={(data) => formatCurrency(data.price)} />
//                         <Column
//                             header="View"
//                             style={{ width: '15%' }}
//                             body={() => (
//                                 <>
//                                     <Button icon="pi pi-search" type="button" className="p-button-text" />
//                                 </>
//                             )}
//                         />
//                     </DataTable>
//                 </div>
//                 <div className="card">
//                     <div className="flex justify-content-between align-items-center mb-5">
//                         <h5>Best Selling Products</h5>
//                         <div>
//                             <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu1.current.toggle(event)} />
//                             <Menu
//                                 ref={menu1}
//                                 popup
//                                 model={[
//                                     { label: 'Add New', icon: 'pi pi-fw pi-plus' },
//                                     { label: 'Remove', icon: 'pi pi-fw pi-minus' }
//                                 ]}
//                             />
//                         </div>
//                     </div>
//                     <ul className="list-none p-0 m-0">
//                         <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
//                             <div>
//                                 <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
//                                 <div className="mt-1 text-600">Clothing</div>
//                             </div>
//                             <div className="mt-2 md:mt-0 flex align-items-center">
//                                 <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
//                                     <div className="bg-orange-500 h-full" style={{ width: '50%' }} />
//                                 </div>
//                                 <span className="text-orange-500 ml-3 font-medium">%50</span>
//                             </div>
//                         </li>
//                         <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
//                             <div>
//                                 <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
//                                 <div className="mt-1 text-600">Accessories</div>
//                             </div>
//                             <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
//                                 <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
//                                     <div className="bg-cyan-500 h-full" style={{ width: '16%' }} />
//                                 </div>
//                                 <span className="text-cyan-500 ml-3 font-medium">%16</span>
//                             </div>
//                         </li>
//                         <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
//                             <div>
//                                 <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
//                                 <div className="mt-1 text-600">Accessories</div>
//                             </div>
//                             <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
//                                 <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
//                                     <div className="bg-pink-500 h-full" style={{ width: '67%' }} />
//                                 </div>
//                                 <span className="text-pink-500 ml-3 font-medium">%67</span>
//                             </div>
//                         </li>
//                         <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
//                             <div>
//                                 <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
//                                 <div className="mt-1 text-600">Office</div>
//                             </div>
//                             <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
//                                 <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
//                                     <div className="bg-green-500 h-full" style={{ width: '35%' }} />
//                                 </div>
//                                 <span className="text-green-500 ml-3 font-medium">%35</span>
//                             </div>
//                         </li>
//                         <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
//                             <div>
//                                 <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
//                                 <div className="mt-1 text-600">Accessories</div>
//                             </div>
//                             <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
//                                 <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
//                                     <div className="bg-purple-500 h-full" style={{ width: '75%' }} />
//                                 </div>
//                                 <span className="text-purple-500 ml-3 font-medium">%75</span>
//                             </div>
//                         </li>
//                         <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
//                             <div>
//                                 <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
//                                 <div className="mt-1 text-600">Clothing</div>
//                             </div>
//                             <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
//                                 <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
//                                     <div className="bg-teal-500 h-full" style={{ width: '40%' }} />
//                                 </div>
//                                 <span className="text-teal-500 ml-3 font-medium">%40</span>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <div className="col-12 xl:col-6">
//                 <div className="card">
//                     <h5>Sales Overview</h5>
//                     <Chart type="line" data={lineData} options={lineOptions} />
//                 </div>

//                 <div className="card">
//                     <div className="flex align-items-center justify-content-between mb-4">
//                         <h5>Notifications</h5>
//                         <div>
//                             <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu2.current.toggle(event)} />
//                             <Menu
//                                 ref={menu2}
//                                 popup
//                                 model={[
//                                     { label: 'Add New', icon: 'pi pi-fw pi-plus' },
//                                     { label: 'Remove', icon: 'pi pi-fw pi-minus' }
//                                 ]}
//                             />
//                         </div>
//                     </div>

//                     <span className="block text-600 font-medium mb-3">TODAY</span>
//                     <ul className="p-0 mx-0 mt-0 mb-4 list-none">
//                         <li className="flex align-items-center py-2 border-bottom-1 surface-border">
//                             <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
//                                 <i className="pi pi-dollar text-xl text-blue-500" />
//                             </div>
//                             <span className="text-900 line-height-3">
//                                 Richard Jones
//                                 <span className="text-700">
//                                     {' '}
//                                     has purchased a blue t-shirt for <span className="text-blue-500">79$</span>
//                                 </span>
//                             </span>
//                         </li>
//                         <li className="flex align-items-center py-2">
//                             <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
//                                 <i className="pi pi-download text-xl text-orange-500" />
//                             </div>
//                             <span className="text-700 line-height-3">
//                                 Your request for withdrawal of <span className="text-blue-500 font-medium">2500$</span> has been initiated.
//                             </span>
//                         </li>
//                     </ul>

//                     <span className="block text-600 font-medium mb-3">YESTERDAY</span>
//                     <ul className="p-0 m-0 list-none">
//                         <li className="flex align-items-center py-2 border-bottom-1 surface-border">
//                             <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
//                                 <i className="pi pi-dollar text-xl text-blue-500" />
//                             </div>
//                             <span className="text-900 line-height-3">
//                                 Keyser Wick
//                                 <span className="text-700">
//                                     {' '}
//                                     has purchased a black jacket for <span className="text-blue-500">59$</span>
//                                 </span>
//                             </span>
//                         </li>
//                         <li className="flex align-items-center py-2 border-bottom-1 surface-border">
//                             <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
//                                 <i className="pi pi-question text-xl text-pink-500" />
//                             </div>
//                             <span className="text-900 line-height-3">
//                                 Jane Davis
//                                 <span className="text-700"> has posted a new questions about your product.</span>
//                             </span>
//                         </li>
//                     </ul>
//                 </div>
//                 <div
//                     className="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
//                     style={{ borderRadius: '1rem', background: 'linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)' }}
//                 >
//                     <div>
//                         <div className="text-blue-100 font-medium text-xl mt-2 mb-3">TAKE THE NEXT STEP</div>
//                         <div className="text-white font-medium text-5xl">Try PrimeBlocks</div>
//                     </div>
//                     <div className="mt-4 mr-auto md:mt-0 md:mr-0">
//                         <Link href="https://www.primefaces.org/primeblocks-react">
//                             <a className="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised">
//                                 Get Started
//                             </a>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
