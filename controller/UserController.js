const UserRegistration = async (formData) => {
    try {
        const res = await fetch(`http://206.189.136.20:1700/api/register`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const UserLogin = async (formData) => {
    try {
        const res = await fetch(`http://206.189.136.20:1700/api/user-login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { UserRegistration, UserLogin };
