import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AppConfig from '../../layout/AppConfig';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import Form from 'react-bootstrap/Form';

const RegisterPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                {/* <img src={`${contextPath}/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Ebalaji logo" className="mb-4 w-6rem flex-shrink-0" /> */}
                <div style={{ padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-5 px-5 sm:px-5">
                        <div className="text-center mb-5">
                            <img src={`${contextPath}/demo/images/login/avatar.png`} alt="Image" height="50" className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Welcome, Ebalaji Services</div>
                            {/* <span className="text-600 font-medium">Sign up to continue</span> */}
                        </div>

                        <div className="mb-4">
                            <div className="grid">
                                <div className="col-4">
                                    <label className="block text-900 text-xl font-medium mb-1">Mobile No.</label>
                                    <InputText type="text" placeholder="Mobile No." className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} />
                                </div>
                                <div className="col-5">
                                    <label htmlFor="email1" className="block text-900 text-xl font-medium mb-1">
                                        Services
                                    </label>
                                    <Form.Select aria-label="Default select example" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }}>
                                        <option>Select Services</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="col-3">
                                    <label className="block text-900 text-xl font-medium mb-1">Services Fess</label>
                                    <InputText type="text" placeholder="Fees" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} />
                                </div>
                            </div>
                            <div className="grid">
                                <div className="col-4">
                                    <label className="block text-900 text-xl font-medium mb-1">Vle Name</label>
                                    <InputText type="text" placeholder="Vle Name" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} />
                                </div>
                                <div className="col-4">
                                    <label className="block text-900 text-xl font-medium mb-1">Contact Person</label>
                                    <InputText type="text" placeholder="Contact person" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} />
                                </div>
                                <div className="col-4">
                                    <label className="block text-900 text-xl font-medium mb-1">Email</label>
                                    <InputText type="text" placeholder="Email" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} />
                                </div>
                            </div>
                            <div className="grid">
                                <div className="col-4">
                                    <label className="block text-900 text-xl font-medium mb-1">Pan No.</label>
                                    <InputText type="text" placeholder="Pan No." className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} />
                                </div>
                                <div className="col-4">
                                    <label className="block text-900 text-xl font-medium mb-1">Pin Code</label>
                                    <InputText type="text" placeholder="Pin Code" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} />
                                </div>
                                <div className="col-4">
                                    <label className="block text-900 text-xl font-medium mb-1">Country</label>
                                    <Form.Select aria-label="Default select example" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }}>
                                        <option>Select Country</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="col-4">
                                    <label className="block text-900 text-xl font-medium mb-1">State</label>
                                    <Form.Select aria-label="Default select example" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }}>
                                        <option>Select State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="col-4">
                                    <label className="block text-900 text-xl font-medium mb-1">City</label>
                                    <Form.Select aria-label="Default select example" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }}>
                                        <option>Select City</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <div className="flex align-items-center">
                                    <Checkbox inputid="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked)} className="mr-2"></Checkbox>
                                    <label htmlFor="rememberme1">Remember me</label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                    Forgot password?
                                </a>
                            </div>
                            <Button label="Register" className="w-full p-2 text-xl" onClick={() => router.push('/')}></Button>
                        </div>

                        <div className="flex">
                            <span className="text-600 font-medium">Already have an account ?</span>
                            <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }} onClick={() => router.push('/login')}>
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

RegisterPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig simple />
        </React.Fragment>
    );
};
export default RegisterPage;
