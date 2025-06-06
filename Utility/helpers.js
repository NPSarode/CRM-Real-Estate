export const sendStatus = (response, message = "Session time out", status = 401, error = {}, data = null) => {

    response.status(status).json({
        success: false,
        message: message,
        innerException: error,
        data
    })

}
