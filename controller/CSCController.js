const getCountry = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/country`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const getStateByCountryId = async (country_id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-state-by-country/` + country_id, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const getCityByStateId = async (state_id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-city-by-state/`+ state_id, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { getCountry, getStateByCountryId, getCityByStateId };
