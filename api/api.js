const urlEndPoint = "http://localhost:4000";

export const addUser = async (user) => {
    try {
        await fetch(`${urlEndPoint}/users`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}