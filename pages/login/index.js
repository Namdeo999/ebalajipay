import getConfig from 'next/config';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useContext, useState } from 'react';
import AppConfig from '../../layout/AppConfig';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { UserLogin } from '../../controller/UserController';

const LoginPage = () => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    let handleSubmit = async (e) => {


        e.preventDefault();
        const formData = {
            mobile: mobile,
            password: password
        };
        const res = await UserLogin(formData);
        if (res.status === 200) {
            alert('Login successfully');
            router.push('/dashboard');
        } else {
            alert('Some error occured');
        }
    };

    return (

        <React.Fragment>

        <Head>
            <link rel="icon" href={`${contextPath}/ebalaji-logo-favicon.jpg`} type="image/x-icon"></link>
        </Head>

        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                {/* <img src={`${contextPath}/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Ebalaji logo" className="mb-5 w-6rem flex-shrink-0"/> */}
                {/* <img src={`${contextPath}/assets/logos/ebalaji-logo-84-62.jpg`} alt="Ebalaji logo" className="mb-5 w-6rem flex-shrink-0"/> */}
                <div style={{ padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-6 px-8 sm:px-8">
                        <div className="text-center mb-5">
                            <img src={`${contextPath}/assets/logos/ebalaji-logo-84-62.jpg`} alt="Image" height="50" className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Welcome, Ebalaji Services</div>
                            <span className="text-600 font-medium">Sign in to continue</span>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="grid p-fluid mb-3">
                                <div className="field col-12">
                                    <span className="p-float-label mb-5">
                                        <InputText type="text" id="formobileno" onChange={(e) => setMobile(e.target.value)} />
                                        <label htmlFor="formobileno">Mobile No</label>
                                    </span>
                                    <span className="p-float-label mb-5">
                                        <Password id="forpassword" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask></Password>
                                        <label htmlFor="forpassword">Password</label>
                                    </span>
                                    <div className="flex align-items-center justify-content-between mb-5  gap-5">
                                        <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                            Forgot password?
                                        </a>
                                    </div>
                                    <Button label="Login" type="submit" className="w-full p-2 text-xl"></Button>
                                </div>
                            </div>
                        </form>

                        {/* <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="formobileno" className="block text-900 text-xl font-medium mb-1">
                                    Mobile No.
                                </label>
                                <InputText inputid="formobileno" type="text" placeholder="Enter Mobile No" onChange={(e) => setMobile(e.target.value)} className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                                <label htmlFor="forpassword" className="block text-900 font-medium text-xl mb-1">
                                    Password
                                </label>
                                <Password inputid="forpassword" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                   
                                    <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                        Forgot password?
                                    </a>
                                </div>
                                <Button label="Login" type="submit" className="w-full p-2 text-xl"></Button>
                            </div>
                        </form> */}
                        <div className="flex">
                            <span className="text-600 font-medium">Don't have an account ?</span>
                            <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }} onClick={() => router.push('/register')}>
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};

LoginPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig simple />
        </React.Fragment>
    );
};
export default LoginPage;
