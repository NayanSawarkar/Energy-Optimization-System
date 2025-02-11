import axios from 'axios';

const getUserDetail = async () => {
//   const apiUrl = import.meta.env.VITE_API_URL;
  try {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const token = storedUser?.accessToken;
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`http://localhost:4000/api/users/current-user-details`, config);

    if (response.status === 200) {
      return response.data.data; // This will be the user object
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
};

export default getUserDetail;
