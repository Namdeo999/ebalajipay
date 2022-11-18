const getServices = async () => {
    try {
        const res = await fetch(`http://206.189.136.20:1700/api/role`, {
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

export { getServices };
