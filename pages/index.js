import React, { useContext, useRef } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import AppConfig from '../layout/AppConfig';
import { LayoutContext } from '../layout/context/layoutcontext';

const LandingPage = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const { layoutConfig } = useContext(LayoutContext);
    const menuRef = useRef();

    return (
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden">
                <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
                    <Link href="/">
                        <a className="flex align-items-center">
                            <img src={`${contextPath}/layout/images/${layoutConfig.colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`} alt="Sakai Logo" height="50" className="mr-0 lg:mr-2" />
                            <span className="text-900 font-medium text-2xl line-height-3 mr-8">SAKAI</span>
                        </a>
                    </Link>
                    <StyleClass nodeRef={menuRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick="true">
                        <i ref={menuRef} className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"></i>
                    </StyleClass>
                    <div className="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2" style={{ top: '100%' }}>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                            <li>
                                    <a href="#home" className="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                        <span>Home</span>
                                    </a>
                                <Ripple />
                            </li>
                            <li>
                                    <a href='#features' className="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                        <span>Features</span>
                                    </a>
                                <Ripple />
                            </li>
                            <li>
                                    <a href="#highlights" className="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                        <span>Highlights</span>
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
                            <Button label="Login" className="p-button-text p-button-rounded border-none font-light line-height-2 text-blue-500"></Button>
                            <Button label="Register" className="p-button-rounded border-none ml-5 font-light line-height-2 bg-blue-500 text-white"></Button>
                        </div>
                    </div>
                </div>

                <div
                    id="hero"
                    className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                    style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)', clipPath: 'ellipse(150% 87% at 93% 13%)' }}>
                    <div className="mx-4 md:mx-8 mt-0 md:mt-4">
                        <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            <span className="font-light block">Eu sem integer</span>eget magna fermentum
                        </h1>
                        <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat... </p>
                        <Button type="button" label="Get Started" className="p-button-rounded text-xl border-none mt-3 bg-blue-500 font-normal line-height-3 px-3 text-white"></Button>
                    </div>
                    <div className="flex justify-content-center md:justify-content-end">
                        <img src={`${contextPath}/demo/images/landing/screen-1.png`} alt="Hero Image" className="w-9 md:w-auto" />
                    </div>
                </div>

                <div id="features" className="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                    <div className="grid justify-content-center">
                        <div className="col-12 text-center mt-8 mb-4">
                            <h2 className="text-900 font-normal mb-2">Marvelous Features</h2>
                            <span className="text-600 text-2xl">Placerat in egestas erat...</span>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))'
                                }}>
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div className="flex align-items-center justify-content-center bg-yellow-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Easy to Use</h5>
                                    <span className="text-600">Posuere morbi leo urna molestie.</span>
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
                                }}>
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div className="flex align-items-center justify-content-center bg-cyan-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Fresh Design</h5>
                                    <span className="text-600">Semper risus in hendrerit.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))'
                                }}>
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div className="flex align-items-center justify-content-center bg-indigo-200" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-map text-2xl text-indigo-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Well Documented</h5>
                                    <span className="text-600">Non arcu risus quis varius quam quisque.</span>
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
                                }}>
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div className="flex align-items-center justify-content-center bg-bluegray-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Responsive Layout</h5>
                                    <span className="text-600">Nulla malesuada pellentesque elit.</span>
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
                                }}>
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div className="flex align-items-center justify-content-center bg-orange-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-star text-2xl text-orange-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Clean Code</h5>
                                    <span className="text-600">Condimentum lacinia quis vel eros.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))'
                                }}>
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div className="flex align-items-center justify-content-center bg-pink-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-moon text-2xl text-pink-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Dark Mode</h5>
                                    <span className="text-600">Convallis tellus id interdum velit laoreet.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))'
                                }}>
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div className="flex align-items-center justify-content-center bg-teal-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-shopping-cart text-2xl text-teal-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Ready to Use</h5>
                                    <span className="text-600">Mauris sit amet massa vitae.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))'
                                }}>
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div className="flex align-items-center justify-content-center bg-blue-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-globe text-2xl text-blue-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Modern Practices</h5>
                                    <span className="text-600">Elementum nibh tellus molestie nunc non.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '160px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))'
                                }}>
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div className="flex align-items-center justify-content-center bg-purple-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                                        <i className="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Privacy</h5>
                                    <span className="text-600">Neque egestas congue quisque.</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-12 mt-8 mb-8 p-2 md:p-8"
                            style={{ borderRadius: '20px', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)' }}>
                            <div className="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0">
                                <h3 className="text-gray-900 mb-2">Joséphine Miller</h3>
                                <span className="text-gray-600 text-2xl">Peak Interactive</span>
                                <p className="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4" style={{ maxWidth: '800px' }}>
                                    “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.”
                                </p>
                                <img src={`${contextPath}/demo/images/landing/peak-logo.svg`} className="mt-4" alt="Company logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="highlights" className="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                    <div className="text-center">
                        <h2 className="text-900 font-normal mb-2">Powerful Everywhere</h2>
                        <span className="text-600 text-2xl">Amet consectetur adipiscing elit...</span>
                    </div>

                    <div className="grid mt-8 pb-2 md:pb-8">
                        <div className="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style={{ borderRadius: '8px' }}>
                            <img src={`${contextPath}/demo/images/landing/mockup.svg`} className="w-11" alt="mockup mobile" />
                        </div>

                        <div className="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                            <div className="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end" style={{ width: '4.2rem', height: '4.2rem', borderRadius: '10px' }}>
                                <i className="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">Congue Quisque Egestas</h2>
                            <span className="text-700 text-2xl line-height-3 ml-0 md:ml-2" style={{ maxWidth: '650px' }}>
                                Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.
                            </span>
                        </div>
                    </div>

                    <div className="grid my-8 pt-2 md:pt-8">
                        <div className="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                            <div className="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start" style={{ width: '4.2rem', height: '4.2rem', borderRadius: '10px' }}>
                                <i className="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">Celerisque Eu Ultrices</h2>
                            <span className="text-700 text-2xl line-height-3 mr-0 md:mr-2" style={{ maxWidth: '650px' }}>
                                Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.
                            </span>
                        </div>

                        <div className="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0" style={{ borderRadius: '8px' }}>
                            <img src={`${contextPath}/demo/images/landing/mockup-desktop.svg`} className="w-11" alt="mockup" />
                        </div>
                    </div>
                </div>

                <div id="pricing" className="py-4 px-4 lg:px-8 my-2 md:my-4">
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
                </div>

                <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
                    <div className="grid justify-content-between">
                        <div className="col-12 md:col-2" style={{ marginTop: '-1.5rem' }}>
                            <Link href="/">
                                <a className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                                    <img src={`${contextPath}/layout/images/${layoutConfig.colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`} alt="footer sections" width="50" height="50" className="mr-2" />
                                    <span className="font-medium text-3xl text-900">SAKAI</span>
                                </a>
                            </Link>
                        </div>

                        <div className="col-12 md:col-10 lg:col-7">
                            <div className="grid text-center md:text-left">
                                <div className="col-12 md:col-3">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Company</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">About Us</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">News</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Investor Relations</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Careers</a>
                                    <a className="line-height-3 text-xl block cursor-pointer text-700">Media Kit</a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Resources</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Get Started</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Learn</a>
                                    <a className="line-height-3 text-xl block cursor-pointer text-700">Case Studies</a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Community</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Discord</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                                        Events
                                        <img src={`${contextPath}/demo/images/landing/new-badge.svg`} className="ml-2" />
                                    </a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">FAQ</a>
                                    <a className="line-height-3 text-xl block cursor-pointer text-700">Blog</a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Legal</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Brand Policy</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Privacy Policy</a>
                                    <a className="line-height-3 text-xl block cursor-pointer text-700">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
