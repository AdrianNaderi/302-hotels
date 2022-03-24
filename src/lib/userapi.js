const url = "https://usebookingmanagement-default-rtdb.firebaseio.com/users.json";

export const identify = (data, input) => {
  const loadedData = [];
  for (const key in data) {
    if (key === input.username) {
      loadedData.push({
        id: key,
        password: data[key].password,
        fullname: data[key].fullname,
        policy: data[key].policy,
      });
    }
  }
  if (loadedData.length === 0) {
    return null;
  }
  return {
    id: loadedData[0].id,
    password: loadedData[0].password,
    name: loadedData[0].fullname,
    policy: loadedData[0].policy,
  };
};

export const getUsers = async () => {
  const response = await fetch(url);
  return await response.json();
};
