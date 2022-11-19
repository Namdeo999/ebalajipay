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
import { Dropdown } from 'primereact/dropdown';

//
import { UserRegistration } from '../../controller/UserController';
import { getServices } from '../../controller/ServicesController';
import { getCityByStateId, getCountry, getStateByCountryId } from '../../controller/CSCController';

const RegisterPage = () => {
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    const [service, setService] = React.useState([]);
    const [country, setCountry] = React.useState([]);
    const [states, setStates] = React.useState([]);
    const [city, setCity] = React.useState([]);
    const [serviceFees, setServiceFees] = useState('');

    const [dropdownItem, setDropdownItem] = useState(null);
    const [dropdownItem1, setDropdownItem1] = useState(null);
    const [dropdownItem2, setDropdownItem2] = useState(null);
    const [dropdownItem3, setDropdownItem3] = useState(null);

    //form state
    const [mobileNo, setMobileNo] = useState('');
    const [vleName, setVleName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [email, setEmail] = useState('');
    const [panNo, setPanNo] = useState('');
    const [pinCode, setPinCode] = useState('');

    const fetchServices = async () => {
        const res = await getServices();
        const newData = res.data.map((ele) => {
            return { name: ele.role, code: ele._id, fees: ele.fees_amount };
        });
        setService(newData);
    };

    const fetchCountry = async () => {
        const res = await getCountry();
        const newData = res.data.map((ele) => {
            return { name: ele.country, code: ele._id };
        });
        setCountry(newData);
    };

    const fetchState = async (country_id) => {
        const res = await getStateByCountryId(country_id);
        const newData = res.data.map((ele) => {
            return { name: ele.state, code: ele._id };
        });
        setStates(newData);
    };

    const fetchCity = async (state_id) => {
        const res = await getCityByStateId(state_id);
        const newData = res.data.map((ele) => {
            return { name: ele.city, code: ele._id };
        });
        setCity(newData);
    };

    React.useEffect(() => {
        fetchServices();
        fetchCountry();
    }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            mobile: mobileNo,
            role_id: dropdownItem.code,
            vle_name: vleName,
            contact_person: contactPerson,
            email: email,
            pan_no: panNo,
            country_id: dropdownItem1.code,
            state_id: dropdownItem2.code,
            city_id: dropdownItem3.code,
            pincode: pinCode
        };
        const res = await UserRegistration(formData);
        if (res.status === 200) {
            setMobileNo('');
            setDropdownItem('');
            setVleName('');
            setContactPerson('');
            setEmail('');
            setPanNo('');
            setDropdownItem1('');
            setDropdownItem2('');
            setDropdownItem3('');
            setPinCode('');
            alert('User created successfully');
            router.push('/login');
        } else {
            alert('Some error occured');
        }
    };

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

                        <form onSubmit={handleSubmit}>
                            <div className="grid p-fluid mt-3">
                                <div className="field col-12 md:col-3">
                                    <span className="p-float-label">
                                        <InputText type="text" id="mobilenumber" onChange={(e) => setMobileNo(e.target.value)} />
                                        <label htmlFor="mobilenumber">Mobile No</label>
                                    </span>
                                </div>
                                <div className="field col-12 md:col-4">
                                    <span className="p-float-label">
                                        <Dropdown
                                            id="forservices"
                                            value={dropdownItem}
                                            className="w-full md:w-0rem mb-3"
                                            onChange={(e) => {
                                                setDropdownItem(e.value), setServiceFees(e.value.fees);
                                            }}
                                            options={service}
                                            optionLabel="name"
                                        ></Dropdown>
                                        <label htmlFor="forservices">Services</label>
                                    </span>
                                </div>
                                <div className="field col-12 md:col-2">
                                    <span className="p-float-label">
                                        <InputText type="text" id="forservicefees" value={serviceFees} />
                                        <label htmlFor="forservicefees">Fees</label>
                                    </span>
                                </div>
                                <div className="field col-12 md:col-3">
                                    <span className="p-float-label">
                                        <InputText id="forvlename" type="text" onChange={(e) => setVleName(e.target.value)} />
                                        <label htmlFor="forvlename">Vle Name</label>
                                    </span>
                                </div>
                            </div>
                            <div className="grid p-fluid">
                                <div className="field col-12 md:col-3">
                                    <span className="p-float-label">
                                        <InputText id="forcontactperson" type="text" onChange={(e) => setContactPerson(e.target.value)} />
                                        <label htmlFor="forcontactperson">Contact Person</label>
                                    </span>
                                </div>
                                <div className="field col-12 md:col-4">
                                    <span className="p-float-label">
                                        <InputText id="foremail" type="text" onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="foremail">Email</label>
                                    </span>
                                </div>
                                <div className="field col-12 md:col-3">
                                    <span className="p-float-label">
                                        <InputText id="forpanno" type="text" onChange={(e) => setPanNo(e.target.value)} />
                                        <label htmlFor="forpanno">Pan No.</label>
                                    </span>
                                </div>
                                <div className="field col-12 md:col-2">
                                    <span className="p-float-label">
                                        <InputText id="forpincode" type="text" onChange={(e) => setPinCode(e.target.value)} />
                                        <label htmlFor="forpincode">Pin Code</label>
                                    </span>
                                </div>
                            </div>
                            <div className="grid p-fluid mt-1">
                                <div className="field col-12 md:col-4">
                                    <span className="p-float-label">
                                        <Dropdown
                                            id="forcountry"
                                            value={dropdownItem1}
                                            className="w-full md:w-0rem mb-3"
                                            onChange={(e) => {
                                                setDropdownItem1(e.value), fetchState(e.value.code);
                                            }}
                                            options={country}
                                            optionLabel="name"
                                        ></Dropdown>
                                        <label htmlFor="forcountry">Country</label>
                                    </span>
                                </div>
                                <div className="field col-12 md:col-4">
                                    <span className="p-float-label">
                                        <Dropdown
                                            id="forstate"
                                            value={dropdownItem2}
                                            className="w-full md:w-0rem mb-3"
                                            onChange={(e) => {
                                                setDropdownItem2(e.value), fetchCity(e.value.code);
                                            }}
                                            options={states}
                                            optionLabel="name"
                                        ></Dropdown>
                                        <label htmlFor="forstate">States</label>
                                    </span>
                                </div>
                                <div className="field col-12 md:col-4">
                                    <span className="p-float-label">
                                        <Dropdown
                                            id="forcity"
                                            value={dropdownItem3}
                                            className="w-full md:w-0rem mb-3"
                                            onChange={(e) => {
                                                setDropdownItem3(e.value);
                                            }}
                                            options={city}
                                            optionLabel="name"
                                        ></Dropdown>
                                        <label htmlFor="forcity">City</label>
                                    </span>
                                </div>
                            </div>
                            <Button label="Register" className="w-full p-2 text-xl" type="submit"></Button>
                        </form>

                        {/* <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <div className="grid">
                                    <div className="col-4">
                                        <label className="block text-900 text-xl font-medium mb-1">Mobile No.</label>
                                        <InputText type="text" placeholder="Mobile No." className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} onChange={(e) => setMobileNo(e.target.value)} />
                                    </div>
                                    <div className="col-5">
                                        <label htmlFor="email1" className="block text-900 text-xl font-medium mb-1">
                                            Services
                                        </label>
                                        <Dropdown
                                            value={dropdownItem}
                                            className="w-full md:w-0rem mb-3"
                                            onChange={(e) => {
                                                setDropdownItem(e.value), setServiceFees(e.value.fees);
                                            }}
                                            options={service}
                                            optionLabel="name"
                                            placeholder="Select services"
                                        ></Dropdown>
                                    </div>
                                    <div className="col-3">
                                        <label className="block text-900 text-xl font-medium mb-1">Services Fess</label>
                                        <InputText type="text" value={serviceFees} placeholder="Fees" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} />
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="col-4">
                                        <label className="block text-900 text-xl font-medium mb-1">Vle Name</label>
                                        <InputText type="text" placeholder="Vle Name" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} onChange={(e) => setVleName(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <label className="block text-900 text-xl font-medium mb-1">Contact Person</label>
                                        <InputText type="text" placeholder="Contact person" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} onChange={(e) => setContactPerson(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <label className="block text-900 text-xl font-medium mb-1">Email</label>
                                        <InputText type="text" placeholder="Email" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="col-4">
                                        <label className="block text-900 text-xl font-medium mb-1">Pan No.</label>
                                        <InputText type="text" placeholder="Pan No." className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} onChange={(e) => setPanNo(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <label className="block text-900 text-xl font-medium mb-1">Pin Code</label>
                                        <InputText type="text" placeholder="Pin Code" className="w-full md:w-0rem mb-3" style={{ padding: '1rem' }} onChange={(e) => setPinCode(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <label className="block text-900 text-xl font-medium mb-1">Country</label>
                                        <Dropdown
                                            value={dropdownItem1}
                                            className="w-full md:w-0rem mb-3"
                                            onChange={(e) => {
                                                setDropdownItem1(e.value), fetchState(e.value.code);
                                            }}
                                            options={country}
                                            optionLabel="name"
                                            placeholder="Select country"
                                        ></Dropdown>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="col-4">
                                        <label className="block text-900 text-xl font-medium mb-1">State</label>
                                        <Dropdown
                                            value={dropdownItem2}
                                            className="w-full md:w-0rem mb-3"
                                            onChange={(e) => {
                                                setDropdownItem2(e.value), fetchCity(e.value.code);
                                            }}
                                            options={states}
                                            optionLabel="name"
                                            placeholder="Select state"
                                        ></Dropdown>
                                    </div>
                                    <div className="col-4">
                                        <label className="block text-900 text-xl font-medium mb-1">City</label>
                                        <Dropdown
                                            value={dropdownItem3}
                                            className="w-full md:w-0rem mb-3"
                                            onChange={(e) => {
                                                setDropdownItem3(e.value);
                                            }}
                                            options={city}
                                            optionLabel="name"
                                            placeholder="Select city"
                                        ></Dropdown>
                                    </div>
                                </div>

                                <Button label="Register" className="w-full p-2 text-xl" type="submit"></Button>
                            </div>
                        </form> */}

                        <div className="flex mt-5">
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
