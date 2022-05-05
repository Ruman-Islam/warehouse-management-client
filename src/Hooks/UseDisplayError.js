import UseNotify from "./UseNotify";

const UseDisplayError = () => {
    // This hook is only for display login/registration's errors
    const { notifySuccess, notifyError } = UseNotify();

    const displayError = (error, user) => {
        if (error) {
            const err = error.message?.split('/')[1];
            const errorMessage = err.split(")")[0];
            if (errorMessage) notifyError(errorMessage);
        }
        if (user?.user?.email) notifySuccess('Account created successfully');
    }

    return { displayError }
}

export default UseDisplayError;