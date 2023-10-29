import ErrorStyled from './ErrorStyled';

const Error = (): JSX.Element => {
    return (
        <ErrorStyled className="error container">
            <div className="error__contnet">
                <h1 className="text-center ">Oops!</h1>
            </div>

            <div className="contant_box_404">
                <h3 className="h2">Seems like something went wrong</h3>

                <p>
                    Check your connection to the server or try reloading the
                    page.
                </p>
            </div>
        </ErrorStyled>
    );
};

export default Error;
