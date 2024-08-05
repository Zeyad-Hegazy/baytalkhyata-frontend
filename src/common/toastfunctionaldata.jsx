
import { Button, Card } from 'react-bootstrap';
import { toast, Slide, Flip, ToastContainer } from "react-toastify";

const Toastdata = () => {
  const Toastslidesucc = () =>
    toast.success(
      <p className="text-white tx-16 mb-0 ">Slide Notification</p>,

      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        transition: Slide,
        autoClose: 1000,
        theme: "colored",
      }
    );
  const Toastslidewarn = () =>
    toast.warn(<p className="text-white tx-16 mb-0">Slide Notification</p>, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      transition: Slide,
      autoClose: 1000,
      theme: "colored",
    });
  const Toastslideerror = () =>
    toast.error(
      <p className="text-white tx-16 mb-0 ">Slide Notification</p>,

      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        transition: Slide,
        autoClose: 1000,
        theme: "colored",
      }
    );

  const Danger1 = () =>
    toast.error(
      <p className="text-white tx-16 mb-0 ">Oops! An Error Occurred</p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        transition: Flip,
        theme: "colored",
      }
    );
  const Danger2 = () =>
    toast.info(<p className="text-white tx-16 mb-0 ">Some info here</p>, {
      autoClose: 5000,
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: false,
      transition: Flip,
      theme: "colored",
    });
  const Danger3 = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">Warning : Something Went Wrong</p>,
      {
        autoClose: false,
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: false,
        transition: Flip,
        theme: "colored",
      }
    );
  const Danger4 = () =>
    toast.success(
      <p className="text-white tx-16 mb-0 ">Slide Notification</p>,

      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        transition: Slide,
        autoClose: 1000,
        theme: "colored",
      }
    );
  return (
    <div>

      <Card className="mg-b-20">
        <Card.Body>
          <h3 className="card-title  mg-b-10">Notification Types</h3>
          <div className="example border-0 p-0">
            <div className="btn-list">
              <Button
                onClick={() => Toastslidesucc()}
                variant=""
                className="btn btn-primary mg-t-5"
              >
                Success
              </Button>
              <Button
                onClick={() => Toastslidewarn()}
                variant=""
                className="btn btn-warning mg-t-5"
              >
                Warning
              </Button>
              <Button
                onClick={() => Toastslideerror()}
                variant=""
                className="btn btn-danger mg-t-5"
              >
                Error
              </Button>
              <ToastContainer />
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card className="mg-b-20">
        <Card.Body>
          <h3 className="card-title  mg-b-10">Notification Styles</h3>
          <div className="example border-0 p-0">
            <div className="btn-list">
              <Button
                onClick={() => Danger3()}
                variant=""
                className="btn btn-warning mg-t-5"
              >
                Warning
              </Button>
              <Button
                onClick={() => Danger2()}
                variant=""
                className="btn btn-info mg-t-5"
              >
                Info
              </Button>
              <Button
                onClick={() => Danger1()}
                variant=""
                className="btn btn-danger mg-t-5"
              >
                Fixed Error
              </Button>
              <Button
                onClick={() => Danger4()}
                variant=""
                className="btn btn-success mg-t-5"
              >
                Success
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Toastdata;
