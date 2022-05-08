import { toast } from "react-toastify";

const UseNotify = () => {

    const notifySuccess = (message) => {
        toast.success(message, {
            theme: "red",
            position: toast.POSITION.TOP_CENTER
        });
    }

    const notifyWarning = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER,
            theme: "dark"
        });
    }

    const notifyError = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            theme: "dark"
        });
    }

    return { notifySuccess, notifyWarning, notifyError };
}

export default UseNotify;