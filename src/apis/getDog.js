import axios from "axios";

const getDog = async () => {
    try {
        const res = await axios.get("https://dog.ceo/api/breeds/image/random");
        if (res.status !== 200) {
            throw new Error("fetch failed with status ${res.status}");
        }
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export default getDog;
